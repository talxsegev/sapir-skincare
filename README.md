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

### The consultation survey (`/consultation`) — Netlify Forms, not EmailJS

This form is much larger than the contact form and includes photo uploads.
It was originally wired to EmailJS like the contact form, but EmailJS
enforces a **hard 50KB cap on total request size**, and real (even
compressed) skin photos blow through that immediately — so it submits via
[Netlify Forms](https://docs.netlify.com/manage/forms/setup/) instead, via
a plain `fetch("/", { method: "POST", body: formData })` in
`ConsultationSurvey.tsx`.

Netlify's form-detection bot only scans the *built static HTML* (it
doesn't run JS), so a form that only ever exists inside a React component
would never get registered. `index.html` has a hidden, never-displayed
twin of the real form (same `name="consultation"` and field names) purely
so Netlify's crawler can find it at deploy time and register the form
(and its expected fields) in your Netlify dashboard. **If a field is ever
added to `surveyData.ts`, add its name to that hidden form in
`index.html` too**, or it won't show as a proper column in Netlify's UI.

Submissions (including the attached photos) land in your Netlify
dashboard under **Forms**. To get emailed when one arrives: Site
configuration → Forms → Form notifications → Add notification → Email
notification.

Photos are still compressed client-side (resized + re-encoded as JPEG)
before upload, to keep the whole submission reasonably sized — see
`src/lib/imageCompress.ts`.

## Deployment

The site is currently deployed on **Netlify** (see `netlify.toml` for the
build command, SPA redirect, and headers), with GoDaddy only managing the
domain's DNS. `public/.htaccess` is also included and kept up to date in
case the site is ever moved to real Apache/cPanel hosting, but it has no
effect on Netlify.

See `public/.htaccess`, `netlify.toml`, `public/robots.txt`, and `public/sitemap.xml`.

## Legal & informational pages

The site includes a Privacy Policy (`/privacy-policy`), Terms of Service
(`/terms-of-service`), Disclaimers (`/disclaimers`), Studio Policies
(`/studio-policies` — our code-of-conduct-style page covering respectful
conduct, appointments, and client safety), and FAQs (`/faq`). These matter
here specifically because the consultation survey collects health-adjacent
information (pregnancy/medical history, medications, allergies) and
photos. They're linked from the footer on every page rather than the main
nav, to avoid repeating the earlier nav-overflow issue.

These pages were drafted to accurately describe what this site actually
collects and does, but they are **not a substitute for legal review** —
have an attorney review the Privacy Policy and Terms before relying on
them, particularly given the health-adjacent data collection.

## Project structure

- `src/Pages/` — one component per route (Home, About, Service, Blog, Contact, Consultation, legal pages, 404)
- `src/components_test/` — page sections and shared UI (nav, footer, forms, shadcn-style UI primitives)
- `src/components_test/ConsultationPageComponents/` — the multi-step skin consultation survey
- `src/components_test/LegalPageComponents/LegalLayout.tsx` — shared layout for the legal/informational pages
- `src/components_test/SEO.tsx` — lightweight per-page `<title>`/meta tag manager
- `src/data/ingredients.json` — the Ingredient Checker's merged ingredient dataset
- `public/` — static assets copied as-is to the build output (favicons, robots.txt, sitemap.xml, `.htaccess`)
