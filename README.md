# Denzel Smart Finds — Website Files

A static (no backend needed) buying-guide / affiliate website. Plain HTML, CSS,
and JavaScript — works by simply opening `index.html`, and is ready to deploy
free on GitHub Pages or Cloudflare Pages.

See the full beginner deployment guide in the chat response, or open
`admin/index.html` in a browser for the content-editing guide.

## Quick local preview
Just double-click `index.html` to open it in your browser — no server or
install required. (A couple of browsers restrict `fetch()` on the `file://`
protocol, but this site doesn't rely on `fetch` for local files, so it works
fine either way.)

## What to edit
- `js/data.js` — site name, categories, articles, and products (start here)
- `css/style.css` — colors, fonts, spacing
- Individual `.html` files — page-specific copy (About, Privacy, Terms, etc.)

## Folder structure
```
denzel-smart-finds/
├── index.html, about.html, contact.html, privacy.html, disclosure.html, terms.html, search.html
├── robots.txt, sitemap.xml
├── categories/   (tech, productivity, students, home-office, books, everyday)
├── articles/     (8 starter buying guides)
├── css/style.css
├── js/data.js, app.js, search.js
├── images/       (empty — add your own product images here)
└── admin/index.html  (editing guide)
```
