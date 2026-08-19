const express = require('express');
const session = require('express-session');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const port = Number(process.env.PORT) || 3000;
const root = __dirname;
const storageRoot = process.env.STORAGE_ROOT || root;
const dataDirectory = path.join(storageRoot, 'data');
const galleryFile = path.join(dataDirectory, 'gallery.json');
const uploadDirectory = path.join(storageRoot, 'images', 'uploads');

fs.mkdirSync(dataDirectory, { recursive: true });
fs.mkdirSync(uploadDirectory, { recursive: true });

if (!fs.existsSync(galleryFile)) {
  fs.copyFileSync(path.join(root, 'data', 'gallery.json'), galleryFile);
}

const upload = multer({
  storage: multer.diskStorage({
    destination: uploadDirectory,
    filename: (_request, file, callback) => {
      const extension = path.extname(file.originalname).toLowerCase();
      callback(null, `${Date.now()}-${crypto.randomBytes(6).toString('hex')}${extension}`);
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_request, file, callback) => {
    callback(null, ['image/jpeg', 'image/png', 'image/webp'].includes(file.mimetype));
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'change-this-session-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production' }
}));
app.use(express.static(root));
app.use('/images/uploads', express.static(uploadDirectory));

function readGallery() {
  return JSON.parse(fs.readFileSync(galleryFile, 'utf8'));
}

function writeGallery(gallery) {
  fs.writeFileSync(galleryFile, JSON.stringify(gallery, null, 2));
}

function requireAdmin(request, response, next) {
  if (request.session.isAdmin) return next();
  response.status(401).json({ error: 'Admin login required.' });
}

app.get('/admin', (_request, response) => {
  response.sendFile(path.join(root, 'admin.html'));
});

app.post('/api/admin/login', (request, response) => {
  const configuredPassword = process.env.ADMIN_PASSWORD;
  if (!configuredPassword) {
    return response.status(503).json({ error: 'Set ADMIN_PASSWORD before starting the server.' });
  }

  if (request.body.password !== configuredPassword) {
    return response.status(401).json({ error: 'Incorrect password.' });
  }

  request.session.isAdmin = true;
  response.json({ authenticated: true });
});

app.post('/api/admin/logout', requireAdmin, (request, response) => {
  request.session.destroy(() => response.json({ authenticated: false }));
});

app.get('/api/admin/session', (request, response) => {
  response.json({ authenticated: Boolean(request.session.isAdmin) });
});

app.get('/api/gallery', (_request, response) => {
  response.json(readGallery());
});

app.post('/api/gallery', requireAdmin, upload.array('photos', 20), (request, response) => {
  const gallery = readGallery();
  const uploaded = request.files.map(file => ({
    src: `images/uploads/${file.filename}`,
    alt: path.parse(file.originalname).name,
    caption: 'Uploaded Photo',
    managed: true
  }));

  writeGallery([...uploaded, ...gallery]);
  response.status(201).json(uploaded);
});

app.delete('/api/gallery/:filename', requireAdmin, (request, response) => {
  const filename = path.basename(request.params.filename);
  const gallery = readGallery();
  const item = gallery.find(entry => entry.managed && entry.src === `images/uploads/${filename}`);

  if (!item) return response.status(404).json({ error: 'Uploaded image not found.' });

  const filePath = path.join(uploadDirectory, filename);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  writeGallery(gallery.filter(entry => entry !== item));
  response.json({ deleted: true });
});

app.listen(port, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
  console.log(`Admin dashboard at http://localhost:${port}/admin`);
});
