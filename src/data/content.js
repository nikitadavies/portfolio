// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  text, links, metrics and projects — no component changes needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Nikita Davies",
  initials: "ND",
  role: "Full-Stack Software Engineer",
  location: "Toronto, Canada",
  email: "ndavies812@gmail.com",
  phone: "+1 (782) 882 6720",
  linkedin: "https://www.linkedin.com/in/nikita-davies",
  github: "https://github.com/nikitadavies",
  resume: "/Nikita_Davies_Resume.pdf",
  photo: "/profile.jpg",
  // 👉 Replace with your deployed URL — the ID card QR code points here.
  siteUrl: "https://nikitadavies.dev",
  workAuth: "Eligible to work in Canada — valid open work permit",
  status: "Open to Full-Stack, Backend & Cloud roles",
};

export const hero = {
  headline: [
    { text: "Engineering products", accent: false },
    { text: "that scale.", accent: true },
    { text: "Building systems", accent: false },
    { text: "that last.", accent: true },
  ],
  subheading: "Full-Stack Software Engineer",
  stack: ["React", "Java", "Spring Boot", "Node.js", "AWS"],
  intro:
    "I'm Nikita Davies, a Full-Stack Engineer with around 5 years of experience building scalable web and mobile applications, distributed systems and cloud-native solutions. From high-traffic consumer platforms to AI-powered developer tools, I enjoy turning complex engineering challenges into reliable products.",
};

// The five differentiators — rendered as animated counters under the hero.
export const stats = [
  { value: 5, suffix: "+", label: "Years Experience", sub: "Web · Mobile · Cloud", icon: "Briefcase" },
  { value: 3, suffix: "M+", label: "Daily Active Users", sub: "B2C marketplace scale", icon: "Users" },
  { value: 30, suffix: "%", label: "Faster Load Times", sub: "Webpack & RN optimization", icon: "Zap" },
  { value: 20, suffix: "%", label: "Accuracy Improvement", sub: "Custom React Native SDK", icon: "Target" },
];

export const about = {
  title: ["Turning ideas", "into impact"],
  summary:
    "I build software the way a product owner thinks about it — from the first wireframe to the last production alert. My work spans React and React Native interfaces, Java/Spring Boot and Node.js services, event-driven systems with Kafka, and cloud infrastructure on AWS and GCP. Lately I've been focused on where engineering is heading: LLM integrations, RAG pipelines and AI-assisted development.",
  pillars: [
    {
      icon: "Layers",
      title: "End-to-end engineering",
      text: "From designing interfaces and APIs to database architecture, cloud deployment and production troubleshooting — I own features across the whole stack.",
      tags: ["React", "Spring Boot", "Node.js", "SQL / NoSQL"],
    },
    {
      icon: "Gauge",
      title: "Performance & scalability",
      text: "Optimizing applications, micro-frontends, reusable component libraries and systems serving millions of users — measured in load times, not adjectives.",
      tags: ["Micro-frontends", "Webpack", "Kafka", "Kubernetes"],
    },
    {
      icon: "Brain",
      title: "AI-driven engineering",
      text: "Hands-on with LLM integrations, LangChain, RAG pipelines, AI-assisted development and automated code review — shipping AI features, not just demos.",
      tags: ["LangChain", "RAG", "Claude API", "OpenAI"],
    },
  ],
  positioning: [
    { label: "I build products", text: "React · React Native · Java · Node.js · Spring Boot" },
    { label: "I build systems that scale", text: "Microservices · Kafka · Cloud architecture · Kubernetes · CI/CD" },
    { label: "I build for what's next", text: "GenAI · LLM integration · RAG · AI-assisted development" },
  ],
};

// Interactive technology dashboard. `level` drives the proficiency bar (0–100).
export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend & Mobile",
    icon: "Smartphone",
    blurb: "Production-grade, accessible UIs and design systems used across multiple products.",
    skills: [
      { name: "React", icon: "SiReact", level: 95 },
      { name: "TypeScript", icon: "SiTypescript", level: 92 },
      { name: "React Native", icon: "SiReact", level: 88 },
      { name: "Redux", icon: "SiRedux", level: 85 },
      { name: "GraphQL / Apollo", icon: "SiApollographql", level: 82 },
      { name: "Tailwind / SCSS", icon: "SiTailwindcss", level: 90 },
      { name: "Webpack", icon: "SiWebpack", level: 85 },
      { name: "Micro-frontends", icon: "Layers", level: 84 },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    icon: "Server",
    blurb: "Secure, versioned REST and GraphQL services built on Java and Node.js.",
    skills: [
      { name: "Java 17", icon: "FaJava", level: 90 },
      { name: "Spring Boot", icon: "SiSpringboot", level: 90 },
      { name: "Spring Security", icon: "SiSpring", level: 84 },
      { name: "Node.js", icon: "SiNodedotjs", level: 90 },
      { name: "Express.js", icon: "SiExpress", level: 88 },
      { name: "REST & GraphQL", icon: "SiGraphql", level: 90 },
      { name: "Microservices", icon: "Network", level: 86 },
      { name: "Python", icon: "SiPython", level: 80 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "Cloud",
    blurb: "AWS-certified architect deploying cloud-native systems on AWS and GCP.",
    skills: [
      { name: "AWS", icon: "FaAws", level: 90 },
      { name: "GCP", icon: "SiGooglecloud", level: 85 },
      { name: "Docker", icon: "SiDocker", level: 88 },
      { name: "Kubernetes", icon: "SiKubernetes", level: 82 },
      { name: "Terraform", icon: "SiTerraform", level: 78 },
      { name: "Helm", icon: "SiHelm", level: 80 },
      { name: "Argo Workflows", icon: "SiArgo", level: 82 },
      { name: "CI/CD", icon: "SiGithubactions", level: 86 },
    ],
  },
  {
    id: "data",
    label: "Data & Messaging",
    icon: "Database",
    blurb: "Event-driven architecture and the right store for each workload.",
    skills: [
      { name: "Apache Kafka", icon: "SiApachekafka", level: 82 },
      { name: "MySQL", icon: "SiMysql", level: 88 },
      { name: "MongoDB", icon: "SiMongodb", level: 84 },
      { name: "Redis", icon: "SiRedis", level: 82 },
      { name: "DynamoDB", icon: "Database", level: 78 },
      { name: "Firestore", icon: "SiFirebase", level: 80 },
      { name: "SQS / SNS / PubSub", icon: "Workflow", level: 82 },
      { name: "ActiveMQ", icon: "Workflow", level: 76 },
    ],
  },
  {
    id: "ai",
    label: "AI & LLM",
    icon: "Brain",
    blurb: "Shipping LLM-powered features and using AI to ship faster — responsibly.",
    skills: [
      { name: "LangChain", icon: "SiLangchain", level: 84 },
      { name: "RAG Pipelines", icon: "Brain", level: 82 },
      { name: "Claude API", icon: "SiClaude", level: 85 },
      { name: "OpenAI API", icon: "Bot", level: 84 },
      { name: "Prompt Engineering", icon: "Sparkles", level: 86 },
      { name: "GitHub Copilot", icon: "SiGithubcopilot", level: 90 },
      { name: "Dialogflow", icon: "SiGooglecloud", level: 76 },
      { name: "TensorFlow / Keras", icon: "SiTensorflow", level: 72 },
    ],
  },
];

export const experience = [
  {
    role: "Software Developer Co-op",
    company: "Absolute Security",
    location: "Vancouver, BC, Canada",
    period: "Jan 2025 – Sept 2025",
    headline: "Turned a manual, monolithic release process into an automated delivery pipeline.",
    highlights: [
      "Revamped a monolithic waterfall repository into a fully automated CI/CD pipeline using OCI-compliant artifacts and Argo Workflow templates — significantly cutting release cycle time.",
      "Designed a custom Argo Workflow template in Python that detects and cleans up stale ActiveMQ queues, reducing operational overhead.",
      "Migrated Redis from the deprecated Helm stable chart to Bitnami, improving caching stability, security patching and long-term maintainability.",
      "Troubleshot multi-stage CI failures, using AI tooling to speed up root-cause analysis while validating every fix against authoritative sources.",
    ],
    tech: ["Argo Workflows", "OCI", "Python", "Helm", "Redis", "ActiveMQ", "Kubernetes"],
  },
  {
    role: "Software Engineer",
    company: "KeyValue Software Systems",
    location: "Kochi, India",
    period: "July 2020 – July 2023",
    headline: "Shipped web and mobile products at consumer scale — 3M+ daily active users.",
    highlights: [
      "Architected Webpack configs for micro-frontends (code splitting, tree shaking, bundle optimization) — cutting load times by 30% on a B2C marketplace serving 3M+ DAU.",
      "Optimized the marketplace's React Native app (Android & iOS) with GraphQL/Apollo Client, delivering another 30% load-time reduction.",
      "Built a custom React Native SDK with native Android modules for image-blur detection and PDF conversion — improving accuracy by 20%.",
      "Built Node.js/Express and Java Spring Boot microservices with JWT/OAuth2, RBAC and versioned API contracts, following OWASP practices.",
      "Led frontend for auth, user and team management modules (React, TypeScript, Redux, Tailwind) with full unit and integration test coverage.",
      "Designed a reusable React/TypeScript component library and design system adopted across multiple products.",
    ],
    tech: ["React", "React Native", "TypeScript", "Node.js", "Spring Boot", "GraphQL", "Webpack", "Redux"],
  },
];

// Expandable case studies. Add screenshots to /public/projects and list them in `images`.
export const projects = [
  {
    id: "code-review",
    icon: "FileCode2",
    title: "AI-Powered Code Review Assistant",
    tagline: "LLM-powered PR reviews grounded in your team's own coding standards.",
    category: "GenAI",
    stack: ["Python", "LangChain", "Claude API", "RAG", "Spring Boot", "React"],
    problem:
      "Manual code reviews are slow and inconsistent, and generic AI reviewers don't know a team's conventions — so their suggestions get ignored.",
    solution:
      "Built a review assistant on the Claude API and LangChain that analyses pull requests, flags security vulnerabilities and gives contextual suggestions. A RAG pipeline with vector embeddings grounds every recommendation in the team's codebase and standards.",
    architecture: ["GitHub PR", "Spring Boot API", "LangChain + RAG", "Vector Store", "Claude API", "React Dashboard"],
    highlights: [
      "Codebase-aware recommendations via Retrieval-Augmented Generation",
      "AI backend exposed as a RESTful Spring Boot microservice",
      "React dashboard to accept / reject suggestions and track review history",
      "Security vulnerability detection alongside style and logic feedback",
    ],
    github: "https://github.com/nikitadavies",
    images: [],
  },
  {
    id: "vacation-home",
    icon: "Home",
    title: "Serverless Multi-Cloud Vacation Home",
    tagline: "A booking platform spanning AWS and GCP — fully serverless.",
    category: "Cloud",
    stack: ["AWS Lambda", "Cognito", "Lex", "GCP Pub/Sub", "Firestore", "CloudFormation"],
    problem:
      "Build a vacation-home platform with bookings, authentication, real-time support chat and analytics — without managing a single server, across two clouds.",
    solution:
      "Used AWS Cognito + Lambda for auth, AWS Lex for a booking chatbot, and GCP Pub/Sub, Cloud Functions and Firestore for real-time chat. SQS/SNS handle notifications; Looker Studio and the Google Natural Language API power analytics.",
    architecture: ["Client", "Cognito / Lambda", "Lex Chatbot", "SQS · SNS", "Pub/Sub · Cloud Functions", "Firestore", "Looker Studio"],
    highlights: [
      "Multi-cloud event flow across AWS and GCP",
      "Infrastructure as Code with CloudFormation and Cloud Deployment Manager",
      "Sentiment analysis on customer feedback with Google NL API",
      "Serverless functions written in Python",
    ],
    github: "https://github.com/nikitadavies",
    images: [],
  },
  {
    id: "gke-cicd",
    icon: "Rocket",
    title: "GCP Kubernetes with CI/CD",
    tagline: "Containerized microservices shipped to GKE through automated pipelines.",
    category: "DevOps",
    stack: ["Docker", "Kubernetes", "GKE", "Terraform", "Cloud Build"],
    problem:
      "Deploy a multi-service cloud application reliably and repeatably, with infrastructure that can be recreated from code.",
    solution:
      "Containerized each service with Docker, built CI/CD pipelines with GCP tooling and deployed to Google Kubernetes Engine. Provisioned infrastructure with Terraform for reproducible environments and reliable inter-service communication.",
    architecture: ["Git Push", "Cloud Build", "Artifact Registry", "Terraform", "GKE Cluster", "Persistent Storage"],
    highlights: [
      "End-to-end automated build → test → deploy",
      "Infrastructure as Code with Terraform",
      "Kubernetes services for efficient microservice communication",
      "Reliable persistent data storage on GKE",
    ],
    github: "https://github.com/nikitadavies",
    images: [],
  },
  {
    id: "signature",
    icon: "ShieldCheck",
    title: "Handwriting & Signature Verification",
    tagline: "Deep-learning system for forgery detection and evidence analysis.",
    category: "ML",
    stack: ["Python", "TensorFlow", "Keras", "CNN"],
    problem:
      "Verifying handwriting and signatures manually is slow and subjective — a problem for forgery detection and forensic evidence analysis.",
    solution:
      "Trained a CNN in Keras/TensorFlow that distinguishes handwritten from printed text and compares handwriting samples using features such as spacing and slant.",
    architecture: ["Image Input", "Preprocessing", "CNN Feature Extraction", "Similarity Scoring", "Verdict"],
    highlights: [
      "Handwritten vs. printed text classification",
      "Feature-based comparison (spacing, slant)",
      "Applications in forgery detection and crime evidence analysis",
    ],
    github: "https://github.com/nikitadavies",
    images: [],
  },
];

export const education = [
  {
    degree: "Master of Applied Computer Science",
    school: "Dalhousie University",
    location: "Halifax, NS, Canada",
    detail: "CGPA 4.25 / 4.3 · Cloud Computing, Cloud Architectures, Serverless Data Processing, Advanced Software Development",
    icon: "GraduationCap",
  },
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Govt. Model Engineering College",
    location: "Kochi, India",
    detail: "Foundations in algorithms, systems and software engineering",
    icon: "GraduationCap",
  },
];

export const certifications = [
  { title: "AWS Certified Solutions Architect – Associate", org: "Amazon Web Services", icon: "FaAws" },
  { title: "MACS In-course Award for Academic Excellence", org: "Dalhousie University", icon: "Trophy" },
];

export const leadership = [
  { title: "Teaching Assistant — Advanced Web Services", org: "Dalhousie University", text: "Mentored graduate students on REST APIs, Spring Boot, Node.js and cloud integration.", icon: "Users2" },
  { title: "Vice-Chairperson, IEEE Computer Society", org: "MEC Student Branch · 2019–20", text: "Led chapter activities and technical events for the student branch.", icon: "BadgeCheck" },
  { title: "Founder & Organizer, TALKS#MEC", org: "Govt. Model Engineering College", text: "Started weekly tech talks where students presented emerging technologies.", icon: "Mic" },
  { title: "Manager, IBeTo 2019", org: "National project competition", text: "Managed a national-level competition for socially relevant engineering projects.", icon: "Award" },
];

export const contact = {
  heading: "Have a challenging engineering problem?",
  accent: "Let's build something impactful.",
  text: "I'm open to Full-Stack, Software, Backend and Cloud engineering roles. Whether you're hiring, collaborating or just want to talk systems and GenAI — my inbox is open.",
  // 👉 Create a free form at https://formspree.io and paste its ID into .env as VITE_FORMSPREE_ID.
  //    Without it, the form falls back to opening the visitor's email client.
  formspreeId: import.meta.env.VITE_FORMSPREE_ID || "",
};
