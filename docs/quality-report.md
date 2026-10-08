# Portfolio quality report

Validated October 8, 2026 against the local production build at `http://127.0.0.1:3000` using Next.js 16.4.0, React 19.3.0, and installed Chrome.

## Measured Lighthouse results

Lighthouse 12.8.2, mobile defaults, local production server:

| Category | Score | Target |
| --- | ---: | ---: |
| Performance | 98 | 90+ |
| Accessibility | 100 | 95+ |
| Best practices | 100 | 95+ |
| SEO | 100 | 95+ |

First contentful paint: 0.9 seconds. Largest contentful paint: 2.5 seconds. Total blocking time: 0 milliseconds. Cumulative layout shift: 0. The final run has no failing binary audits. Machine-readable results are in `quality-summary.json`.

These are local measurements, not guarantees for a deployed host or real user network. Repeat Lighthouse after configuring the final domain and deployment.

## Checks completed

- Production build passes. The homepage, top-level pages, and four case studies are statically generated.
- TypeScript and ESLint pass with no source errors or warnings.
- Three content tests pass: private repository links, deployment status distinctions, and canonical-origin handling.
- Ten Playwright tests pass across desktop and mobile: project filtering, case study navigation, keyboard access, mobile menu Escape/focus, history navigation, breakpoint resize, routes, 404, résumé download, contact link, and axe checks.
- Axe finds zero violations for WCAG 2 A/AA and WCAG 2.1 A/AA tags on the homepage, CrowHub case study, and contact page at both test viewports.
- Site crawl validates ten routes at 375, 768, and 1440 pixels with no horizontal overflow or browser errors. It checks 171 internal links, comprising 52 unique route/anchor targets. Reduced motion disables smooth scrolling.
- Desktop homepage/project showcase and mobile homepage/project/case-study screenshots were visually inspected. Mobile architecture diagrams use stacked, legible nodes.
- The résumé download is byte-identical to the supplied original.
- SVG titles and descriptions remain available during server rendering, and project interactions produce no hydration errors.
- CrowHub, the GitHub profile, and public QR repository returned HTTP 200 during external link checks. LinkedIn returned its automated-request block (HTTP 999); the profile URL is sourced from the résumé and was not independently verified through that request.

## Review and fixes

A separate read-only reviewer checked content credibility, routes, origin configuration, and navigation. The review identified menu state surviving browser history and desktop resizing. Both were corrected and covered by regression tests. Browser validation also identified the SVG title hydration mismatch and early-animation contrast; both were fixed. Lighthouse prompted matching visible and accessible CTA labels and increasing small text to a 12-pixel minimum.

## Release configuration and limits

- The public portfolio domain is intentionally unset. No invented canonical URL or sitemap entries are emitted. Next.js warns that local Open Graph images resolve to its localhost fallback. Set `NEXT_PUBLIC_SITE_URL` to the real HTTPS origin before the deployment build.
- The site has not been published or tested on a hosting provider.
- Project implementation and production assertions have the evidence limits recorded in `content-verification.md`. Architecture diagrams are not product screenshots. No source-project security audit or load test was performed.
- Lighthouse/axe are automated checks, not a complete WCAG conformance certification. Manual keyboard and responsive checks supplement them.
- The production dependency audit reports zero known vulnerabilities. The full development dependency audit reports five related high-severity entries from one unpatched `braces <=3.0.3` stack-exhaustion advisory through the Next.js ESLint plugin's glob dependency chain. `braces` 3.0.3 is the latest published version checked. No forced downgrade was applied. This chain is lint tooling and is excluded from production runtime dependencies; review updates before future dependency upgrades.

## Reproduce

Run `npm test`, `npm run typecheck`, `npm run lint`, and `npm run build`. Start the production server with `npm run start`, then run `npm run test:e2e` and `npm run verify:site`.

Lighthouse can be run with `npm exec --yes --package=lighthouse -- lighthouse http://127.0.0.1:3000 --chrome-flags='--headless --no-sandbox'`. Run it separately from other browser checks so competing work does not distort performance measurements.
