# Portfolio Project Guide

## 📋 Project Overview
This is a professional portfolio website for Ngoc Nguyen (Sam) built with static HTML, CSS, and JavaScript. Fully responsive, no backend required. Deploy to GitHub Pages.

**Tech Stack**: HTML, CSS, JavaScript (vanilla - no frameworks)
**Key Features**: Responsive design, draggable carousels, smooth nav tracking, dynamic content from data arrays

---

## 📁 File Structure
```
qn-pt/
├── index.html       # Page structure - all sections defined here
├── style.css        # All styling with CSS variables for theming
├── main.js          # JavaScript: nav tracking + carousel drag + data rendering
├── assets/          # Image folder (photo-1.jpg used as placeholder)
└── CLAUDE.md        # This guide
```

---

## 🎯 Core Concepts

### 1. Data-Driven Content Rendering
Projects are stored as JavaScript arrays, rendered dynamically:
- `INIPOD_PROJECTS` → renders to `.inipod__track` via `renderInipodProjects()`
- `FORIX_PROJECTS` → renders to `.forix__track` via `renderForixProjects()`
- `ABOUT_HIGHLIGHTS` → renders to `#aboutGrid` via `renderAboutHighlights()`

**Why**: User can modify projects without touching HTML

### 2. CSS Architecture
- **CSS Variables** (`:root`): `--blue`, `--navy`, `--text`, etc. for theming
- **Max-width constraint**: All sections use `max-width: 1100px` centered layout
- **Responsive breakpoint**: `@media (max-width: 860px)` converts grids to single column
- **Flexbox/Grid**: Modern layout techniques, no floats

### 3. Interactive Features
- **Nav scroll tracking**: IntersectionObserver detects active section (40% threshold)
- **Carousel drag**: Click & drag to scroll horizontally (mouse events)
- **Smooth scrolling**: HTML `scroll-behavior: smooth` on `<html>`

---

## ✏️ Common Tasks

### Add a New Project to INIPOD
1. Open `main.js`
2. Find `INIPOD_PROJECTS` array
3. Add new object:
```javascript
{
  id: 'unique-id',
  title: 'Project Name',
  image: 'assets/photo-1.jpg',
  meta: 'TYPE - LOCATION',
  description: 'Full description here',
  highlights: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
  tags: ['TAG1', 'TAG2', 'TAG3']
}
```
4. Done - `renderInipodProjects()` auto-renders it

### Add a New Project to FORIX
Same as INIPOD but edit `FORIX_PROJECTS` array

### Update About Section
Edit `ABOUT_HIGHLIGHTS` array (simpler structure - just title, image, meta, description)

### Change Colors
Edit CSS variables in `style.css` `:root`:
```css
--blue: #1da1e4;        /* Primary accent */
--navy: #0d0e1a;        /* Headings */
--text: #2b2d3a;        /* Body text */
--muted: #5a5e72;       /* Secondary text */
--card-bg: #eaf4fb;     /* Light blue background */
```

### Change Fonts
In `:root`:
```css
--font-sans: 'Inter', 'Helvetica Neue', Arial, sans-serif;
--font-serif: Georgia, 'Times New Roman', serif;
```

### Update Footer Links
In `index.html`, find footer section and update href attributes:
```html
<a href="https://linkedin.com/in/profile">LINKEDIN</a>
<a href="https://github.com/profile">GITHUB</a>
<a href="mailto:email@example.com">EMAIL</a>
```

### Add a New Section
1. Add `<section>` in HTML with unique `id`
2. Add CSS styling in `style.css`
3. Add media query for mobile
4. Update nav links if needed
5. If rendering dynamic content, create data array + render function in JS

---

## 🎨 Design System

### Layout Constraints
- **Section width**: All sections `max-width: 1100px; margin: 0 auto;`
- **Padding**: 48px horizontal on desktop, 24px on mobile
- **Gaps**: 32-80px between major sections

### Typography
- **Headings**: Georgia serif, clamp() for responsive sizing
- **Body**: Inter sans-serif, 17px base size
- **Small text**: 12-13px for labels/meta

### Colors
- **Primary**: `--blue` (#1da1e4) for accents, hover states
- **Text**: `--navy` for headings, `--text` for body, `--muted` for secondary
- **Backgrounds**: `--white` for cards/body, `--card-bg` for stat cards

### Spacing Scale
- Small: 4px, 8px, 12px, 16px
- Medium: 20px, 24px, 28px, 32px
- Large: 40px, 48px, 60px, 64px, 80px

---

## 🔧 JavaScript Architecture

### Navigation Tracking (IntersectionObserver)
```javascript
// Detects when sections enter viewport
// Updates nav link with .active class
// Auto-updates as user scrolls
```

### Carousel Drag System
```javascript
initCarouselDrag('.inipod__carousel');
initCarouselDrag('.forix__carousel');
// Mouse down → track position
// Mouse move → update scrollLeft
// Mouse up → stop dragging
// Cursor feedback: grab/grabbing
```

### Dynamic Rendering
```javascript
renderInipodProjects();     // Processes INIPOD_PROJECTS
renderForixProjects();      // Processes FORIX_PROJECTS
renderAboutHighlights();    // Processes ABOUT_HIGHLIGHTS
```

---

## 📱 Responsive Design Rules

### Desktop (1100px max-width)
- 2-column grids where appropriate
- Full carousel width
- Optimal spacing/padding

### Mobile (< 860px)
- 1-column grids
- Full-width carousels
- Reduced padding (24px instead of 48px)
- Centered footer

Key media query locations:
- `.intro__hero` → 1 column
- `.expertise__grid` → 1 column
- `.expertise__areas` → 1 column
- `.about__grid` → 1 column
- `.footer__wrapper` → flex column with centered text

---

## 🚀 Deployment Checklist

- [ ] Replace placeholder images (`assets/photo-1.jpg`)
- [ ] Update project data arrays with real projects
- [ ] Update footer links (LinkedIn, GitHub, Email)
- [ ] Update nav links if adding new sections
- [ ] Test on mobile (Chrome DevTools)
- [ ] Check all links work
- [ ] Verify images load
- [ ] Push to GitHub
- [ ] Enable GitHub Pages in repo settings
- [ ] Test live site

---

## 🐛 Debugging Tips

**Console errors**: Check browser DevTools > Console tab
**Images not loading**: Verify path is correct and file exists
**Styling broken**: Check CSS is applied (inspect element)
**Navigation not tracking**: Verify sections have unique `id` attributes
**Carousel not dragging**: Ensure JS loaded and no console errors
**Mobile layout wrong**: Check media query breakpoint (860px)

---

## 💡 Code Conventions

- **CSS class naming**: BEM pattern (`.section__element`, `.section__element--modifier`)
- **Data object structure**: Always include all expected fields (id, title, image, meta, description, etc.)
- **No console.logs**: Keep production code clean
- **Comments rare**: Only for WHY something is done, not WHAT it does

---

## 📝 Notes

- Portfolio is completely static - no build step needed
- All styling is in one CSS file for simplicity
- JavaScript is vanilla (no jQuery/frameworks) for minimal dependencies
- GitHub Pages deployment is straightforward - just push to repo
- Navigation automatically highlights based on scroll position
- Carousels are draggable for better UX than scrollbar

---

## 🔄 Future Enhancements (Optional)

- Add dark mode toggle (CSS class switching)
- Add form for "CONNECT" button
- Add smooth scroll animation for carousel items
- Add filter/search for projects
- Add testimonials section
- Add blog posts section

---

**Created**: April 2026
**Last Updated**: April 2026
