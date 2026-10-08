# Neil Nelson portfolio design

Build a recruitment-focused engineering leadership portfolio in the existing local workspace. The brief authorizes implementation; keep development and preview local, and prepare deployment documentation. No remote publication is requested.

## Audience and purpose
Engineering hiring managers, CTOs, founders, and recruiters should understand Neil's leadership, technical judgment, and product delivery within ten seconds. Evidence comes from the supplied brief, the existing résumé, and reviewed project source. Do not manufacture metrics, employment facts, deployment status, screenshots, or links.

## Design foundation
Use a near-black canvas (#09090B), slate surfaces (#12121A), white text (#F8FAFC), readable muted text (#94A3B8), and a sparing indigo accent (#6366F1). Use locally hosted Manrope for an editorial sans-serif voice. The hero combines the supplied headline with a custom SVG leadership system: people, architecture, cloud, and AI-assisted delivery. Maintain ample whitespace, fine separators, and quiet interaction states.

An editorial homepage is preferred over a résumé timeline as the opening or a dense product grid: it establishes leadership first and then proves it with outcomes and independent products. CrowHub receives a large architecture-led showcase; other projects use distinct labeled diagrams. Avoid generic product UI mockups.

## Architecture
Next.js App Router, React, TypeScript, Tailwind CSS, Lucide icons, and Motion. Server-render the main pages; reserve client components for mobile navigation and project filtering. Keep content in typed models. Shared components provide navigation, footer, project cards, accessible architecture SVG, and section introductions.

Routes: /, /projects, /projects/[slug], /engineering-impact, /leadership, /about, /contact. Four project slugs are crowhub, bizlink, qr-generator, and vendor-hub. Invalid slugs return a real 404. Pages use canonical metadata only when a verified site origin is configured, Open Graph images, sitemap, and robots. Do not invent a portfolio domain.

## Content and verification
Use contact details and employment dates from resume/Neil_Nelson_EM_Resume.docx. Copy this existing file into public/resume for the download. Preserve the original. Exclude private repository URLs from public links. Clearly describe source verification separately from deployment verification. PPM/Resolver has no verified title or dates and remains in the content checklist. CrowHub deployment is stated in the résumé, not independently load-tested. Other projects must not be called production without evidence.

## Quality
Keyboard-accessible mobile navigation, skip link, meaningful SVG titles/descriptions, reduced motion, readable contrast, and responsive layouts at 375, 768, and 1440 pixels. Validate types, lint, production build, content safety, route behavior, filtering, résumé download, links, browser console, and axe accessibility. Lighthouse scores are measured targets, never assumed claims.
