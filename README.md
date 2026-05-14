# Madhuvan — React (Vite) source

A real React + Vite project for the Madhuvan website (`madhuvan.land`).
Multi-page editorial site with cinematic landscape, interactive site map,
journal, gallery, visit-and-stay, contact, and FAQ.

---

## Quick start (local development)

You need **Node.js 18 or newer**. Check with `node --version`.
If you don't have it, install from <https://nodejs.org>.

```bash
# 1. install dependencies (one time)
npm install

# 2. start the dev server
npm run dev
```

The site opens automatically at <http://localhost:5173>. Edit any
file in `src/` and the page hot-reloads in your browser.

---

## Build for production

```bash
npm run build
```

This compiles everything into a `dist/` folder — plain HTML, CSS, JS, and
images that any static host can serve. The Babel-in-browser runtime that
the prototype used is gone; the resulting bundle is ~10× smaller and
loads in under a second.

To preview the production build locally before deploying:

```bash
npm run preview
```

---

## Deploy

The `dist/` folder is fully static. Pick a host:

### Netlify (recommended — free, easiest)

1. Sign up at <https://netlify.com>.
2. Drag the `dist/` folder onto their **"Deploy a site"** page.
3. Done — your site is live at a `*.netlify.app` URL within seconds.
4. To connect a custom domain (e.g. `madhuvan.land`): Site settings → Domain management.

For automatic deploys, push this repo to GitHub and link the repo from
Netlify. Use these settings:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Vercel

1. Push to GitHub.
2. Import the repo at <https://vercel.com/new>.
3. Vercel auto-detects Vite. Click Deploy.

### Cloudflare Pages (best India CDN)

1. Push to GitHub.
2. <https://dash.cloudflare.com> → Pages → Create → Connect GitHub.
3. Build command: `npm run build`. Output: `dist`.

### Any other static host (Hostinger, GoDaddy, etc.)

Run `npm run build` locally, then upload everything inside `dist/` to
your host's `public_html` folder via FTP / their file manager.

### React Router on static hosts — fallback rewrite

Because this app uses React Router (`/the-land`, `/plots`, etc.), the
host needs to serve `index.html` for every URL — otherwise a refresh on
`/plots` returns 404. Most hosts handle this with a single config file:

**Netlify** — already configured (`vite.config.js` uses relative paths). For client-side routing add a `public/_redirects` file:
```
/*    /index.html   200
```

**Vercel** — already handled automatically.

**Apache / cPanel hosts** — add a `.htaccess` to the deploy folder:
```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## Project structure

```
madhuvan-app/
├── public/
│   └── img/              ← all photos, logos, illustrations, site-plan PDF
├── src/
│   ├── main.jsx          ← entry point — wraps App in <BrowserRouter>
│   ├── App.jsx           ← routes for all 9 pages
│   ├── components/
│   │   ├── Nav.jsx       ← top navigation + mobile drawer
│   │   ├── Footer.jsx    ← shared footer
│   │   └── Page.jsx      ← page shell wrapping Nav + Footer + useReveal
│   ├── hooks/
│   │   └── useReveal.js  ← scroll-triggered fade-in
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── TheLand.jsx
│   │   ├── Plots.jsx          (interactive SVG site map)
│   │   ├── Journal.jsx
│   │   ├── JournalArticle.jsx (one fully-written long-form article)
│   │   ├── Visit.jsx          (site visit + stay booking form)
│   │   ├── Gallery.jsx        (filterable mosaic + lightbox)
│   │   ├── Contact.jsx
│   │   └── FAQ.jsx
│   └── styles/
│       ├── colors_and_type.css  ← design system: tokens + base type
│       ├── site.css             ← shared chrome: nav, footer, buttons, page-head, section
│       ├── home.css
│       ├── the-land.css
│       ├── plots.css
│       ├── journal.css
│       ├── article.css
│       ├── visit.css
│       ├── gallery.css
│       ├── contact.css
│       └── faq.css
├── index.html            ← Vite HTML entry (do not edit body)
├── package.json
├── vite.config.js
└── README.md             ← you are here
```

---

## Editing tips

- **Plot inventory** lives in `src/pages/Plots.jsx` at the top, as `PLOTS = [...]`. Edit area / status / aspect / note there. The `x, y, w, h` numbers position each plot on the SVG site map (0–100 viewBox coordinates).
- **Journal entries** live in `src/pages/Journal.jsx` as `ENTRIES = [...]`. Add a new object at the top. To add a real new article, duplicate `JournalArticle.jsx`, rename, and add a route in `App.jsx`.
- **FAQ questions** are in `src/pages/FAQ.jsx` as `FAQ = [...]`. Add an item to any section's `items` array.
- **Gallery photos** are in `src/pages/Gallery.jsx` as `PHOTOS = [...]`. Drop a new image into `public/img/`, then add a `{ src, caption, date, tag, size }` object. `size` values: `lg-2x2`, `w` (wide), `t` (tall), `m` (medium), `s` (small).
- **Colors & fonts** — change once in `src/styles/colors_and_type.css`; everything updates.
- **Nav links** — `src/components/Nav.jsx`, the `LINKS` array.
- **Footer text & contact details** — `src/components/Footer.jsx`.

---

## Dependencies

Only three runtime packages:
- `react` + `react-dom` — the framework
- `react-router-dom` — page routing

Build-only:
- `vite` + `@vitejs/plugin-react` — dev server and production builder

No CSS framework, no UI library — all the styling is hand-written CSS.

---

## What's still using placeholders

A few things were stubbed in. Replace before going live:

| Item | Where |
|------|-------|
| Plot inventory (area / status / price) | `src/pages/Plots.jsx` — `PLOTS` array |
| Founder names + emails | `src/pages/Contact.jsx` and `src/components/Footer.jsx` |
| Phone number | `src/components/Footer.jsx`, `src/pages/Contact.jsx` |
| Survey No. + RERA number | `src/components/Footer.jsx` |
| Ground-level photographs | `public/img/` and `src/pages/Gallery.jsx` |
| The "Among the trees" article | `src/pages/JournalArticle.jsx` — currently invented |
| Logo SVG | The favicon and nav use an inline SVG in `index.html` / `Nav.jsx`. Drop a real logo into `public/img/` and reference it. |

---

## License

All code in this project is for the Madhuvan project; not licensed for
other use without permission.
# website
