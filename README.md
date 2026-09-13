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

The contact form and the skin consultation survey both use
[EmailJS](https://www.emailjs.com/) to send messages without a backend.
Copy `.env.example` to `.env` and fill in:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID` — used by the Contact page form
- `VITE_EMAILJS_CONSULTATION_TEMPLATE_ID` — used by the `/consultation` survey (see below)
- `VITE_EMAILJS_PUBLIC_KEY`

These are required at build time — Vite bakes them into the client bundle.

### The consultation survey's EmailJS template

`/consultation` is a large, multi-step form (basics, concerns, medical
history, routine, photos, etc.) that submits via `emailjs.sendForm`, the
same mechanism as the Contact form, but it needs **its own EmailJS
template** (separate from the contact template) since it has a different,
much longer set of fields. In the EmailJS dashboard, create a new template
whose body references each field by its form name — see
`src/components_test/ConsultationPageComponents/surveyData.ts` for the
full list of question `id`s (each one is also the form field name, e.g.
`{{FullName}}`, `{{mainConcerns}}`, `{{skinType}}`, `{{photoFront}}`, etc.).
Put that template's ID in `VITE_EMAILJS_CONSULTATION_TEMPLATE_ID`.

Photos are compressed client-side (resized + re-encoded as JPEG) before
sending, since phone photos are usually far larger than typical email
attachment limits — see `src/lib/imageCompress.ts`.

## Deployment

The site is currently deployed on **Netlify** (see `netlify.toml` for the
build command, SPA redirect, and headers), with GoDaddy only managing the
domain's DNS. `public/.htaccess` is also included and kept up to date in
case the site is ever moved to real Apache/cPanel hosting, but it has no
effect on Netlify.

See `public/.htaccess`, `netlify.toml`, `public/robots.txt`, and `public/sitemap.xml`.

## Project structure

- `src/Pages/` — one component per route (Home, About, Service, Blog, Contact, Consultation, 404)
- `src/components_test/` — page sections and shared UI (nav, footer, forms, shadcn-style UI primitives)
- `src/components_test/ConsultationPageComponents/` — the multi-step skin consultation survey
- `src/components_test/SEO.tsx` — lightweight per-page `<title>`/meta tag manager
- `src/data/ingredients.json` — the Ingredient Checker's merged ingredient dataset
- `public/` — static assets copied as-is to the build output (favicons, robots.txt, sitemap.xml, `.htaccess`)
