# 📸 Images Folder Setup Guide

This file explains how to organize your images for the portfolio website.

## Directory Structure

Create an `images/` folder in your portfolio root with the following structure:

```
portfolio/
├── index.html
├── script.js
├── styles.css
├── README.md
├── QUICK_START.md
└── images/              ← Create this folder
    ├── project-1.png
    ├── project-2.png
    ├── project-3.png
    ├── event-1.jpg
    ├── event-2.jpg
    ├── event-3.jpg
    ├── event-4.jpg
    ├── event-5.jpg
    ├── event-6.jpg
    ├── event-7.jpg
    └── event-8.jpg
```

## Image File Naming Conventions

### ✅ Correct
- `project-1.png` (lowercase, hyphen separator)
- `event-1.jpg` (lowercase, hyphen separator)
- `my-screenshot.png` (lowercase, descriptive name)

### ❌ Incorrect
- `Project 1.png` (spaces, uppercase)
- `project_1.png` (underscore instead of hyphen)
- `Project 1.PNG` (case-sensitive on Linux/Mac)
- `project1.png` (no hyphen - different from HTML references)

## Image Specifications

### Project Images (3 recommended, can add more)

| File Name | Purpose | Recommended Size | Format | Note |
|-----------|---------|------------------|--------|------|
| project-1.png | Merchandise Sales Dashboard | 600×400 px | PNG | High quality, can add text overlay |
| project-2.png | Sales Funnel Performance | 600×400 px | PNG | High quality, can add text overlay |
| project-3.png | EV Market Analysis | 600×400 px | PNG | High quality, can add text overlay |
| project-4.png | (Optional) Your 4th project | 600×400 px | PNG | Duplicate card in HTML to add |

### Event Photos (8 recommended, can expand)

| File Name | Purpose | Recommended Size | Format | Note |
|-----------|---------|------------------|--------|------|
| event-1.jpg | Event photo 1 | 400×300 px | JPG | Portrait or landscape works |
| event-2.jpg | Event photo 2 | 400×300 px | JPG | Portrait or landscape works |
| event-3.jpg | Event photo 3 | 400×300 px | JPG | Portrait or landscape works |
| event-4.jpg | Event photo 4 | 400×300 px | JPG | Portrait or landscape works |
| event-5.jpg | Event photo 5 | 400×300 px | JPG | Portrait or landscape works |
| event-6.jpg | Event photo 6 | 400×300 px | JPG | Portrait or landscape works |
| event-7.jpg | Event photo 7 | 400×300 px | JPG | Portrait or landscape works |
| event-8.jpg | Event photo 8 | 400×300 px | JPG | Portrait or landscape works |

## Steps to Add Your Images

### 1. Create the Images Folder
```bash
# On Windows (using PowerShell)
New-Item -ItemType Directory -Path "images"

# On Mac/Linux
mkdir images
```

### 2. Prepare Your Images
For each project screenshot:
- Ideal dimensions: 600×400 pixels
- Format: PNG for clarity
- File size: < 500 KB (for faster loading)
- Show actual dashboard or report results

For event photos:
- Ideal dimensions: 400×300 pixels
- Format: JPG for compression
- File size: < 300 KB
- Can be landscape, portrait, or square

### 3. Optimize Images for Web
Use online tools or software:
- **TinyPNG** (https://tinypng.com) - Compress PNG/JPG
- **ImageOptim** (Mac) - Automatic compression
- **File Compressor** (Windows) - Built-in option

### 4. Name and Place Files
Use exact names from the naming convention above:
- `project-1.png`, `project-2.png`, `project-3.png`
- `event-1.jpg`, `event-2.jpg`, etc.

### 5. Drop Into Folder
Simply copy/paste your renamed images into the `images/` folder.

## What If Images Don't Show?

### ✅ Checklist
- [ ] File is in `images/` folder (not `Images/` or `IMAGES/`)
- [ ] File name matches exactly (case-sensitive on Linux/Mac)
- [ ] File extension is correct (`.png` or `.jpg`, not `.PNG` or `.JPG`)
- [ ] File path in HTML is correct: `src="images/project-1.png"`
- [ ] Browser cache is cleared (Ctrl+Shift+Delete)
- [ ] Internet connection is active (Tailwind CSS loads from CDN)

### 🔧 Troubleshooting
1. **On Mac/Linux**: File names are CASE-SENSITIVE
   - `Project-1.PNG` ≠ `project-1.png`

2. **File Not Found**: Check the exact spelling
   - Open `index.html` in text editor
   - Search for the image name: `Ctrl+F` → "project-1"
   - Verify the path and extension match

3. **Placeholder Shows**: Missing or broken image file
   - Check file exists in `images/` folder
   - Verify file name spelling
   - Try re-uploading the image

## Adding More Than 3 Projects

To add a 4th project:
1. Copy a project card in `index.html`
2. Change `src="images/project-3.png"` to `src="images/project-4.png"`
3. Update the title and description
4. Save and add `project-4.png` to `images/` folder

Example (in index.html around line ~350):
```html
<!-- Project 4 - Copy and customize this -->
<div class="project-card bg-slate-800 bg-opacity-50 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition">
    <div class="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-gray-500">
        <img src="images/project-4.png" alt="Your Project Title" class="w-full h-full object-cover" onerror="this.style.display='none'">
    </div>
    <div class="p-6">
        <h3 class="text-xl font-bold mb-2 text-blue-300">Your Project 4 Title</h3>
        <p class="text-gray-400 text-sm mb-4">Your project description here.</p>
        <a href="https://github.com/mutua001" target="_blank" class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-semibold transition">
            View on GitHub →
        </a>
    </div>
</div>
```

## Adding More Than 8 Event Photos

The gallery uses a 4-column grid (responsive). To add event-9.jpg:

1. Copy an existing gallery item in `index.html` (around line ~420)
2. Change `src="images/event-8.jpg"` to `src="images/event-9.jpg"`
3. Update the caption text
4. Save and add `event-9.jpg` to `images/` folder

The grid will automatically handle the layout!

## Image Optimization Tips

### For Project Screenshots
- Crop to show only the relevant dashboard/report area
- Include title and key metrics for context
- Use PNG for best quality (larger file)
- Recommended: 600×400 px PNG, < 500 KB

### For Event Photos
- Ensure good lighting and focus
- Crop to eliminate distracting backgrounds
- Use JPG for smaller file size
- Recommended: 400×300 px JPG, < 300 KB

## File Naming Best Practices

- Always use **lowercase** letters
- Use **hyphens** (-) as separators, not underscores (_)
- Be **descriptive** but keep names short
- Match **exactly** with HTML references

### ✅ Good Examples
- `python-dashboard.png`
- `sql-analysis-report.png`
- `team-conference-2024.jpg`
- `tableau-visualization.png`

### ❌ Bad Examples
- `Dashboard.png` (uppercase)
- `python_dashboard.png` (underscore)
- `My Beautiful Dashboard.png` (spaces)
- `screenshot 1.PNG` (spaces, uppercase)

---

**Ready to add your images? Follow the steps above and your portfolio will shine! 🌟**
