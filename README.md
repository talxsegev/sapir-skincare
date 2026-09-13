# Sapir Skincare

Marketing website for Sapir Skincare, a face and body clinic in Beverly Hills.
Built with React 19, TypeScript, React Router, Tailwind CSS v4, and Vite.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your EmailJS credentials
npm run dev
```

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — type-check and build for production into `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint

## Environment variables

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages
without a backend. Copy `.env.example` to `.env` and fill in:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

These are required at build time — Vite bakes them into the client bundle.

## Deployment (GoDaddy)

This is a static single-page app. After `npm run build`, upload the contents
of `dist/` to the web root on GoDaddy hosting. The build includes a
`.htaccess` file that:

- Rewrites all routes to `index.html` so client-side routing (React Router)
  works on direct loads and refreshes (e.g. `/about`, `/service`).
- Redirects `http` → `https` and `www` → the bare domain.
- Sets basic security headers and long-lived caching for static assets.

See `public/.htaccess`, `public/robots.txt`, and `public/sitemap.xml`.

## Project structure

- `src/Pages/` — one component per route (Home, About, Service, Blog, Contact, 404)
- `src/components_test/` — page sections and shared UI (nav, footer, forms, shadcn-style UI primitives)
- `src/components_test/SEO.tsx` — lightweight per-page `<title>`/meta tag manager
- `public/` — static assets copied as-is to the build output (favicons, robots.txt, sitemap.xml, `.htaccess`)
