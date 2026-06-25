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
  { value: "5+", label: "Years building software" },
  { value: "8", label: "Teams & companies" },
  { value: "50+", label: "Projects shipped" },
];

// Skills grouped into categories — presented as tags, not arbitrary percentages.
export const SKILL_GROUPS = [
  {
    title: "Backend & APIs",
    icon: "fas fa-server",
    skills: ["Java", "Spring Boot", "Node.js", "Python", "Express", "GraphQL", "REST APIs"],
  },
  {
    title: "Architecture & Messaging",
    icon: "fas fa-diagram-project",
    skills: ["Microservices", "Event-Driven", "Apache Kafka", "AWS SQS", "WebSockets", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: "fas fa-cloud",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions", "GitLab CI"],
  },
  {
    title: "Data & Storage",
    icon: "fas fa-database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
  },
  {
    title: "Frontend & Mobile",
    icon: "fas fa-code",
    skills: ["React", "Next.js", "TypeScript", "React Native", "Flutter"],
  },
  {
    title: "Observability",
    icon: "fas fa-wave-square",
    skills: ["Grafana", "Prometheus", "Loki", "Sentry", "OpenTelemetry"],
  },
];

export const EXPERIENCES = [
  {
    id: "spiro",
    title: "Software Engineer",
    company: "Spiro — Africa Smart Mobility Solutions",
    period: "Jun 2025 — Present",
    location: "Nairobi, Kenya",
    summary:
      "Engineering and scaling backend microservices that orchestrate Spiro's payment and customer onboarding operations across Africa.",
    details:
      "Develop, optimize, and horizontally scale Java Spring Boot and Python microservices handling mission-critical payment workflows across multiple African markets. Integrate with telecom operators (MTN Rwanda, Safaricom, Airtel Uganda), implement secure, idempotent transaction processing, build Kafka-based event-streaming pipelines, and apply Redis caching for low-latency throughput — all deployed via container orchestration on Kubernetes with end-to-end observability.",
    technologies: ["Java", "Spring Boot", "Python", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes", "GCP"],
    achievements: [
      "Implemented and optimized payment-integration services across multiple African markets",
      "Improved throughput and latency with Redis caching and Kafka event streaming",
      "Operated microservices via Kubernetes orchestration for onboarding, payments, and internal platforms",
    ],
  },
  {
    id: "venertech",
    title: "Lead Software Engineer",
    company: "VenerTech Solutions",
    period: "Oct 2024 — May 2025",
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
    period: "Jan 2024 — Oct 2024",
    location: "Nairobi, Kenya",
    summary:
      "Built and maintained software for electric-vehicle products across web and mobile.",
    details:
      "Worked across front-end and back-end for web and mobile applications. Implemented features with React.js, React Native, and Express.js, optimized MySQL queries and schemas, and handled container orchestration and deployments on GCP and Kubernetes — shipping iOS and Android apps to their stores.",
    technologies: ["React.js", "React Native", "Express.js", "MySQL", "GCP", "Kubernetes"],
    achievements: [
      "Shipped iOS and Android app releases",
      "Managed cloud infrastructure",
      "Delivered full-stack features",
    ],
  },
  {
    id: "andela",
    title: "Software Engineer",
    company: "Andela",
    period: "Feb 2021 — Oct 2023",
    location: "Nairobi, Kenya",
    summary:
      "Built cross-platform applications and dynamic websites for global clients.",
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
    period: "Jan 2019 — Oct 2022",
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
    period: "Jan 2020 — Jun 2020",
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
      "The business needed to track a branching referral network and commission payouts accurately and in real time — a data-integrity problem where mistakes directly cost money.",
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
      "Bursary applications were manual and paper-driven — slow for students to submit and hard for officials to review, track, and audit fairly.",
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
    title: "MotoHub — Car Marketplace",
    link: "https://www.motorhub.co.ke/about-us",
    year: "2022",
    category: "Full Stack",
    role: "Full-Stack Engineer",
    images: ["/assets/sell1.jpg", "/assets/sell2.jpg", "/assets/sale3.jpg"],
    description:
      "A two-sided vehicle marketplace connecting buyers and sellers, built on the MERN stack with live inventory.",
    problem:
      "Buyers and sellers needed a trustworthy marketplace with real-time listings, rich vehicle detail, and smooth discovery — without the latency and clutter of existing classifieds.",
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
      "Rebuilt the sites with a modern responsive front end and stood up automated CI/CD pipelines on GCP with GitLab CI — orchestrating containerized builds and deployments into a one-click, repeatable release process.",
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
      "Community organizers were running tournaments by hand — generating fixtures, tracking results, and computing standings manually, which was tedious and error-prone.",
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
