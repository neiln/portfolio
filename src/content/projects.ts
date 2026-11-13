export type Architecture = { entry: string; core: string; services: string[]; description: string };
export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  status: "Live" | "Built";
  role: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: { title: string; description: string }[];
  challenges: string[];
  decisions: { title: string; description: string }[];
  outcomes: string[];
  screenshots: { src: string; alt: string; caption: string }[];
  architecture: Architecture;
  repositoryVisibility: "private" | "public";
  githubUrl?: string;
  liveUrl?: string;
  accent: "indigo" | "cyan" | "sage" | "amber";
};

export const projects: Project[] = [
  {
    slug: "crowhub", name: "CrowHub", category: "Local commerce marketplace", accent: "indigo",
    summary: "A local marketplace where a listing becomes a reservation, a payment, and a QR-confirmed pickup. Live in Edmonton and Calgary.",
    description: "CrowHub connects local buyers and sellers through listings, reservations, card payments, messaging, and QR-based pickup confirmation. Sellers get AI-written listings from photos, a store page, pickup windows, and subscription plans. Buyers reserve an item, pay online or at the door, and scan to confirm the handoff. I designed it, built it, shipped it, and run it.",
    status: "Live",
    role: "Founder, product, and engineering. I took CrowHub from solution design through implementation, testing, deployment, and ongoing operation. I used coding agents extensively for implementation and tests, and personally owned the architecture, the security review, production behaviour, and every release decision.",
    problem: "Local commerce needs more than a product catalogue. A reservation has to hold inventory for a limited window, payment has to reconcile with the provider, and pickup has to give both parties a clear, verifiable outcome. Most local marketplaces stop at the listing and leave the hard part to a text thread.",
    solution: "A Next.js storefront backed by a separate .NET 10 API with explicit order state transitions, PostgreSQL persistence, Stripe Connect payment orchestration for sellers, and QR-token pickup confirmation. Hosted background services handle reservation expiry, reminders, notifications, and AI listing analysis outside the request path.",
    technologies: ["Next.js", "TypeScript", "C# / .NET 10", "PostgreSQL", "Stripe Connect", "AWS S3 / SES", "Docker"],
    features: [
      { title: "Seller onboarding and listings", description: "Seller registration, image uploads, AI-assisted listing generation from photos, store pages, and tiered subscription plans." },
      { title: "Reservations and payments", description: "Time-boxed inventory reservations, Stripe payment flows with connected seller accounts, pay-online or pay-at-pickup, and signed webhook handling." },
      { title: "QR pickup confirmation", description: "A QR token ties the digital order to the physical handoff. The seller scans, the card is charged, and both sides see the outcome." },
      { title: "Messaging and operations", description: "Buyer-seller conversations, notifications, admin endpoints, and cleanup services that keep inventory and orders consistent." },
    ],
    decisions: [
      { title: "Give the domain its own API boundary", description: "The Next.js storefront calls a separate .NET API. Marketplace transitions and payment rules live in the backend, and the interface can evolve independently. The cost is a second deployment boundary to operate, which I accepted for the clarity it buys." },
      { title: "Treat payment events as external facts", description: "The webhook handler verifies Stripe signatures before processing anything. Event claiming and duplicate handling are explicit, and every payment event reconciles provider state with local order state rather than assuming they agree." },
      { title: "Release inventory carefully", description: "The expiry sweeper cancels outstanding payment intents before releasing inventory, and skips orders whose payments already succeeded or cannot be safely resolved. Expiry and payment race each other, and the sweeper is written to lose that race safely." },
      { title: "Move recurring work out of requests", description: ".NET hosted services handle reservation expiry, payment-method expiry, notifications, and listing analysis with cancellation-aware processing, so interactive requests stay fast and background failures are isolated." },
    ],
    challenges: ["Payment and inventory are separate systems, and success at the payment provider can arrive before the API records it.", "Abandoned reservations need cleanup without cancelling a completed payment or releasing inventory early.", "Agent-generated code ships only after architectural review, behavioural tests, and watching it behave in production."],
    outcomes: ["Live and operating in two cities, with real sellers, listings, and pickups.", "One codebase covers the full listing-to-reservation-to-payment-to-pickup workflow, including the edge cases where those steps disagree.", "A working demonstration of how I run AI-assisted delivery: agents implement, I review, test, and own the release."],
    screenshots: [
      { src: "/projects/crowhub/home.jpg", alt: "CrowHub marketplace home page showing local listings with prices, category filters, and city search.", caption: "Marketplace home: browse by city, category, and condition." },
      { src: "/projects/crowhub/product.jpg", alt: "CrowHub product page showing stock, a verified seller, pay-at-pickup option, reservation button, and a pickup point with the next window.", caption: "Product page: reserve for 30 minutes, choose how to pay, pick a window." },
      { src: "/projects/crowhub/whats.jpg", alt: "CrowHub seller landing page with a seller dashboard preview showing orders needing action, net earnings, and a QR code ready to scan.", caption: "Seller side: orders, earnings, and QR-confirmed handoffs." },
    ],
    repositoryVisibility: "private", liveUrl: "https://thecrowhub.com",
    architecture: { entry: "Next.js storefront", core: ".NET 10 Web API", services: ["PostgreSQL", "Hosted services", "AWS S3 / SES", "Stripe Connect"], description: "The Next.js storefront calls the .NET 10 Web API. The API integrates PostgreSQL, .NET hosted background services, AWS S3 and SES, and Stripe Connect." },
  },
  {
    slug: "bizlink", name: "BizLink", category: "Local business discovery", accent: "cyan",
    summary: "A local business discovery and offers platform with separate member and merchant experiences on one API.",
    description: "BizLink helps people find nearby businesses and offers, and gives merchants a portal to manage profiles, locations, and promotions. Built as two Next.js applications over a shared .NET 8 API with PostgreSQL, Redis caching, and Hangfire background processing.",
    status: "Built",
    role: "Independent product. I designed and built the member web app, the merchant portal, and the shared API, and documented a Docker Compose and Caddy deployment.",
    problem: "Consumers need to find relevant local businesses and offers nearby, while merchants need a practical way to manage profiles, locations, and promotional content without a separate sales process.",
    solution: "Separate member and vendor web experiences share a .NET API and PostgreSQL data model. The API provides location-aware offer discovery and authenticated vendor management, with Redis and Hangfire handling caching and recurring work.",
    technologies: ["Next.js", "React", "TypeScript", ".NET 8", "PostgreSQL", "Redis", "Hangfire", "Docker"],
    features: [
      { title: "Business and location management", description: "Authenticated vendor endpoints manage business locations and merchant-owned data." },
      { title: "Local offer discovery", description: "Offer search, active offers, and nearby discovery driven by location." },
      { title: "Merchant portal", description: "A dedicated Next.js portal for the merchant side of the platform." },
      { title: "Redemption workflows", description: "Redemption endpoints and services connect promotions with consumer actions." },
    ],
    decisions: [
      { title: "Separate merchant and member experiences", description: "Two web applications share one API. Each audience gets an interface built around its tasks while the platform keeps a single domain boundary." },
      { title: "Keep location ownership explicit", description: "Vendor-location endpoints resolve the vendor from the authenticated identity and check access before returning or changing a location." },
      { title: "Design for background work from the start", description: "Hangfire with PostgreSQL storage, Redis caching, and health checks are wired in so promotional expiry and recurring jobs run outside the request path." },
    ],
    challenges: ["Consumer discovery and merchant administration have different workflows but rely on consistent shared business data.", "Location-aware discovery and promotional expiry introduce correctness and operational considerations.", "Two frontends and one API triple the surface area to keep consistent."],
    outcomes: ["Complete member and vendor experiences backed by a shared API, ready to deploy with Docker Compose and Caddy.", "Not yet launched publicly."],
    screenshots: [], repositoryVisibility: "private",
    architecture: { entry: "Member + vendor web", core: ".NET 8 Web API", services: ["PostgreSQL", "Redis", "Hangfire", "AWS S3 / SES"], description: "Next.js member and vendor applications share a .NET 8 API, with PostgreSQL persistence, Redis caching, Hangfire processing, and AWS integrations." },
  },
  {
    slug: "qr-generator", name: "QR Generator", category: "Developer tool", accent: "sage",
    summary: "A QR code editor, API, and CLI with real customization and a shared generation engine. Open source.",
    description: "A Node.js application for generating QR codes from URLs, text, WiFi credentials, SMS, email, phone numbers, and vCards. A responsive editor provides preview and PNG downloads, backed by the same generation logic available through an API and CLI.",
    status: "Built",
    role: "Independent open-source utility. I built the generator, the editor, the API, and the CLI, with Jest and native Node tests.",
    problem: "Creating a usable QR code means encoding the right content, keeping presentation separate from the payload, and exporting an image people can actually share or print.",
    solution: "A shared QR generator encodes seven content types. Express serves the editor and API, the qrcode library handles encoding, and Sharp composes frames, captions, and optional logos into PNG output.",
    technologies: ["Node.js", "JavaScript", "Express", "qrcode", "Sharp", "Jest"],
    features: [
      { title: "Seven content types", description: "URL, text, WiFi, SMS, email, telephone, and vCard encoding." },
      { title: "Preview and PNG export", description: "Live preview and exports from 256 to 2048 pixels, before framing." },
      { title: "Presentation controls", description: "Colours, frames, captions, fonts, and optional image logos." },
      { title: "API and CLI", description: "HTTP endpoints and command-line options expose the generator beyond the editor." },
    ],
    decisions: [
      { title: "Separate encoding from presentation", description: "Captions and frames are composed around the QR image. Caption text never alters encoded content, and the generator preserves the four-module quiet zone." },
      { title: "Validate before rendering", description: "The enhanced endpoint bounds content, image size, logo dimensions, colours, and numeric options, and returns descriptive client errors for bad input." },
      { title: "Account for logo trade-offs", description: "Adding a logo switches to high error correction and bounds its size. The README still tells users to scan-test the final image." },
    ],
    challenges: ["Visual customization must preserve the QR's quiet zone and usable contrast.", "Image decoding and composition need bounded input sizes and useful validation feedback.", "A generated PNG still needs scan-testing in its final display or print context."],
    outcomes: ["One generation engine supports browser, HTTP, and command-line use.", "Public source with Jest and native Node tests."],
    screenshots: [], repositoryVisibility: "public", githubUrl: "https://github.com/neiln/qr-code-generator",
    architecture: { entry: "Web editor / API / CLI", core: "Node.js + Express", services: ["Content validation", "QR encoding", "Sharp rendering", "PNG export"], description: "Web, API, and CLI inputs flow through Node.js and Express, with content validation, QR encoding, Sharp image composition, and PNG export." },
  },
  {
    slug: "vendor-hub", name: "Vendor Hub", category: "Registration and onboarding", accent: "amber",
    summary: "Vendor registration with conditional fields, consent capture, and an admin review workflow that records who decided what, and when.",
    description: "A vendor registration portal with business profiles, vendor-type-specific fields, consent capture, document upload, and administrative review. Approval and rejection decisions retain who made them, when, and the latest rejection reason.",
    status: "Built",
    role: "Independent business workflow project. I designed the data model, the registration and review APIs, and the admin experience.",
    problem: "Vendor onboarding requires more than collecting an email address. Different business types have different requirements, and administrative decisions need context and traceability.",
    solution: "A Next.js application with server-side registration validation, Prisma and PostgreSQL persistence, AWS SES email, and signed administrative sessions. Approval and rejection attribution are stored independently.",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "AWS SES"],
    features: [
      { title: "Conditional registration", description: "Business details, contact information, vendor-specific fields, participation, and consent." },
      { title: "Admin review", description: "Authenticated administrators approve or reject; rejection requires a reason of at most 200 characters." },
      { title: "Decision attribution", description: "Approval and rejection each retain their administrator identity and timestamp, even after a later status change." },
      { title: "Documents and communication", description: "Registration documents, CSV export, and approval and rejection emails." },
    ],
    decisions: [
      { title: "Validate on the server", description: "The registration API checks required business and contact fields, participation, consent, and conditional food-truck details. The review API enforces its own rejection-reason limit." },
      { title: "Keep decisions attributable", description: "Separate approvedBy/approvedAt and rejectedBy/rejectedAt fields preserve the latest decision of each type instead of overwriting history on status change." },
      { title: "Make partial email failure visible", description: "The registration route can return a saved registration with a warning when the confirmation email fails, so persistence and notification are reported separately." },
    ],
    challenges: ["Conditional business fields need consistent validation between the form and the API.", "Administrative identity must be trustworthy when an approval or rejection is recorded.", "A saved registration and a delivered email are separate outcomes and are reported that way."],
    outcomes: ["A complete registration-to-review workflow with persistent decision attribution.", "Render deployment configuration included; not yet launched publicly."],
    screenshots: [], repositoryVisibility: "private",
    architecture: { entry: "Registration + admin UI", core: "Next.js server routes", services: ["Prisma", "PostgreSQL", "AWS SES", "Signed sessions"], description: "Registration and administrator interfaces call Next.js server routes, using Prisma, PostgreSQL, AWS SES email integration, and signed administrative sessions." },
  },
];

export const featuredProject = projects[0];
export const otherProjects = projects.slice(1);
export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
