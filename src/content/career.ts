export const metrics = [
  { metric: "7", label: "Engineers led", context: "Senior, intermediate, and specialist developers on a SaaS platform team" },
  { metric: "4", label: "Hires made", context: "Plus one promotion to Senior and two specialists moved into SRE" },
  { metric: "2.8×", label: "Faster customer imports", context: "From 3.8 to 10.7 records per second under multi-tenant memory limits" },
  { metric: "Daily", label: "Deployment cadence", context: "Decoupled a legacy platform so the team could ship daily behind feature flags" },
];

export const impact = [
  {
    metric: "7",
    label: "Engineers led",
    context: "Six years of hiring, coaching, reviews, promotions, and delivery",
    title: "Building and running the team",
    challenge: "The team behind Absorb's customer data and integrations platform needed stable leadership, a clear charter, and engineers who could own production systems that every customer onboarding depended on.",
    action: "Managed seven engineers across senior, intermediate, and specialist roles. Ran hiring, onboarding, performance reviews, and career planning. Set delivery expectations with Product, and presented risks and trade-offs to executives in PI planning.",
    outcome: "Made four hires, promoted one engineer from Intermediate to Senior, and transitioned two infrastructure specialists into the SRE organization as ownership boundaries were clarified. The team earned two Best Team quarterly awards, plus Strategic Direction and Pathfinder recognition.",
  },
  {
    metric: "Resolved",
    label: "Recurring outages",
    context: "Root cause fixed, automated recovery and health monitoring added",
    title: "Eliminating recurring production outages",
    challenge: "Recurring memory depletion in background processing was taking down customer imports and integrations, and each incident meant manual recovery and customer-facing delays.",
    action: "Led the root-cause investigation across application code, Hangfire job processing, and infrastructure. Directed fixes for retry and cancellation handling, added automated recovery and health monitoring, and gave Operations clearer indicators of job health.",
    outcome: "The recurring failure mode was removed rather than patched, and the platform moved from reactive firefighting to monitored, self-recovering background processing.",
  },
  {
    metric: "2.8×",
    label: "Faster customer imports",
    context: "From 3.8 to 10.7 records per second under multi-tenant memory limits",
    title: "Import performance and scalability",
    challenge: "Large customer imports were hitting memory and throughput ceilings in a shared multi-tenant environment, slowing onboarding for the biggest accounts.",
    action: "Coordinated developers, QA, and SRE to profile CPU, memory, database, and processing bottlenecks. Prioritized immediate stability work, then directed staging and batching changes to the import pipeline.",
    outcome: "User import processing went from roughly 3.8 to 10.7 records per second, nearly a 3× improvement, without adding infrastructure.",
  },
  {
    metric: "Daily",
    label: "Deployment cadence",
    context: "Decoupled a legacy platform so the team could ship daily behind feature flags",
    title: "Daily deployments and incremental modernization",
    challenge: "Tightly coupled legacy components made every release risky and hard to isolate, which kept deployments infrequent and large.",
    action: "Identified coupling risks, introduced reusable NuGet wrapper packages, and coordinated feature flags and rollout dependencies with SRE and Operations. Directed the incremental extraction of business functionality behind .NET APIs, with architecture reviews and mentorship keeping the standard consistent.",
    outcome: "The team moved to daily deployments while keeping the product stable, and migrated five legacy modules behind .NET APIs as part of the modernization.",
  },
];

export const leadership = [
  { icon: "people", title: "People development", summary: "Give engineers the clarity, feedback, and support to grow.", details: ["Coaching and career planning", "Hiring and thoughtful onboarding", "Honest feedback and performance reviews"] },
  { icon: "architecture", title: "Engineering excellence", summary: "Make technical quality part of how the team works.", details: ["Architecture and code reviews", "Maintainable systems and clear boundaries", "Reliability and incremental modernization"] },
  { icon: "delivery", title: "Predictable delivery", summary: "Connect priorities and capacity to an achievable plan.", details: ["Sprint and PI planning", "Dependencies and risk made visible", "Clear communication with Product and stakeholders"] },
  { icon: "strategy", title: "Technical strategy", summary: "Choose the technical work that moves the business forward.", details: ["Architecture evolution and technical debt", "Cloud infrastructure and scalability", "Practical trade-offs tied to business outcomes"] },
];

export const experience = [
  {
    organization: "CrowHub",
    role: "Founder, Product & Engineering",
    dates: "Jan 2026 – Present",
    summary: "A local-commerce marketplace live in Edmonton and Calgary, built and operated end to end.",
    achievements: [
      "Designed, built, deployed, and operate a production marketplace: listings, reservations, Stripe Connect payments, messaging, and QR-confirmed pickup.",
      "Used coding agents heavily for implementation and tests while personally owning architecture, security review, and release decisions.",
    ],
    environment: ".NET 10 · Next.js · PostgreSQL · AWS · Stripe",
  },
  {
    organization: "Absorb Software",
    role: "Engineering Manager, Software Development",
    dates: "Feb 2020 – Jul 2026",
    summary: "Led the engineering team behind Absorb LMS's customer data and integrations platform: scheduled data imports and exports, a custom integration service, and customer data migration.",
    achievements: [
      "Managed seven engineers through hiring, coaching, performance reviews, promotions, and career planning. Made four hires and promoted one engineer to Senior.",
      "Owned delivery for the platform and a major data-migration initiative, aligning priorities, capacity, sprint execution, and PI planning with Product, and presenting risks and trade-offs to executives.",
      "Nearly tripled customer import throughput and eliminated recurring memory-depletion failures through root-cause investigation, automated recovery, and health monitoring.",
      "Helped the platform reach daily deployments by decoupling legacy components with NuGet wrapper packages and feature flags, coordinated with SRE and Operations.",
      "Transitioned infrastructure ownership to SRE, moving two specialists onto that team while my team kept onboarding and reporting.",
      "Recognized with two Best Team quarterly awards, plus Strategic Direction and Pathfinder recognition.",
    ],
    environment: ".NET · React / TypeScript · AWS · Hangfire · SQL Server",
  },
  {
    organization: "Honeywell",
    role: "Lead Engineer III",
    dates: "Mar 2014 – Jan 2020",
    summary: "Software and hardware integration, architecture prototyping, and technical team leadership for industrial products.",
    achievements: [
      "Led integration work across C++, C#, .NET, OPC / OPC UA, Modbus, PLC interfaces, Web API, and Qt, turning device requirements into implementable designs.",
      "Built rapid prototypes to test architecture before full implementation; one approach cut estimated redevelopment effort by about half.",
      "Designed unified deployment and configuration tooling, ran sprint ceremonies, and mentored engineers through design and PR reviews.",
    ],
    environment: "C++ · C# / .NET · OPC UA · Qt",
  },
  {
    organization: "CannAmm",
    role: "Technical Lead, Software Development",
    dates: "Jul 2012 – Feb 2014",
    summary: "Led distributed development and QA teams for an operational business platform.",
    achievements: [
      "Coordinated delivery capacity, production support, technical standards, and Agile practices, and translated executive priorities into technical plans.",
      "Improved performance, security, and hosting architecture for an ASP.NET MVC and SQL Server platform; modernized data access with Entity Framework.",
    ],
    environment: "ASP.NET MVC · SQL Server · Entity Framework",
  },
];

export const capabilities = [
  { title: "Engineering leadership", context: "People management and delivery ownership", items: ["Hiring and team development", "Performance and career planning", "Agile / PI planning", "Architecture reviews", "Executive communication"] },
  { title: "Backend and integration", context: "Hands-on and through the team", items: ["C# / .NET", "ASP.NET / Web API", "REST APIs", "Hangfire and background processing", "System integration"] },
  { title: "Frontend and product", context: "Team oversight and independent products", items: ["React", "TypeScript", "Next.js", "Product workflows", "Stripe integration"] },
  { title: "Cloud and operations", context: "Architecture, reviews, and production ownership", items: ["AWS", "Docker", "CI/CD", "Health monitoring", "Incident root-cause analysis"] },
  { title: "Data and performance", context: "Imports, migrations, and query tuning", items: ["SQL Server", "PostgreSQL", "Data modelling", "Query optimization", "Large-scale import processing"] },
  { title: "AI-assisted delivery", context: "Leading teams that use coding agents well", items: ["Agent-driven implementation", "Review and guardrails", "Test generation", "Architecture exploration", "Hugging Face Agents certified"] },
];

export const credentials = [
  { title: "B.Sc. Computer Engineering", issuer: "University of Alberta", year: "2012" },
  { title: "Hugging Face Agents Certification", issuer: "Hugging Face", year: "2026" },
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { title: "Leading Teams with Integrity", issuer: "The Wharton School", year: "2023" },
  { title: "Leadership & Management Certification", issuer: "NAIT", year: "2017" },
  { title: "Project Management in Technology", issuer: "NAIT", year: "2016" },
  { title: "Six Sigma Green Belt", issuer: "Honeywell", year: "2016" },
];

export const aiWorkflow = ["Define the business problem", "Establish the architecture", "Break work into focused tasks", "Implement with coding agents", "Review architecture and security", "Validate with tests and manual review", "Deploy, observe, and iterate"];
