# Shashwat Law Partners — website

A React + Vite site with five real pages (Home, About, Practice Areas, Our
Team, Contact) using client-side routing, an animated logo, and scroll
animations.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edit any file in `src/` and the browser
updates automatically.

## Before you deploy — edit the placeholders

Open **`src/data/content.js`** and replace the values in the `FIRM` object at
the top:

```js
export const FIRM = {
  name: "Shashwat Law Partners",
  email: "contact@shashwatlawpartners.com", // real firm email
  phone: "+91 00000 00000",                 // real firm phone
  addressLines: ["Mumbai, Maharashtra, India", "..."], // real address
};
```

This one place feeds the Contact page, the footer, and the "Book a
consultation" mailto link, so you only need to change it once.

## About the contact form

It works with no backend: submitting it opens the visitor's email app with a
pre-filled message addressed to `FIRM.email`. That's the most reliable
zero-setup option for a static site with no server.

If you'd rather have submissions land silently (no email-app popup), open
`src/pages/Contact.jsx` — there's a commented example at the bottom of
`handleSubmit` showing how to POST to a form backend like Formspree or
Getform instead.

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`. That folder is everything you need for
deployment — no server-side code involved.

## Deploy

Any static host works. Two easy options:

- **Netlify / Vercel (recommended):** import this project from a Git repo (or
  drag the `dist/` folder into Netlify's dashboard after running
  `npm run build`). Build command: `npm run build`. Output directory: `dist`.
- **Any static host (S3, GitHub Pages, etc.):** run `npm run build` and
  upload the contents of `dist/`.

## Structure

```
src/
  data/content.js       — firm contact info, nav items, practice areas, team bios
  components/            — Logo, NavBar, Footer, and the scroll/word/count animations
  pages/                 — Home, About, Services, Team, Contact
  App.jsx                — routes
  index.css              — all styles and design tokens
```
"# law" 
