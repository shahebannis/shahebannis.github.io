# Portfolio

Personal portfolio site. Static HTML/CSS/JS — no framework, no build step.

## Structure

```
portfolio/
├── index.html        ← main page
├── css/
│   ├── tokens.css    ← colors, fonts, spacing variables
│   ├── base.css      ← reset + global defaults
│   └── main.css      ← all layout & component styles
├── js/
│   └── main.js       ← scroll behavior, active nav highlight
├── resume.pdf        ← drop your résumé here
└── README.md
```

## Customizing

### Personal info
Edit `index.html` — search for `[University]`, `yourusername`, and placeholder copy.

### Colors / fonts
All design tokens are in `css/tokens.css`. Change `--accent` to update the
terracotta throughout. Dark mode values are in the `@media (prefers-color-scheme: dark)` block.

### Adding a new page
1. Create `pagename.html` (copy the `<head>` and nav from `index.html`)
2. Add a link in the `<nav>` inside `index.html`

### Adding a project
Copy one `<a class="project">` block in `index.html` and update the content.

## Deploying

**GitHub Pages** (free, recommended):
1. Push this folder to a repo named `yourusername.github.io`
2. Go to Settings → Pages → set source to main branch
3. Live at `https://yourusername.github.io`

**Netlify / Vercel** — drag and drop the folder into their dashboard. Done.
