# ISHIMWE Promesse — Portfolio

A modern, single-page portfolio for **ISHIMWE Promesse**, a software developer and network
administrator with 2+ years of experience at **Origin Group Ltd**.

Built with **React**, **Vite**, **Tailwind CSS v4** and **Lucide** icons. No database, no backend —
just a fast, responsive front end.

---

## Sections

| Section    | What's inside                                                                 |
| ---------- | ----------------------------------------------------------------------------- |
| Home       | Availability badge, animated role typewriter, profile card, quick stats        |
| About      | Story, highlights, quick facts and a branded profile card                      |
| Experience | Timeline: Origin Group Ltd, freelance work and continuous learning             |
| Skills     | Frontend, backend, networking and tooling, plus animated proficiency bars      |
| Services   | Web development, network administration, IT support, API & database work       |
| Projects   | Four selected project cards with case-study request links                      |
| Contact    | Phone, email, Telegram, Instagram + a mailto-powered contact form              |

Extra touches: sticky blurred navigation with active-section tracking, a light/dark theme switch
(saved in the browser), scroll progress bar, scroll-reveal animations, a pointer-following gold
glow, a skills marquee, back-to-top button and a fully responsive mobile menu.

---

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [Lucide React](https://lucide.dev/) icons
- Google Fonts: **Sora** (display), **Inter** (body), **JetBrains Mono** (code accents)

---

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

The static output is written to `dist/` and can be deployed to Vercel, Netlify, Cloudflare Pages,
GitHub Pages or any static host.

> On Windows, if PowerShell blocks `npm.ps1`, use `npm.cmd install` / `npm.cmd run dev`, or enable
> script execution for your user.

---

## Customizing content

Almost all text lives in one file:

```
src/data/portfolio.js
```

It contains the profile, navigation, stats, experience timeline, skills, services, projects and
contact links. Edit the values there — the components update automatically.

Useful entries:

- `profile` — name, role, location, email, phone, Telegram and Instagram links.
- `experiences` — roles, dates, bullet points and tags.
- `skillGroups` / `proficiency` — skills and the percentage bars.
- `projects` — project titles, descriptions, tags and icons.
- `contactLinks` — the four contact cards in the Contact section.

### Colors, fonts & themes

The design tokens (dark and light palettes, fonts, animations) are defined at the top of:

```
src/index.css
```

The site uses semantic tokens such as `--color-bg`, `--color-panel`, `--color-fg` and
`--color-accent`, so components never hard-code a colour. The light palette is an override block:

```css
html[data-theme='light'] { ... }
```

To re-theme the whole site, change `--color-accent` (and `--color-accent-hover`) in both blocks.
Fonts are loaded from Google Fonts in `index.html`.

### Light / dark mode

The sun/moon switch in the navigation (and inside the mobile menu) toggles between themes.

- The choice is stored in `localStorage` under `portfolio-theme` and applied by a small inline
  script in `index.html` before React mounts, so there is no flash on reload.
- On a first visit, the site follows the operating system's `prefers-color-scheme` setting.
- Theme state lives in `src/theme/ThemeProvider.jsx`; the switch is
  `src/components/ThemeToggle.jsx`.
- Other open tabs stay in sync through the `storage` event.

### Contact form

There is no backend. The form validates the fields, then opens the visitor's email app with a
pre-filled message addressed to `kleinthest@gmail.com`. Phone and email cards include copy buttons.

### Projects note

Project entries are editable placeholders that reflect the kind of work Promesse does. Replace
them with real case studies, screenshots or live URLs when available.

### Adding a photo

The site currently uses a branded "IP" monogram so it looks intentional without a photo. To add a
portrait, place an image in `public/` (for example `public/profile.jpg`) and swap the monogram block
in `src/components/Hero.jsx` / `src/components/About.jsx` for an `<img>` with `object-cover`.

---

## Project structure

```
public/
  favicon.svg
src/
  components/     Navbar, Hero, Marquee, About, Experience, Skills,
                  Services, Projects, Contact, Footer, Reveal, ThemeToggle, UI bits
  data/
    portfolio.js  All editable content
  hooks/
    useInView.js  Scroll-triggered reveals
    useTypewriter.js
  theme/
    ThemeProvider.jsx  Light/dark state, persistence, OS preference
  App.jsx
  index.css       Tailwind import + dark/light tokens + custom styles
  main.jsx
index.html        Includes the pre-paint theme script
vite.config.js
```

---

## Contact details used on the site

- **Phone:** +250 795 480 647
- **Email:** kleinthest@gmail.com
- **Telegram:** +250 792 829 045
- **Instagram:** [@ishimwe.otw](https://instagram.com/ishimwe.otw)

---

© ISHIMWE Promesse. Built with React & Tailwind CSS.
