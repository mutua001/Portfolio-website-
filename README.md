# Peter Mutua Kakula - Portfolio Website

A sleek, professional portfolio website built with HTML, Tailwind CSS (via CDN), and vanilla JavaScript. Dark tech theme with blue/indigo accents.

## 🎯 Features

- ✅ **Fully Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Hero Section** - Eye-catching introduction with CTA buttons
- ✅ **About & Skills** - Professional summary with categorized skills
- ✅ **Services Section** - Three core service offerings with icons
- ✅ **Projects Grid** - Easy-to-update project showcase
- ✅ **Events & Photo Gallery** - Expandable image gallery for events
- ✅ **Contact Form** - Functional contact form with validation
- ✅ **Fast Performance** - CDN-based styling, minimal dependencies
- ✅ **Dark Tech Theme** - Professional slate/navy with blue accents

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # Custom CSS styles
├── README.md           # This file
└── images/             # Image directory
    ├── project-1.png   # Project 1 screenshot
    ├── project-2.png   # Project 2 screenshot
    ├── project-3.png   # Project 3 screenshot
    └── event-1.jpg     # Event photos (event-1 through event-8)
```

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Create an `images/` folder** in the portfolio directory
3. **Add your project images:**
   - `images/project-1.png` - Merchandise Sales Dashboard
   - `images/project-2.png` - Sales Funnel Performance
   - `images/project-3.png` - EV Market Data Analysis
4. **Add your event photos:**
   - `images/event-1.jpg` through `images/event-8.jpg`
5. **Open `index.html`** in your browser (no build process needed!)

## ✏️ How to Update Content

### 1. **Add More Projects**

In `index.html`, find the Projects Section and duplicate this card:

```html
<!-- Project Template -->
<div class="project-card bg-slate-800 bg-opacity-50 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition">
    <div class="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-gray-500">
        <img src="images/project-X.png" alt="Project Title" class="w-full h-full object-cover" onerror="this.style.display='none'">
    </div>
    <div class="p-6">
        <h3 class="text-xl font-bold mb-2 text-blue-300">Your Project Title</h3>
        <p class="text-gray-400 text-sm mb-4">Project description here.</p>
        <a href="https://github.com/mutua001" target="_blank" class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-semibold transition">
            View on GitHub →
        </a>
    </div>
</div>
```

Update:
- `src="images/project-X.png"` - Add your project screenshot
- Project title and description
- GitHub link (currently points to your main profile)

### 2. **Add More Event Photos**

The gallery is set up with 8 photo slots by default. To add more:

```html
<!-- New Gallery Item -->
<div class="group relative h-40 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition">
    <img src="images/event-X.jpg" alt="Event Caption" class="w-full h-full object-cover" onerror="this.style.display='none'">
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-end p-3">
        <p class="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition">Your Event Caption</p>
    </div>
</div>
```

### 3. **Update Personal Information**

Search and replace in `index.html`:

- `mutua8299@gmail.com` - Your email address
- `+254 742 016 981` - Your phone number
- `https://github.com/mutua001` - Your GitHub profile
- Skills and service descriptions

### 4. **Customize Skills Section**

Find the "Core Expertise" section in the About area and update the skill badges:

```html
<span class="tech-badge px-3 py-1 rounded-full text-sm">Your Skill</span>
```

### 5. **Update Hero Section Background**

The hero section uses emoji icons (🐍, 📊, 🗄️, 📈, ⚙️). To change:

```html
<div class="absolute top-20 left-10 text-4xl">🐍</div>  <!-- Change emoji here -->
```

## 🎨 Customization Guide

### Colors

The website uses Tailwind's color palette. Main colors used:

- **Primary**: `blue-600`, `blue-400` (CTAs, highlights)
- **Secondary**: `indigo-600` (accents)
- **Background**: `slate-950`, `slate-900`, `slate-800`
- **Text**: `gray-100`, `gray-300`, `gray-400`

To change the theme, search and replace color classes:
- `blue-` → your primary color
- `slate-` → your background color

### Tailwind CSS

The site uses **Tailwind CSS via CDN**. No build process needed! 

If you want to add custom utilities or optimize for production, consider:
1. Setting up Tailwind CLI
2. Creating a tailwind.config.js
3. Running the build process

## 📝 Contact Form

The contact form currently shows a success message locally. To make it functional:

1. **Option A: Use a Service** (Recommended)
   - Use Formspree (https://formspree.io)
   - Use EmailJS
   - Use Netlify Forms

2. **Option B: Backend Integration**
   - Create a server endpoint to handle form submissions
   - Uncomment the fetch code in `script.js`
   - Update the endpoint URL

## 🔧 Technical Details

### Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Optimizations

- ✅ Tailwind CSS via CDN (no build process)
- ✅ Minimal JavaScript (vanilla, no frameworks)
- ✅ Lazy loading support for images
- ✅ Scroll-based animations
- ✅ Intersection Observer for performance

### Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ Color contrast compliant

## 📱 Responsive Breakpoints

The design is optimized for:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (lg, xl)

## 🚀 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push your files
3. Enable GitHub Pages in settings
4. Your site will be live at `username.github.io`

### Option 2: Netlify (Free)
1. Connect your GitHub repository
2. Set build command to `npm run build` (if using Tailwind CLI)
3. Deploy!

### Option 3: Vercel (Free)
1. Import your GitHub repository
2. Deploy with one click
3. Custom domain support available

### Option 4: Traditional Hosting
1. Upload files via FTP
2. Ensure `index.html` is in the root directory
3. Your site is live!

## 📊 File Sizes

- `index.html` - ~30 KB
- `script.js` - ~4 KB
- `styles.css` - ~2 KB
- **Total** (without images) - ~36 KB

## 🔐 Security Notes

- ✅ No sensitive data stored
- ✅ Static site (no server backend required)
- ✅ Contact form messages are only shown locally (implement backend if needed)
- ✅ All external links open in new tabs

## 📞 Support & Maintenance

### Regular Updates

1. Keep your project descriptions current
2. Update project images quarterly
3. Add new event photos as you attend events
4. Refresh skill list as you learn new tools

### Troubleshooting

**Images not showing?**
- Ensure image files are in the `images/` folder
- Check file names match exactly (case-sensitive on Linux/Mac)
- Use `.png` for projects, `.jpg` for events

**Styling looks off?**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try a different browser
- Check internet connection (Tailwind CSS needs to load from CDN)

**Contact form not working?**
- Check browser console for errors (F12)
- Implement a backend service (Formspree, EmailJS, etc.)

## 📄 License

This portfolio template is open-source and free to use. Customize as needed!

## 🎓 Credits

- **Tailwind CSS** - https://tailwindcss.com
- **Icons** - Emoji
- **Design Inspiration** - Modern dark-themed portfolios

---

**Made with ❤️ for data professionals**

Last updated: 2026-08-19
