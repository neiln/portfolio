# Portfolio implementation plan

**Goal:** Deliver a credible, polished engineering leadership portfolio with a homepage and four maintainable case studies.

**Architecture:** Structured TypeScript content drives server-rendered App Router pages. Shared visual components keep diagrams, project cards, and editorial sections consistent. Client code handles only navigation and filtering.

**Tech stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Lucide, Motion.

**Spec:** docs/superpowers/specs/2026-10-08-portfolio-design.md

## Global constraints
- Preserve the supplied résumé; use its verified contact and employment facts.
- Publish no private repository links or invented domain, screenshot, outcome, or status.
- Keep the implementation in this local workspace; no database or hosted registration is required.
- Use reduced motion, responsive layouts, semantic landmarks, and static generation.

## Review focus
- Missing configured domain: no placeholder canonical or example.com sitemap entries.
- Private repositories: show no public source CTA.
- Unknown project slugs: serve 404 rather than an empty case study.
- Small screens and keyboard: mobile navigation closes and returns focus correctly.
- Source-verified projects: do not imply verified public deployment.

### Task 1: Evidence and content model
- [x] Read résumé and reviewed source without exposing credentials.
- [x] Write content tests for safe links, private repositories, and status distinctions; observe failure before implementing the content model.
- [x] Create src/content/site.ts, projects.ts, and career.ts.
- [x] Document remaining verification gaps in docs/content-verification.md.

### Task 2: Foundation and homepage
- [x] Create src/app/layout.tsx and globals.css, shared header/footer, buttons, SVG diagrams, and homepage sections.
- [x] Create browser tests for homepage, filtering, mobile navigation, contact, and résumé download before the pages exist.
- [x] Build a restrained responsive homepage using verified data and architecture previews.

### Task 3: Detail pages and metadata
- [x] Generate four project routes from typed content, plus projects, impact, leadership, about, and contact pages.
- [x] Implement 404, metadata, Open Graph, icon, robots, and sitemap with safe configured origin.
- [x] Ensure all internal links and section anchors resolve.

### Task 4: Verification and handoff
- [x] Run npm test, npm run typecheck, npm run lint, and npm run build.
- [x] Review desktop and mobile screenshots; run browser and axe checks against a production server.
- [x] Measure Lighthouse where available, document exact results and verification limits.
- [x] Provide README, deployment instructions, content checklist, and open a local preview.

## Progress
Repository inspection complete: workspace contains the résumé only and has no Git repository. No worktree or Git commits are applicable. Implementation proceeds inline under the user's detailed build instruction.

## Completion evidence
All four tasks complete. Build, lint, typecheck, 3 content tests, and 10 browser tests pass. Site crawl checks 10 routes at 375/768/1440px and 171 internal links with zero browser errors or overflow. Final local mobile Lighthouse: performance 98, accessibility 100, best practices 100, SEO 100. See docs/quality-report.md and docs/quality-summary.json.

Read-only review fixes: menu history navigation and desktop breakpoint reset. Browser fixes: SVG title hydration, entrance-animation contrast, accessible CTA labels. Mobile visual refinement: stacked architecture nodes and readable label sizes.

Content rulings: private repository CTAs excluded; source facts supersede outdated CrowHub .NET/Hangfire assumptions; unverified employment and release details remain in the checklist; no portfolio domain invented. No publication or Git integration was attempted.
