# LCP & TTFB Investigation Report

**Project:** portfolio_3.0 (Next.js 16, Vercel)  
**Date:** March 12, 2025

---

## Executive Summary

Investigation found **multiple high-impact causes** for poor LCP and TTFB:

- **LCP** is dominated by the **preloader** (main content not rendered until a long GSAP animation finishes), **blank layout until dark mode initializes**, and **very large images** (e.g. 12.6 MB profile image).
- **TTFB** is likely worsened by **serverless cold starts** (Vercel), **blocking font loading**, and a **client-only shell** that still requires a non-trivial server render.

---

## 1. TTFB (Time to First Byte) – Findings

### 1.1 Server / Hosting

- **Stack:** Next.js 16, deployed at `japhets-realm.vercel.app` (from `layout.js`).
- **Impact:** On Vercel, serverless functions can have **cold starts** (often 200–800+ ms), which add directly to TTFB. No custom `middleware.js` was found, so there’s no extra middleware delay.

### 1.2 First Paint Blocked by ClientLayout

- **File:** `src/app/components/ClientLayout/ClientLayout.jsx`
- **Behavior:** The layout **returns `null`** until `isInitialized` is true from `DarkModeContext`.
- **Impact:** The user receives HTML/JS but sees a **blank screen** until the client has run and read `localStorage` for dark mode. This doesn’t increase TTFB itself (TTFB is server→first byte) but **delays First Contentful Paint (FCP)** and makes the site feel slow; it can also encourage more client work before anything is shown.

### 1.3 Font Loading (Potential Render Blocking)

- **File:** `src/app/fonts/fonts.css`
- **Behavior:** Multiple `@font-face` declarations (RedHat, Quicksand, AvantGarde, BlenderPro, CommandOverride) with **no `font-display`**.
- **Impact:** Browsers may block or delay text rendering until these fonts load, which can delay FCP/LCP and make the initial response feel slower.

### 1.4 No Static Generation for Home

- **File:** `src/app/page.js`
- **Behavior:** Root page is **`'use client'`** and renders the Home component. No `generateStaticParams` or static export for the index.
- **Impact:** The index is rendered on the server on each request (or on demand on Vercel). Without caching or ISR, every hit can pay full server render + possible cold start cost, contributing to variable and sometimes high TTFB.

---

## 2. LCP (Largest Contentful Paint) – Findings

### 2.1 Preloader Delays Main Content (Critical)

- **Files:** `src/app/page.js`, `src/app/components/Preloader/Preloder.jsx`
- **Behavior:**
  - On **first visit** to the home page (no `sessionStorage['homePreloaderSeen']`), the Home component sets `showPreloader = true` and **does not render** `PortfolioCarousel`, ToolsPage, Features, etc.
  - Main content is gated by `(ready || !showPreloader)`. So the hero (likely LCP) **only mounts after the preloader’s `onFinish`**.
  - The preloader runs a **long GSAP timeline** (staggered text, box motion, initials, logo, then slide-up exit). Total duration is **on the order of 5–7+ seconds**.
- **Impact:** LCP is delayed by the **full preloader duration**. The largest contentful element (hero section) is not even in the DOM until the animation completes. This is the **single largest LCP issue** identified.

### 2.2 Blank Screen Until Dark Mode Initializes

- **Files:** `src/app/components/ClientLayout/ClientLayout.jsx`, `src/app/contexts/DarkModeContext.js`
- **Behavior:** `ClientLayout` renders `null` until `isInitialized` is true. Initialization happens in a `useEffect` that reads `localStorage.getItem('darkMode')`.
- **Impact:** Nothing is painted until the client has run and dark mode state is set. This **adds to the delay before any meaningful content (and thus LCP)** appears.

### 2.3 Extremely Large Images

| Asset | Size | Usage |
|-------|------|--------|
| `profile-pic.webp` | **12,600 KB (~12.3 MB)** | AboutMe section (`/about`) |
| `profile-pic.jpg` | **19,072 KB (~18.6 MB)** | Same folder (likely alternate) |
| `og-image.png` | **1,341 KB (~1.3 MB)** | Open Graph (social) |
| Various GIFs | **7–22 MB each** | Preload / other pages |

- **Impact:** The About page uses `profile-pic.webp` via a plain `<img>` (no `next/image`, no `priority`, no responsive sizing). If that image is in the viewport, it can become LCP and **severely** hurt LCP. Even if not LCP, 12 MB is unnecessary for a profile photo and wastes bandwidth and memory.

### 2.4 Hero Content Not Optimized for LCP

- **File:** `src/app/components/PortfolioCarousel/PortfolioCarousel.jsx`
- **Behavior:** Hero is text + `WaterTraceBackground` (canvas). No above-the-fold image with `priority` or preload.
- **Impact:** Once the preloader is gone, LCP is likely the hero text or the canvas. Text can still be delayed by font loading; there’s no explicit LCP image optimization (e.g. preload, `fetchpriority="high"`).

### 2.5 Preloader Logo Image

- **File:** `src/app/components/Preloader/Preloder.jsx`
- **Behavior:** Preloader shows `<img src="/assets/images/logo_transparent.webp" />` (no `priority`, no preload).
- **Impact:** During the preloader, this image could be the LCP. It’s small (8.1 KB) but not preloaded, so it can still add a small delay. The bigger issue remains that **main content is hidden until the whole timeline ends**.

---

## 3. Other Observations

- **Supabase** is only used via `supabaseClient.js`; no evidence it’s used on the critical path for the home page. Unlikely to affect LCP/TTFB for `/`.
- **Heavy assets:** Many large GIFs (7–22 MB) and videos (1.7–7.7 MB) in `public/assets`. They don’t appear to be on the initial home load but can affect other routes and preload lists.
- **Layout:** Root layout imports `./fonts/fonts.css` and `./styles/globals.css`; fonts are global and can block rendering if not optimized.

---

## 4. Action Plan (Prioritized)

### Phase 1 – Quick Wins (High Impact, Low Effort)

| # | Action | Expected effect |
|---|--------|-----------------|
| 1 | **Remove or shorten the preloader** | Large LCP improvement: main content can paint immediately or within ~1 s. Option A: Remove preloader on home. Option B: Shorten to ~1 s and show hero in parallel (e.g. hero visible behind preloader, or preloader only on first load with a skip button). |
| 2 | **Stop blocking on dark mode** | Avoid `return null` in ClientLayout until `isInitialized`. Render layout with a safe default (e.g. dark), then update class when `localStorage` is read. This improves FCP and avoids extra delay before LCP. |
| 3 | **Add `font-display: swap`** | In `src/app/fonts/fonts.css`, add `font-display: swap;` to every `@font-face`. Text can show with fallback immediately; LCP (if text) improves. |
| 4 | **Optimize profile image** | Resize and compress `profile-pic.webp` (e.g. max 800×800, &lt; 150 KB). Use `next/image` with `sizes` on the About page. Prevents this image from killing LCP on `/about`. |
| 5 | **Optimize og-image** | Resize/compress `og-image.png` to 1200×630 and &lt; 200 KB (e.g. WebP). Reduces payload when social crawlers or previews load it. |

### Phase 2 – Structural Improvements

| # | Action | Expected effect |
|---|--------|-----------------|
| 6 | **Preload LCP image (if you add one)** | If the hero gets a key image, add `<link rel="preload" as="image" href="..." />` and use `priority` on `next/image` so LCP image loads as early as possible. |
| 7 | **Static or ISR for home** | Make the home page statically generated (`output: 'export'` for full static or default SSG) or use ISR so the first byte is served from cache when possible, reducing TTFB and cold-start impact. |
| 8 | **Reduce client-only shell** | Where possible, keep the initial shell server-rendered (e.g. layout without `'use client'` for the outer wrapper, or move dark mode init to a small client-only component that doesn’t block the whole layout). |

### Phase 3 – Further Optimizations

| # | Action | Expected effect |
|---|--------|-----------------|
| 9 | **Lazy-load below-the-fold sections** | Use dynamic imports for Features, FeaturesInteractive, CallToAction (or heavy children) so the hero can paint and become LCP with less competing work. |
| 10 | **Preconnect / DNS-prefetch** | If you add analytics or third-party origins, use `<link rel="preconnect">` or `dns-prefetch` to reduce their impact on LCP. |
| 11 | **Audit and defer non-critical JS** | Use Next.js bundle analyzer and ensure GSAP, Framer Motion, etc. are not blocking the initial paint; consider loading animation libs after first paint. |

---

## 5. Success Metrics

- **TTFB:** Aim for &lt; 600 ms (good), &lt; 800 ms acceptable. Measure in production (e.g. Vercel Analytics, Web Vitals, or RUM).
- **LCP:** Aim for &lt; 2.5 s (good), &lt; 4.0 s acceptable. After removing/shortening the preloader and fixing dark-mode blocking, re-measure; target at least 40–50% improvement.
- **FCP:** Should improve once layout no longer returns `null` and fonts use `font-display: swap`.

---

## 6. File Reference

| Topic | File(s) |
|-------|--------|
| Preloader (home) | `src/app/page.js`, `src/app/components/Preloader/Preloder.jsx` |
| Layout / dark mode gate | `src/app/components/ClientLayout/ClientLayout.jsx`, `src/app/contexts/DarkModeContext.js` |
| Fonts | `src/app/fonts/fonts.css` |
| Profile image | `src/app/components/AboutMe/AboutMe.jsx`, `public/assets/images/about/profile-pic.webp` |
| Hero | `src/app/components/PortfolioCarousel/PortfolioCarousel.jsx` |
| Root layout | `src/app/layout.js` |
| Next config | `next.config.mjs` |

---

---

## 7. Phase 1 Implementation (Done)

- **Preloader:** Shortened to ~1 s; hero (PortfolioCarousel, etc.) now always renders behind the overlay so LCP can fire on the hero.
- **ClientLayout:** No longer returns `null` before dark mode init; layout renders with default dark; root `<html>` has `className="dark-mode"` so first paint matches.
- **Fonts:** All `@font-face` in `src/app/fonts/fonts.css` now use `font-display: swap`.
- **Profile image:** AboutMe uses `next/image` for the profile pic with `sizes="(max-width: 768px) 100vw, 400px"` for responsive optimization.
- **og-image:** Comment added in `layout.js`; compress `public/assets/images/og-image.png` to 1200×630 and &lt;200 KB (e.g. with [Squoosh](https://squoosh.app) or export as WebP) and replace the file for faster social/crawler loads.

---

*Report generated from codebase investigation. Re-measure with real user monitoring (e.g. Chrome User Experience Report, Vercel Analytics, or Web Vitals) after each phase to validate impact.*
