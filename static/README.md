# Rackyweb Global Media — Static Site

A standalone static version of the site (plain HTML/CSS/JS) — deployable to GitHub Pages, Netlify, Vercel, or any static host. No build step required.

## Structure
```
static/
├── index.html        # Homepage
├── style.css         # All styles (luxury design system)
├── script.js         # Nav, counters, scroll reveals
├── assets/           # Drop images here
└── pages/            # blog, article, marketplace, pricing, about, contact, partner, login, signup
```

## Run locally
Just open `static/index.html` in a browser, or serve it:
```bash
cd static && python3 -m http.server 8000
```

## Deploy to GitHub Pages
1. Push the repo to GitHub.
2. In repo Settings → Pages, set the source to `/static` (or move the files to repo root / a `docs/` folder).
3. Pages will publish at `https://<user>.github.io/<repo>/`.

## Contact
- 📧 edwardzethan792@gmail.com
- 💬 WhatsApp +234 708 780 6251

> The TanStack Start app in `src/` is the full interactive version. This `static/` folder is the lightweight, host-anywhere version.