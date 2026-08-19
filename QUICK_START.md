# 🚀 Quick Start Guide - Portfolio Website

## Step 1: View Your Website
1. Open `index.html` in your web browser
2. That's it! Your site is live locally

## Step 2: Add Your Images
Create an `images/` folder in your portfolio directory and add:

```
images/
├── project-1.png       (Merchandise Sales Dashboard)
├── project-2.png       (Sales Funnel Performance)
├── project-3.png       (EV Market Data Analysis)
├── event-1.jpg         (Event photo 1)
├── event-2.jpg         (Event photo 2)
├── event-3.jpg         (Event photo 3)
├── event-4.jpg         (Event photo 4)
├── event-5.jpg         (Event photo 5)
├── event-6.jpg         (Event photo 6)
├── event-7.jpg         (Event photo 7)
└── event-8.jpg         (Event photo 8)
```

**Recommended Image Sizes:**
- **Project images**: 600x400px (landscape)
- **Event photos**: 400x300px (square/landscape work better)

## Step 3: Update Your Information
Open `index.html` and find these lines to update:

### Contact Information
```html
Line ~290: mutua8299@gmail.com  → Your Email
Line ~298: +254 742 016 981      → Your Phone
Line ~306: https://github.com/mutua001  → Your GitHub
```

### Hero Section Title
```html
Line ~45: "Business Analyst | Data Analyst | Data Science Practitioner"
```

### About Section
Update the "About Me" paragraphs around line ~130

### Skills Badges
Find the "Core Expertise" section (line ~155) and update skill names:
```html
<span class="tech-badge px-3 py-1 rounded-full text-sm">Your Skill Here</span>
```

## Step 4: Customize Project Information

In the Projects Section, each project follows this structure:

```html
<h3 class="text-xl font-bold mb-2 text-blue-300">YOUR PROJECT TITLE</h3>
<p class="text-gray-400 text-sm mb-4">YOUR PROJECT DESCRIPTION</p>
<img src="images/project-X.png" alt="Project Title">
<a href="https://github.com/your-repo-link">View on GitHub →</a>
```

**To add a 4th project**, copy an existing project card and:
1. Change image path to `images/project-4.png`
2. Update title and description
3. Update GitHub link (or link to specific repo)

## Step 5: Add More Event Photos

To add a 9th event photo, copy one gallery item:

```html
<div class="group relative h-40 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition">
    <img src="images/event-9.jpg" alt="Event Caption" class="w-full h-full object-cover" onerror="this.style.display='none'">
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-end p-3">
        <p class="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition">Your Caption</p>
    </div>
</div>
```

## Step 6: Deploy Your Website

### Option A: GitHub Pages (Recommended - FREE)
1. Go to https://github.com/new
2. Create a new repository named `portfolio` (or any name)
3. Push your files to GitHub
4. Go to Settings → Pages
5. Select `main` branch and save
6. Your site goes live at `your-username.github.io/portfolio`

### Option B: Netlify (FREE)
1. Go to https://netlify.com
2. Click "Add new site" → "Deploy manually"
3. Drag and drop your portfolio folder
4. Done! You get a free URL and can add a custom domain

### Option C: Traditional Hosting
1. Upload files via FTP/SFTP to your hosting provider
2. Ensure `index.html` is in the root directory
3. Visit your domain - site is live!

## 📋 Customization Checklist

- [ ] Created `images/` folder
- [ ] Added project screenshots (project-1.png, project-2.png, project-3.png)
- [ ] Added event photos (event-1.jpg through event-8.jpg)
- [ ] Updated email address in Contact section
- [ ] Updated phone number in Contact section
- [ ] Updated GitHub profile link
- [ ] Updated hero section titles
- [ ] Updated About section text
- [ ] Updated skills list
- [ ] Updated project titles and descriptions
- [ ] Reviewed on mobile device (use browser's responsive design mode)
- [ ] Deployed to GitHub Pages or hosting provider
- [ ] Tested all links and navigation
- [ ] Verified contact form appears (note: currently shows local success message)

## 🔧 Advanced Customizations

### Change Colors
Replace color classes throughout:
- `blue-600` → Your primary color
- `slate-950` → Your background color
- `indigo-500` → Your accent color

### Add Social Media Links
Add before the closing `</footer>` tag:
```html
<a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
<a href="https://twitter.com/your-profile" target="_blank">Twitter</a>
```

### Implement Contact Form
The form currently shows a success message locally. To make it functional:
1. Sign up at https://formspree.io
2. Replace form action with your Formspree endpoint
3. Or use EmailJS for client-side email sending

### Add Animation Effects
The JavaScript file (`script.js`) has:
- Scroll-based fade-in animations
- Intersection Observer for performance
- Keyboard navigation (Escape closes mobile menu)
- Smooth scrolling

## ❓ Frequently Asked Questions

**Q: Do I need to install anything?**
A: No! Just open the HTML file in your browser.

**Q: Can I use PNG or JPG for images?**
A: Yes! Use PNG for projects (better quality) and JPG for photos (smaller file size).

**Q: How do I make the contact form work?**
A: Use Formspree.io, EmailJS, or set up a backend service.

**Q: Can I add more sections?**
A: Yes! Copy any section's structure and customize.

**Q: How do I deploy without GitHub?**
A: Use Netlify's drag-and-drop deployment or upload to any web host via FTP.

**Q: Is it mobile-friendly?**
A: Yes! Test with your phone or use browser's responsive design mode (F12 → Toggle device toolbar).

---

**Need help? Check README.md for detailed documentation.**
