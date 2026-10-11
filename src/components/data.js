// Single source of truth for portfolio content.
// Keeping data out of the view components makes them small and easy to maintain.

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Charles-Wambua", icon: "fab fa-github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/charles-wambua-918a0724a/",
    icon: "fab fa-linkedin-in",
  },
  { label: "WhatsApp", href: "https://wa.me/254114652533", icon: "fab fa-whatsapp" },
  { label: "Twitter", href: "https://twitter.com/Charles59676543", icon: "fab fa-x-twitter" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/thatsme.charles/",
    icon: "fab fa-instagram",
  },
];

export const CONTACT = {
  email: "cm3290006@gmail.com",
  phone: "+254 114 652 533",
  phoneHref: "tel:+254114652533",
  location: "Nairobi, Kenya",
};

export const STATS = [
  { value: "7+", label: "Years shipping production software" },
  { value: "6", label: "Mobile-money rails integrated" },
  { value: "50+", label: "Projects delivered end to end" },
];

// Skills grouped by where they live in a system. `core` marks the skills I'd
// lead a team with, rendered emphasized. `wide` spans two grid columns on
// desktop. No arbitrary percentages.
export const SKILL_GROUPS = [
  {
    title: "Backend & Distributed Systems",
    icon: "fas fa-server",
    core: ["Java", "Spring Boot", "Python", "Microservices"],
    skills: ["Java", "Spring Boot", "Python", "FastAPI", "Node.js", "TypeScript", "Microservices", "gRPC", "REST", "GraphQL"],
  },
  {
    title: "Event-Driven Architecture",
    icon: "fas fa-diagram-project",
    core: ["Apache Kafka", "Saga / Outbox"],
    skills: ["Apache Kafka", "Saga / Outbox", "Idempotency", "CQRS", "AWS SQS", "Redis Streams", "WebSockets"],
  },
  {
    title: "Cloud & Platform Engineering",
    icon: "fas fa-cloud",
    core: ["Kubernetes", "GCP", "Terraform"],
    skills: ["Kubernetes", "Docker", "Helm", "Terraform", "GCP", "AWS", "GitOps", "GitHub Actions", "GitLab CI"],
  },
  {
    title: "Mobile Money, USSD & Telecom",
    wide: true,
    icon: "fas fa-mobile-screen-button",
    core: ["M-Pesa Daraja", "MTN MoMo API", "USSD", "Africa's Talking"],
    skills: [
      "M-Pesa Daraja",
      "MTN MoMo API",
      "Airtel Money",
      "T-Money",
      "Moov Money",
      "TNM Mpamba",
      "USSD",
      "Africa's Talking",
      "SMS Gateways",
      "Callback Security",
      "Reconciliation",
    ],
  },
  {
    title: "AI & LLM Engineering",
    icon: "fas fa-brain",
    core: ["RAG", "AI Agents"],
    skills: ["LLM APIs", "RAG", "AI Agents", "Tool Use / MCP", "pgvector", "Prompt Evals", "AI-assisted SDLC"],
  },
  {
    title: "Data & Storage",
    icon: "fas fa-database",
    core: ["PostgreSQL", "Redis"],
    skills: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "Elasticsearch", "Query Tuning", "Schema Design"],
  },
  {
    title: "Reliability & Security",
    icon: "fas fa-shield-halved",
    core: ["OpenTelemetry", "SLOs"],
    skills: ["OpenTelemetry", "Prometheus", "Grafana", "Loki", "Sentry", "SLOs", "OAuth2 / JWT", "OWASP"],
  },
  {
    title: "Mobile & Frontend",
    icon: "fas fa-code",
    core: ["Flutter", "React Native", "React"],
    skills: ["Flutter", "Dart", "React Native", "React", "Next.js", "TypeScript"],
  },
];

// ── ARCHITECTURE showcase ───────────────────────────────────────────────────
// Reference architectures, representative of the systems I build, not a
// disclosure of any employer's internals. Each scenario has layers (left to
// right along the request path) and a flow: the request trace replayed step by
// step, highlighting the nodes each step touches.
const PAYMENT_LAYERS = [
  {
    title: "Channels",
    nodes: [
      { id: "app", label: "Mobile App", sub: "Flutter · React Native" },
      { id: "ussd", label: "USSD", sub: "Africa's Talking" },
      { id: "ops", label: "Ops Console", sub: "Next.js" },
    ],
  },
  {
    title: "Edge",
    nodes: [{ id: "gateway", label: "API Gateway", sub: "AuthN · rate limit" }],
  },
  {
    title: "Domain services",
    nodes: [
      { id: "orchestrator", label: "Payment Orchestrator", sub: "Spring Boot · saga" },
      { id: "onboarding", label: "Onboarding", sub: "KYC workflow" },
      { id: "ledger", label: "Ledger", sub: "double-entry" },
      { id: "notify", label: "Notifications", sub: "AT SMS · push" },
    ],
  },
  {
    title: "State & streaming",
    nodes: [
      { id: "kafka", label: "Kafka", sub: "event backbone" },
      { id: "redis", label: "Redis", sub: "idempotency · cache" },
      { id: "postgres", label: "PostgreSQL", sub: "ledger · outbox" },
    ],
  },
  {
    title: "Mobile-money rails",
    compact: true,
    nodes: [
      { id: "mpesa", label: "M-Pesa", sub: "Safaricom" },
      { id: "mtn", label: "MoMo", sub: "MTN" },
      { id: "airtel", label: "Airtel Money", sub: "Airtel" },
      { id: "tmoney", label: "T-Money", sub: "Togocom" },
      { id: "moov", label: "Moov Money", sub: "Moov Africa" },
      { id: "mpamba", label: "Mpamba", sub: "TNM" },
    ],
  },
];

export const ARCH_PLATFORM = [
  { label: "Kubernetes", sub: "HPA · rolling deploys" },
  { label: "Terraform + GitOps", sub: "reproducible infra" },
  { label: "OpenTelemetry", sub: "traces · metrics · logs" },
  { label: "Grafana + Prometheus", sub: "SLO dashboards · alerts" },
];

const PAYMENT_FLOW = [
  {
    nodes: ["app", "gateway"],
    t: 0,
    title: "POST /payments",
    detail: "Client sends an Idempotency-Key. The gateway verifies the JWT and applies per-tenant rate limits.",
  },
  {
    nodes: ["gateway", "orchestrator", "redis"],
    t: 4,
    title: "Idempotency check",
    detail: "Atomic SET NX on the key in Redis, so retries and double-taps short-circuit to the original result.",
  },
  {
    nodes: ["orchestrator", "postgres"],
    t: 11,
    title: "Persist intent + outbox",
    detail: "The PENDING payment and its outbox event commit in one transaction. No dual-write inconsistency.",
  },
  {
    nodes: ["postgres", "kafka"],
    t: 18,
    title: "Publish payment.requested",
    detail: "The outbox relay streams the event to Kafka, keyed by account for per-customer ordering.",
  },
  {
    nodes: ["kafka", "mpesa"],
    t: 46,
    title: "Route to market rail",
    detail: "Adapter chosen by a market routing table. Circuit breaker + exponential backoff isolate a failing telco.",
  },
  {
    nodes: ["mpesa", "orchestrator"],
    t: 2140,
    title: "Async callback",
    detail: "Signed callback verified and mapped to a canonical status. Timeouts trigger reconciliation, not guesswork.",
  },
  {
    nodes: ["orchestrator", "ledger", "kafka"],
    t: 2152,
    title: "Post to ledger",
    detail: "An idempotent consumer writes balanced double-entry postings. Failures compensate via the saga.",
  },
  {
    nodes: ["kafka", "notify", "app"],
    t: 2190,
    title: "Notify + close trace",
    detail: "Customer notified; the distributed trace closes and its latency lands on the SLO dashboard.",
  },
];

const API_LAYERS = [
  {
    title: "Consumers",
    nodes: [
      { id: "web", label: "Web App", sub: "React · Next.js" },
      { id: "mobile", label: "Mobile App", sub: "Flutter" },
      { id: "partner", label: "Partner API", sub: "OAuth2 clients" },
    ],
  },
  {
    title: "Edge",
    nodes: [{ id: "gateway", label: "API Gateway", sub: "versioning · rate limit" }],
  },
  {
    title: "Services",
    nodes: [
      { id: "auth", label: "Auth Service", sub: "OAuth2 · JWT" },
      { id: "orders", label: "Orders API", sub: "Spring Boot · REST" },
      { id: "catalog", label: "Catalog API", sub: "FastAPI · gRPC" },
      { id: "worker", label: "Workers", sub: "emails · reports" },
    ],
  },
  {
    title: "Data",
    nodes: [
      { id: "redis", label: "Redis", sub: "cache-aside" },
      { id: "postgres", label: "PostgreSQL", sub: "indexed · migrations" },
      { id: "queue", label: "Queue", sub: "Kafka · SQS" },
    ],
  },
  {
    title: "Storage & search",
    nodes: [
      { id: "search", label: "Elasticsearch", sub: "full-text search" },
      { id: "blob", label: "Object Storage", sub: "GCS · S3" },
    ],
  },
];

const API_FLOW = [
  {
    nodes: ["web", "gateway"],
    t: 0,
    title: "GET /v1/orders?cursor=…",
    detail: "Versioned, documented contract (OpenAPI). The gateway enforces per-client rate limits and request size caps.",
  },
  {
    nodes: ["gateway", "auth"],
    t: 3,
    title: "Authenticate + authorize",
    detail: "JWT verified against cached JWKS keys, then scopes and roles checked. No database hit on the hot path.",
  },
  {
    nodes: ["orders", "redis"],
    t: 5,
    title: "Cache-aside lookup",
    detail: "Hot reads are served from Redis. On a miss the service falls through to the database and repopulates with a TTL.",
  },
  {
    nodes: ["orders", "postgres"],
    t: 14,
    title: "Indexed query",
    detail: "Keyset pagination on a composite index keeps page 1,000 as fast as page 1. N+1 queries are designed out.",
  },
  {
    nodes: ["orders", "web"],
    t: 22,
    title: "Shaped response",
    detail: "DTOs, not entities. ETag for conditional requests, consistent error envelopes, and a next-page cursor.",
  },
  {
    nodes: ["web", "gateway", "orders", "postgres"],
    t: 940,
    title: "POST /v1/orders",
    detail: "Validated at the boundary, written in one transaction, and returned as 201 with the new resource location.",
  },
  {
    nodes: ["orders", "queue", "worker"],
    t: 960,
    title: "Offload slow work",
    detail: "Email, PDF and search indexing go to a queue. The user gets a fast response; workers retry with backoff.",
  },
  {
    nodes: ["worker", "search", "blob"],
    t: 1480,
    title: "Index + store",
    detail: "Search index updated, invoice PDF written to object storage behind a signed URL. Every hop is traced.",
  },
];

const WEB_LAYERS = [
  {
    title: "Client",
    nodes: [
      { id: "browser", label: "Browser", sub: "React 18" },
      { id: "pwa", label: "Mobile Web", sub: "PWA · offline" },
    ],
  },
  {
    title: "Edge",
    nodes: [
      { id: "cdn", label: "CDN", sub: "static · images" },
      { id: "middleware", label: "Edge Middleware", sub: "auth · locale" },
    ],
  },
  {
    title: "Rendering",
    nodes: [
      { id: "ssr", label: "Next.js Server", sub: "SSR · streaming" },
      { id: "isr", label: "ISR Cache", sub: "revalidate on write" },
    ],
  },
  {
    title: "BFF",
    nodes: [{ id: "bff", label: "BFF", sub: "GraphQL · aggregation" }],
  },
  {
    title: "Backends",
    nodes: [
      { id: "users", label: "Users API", sub: "REST" },
      { id: "content", label: "Content API", sub: "headless CMS" },
      { id: "rum", label: "RUM", sub: "Sentry · Web Vitals" },
    ],
  },
];

const WEB_FLOW = [
  {
    nodes: ["browser", "cdn"],
    t: 0,
    title: "Navigate to /dashboard",
    detail: "Hashed, immutable JS, CSS and images come straight from the CDN edge closest to the user.",
  },
  {
    nodes: ["cdn", "middleware"],
    t: 8,
    title: "Edge middleware",
    detail: "Session cookie and locale resolved at the edge. Unauthenticated users are redirected before any render work.",
  },
  {
    nodes: ["middleware", "ssr", "isr"],
    t: 15,
    title: "Server render",
    detail: "Static shell served from the ISR cache; personalised parts render on the server and stream in with Suspense.",
  },
  {
    nodes: ["ssr", "bff"],
    t: 21,
    title: "One round-trip to the BFF",
    detail: "Server components ask the BFF for exactly the data the page needs, in parallel, not five chatty calls.",
  },
  {
    nodes: ["bff", "users", "content"],
    t: 30,
    title: "Fan-out + aggregate",
    detail: "The BFF fans out to backend APIs, merges and trims the payload, and hides internal service boundaries.",
  },
  {
    nodes: ["ssr", "browser"],
    t: 120,
    title: "Stream HTML + hydrate",
    detail: "First paint in milliseconds, then selective hydration. Only interactive islands ship JavaScript.",
  },
  {
    nodes: ["browser", "bff", "users"],
    t: 1600,
    title: "Optimistic update",
    detail: "User edits apply instantly via React Query; the mutation confirms in the background and rolls back on error.",
  },
  {
    nodes: ["browser", "rum"],
    t: 1650,
    title: "Measure real users",
    detail: "LCP, INP and CLS reported from real sessions, so performance budgets are enforced with data, not guesses.",
  },
];

// The scenarios the Architecture section can replay. `note` explains where the
// time in the trace goes.
export const ARCH_SCENARIOS = [
  {
    id: "api",
    label: "API platform",
    trace: "GET /v1/orders",
    layers: API_LAYERS,
    flow: API_FLOW,
    note: "Reads finish in tens of milliseconds because the slow work never sits on the request path.",
  },
  {
    id: "payments",
    label: "Payments",
    trace: "payment.collect",
    layers: PAYMENT_LAYERS,
    flow: PAYMENT_FLOW,
    note: "Dominated by the telco round-trip. That is why everything around it is asynchronous.",
  },
  {
    id: "web",
    label: "Web frontend",
    trace: "GET /dashboard",
    layers: WEB_LAYERS,
    flow: WEB_FLOW,
    note: "Users see content almost immediately; the rest of the work streams in or happens optimistically.",
  },
];

// Engineering patterns — the trade-offs I reach for, and why.
export const PATTERNS = [
  {
    icon: "fas fa-fingerprint",
    title: "Idempotency by design",
    body: "Every money-moving endpoint is safe to retry. Keys at the edge, idempotent consumers downstream: at-least-once delivery never means paying twice.",
  },
  {
    icon: "fas fa-arrow-right-arrow-left",
    title: "Sagas over distributed locks",
    body: "Long-running workflows run as orchestrated sagas with explicit compensations, keeping services autonomous and failures recoverable.",
  },
  {
    icon: "fas fa-inbox",
    title: "Transactional outbox",
    body: "State changes and their events commit atomically, eliminating the classic dual-write bug between the database and the broker.",
  },
  {
    icon: "fas fa-bolt",
    title: "Resilience at the boundaries",
    body: "Circuit breakers, bulkheads, timeouts and dead-letter queues around every third-party integration. One flaky provider never takes the platform down.",
  },
  {
    icon: "fas fa-file-code",
    title: "Contract-first APIs",
    body: "OpenAPI specs before code, explicit versioning, cursor pagination and one error format. Consumers integrate once and stay integrated.",
  },
  {
    icon: "fas fa-layer-group",
    title: "Caching with a plan",
    body: "Cache-aside with TTLs, ETags and deliberate invalidation. Every cache has an owner and a story for when it is wrong.",
  },
  {
    icon: "fas fa-gauge-high",
    title: "Fast, accessible frontends",
    body: "Server rendering, code-splitting and optimistic UI, measured with real-user Core Web Vitals and built to WCAG standards.",
  },
  {
    icon: "fas fa-rocket",
    title: "Boring, reversible deploys",
    body: "Infrastructure as code, GitOps pipelines, rolling and canary releases with fast rollback. Shipping on a Friday should be a non-event.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Observability first",
    body: "SLOs defined before launch, traces across every hop, and alerts on the symptoms users feel, not on noise.",
  },
];

export const EXPERIENCES = [
  {
    id: "spiro",
    title: "Software Engineer",
    company: "Spiro · Africa Smart Mobility Solutions",
    period: "Jun 2025 to Present",
    location: "Nairobi, Kenya",
    summary:
      "Engineering and scaling backend microservices that orchestrate Spiro's payment and customer onboarding operations across Africa.",
    details:
      "Develop, optimize, and horizontally scale Java Spring Boot and Python microservices handling mission-critical payment workflows across multiple African markets. Integrate mobile-money and telecom rails (Safaricom M-Pesa, MTN MoMo, Airtel Money, Togocom T-Money, Moov Money, TNM Mpamba) plus USSD and SMS channels via Africa's Talking, implement secure, idempotent transaction processing, build Kafka-based event-streaming pipelines, and apply Redis caching for low-latency throughput, all deployed via container orchestration on Kubernetes with end-to-end observability.",
    technologies: ["Java", "Spring Boot", "Python", "Kafka", "Redis", "PostgreSQL", "USSD", "Africa's Talking", "Docker", "Kubernetes", "GCP"],
    achievements: [
      "Designed and optimized payment-orchestration services spanning six mobile-money rails across multiple African markets",
      "Built USSD and SMS customer journeys on Africa's Talking for riders without smartphones or data",
      "Engineered idempotent, retry-safe transaction flows so duplicate callbacks and client retries never double-charge",
      "Improved throughput and latency with Redis caching and Kafka event streaming",
      "Operated microservices on Kubernetes with end-to-end tracing, metrics, and alerting",
    ],
  },
  {
    id: "venertech",
    title: "Lead Software Engineer",
    company: "VenerTech Solutions",
    period: "Oct 2024 to May 2025",
    location: "Nairobi, Kenya",
    summary:
      "Led full-stack development, DevOps, and deployment for scalable real-time web applications.",
    details:
      "Owned the full-stack architecture: built scalable web applications with real-time WebSocket functionality, designed intuitive frontends, provisioned and orchestrated cloud infrastructure, and ran the CI/CD pipelines and deployment automation end to end.",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "WebSockets", "Docker", "Kubernetes", "GCP", "AWS"],
    achievements: [
      "Owned the end-to-end software lifecycle",
      "Delivered real-time application features",
      "Managed cloud infrastructure and deployments",
    ],
  },
  {
    id: "roam",
    title: "Software Engineer",
    company: "Roam Electric",
    period: "Jan 2024 to Oct 2024",
    location: "Nairobi, Kenya",
    summary:
      "Built and maintained software for electric-vehicle products across web and mobile.",
    details:
      "Worked across front-end and back-end for web and mobile applications. Implemented features with React.js, React Native, and Express.js, optimized MySQL queries and schemas, and handled container orchestration and deployments on GCP and Kubernetes, shipping iOS and Android apps to their stores.",
    technologies: ["React.js", "React Native", "Express.js", "MySQL", "GCP", "Kubernetes"],
    achievements: [
      "Shipped iOS and Android app releases",
      "Managed cloud infrastructure",
      "Delivered full-stack features",
    ],
  },
  {
    id: "gebeya",
    title: "Software Engineer",
    company: "Gebeya",
    period: "Feb 2021 to Oct 2023",
    location: "Nairobi, Kenya",
    summary:
      "Built cross-platform applications and dynamic websites for clients through Gebeya's pan-African talent network.",
    details:
      "Built cross-platform applications and dynamic websites with Next.js and FastAPI. Collaborated closely with engineers to implement scalable, high-performance features, focusing on clean code, component reusability, and seamless API integration.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "React.js", "TypeScript", "Node.js"],
    achievements: [
      "Delivered scalable applications",
      "Championed clean-code practices",
      "Owned API integrations",
    ],
  },
  {
    id: "freelance",
    title: "Freelance Software Developer",
    company: "Fiverr & Independent",
    period: "Jan 2019 to Oct 2022",
    location: "Remote",
    summary:
      "Delivered custom software solutions and APIs to clients worldwide.",
    details:
      "Built custom applications and APIs, working directly with clients to understand requirements and deliver to spec. Managed projects from inception through deployment with a focus on quality and timely delivery.",
    technologies: ["JavaScript", "React.js", "Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"],
    achievements: [
      "50+ projects delivered",
      "Client requirement analysis",
      "End-to-end project management",
    ],
  },
  {
    id: "techa",
    title: "Software Developer Apprentice",
    company: "TechA",
    period: "Jan 2020 to Jun 2020",
    location: "Remote, Kenya",
    summary:
      "Hands-on exposure to real-world development workflows and collaborative coding.",
    details:
      "A pivotal early role: built and maintained websites and mobile applications with a supportive team while learning version control, task tracking, and agile methodologies.",
    technologies: ["JavaScript", "React.js", "Next.js", "PostgreSQL", "Express.js", "Node.js"],
    achievements: [
      "Built a full-stack foundation",
      "Practiced agile methodologies",
      "Collaborative coding experience",
    ],
  },
];

// ── PROJECTS as case studies ────────────────────────────────────────────────
// Each project follows a problem → approach → outcome narrative — the structure
// recruiters and clients read for seniority.
//
//   metrics: [{ value, label }]  ← THE highest-impact field. Fill these with
//   real numbers and this portfolio jumps from "good" to "senior". Examples:
//   { value: "40%", label: "lower payment latency" }, { value: "10k+", label: "daily transactions" }.
//   Left empty, the Impact block simply hides — nothing fake is ever shown.
export const PROJECTS = [
  {
    id: 1,
    title: "Softnova Lab",
    link: "https://softnova-lab.vercel.app/",
    year: "2024",
    category: "Full Stack",
    role: "Full-Stack Engineer",
    images: ["/assets/softnova1.jpg", "/assets/softnova2.jpg", "/assets/softnova3.jpg"],
    description:
      "A marketing and lead-generation platform for a software services studio, built for fast iteration and a polished first impression.",
    problem:
      "The studio needed a credible, high-converting web presence that could be updated frequently without engineering bottlenecks, while loading fast on mobile across East African networks.",
    approach:
      "Built a server-rendered Next.js front end with Tailwind and Framer Motion for performance and motion, wired a Firebase-backed content and lead pipeline, and added Node.js services for form handling and notifications.",
    outcomes: [
      "Shipped a responsive, SEO-friendly marketing site with sub-second navigation via Next.js routing",
      "Enabled non-engineers to update content and capture leads without code changes",
      "Established a reusable component system that sped up future page builds",
    ],
    metrics: [],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Firebase", "Node.js"],
  },
  {
    id: 2,
    title: "Diva International",
    link: "https://member.divasecretintl.com/backend/register",
    year: "2022",
    category: "Full Stack",
    role: "Full-Stack Engineer",
    images: ["/assets/diva1.jpg", "/assets/diva2.jpg", "/assets/diva3.jpg"],
    description:
      "A referral-and-commerce platform where members earn through referrals and service purchases, with multi-level tracking.",
    problem:
      "The business needed to track a branching referral network and commission payouts accurately and in real time: a data-integrity problem where mistakes directly cost money.",
    approach:
      "Modeled the referral hierarchy and commission rules in PostgreSQL, built the API with Express, and designed member dashboards in React for tracking referrals, earnings, and service orders.",
    outcomes: [
      "Delivered accurate multi-level referral tracking with transactional commission calculations",
      "Built member-facing dashboards for earnings, referrals, and order history",
      "Designed a relational schema that kept payouts consistent under concurrent activity",
    ],
    metrics: [],
    technologies: ["React.js", "Express.js", "PostgreSQL", "Material UI"],
  },
  {
    id: 3,
    title: "Sub County CDF Bursary",
    link: "https://machakoscdf-api.onrender.com/",
    year: "2023",
    category: "Mobile App",
    role: "Mobile & Backend Engineer",
    images: ["/assets/mks1.jpg", "/assets/mks2.jpg", "/assets/mks3.jpg"],
    description:
      "A digital bursary-application system that replaced a paper-based process for students applying for government education funding.",
    problem:
      "Bursary applications were manual and paper-driven, slow for students to submit and hard for officials to review, track, and audit fairly.",
    approach:
      "Built a React Native application backed by a Node/Express API and MongoDB, digitizing the full application lifecycle from submission through review and status tracking.",
    outcomes: [
      "Replaced a paper process with a mobile-first application flow accessible to rural students",
      "Gave officials a structured, auditable review and tracking workflow",
      "Centralized applicant data, removing duplicate and lost-form issues",
    ],
    metrics: [],
    technologies: ["React Native", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 5,
    title: "MotoHub Car Marketplace",
    link: "https://www.motorhub.co.ke/about-us",
    year: "2022",
    category: "Full Stack",
    role: "Full-Stack Engineer",
    images: ["/assets/sell1.jpg", "/assets/sell2.jpg", "/assets/sale3.jpg"],
    description:
      "A two-sided vehicle marketplace connecting buyers and sellers, built on the MERN stack with live inventory.",
    problem:
      "Buyers and sellers needed a trustworthy marketplace with real-time listings, rich vehicle detail, and smooth discovery, without the latency and clutter of existing classifieds.",
    approach:
      "Engineered the platform on the MERN stack with TypeScript, designed and indexed the listing and search data model in MongoDB, and built buyer–seller flows with live inventory updates.",
    outcomes: [
      "Launched a production marketplace handling live vehicle listings and search",
      "Implemented typed, maintainable APIs with TypeScript across the stack",
      "Optimized discovery and filtering with indexed queries to surface relevant listings quickly",
    ],
    metrics: [],
    technologies: ["TypeScript", "Express.js", "MongoDB", "Node.js"],
  },
  {
    id: 8,
    title: "Corporate Sites & DevOps",
    year: "2024",
    category: "DevOps",
    role: "Engineer & DevOps",
    images: ["/assets/corp1.jpg", "/assets/corp2.jpg", "/assets/corp3.jpg"],
    description:
      "Corporate web properties paired with the CI/CD automation that ships them safely and repeatably.",
    problem:
      "Manual deployments were slow and error-prone, and the company's web presence needed a modern, responsive refresh without ongoing release friction.",
    approach:
      "Rebuilt the sites with a modern responsive front end and stood up automated CI/CD pipelines on GCP with GitLab CI, orchestrating containerized builds and deployments into a one-click, repeatable release process.",
    outcomes: [
      "Automated build-and-deploy pipelines with deployment orchestration, removing manual release steps",
      "Delivered a modern, responsive redesign of the company's web presence",
      "Made releases repeatable and low-risk through CI/CD automation on GCP",
    ],
    metrics: [],
    technologies: ["JavaScript", "GCP", "GitLab CI", "DevOps", "CI/CD"],
  },
  {
    id: 9,
    title: "Mobile App Delivery",
    year: "2024",
    category: "Mobile App",
    role: "Mobile Engineer",
    images: ["/assets/app2.jpg", "/assets/app3.jpg", "/assets/app4.jpg"],
    description:
      "A customer-engagement mobile app taken from rapid prototype to live store releases on both platforms.",
    problem:
      "The team needed to validate a customer-engagement product quickly, then ship it to real users on both the Play Store and App Store with proper release pipelines.",
    approach:
      "Used Google AppSheet for rapid prototyping to validate the concept, then built and deployed the React Native app, owning the store-submission process on GCP, Play Console, and App Store Connect.",
    outcomes: [
      "Validated the product fast with AppSheet before committing to full build",
      "Shipped to production on both the Google Play Store and Apple App Store",
      "Owned the release and store-review process end to end",
    ],
    metrics: [],
    technologies: ["React Native", "AppSheet", "GCP", "Play Console", "App Store"],
  },
  {
    id: 6,
    title: "Gaming Analyzer",
    link: "https://efootball.onrender.com/",
    year: "2021",
    category: "Full Stack",
    role: "Full-Stack Engineer",
    images: ["/assets/ef3.jpg", "/assets/ef2.jpg", "/assets/ef1.jpg"],
    description:
      "A tournament platform for eFootball communities that automates fixtures, results, and standings.",
    problem:
      "Community organizers were running tournaments by hand: generating fixtures, tracking results, and computing standings manually, which was tedious and error-prone.",
    approach:
      "Built a MERN application that automates fixture generation, result entry, and standings calculation, with a live content feed for the community.",
    outcomes: [
      "Automated fixture generation and standings, eliminating manual bracket-keeping",
      "Gave organizers a single place to run tournaments end to end",
      "Built an engaged community feature set around live content",
    ],
    metrics: [],
    technologies: ["React.js", "Express.js", "MongoDB", "Material UI"],
  },
  {
    id: 4,
    title: "Developer Portfolio",
    link: "https://charles-dev-portfolio.onrender.com/",
    year: "2024",
    category: "Frontend",
    role: "Frontend Engineer",
    images: ["/assets/port1.jpg", "/assets/port2.jpg", "/assets/port3.jpg"],
    description:
      "A responsive personal portfolio focused on performance, motion, and a content-first design.",
    problem:
      "Needed a fast, polished personal site that presents work clearly and reflects a senior engineering standard rather than a templated look.",
    approach:
      "Built a responsive React app with a design-token system, Framer Motion for tasteful motion, and a content-first layout optimized for clarity.",
    outcomes: [
      "Delivered a fast, fully responsive single-page experience",
      "Established a reusable design-token system for consistent styling",
      "Prioritized accessibility and content hierarchy over decoration",
    ],
    metrics: [],
    technologies: ["React.js", "Framer Motion", "CSS", "Ant Design"],
  },
];

export const EMAILJS_CONFIG = {
  serviceId: "service_po3tnt8",
  templateId: "template_tvbbtge",
  publicKey: "BF88A9DW6wlliviAo",
};
