# Japhet's Realm — Portfolio 3.0

**One step after the other in pursuit of something greater.**

This is my personal portfolio: **Japhet's Realm**. A frontend developer & freelancer based in **Accra, Ghana**, I built this site to share my work, my stack, and my approach — thoughtful ideas, honest work, real results.

**Live site:** [japhets-realm.vercel.app](https://japhets-realm.vercel.app)

---

## About Me (and this site)

I'm **Japhet Adofo-Adjei**. I care a lot about how digital experiences are built — from the smallest interaction to full-blown web apps. This repo is the code behind that: a Next.js 16 + React 19 portfolio with a session preloader, dark/light mode, portfolio carousel, and a CTA that says what I stand for — *Let's build something exceptional together*.

- **What I do:** Frontend development, React/Next.js, JavaScript, and turning ideas into clean, human-centered interfaces.
- **How I work:** Straightforward communication, design + logic, client-first, attention to detail.
- **Tech I love:** JavaScript (daily driver), plus the usual suspects in the stack below.

The site includes an About section (with a short timeline from KNUST and Suhum Secondary Technical), a **My Tech Stack** block on the home page, project showcases, and optional Supabase-backed features if you plug in your own env vars.

---

## What’s in the box

- **Session preloader** — Runs once per visit on the home page (GSAP-driven, then initials “JAA”).
- **Dark / light theme** — Toggle with preference persisted.
- **Portfolio carousel & grid** — Holographic-style cards and project highlights.
- **Responsive navbar** — Scroll behavior + hamburger menu on small screens.
- **Custom cursor** — Mouse component for a bit of personality.
- **Error boundary** — So one broken component doesn’t take down the whole page.
- **Optimized assets** — Lazy-loaded cards and image handling where it matters.

---

## Tech stack

| Layer | Tech |
|-------|------|
| **Framework** | Next.js 16 (App Router) |
| **UI** | React 19, Tailwind CSS, SASS/SCSS |
| **Animation** | Framer Motion, GSAP, Motion |
| **Icons** | Lucide React, React Icons |
| **Data / backend** | Supabase (optional), Axios |
| **Utilities** | class-variance-authority, clsx, tailwind-merge, lodash, react-intersection-observer, react-use |
| **Tooling** | ESLint, Prettier |

---

## Project structure

```
src/app/
├── layout.js              # Root layout, metadata, DarkModeProvider, Footer
├── page.js                # Home: Preloader, Carousel, Tools, Features, CTA
├── about/page.jsx         # About (AboutMe + Skills)
├── projects/page.jsx      # Projects
├── tools/page.jsx         # My Tech Stack (also on home)
├── testing/page.jsx       # Testing
├── components/            # Navbar, Preloader, PortfolioCarousel, AboutMe, etc.
├── contexts/              # DarkModeContext
├── lib/                   # utils, constants, supabaseClient, blogUtils
├── fonts/
└── styles/                # globals.css, home-page.css
```

---

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) (v18+) and [Git](https://git-scm.com/).

```bash
git clone https://github.com/<your-username>/portfolio_3.0.git
cd portfolio_3.0
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Script | Description |
|--------|-------------|
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` / `npm run lint:fix` | ESLint |
| `npm run format` / `npm run format:check` | Prettier |
| `npm run type-check` | TypeScript check (no emit) |

### Optional: Supabase

For blog/portfolio/contact APIs, add `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=https://japhets-realm.vercel.app
```

---

## Customization

- **Site metadata & SEO:** `src/app/layout.js` → `metadata`
- **Nav and social links:** `src/app/lib/constants.js` → `NAV_ITEMS`, `SOCIAL_LINKS`
- **Portfolio categories:** `PORTFOLIO_CATEGORIES` in `constants.js`

---

## Connect

- **GitHub:** [Jay-Adjei](https://github.com/Jay-Adjei)
- **LinkedIn:** [Japhet Adofo-Adjei](https://www.linkedin.com/in/japhet-adofo-adjei-347706256/)
- **Instagram:** [_.mr.adjei](https://www.instagram.com/_.mr.adjei/)
- **Email:** [mr.adjei17@gmail.com](mailto:mr.adjei17@gmail.com)
- **Twitter/X:** [@Adjei_Japhet](https://twitter.com/Adjei_Japhet)

---

## Acknowledgments

This project started from **[NextJS-Portify](https://github.com/GylanSalih/NextJS-Portify)** by [Gylan Salih](https://github.com/GylanSalih). Credit and thanks for the open-source template and design foundations.

---

## License

MIT (see [LICENSE](LICENSE) if present).
