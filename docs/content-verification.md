# Content evidence and remaining verification

Reviewed October 8, 2026. The résumé and brief are user-provided evidence; repository review establishes implemented code, not service availability, complete security assurance, customer adoption, or measured business results.

## Evidence used

| Content | Evidence | Public treatment |
| --- | --- | --- |
| Contact, Calgary location, remote/relocation preference | `resume/Neil_Nelson_EM_Resume.docx` | Real email and LinkedIn links; no guessed contacts |
| Absorb manager role, Feb 2020–Jul 2026; Honeywell Lead Engineer III, Mar 2014–Jan 2020; CannAmm technical lead, Jul 2012–Feb 2014 | Supplied résumé | Concise accomplishment-oriented experience |
| User imports, approximately 3.82 → 10.73 records/sec | Supplied project brief | Approximately 181%; scoped to user imports |
| 99% uptime and daily deployment support | Résumé and brief | No invented measurement window, failure rate, or zero-downtime claim |
| Five modules migrated behind APIs | Supplied brief | Count shown with context; module names and timeline remain undocumented |
| CrowHub product/engineering ownership and deployment | Supplied résumé | Production status based on résumé; no customer, revenue, or transaction metrics |
| CrowHub implementation | Private `neiln/crow-app`, development branch | Next.js, .NET 10, PostgreSQL, AWS S3/SES, Stripe Connect, .NET hosted services; private source link omitted |
| BizLink implementation | Private `neiln/bizlink`, main branch | Member/vendor Next.js applications, .NET 8, PostgreSQL, Redis, Hangfire; deployment availability unconfirmed |
| QR Generator implementation | Local `/Volumes/External/Projects/qr-code-generator`; GitHub visibility verified | Node.js/Express, qrcode, Sharp, seven content types, PNG exports, styling, logos, API/CLI; public source link shown |
| Vendor Hub implementation | Local `/Volumes/External/Projects/vendor-registration`; private repo identity verified | Next.js, Prisma/PostgreSQL, AWS SES, server validation, admin sessions, review attribution; no private source link |

## Source references for technical statements

CrowHub: `MarketplaceApi/MarketplaceApi.csproj`, `MarketplaceApi/Program.cs`, `MarketplaceApi/Infrastructure/Stripe/StripeWebhookHandler.cs`, `MarketplaceApi/Infrastructure/ReservationExpiryService.cs`, endpoint files, root README, and `marketplace-web/package.json`. The current source targets .NET 10, superseding the brief's .NET 8 description. Recurring work is registered with `AddHostedService`, not Hangfire. The portfolio intentionally corrects both details. The frontend is Next.js 14 in the reviewed source; the portfolio uses Next.js 16. A diagram shows the application-level boundaries, not a complete deployment topology.

BizLink: root README, API project file, web and vendor-portal manifests, offer controller, vendor-location controller, redemption/controller services, and deployment documentation. The README describes production deployment, but no independently confirmed public URL or release status is presented.

QR Generator: README, package manifest, `src/index.js`, `src/generator/enhanced-qr.js`. PNG and data URL support are verified; SVG/PDF export, hosted accounts, code history, analytics, and QR management are not claimed. That project's tests were inspected but not rerun during this portfolio task.

Vendor Hub: Prisma schema, registration route, admin status route, admin session service, package manifest, and README. Registration and rejection validation are concrete implementation facts. Session signing is not presented as a complete security audit. Approval and rejection each retain their latest identity/time; this is not claimed as a full immutable audit history.

## Missing content before publication

- Final portfolio domain for canonical metadata and sitemap. Keep `NEXT_PUBLIC_SITE_URL` empty until the real origin is selected.
- PPM 2000 / Resolver: job title, dates, achievements, and technical environment. Omitted from the public timeline until verified.
- Detailed role attribution and release history for BizLink, QR Generator, and Vendor Hub.
- Confirmed public product URLs and release status for those three projects. Source review alone is labeled `Source reviewed`.
- Authentic screenshots, screen descriptions, and permission to publish them. Architecture previews are labeled clearly.
- Uptime measurement window, monitoring method, and supporting records.
- Import test conditions, customer workload context, sample period, and supporting records.
- Names and migration timeline of the five legacy modules.
- Any additional hands-on claims for ECS, SQS, SNS, or CloudWatch. These are omitted from the public skills inventory until experience context is supplied.
- Optional PDF résumé. The existing DOCX is functional and has not been reformatted or converted.

## Content decisions

- The brief already supplies the purpose, audience, design, stack, and implementation instruction. Build proceeds locally without additional design approval gates.
- No Git repository existed in this folder, so no commits or worktrees were created.
- No screenshots, logos, customer counts, commercial outcomes, job facts, or URLs were invented.
- Project trade-offs are explained from reviewed implementation; unrecorded personal rationale or claimed lessons are not attributed as historical facts.

## November 13, 2026 revision

Positioning was reworked for an Engineering Manager search. Facts added from the candidate directly: seven engineers led (three senior, two intermediate, one SQL developer and one DevOps engineer who later moved to SRE), four hires, one Intermediate-to-Senior promotion, the three Absorb "products" being internal customer-onboarding platforms (scheduled imports/exports, a custom integration service, data migration), the role ending in a 2026 restructuring, and availability as remote across Canada. The bare 99% uptime figure was removed and the memory-depletion work is told as an incident story. CrowHub screenshots were captured from thecrowhub.com on November 13, 2026, which also showed the product live in Edmonton and Calgary with seller subscription plans and AI-written listings. Audit and verification language is intentionally kept out of rendered pages; it lives here.
