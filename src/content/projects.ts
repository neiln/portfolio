export type Architecture = { entry: string; core: string; services: string[]; description: string };
export type Project = {
  slug: string;
  name: string;
  category: string;
  group: "Products" | "Tools" | "Workflows";
  summary: string;
  description: string;
  status: "In production" | "Source reviewed";
  deploymentVerified: boolean;
  verification: string;
  role: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: { title: string; description: string; state: "Implemented" | "Planned" }[];
  challenges: string[];
  decisions: { title: string; description: string }[];
  outcomes: string[];
  screenshots: { src: string; alt: string }[];
  architecture: Architecture;
  repositoryVisibility: "private" | "public";
  githubUrl?: string;
  liveUrl?: string;
  accent: "indigo" | "cyan" | "sage" | "amber";
};

export const projects: Project[] = [
  {
    slug: "crowhub", name: "CrowHub", category: "Local commerce marketplace", group: "Products", accent: "indigo",
    summary: "From a local listing to a verified pickup. A complete marketplace built around the real-world exchange.",
    description: "CrowHub connects local buyers and sellers through listings, reservations, payments, messaging, and QR-based pickup confirmation. It brings product experience, transaction state, and operational workflows into one independently built marketplace.",
    status: "In production", deploymentVerified: true,
    verification: "Production deployment and ongoing operation are documented in the supplied résumé. Architecture and capabilities were reviewed against the repository’s development branch on October 8, 2026; the live service was not independently load-tested.",
    role: "Product / Engineering Lead. Took the product from solution design through implementation, testing, deployment, and ongoing operation. Used coding agents extensively while personally reviewing architecture, generated code, production behaviour, and release outcomes.",
    problem: "Local commerce needs more than a product catalogue. A reservation must hold inventory, payment must be reconciled with the provider, and pickup must give both parties a clear transaction outcome.",
    solution: "A Next.js experience backed by a separate .NET API, explicit order transitions, PostgreSQL persistence, Stripe Connect payment orchestration, and QR-based confirmation. Hosted services handle expiry, reminders, and asynchronous processing.",
    technologies: ["Next.js", "TypeScript", "C# / .NET 10", "PostgreSQL", "Stripe Connect", "AWS S3 / SES", "Docker"],
    features: [
      { title: "Seller onboarding & listings", description: "Seller registration, image uploads, product management, and AI-assisted listing analysis.", state: "Implemented" },
      { title: "Reservations & payments", description: "Inventory reservations, Stripe payment flows, connected seller accounts, and signed webhook handling.", state: "Implemented" },
      { title: "QR pickup confirmation", description: "A QR token connects the digital order with seller-confirmed physical pickup.", state: "Implemented" },
      { title: "Messaging & operations", description: "Buyer-seller conversations, administrative endpoints, notification processing, and cleanup services.", state: "Implemented" },
    ],
    decisions: [
      { title: "Give the domain its own API boundary", description: "The Next.js interface calls a separate .NET API. This keeps marketplace transitions and payment rules in the backend and allows the interface to evolve independently, while introducing another deployment boundary to operate." },
      { title: "Treat payment events as external facts", description: "The webhook handler verifies Stripe signatures before processing events. Billing event claiming and duplicate handling are explicit, and payment events reconcile provider state with local order state." },
      { title: "Release inventory carefully", description: "The expiry sweeper cancels outstanding payment intents before releasing inventory. It skips orders whose payments have already succeeded or cannot be safely resolved, accounting for races between expiry and payment." },
      { title: "Move recurring work out of requests", description: ".NET hosted services perform reservation expiry, payment-method expiry, notifications, and listing analysis. These workloads use cancellation-aware processing rather than extending interactive request lifetimes." },
    ],
    challenges: ["Payment and inventory are separate systems: success at the payment provider can arrive before the API records it.", "Abandoned reservations need cleanup without cancelling a completed payment or releasing inventory prematurely.", "Generated implementation still needs architectural review, behavioural tests, and production observation."],
    outcomes: ["An independently built and deployed marketplace, documented in the résumé.", "Reviewed source covers the listing-to-reservation-to-payment-to-pickup workflow.", "No customer, revenue, or transaction-volume claims are made."],
    screenshots: [], repositoryVisibility: "private", liveUrl: "https://thecrowhub.com",
    architecture: { entry: "Next.js frontend", core: ".NET 10 Web API", services: ["PostgreSQL", "Hosted services", "AWS S3 / SES", "Stripe Connect"], description: "The Next.js frontend calls the .NET 10 Web API. The API integrates PostgreSQL, .NET hosted background services, AWS S3 and SES, and Stripe Connect." },
  },
  {
    slug: "bizlink", name: "BizLink", category: "Local business discovery", group: "Products", accent: "cyan",
    summary: "Connecting nearby businesses with the people, offers, and experiences around them.",
    description: "A local business discovery and promotional platform with member experiences and a dedicated vendor portal. Reviewed source includes business profiles, location-aware offers, merchant content, and offer redemption workflows.",
    status: "Source reviewed", deploymentVerified: false,
    verification: "Features and stack reviewed in the main branch on October 8, 2026. Deployment documentation exists; public availability and launch status have not been independently verified.",
    role: "Independent product development. The project demonstrates product and platform work across consumer discovery and merchant workflows. Detailed ownership attribution and release history remain to be confirmed.",
    problem: "Consumers need to find relevant local businesses and offers, while merchants need a practical way to manage their profiles, locations, and promotional content.",
    solution: "Separate member and vendor web experiences share a .NET API and PostgreSQL data model. The API provides location-aware offer discovery and authenticated vendor management, with Redis and Hangfire supporting infrastructure workloads.",
    technologies: ["Next.js", "React", "TypeScript", ".NET 8", "PostgreSQL", "Redis", "Hangfire", "Docker"],
    features: [
      { title: "Business & location management", description: "Authenticated vendor endpoints manage business locations and merchant-owned data.", state: "Implemented" },
      { title: "Local offer discovery", description: "Offer search, active offers, and nearby discovery are represented in API endpoints.", state: "Implemented" },
      { title: "Merchant portal", description: "A dedicated Next.js portal supports the merchant side of the platform.", state: "Implemented" },
      { title: "Redemption workflows", description: "Redemption controllers and service implementations connect promotions with consumer actions.", state: "Implemented" },
    ],
    decisions: [
      { title: "Separate merchant and member experiences", description: "The repository maintains distinct web and vendor-portal applications sharing an API. This separates each audience’s tasks while retaining a common platform boundary." },
      { title: "Keep location ownership explicit", description: "Vendor-location endpoints resolve the vendor from the authenticated identity and check access before returning or changing a location." },
      { title: "Design for background work", description: "The API references Hangfire with PostgreSQL storage, Redis caching, health checks, and operational monitoring packages. These are implementation choices, not evidence of measured service-level outcomes." },
    ],
    challenges: ["Consumer discovery and merchant administration have different workflows but rely on consistent shared business data.", "Location-aware discovery and promotional expiry introduce correctness and operational considerations.", "Source and deployment documentation do not establish customer adoption or commercial traction."],
    outcomes: ["Source demonstrates member and vendor experiences backed by a shared API.", "Deployment documentation describes a Docker Compose and Caddy environment; live operation is unverified."],
    screenshots: [], repositoryVisibility: "private",
    architecture: { entry: "Member + vendor web", core: ".NET 8 Web API", services: ["PostgreSQL", "Redis", "Hangfire", "AWS S3 / SES"], description: "Next.js member and vendor applications share a .NET 8 API, with PostgreSQL persistence, Redis caching, Hangfire processing, and AWS integrations." },
  },
  {
    slug: "qr-generator", name: "QR Generator", category: "Developer tool & utility", group: "Tools", accent: "sage",
    summary: "Useful QR codes, without the friction. A web editor, API, and CLI with practical customization.",
    description: "A Node.js application for generating QR codes from URLs, text, WiFi credentials, SMS, email, phone numbers, and vCards. A responsive editor provides preview and PNG downloads, backed by the same generation logic available through an API and CLI.",
    status: "Source reviewed", deploymentVerified: false,
    verification: "Reviewed local source, README, and the public repository identity on October 8, 2026. A hosted application URL has not been verified.",
    role: "Independent utility project. Reviewed source demonstrates engineering and usability work across web, API, and command-line workflows. Detailed authorship and release history remain to be confirmed.",
    problem: "Creating a usable QR code means encoding the right content, keeping presentation separate, and exporting an image people can actually share or print.",
    solution: "A shared QR generator encodes seven content types. Express serves the editor and API, the qrcode library handles encoding, and Sharp composes frames, captions, and optional logos into PNG output.",
    technologies: ["Node.js", "JavaScript", "Express", "qrcode", "Sharp", "Jest"],
    features: [
      { title: "Seven content types", description: "URL, text, WiFi, SMS, email, telephone, and vCard encoding are implemented.", state: "Implemented" },
      { title: "Preview & PNG export", description: "The editor updates previews and exports selectable QR sizes from 256 to 2048 pixels, before additional framing.", state: "Implemented" },
      { title: "Presentation controls", description: "Colours, frames, captions, fonts, and optional image logos are supported.", state: "Implemented" },
      { title: "API & CLI", description: "HTTP generation endpoints and command-line options expose the generator beyond the editor.", state: "Implemented" },
    ],
    decisions: [
      { title: "Separate encoding from presentation", description: "Captions and frames are composed around the QR image. Caption text does not alter encoded content, and the generator preserves a four-module clear margin." },
      { title: "Validate before rendering", description: "The enhanced endpoint bounds content, image size, logo dimensions, colours, and numeric options. Malformed input returns a descriptive client error." },
      { title: "Account for logo trade-offs", description: "Adding a logo switches to high error correction and bounds its size. The README still calls for scan-testing the final image; contrast guidance is not a scanability guarantee." },
    ],
    challenges: ["Visual customization must preserve the QR’s clear margin and usable contrast.", "Image decoding and composition need bounded input sizes and useful validation feedback.", "A generated PNG still needs scan-testing for its final display or print context."],
    outcomes: ["One generation engine supports browser, HTTP, and command-line use.", "Public source includes Jest and native Node tests; this portfolio review did not rerun that project’s test suite."],
    screenshots: [], repositoryVisibility: "public", githubUrl: "https://github.com/neiln/qr-code-generator",
    architecture: { entry: "Web editor / API / CLI", core: "Node.js + Express", services: ["Content validation", "QR encoding", "Sharp rendering", "PNG export"], description: "Web, API, and CLI inputs flow through Node.js and Express, with content validation, QR encoding, Sharp image composition, and PNG export." },
  },
  {
    slug: "vendor-hub", name: "Vendor Hub", category: "Registration & onboarding", group: "Workflows", accent: "amber",
    summary: "Turning vendor onboarding into a clear, traceable business workflow.",
    description: "A vendor registration portal with business profiles, vendor-type-specific fields, consent capture, and administrative review. Approval and rejection decisions retain who made the decision, when it happened, and the latest rejection reason.",
    status: "Source reviewed", deploymentVerified: false,
    verification: "Reviewed local registration routes, admin session handling, Prisma schema, and documentation on October 8, 2026. Hosted availability and production release status are unverified.",
    role: "Independent business workflow project. Reviewed source demonstrates registration, data modelling, and administrative workflow design. Detailed role attribution and production release history remain to be confirmed.",
    problem: "Vendor onboarding requires more than collecting an email address. Different business types have different requirements, and administrative decisions need context and traceability.",
    solution: "A Next.js application uses server-side registration validation, Prisma and PostgreSQL persistence, AWS SES email integration, and authenticated administrative workflows. Approval and rejection attribution are stored independently.",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "AWS SES"],
    features: [
      { title: "Conditional registration", description: "Business details, contact information, vendor-specific fields, participation, and consent are captured.", state: "Implemented" },
      { title: "Admin review", description: "Authenticated administrators approve or reject registrations; rejection requires a nonblank reason of at most 200 characters.", state: "Implemented" },
      { title: "Decision attribution", description: "Approval and rejection each retain their administrator identity and timestamp, including after a later status change.", state: "Implemented" },
      { title: "Documents & communication", description: "Registration documents, CSV export, and approval/rejection email integration appear in reviewed source.", state: "Implemented" },
    ],
    decisions: [
      { title: "Validate on the server", description: "The registration API checks required business and contact fields, participation, consent, and conditional food-truck details. The review API also enforces its rejection-reason limit." },
      { title: "Keep decisions attributable", description: "Separate approvedBy/approvedAt and rejectedBy/rejectedAt fields preserve the latest decision of each type rather than overwriting all history when status changes." },
      { title: "Make partial email failure visible", description: "The registration route can return a successful saved registration with a warning when confirmation email fails. It distinguishes data persistence from notification delivery." },
    ],
    challenges: ["Conditional business fields need consistent validation between the form and API.", "Administrative identity must be trustworthy when an approval or rejection is recorded.", "A saved registration and successful email delivery are separate outcomes."],
    outcomes: ["A source-reviewed registration-to-review workflow with persistent decision attribution.", "Render deployment configuration is documented; public deployment has not been verified."],
    screenshots: [], repositoryVisibility: "private",
    architecture: { entry: "Registration + admin UI", core: "Next.js server routes", services: ["Prisma", "PostgreSQL", "AWS SES", "Signed sessions"], description: "Registration and administrator interfaces call Next.js server routes, using Prisma, PostgreSQL, AWS SES email integration, and signed administrative sessions." },
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
