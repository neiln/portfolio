# Neil Nelson engineering leadership portfolio

A recruitment-focused portfolio built with Next.js App Router, TypeScript, React, Tailwind CSS, Lucide, and Motion. It includes an editorial dark homepage, contextual engineering outcomes, leadership and experience pages, and four project case studies. Main pages are statically generated. No database or account registration is required.

## Run locally

Use Node.js 22 LTS or newer and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js. For a production preview:

```sh
npm run build
npm run start
```

## Content

- `src/content/site.ts`: contact details, navigation, identity, and résumé URL.
- `src/content/projects.ts`: typed project records, architecture, capabilities, decisions, status, and links.
- `src/content/career.ts`: impact stories, leadership, experience, capabilities, and AI workflow.
- `public/resume/Neil_Nelson_EM_Resume.pdf` and `.docx`: the public résumé. The PDF is rendered from the HTML source in `resume/resume.html`; the DOCX is the original in `resume/` with the summary and Absorb bullets updated to match. Regenerate the PDF with `node scripts/render-resume.mjs`.
- `docs/content-verification.md`: evidence behind every claim. This stays in docs; the rendered site states facts plainly and does not narrate its own fact-checking (`tests/content.test.ts` enforces that).

To add a project, add a record to `projects.ts`. The gallery, case study route, static parameters, and sitemap consume the model automatically. Features carry `Implemented` or `Planned` states. Use an accurate status and do not add a public source link to a private repository. CrowHub screenshots in `public/projects/crowhub/` were captured from the live product; other projects use labeled architecture diagrams.

The Manrope variable font is served locally from `public/fonts/` with its OFL license. The font package is retained as the source of those assets. The small social icons use general Lucide symbols because current Lucide releases omit brand marks.

## Validate

```sh
npm test
npm run typecheck
npm run lint
npm run build
```

With the production server running, execute the Playwright route, interaction, mobile navigation, download, and axe accessibility tests:

```sh
npm run test:e2e
npm run verify:site
```

Tests use installed Google Chrome (`channel: "chrome"`). If it is unavailable, install Chrome or change the channel in `playwright.config.ts` and install the corresponding Playwright browser. `PLAYWRIGHT_BASE_URL` can point the checks at another local preview. The same behavioural tests run at desktop and mobile sizes. Lighthouse targets are validation goals; see `docs/quality-report.md` for measured results and limits.

## Deploy

1. Copy `.env.example` to `.env.local` for local configuration, or set the variable in the hosting environment.
2. Set `NEXT_PUBLIC_SITE_URL=https://neil.devraptors.com` in the hosting environment before building. Use the origin only, without a path.
3. Deploy to Vercel and add a CNAME record at Namecheap for host `neil` on devraptors.com pointing at the target Vercel shows for the domain, or run `npm ci`, `npm run build`, and `npm run start` on a Node host. Provide the host's `PORT` variable if required. Adjust the start hostname to `0.0.0.0` when the host requires a publicly bound process; the default preview binds to localhost.
4. Check `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, all case study routes, and the résumé download on the final origin.

The app is prepared for hosting, but this task does not publish it. Canonical URLs, the sitemap, and robots' sitemap declaration use the configured origin. If no valid HTTPS origin is configured, canonicals are omitted and the sitemap is empty; Next.js resolves local social image metadata using its local preview fallback. Configure the public origin before release.

Public contact values are intentionally included from the provided résumé. No secrets belong in public variables or content files.
