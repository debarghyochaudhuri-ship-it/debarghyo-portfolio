export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  impactPlaceholder: string;
  tags: string[];
  imageSrc: string;
  badgeLabel?: string;
  cardColor: {
    bg: string;
    border: string;
    accent: string;
    glow: string;
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  companyPlaceholder: string;
  location: string;
  summary: string;
  highlights: string[];
  statusLabel?: string;
}

export interface ToolItem {
  name: string;
  category: string;
  note: string;
}

export const PORTFOLIO_CONTENT = {
  profile: {
    name: "Debarghya",
    role: "Product Designer",
    availability: "Available for Work",
    headlineMain: "Transforming systemic complexity into",
    headlineAccent: "intuitive, human product experiences.",
    elevatorPitch:
      "Product Designer shaping enterprise platforms, AI-assisted workflows, and B2B SaaS. I align multi-sided user requirements with rigorous interaction design, scalable design systems, and rapid prototyping.",
    pitchPlaceholderNotice: "[Elevator pitch sample text — editable once verified bio is provided]",
  },

  process: {
    eyebrow: "01 / METHODOLOGY",
    title: "AI-Augmented Product Design Process",
    subtitle:
      "A structured 4-phase design framework combining human-centered research with AI-accelerated synthesis and rapid high-fidelity iteration.",
    phases: [
      {
        step: "01",
        title: "Frame & Discover",
        description:
          "User interviews, workflow mapping, and qualitative telemetry clustering using LLMs to unpack dense domain bottlenecks.",
        artifact: "Affinity Maps & Jobs-to-be-Done",
      },
      {
        step: "02",
        title: "Synthesize & Model",
        description:
          "Translating complex edge cases into role-based information architecture, interaction states, and system flows.",
        artifact: "Multi-Role Service Blueprints",
      },
      {
        step: "03",
        title: "Prototype & Test",
        description:
          "Building production-aligned interactive Figma prototypes with variables and real tokens to test with cross-functional users.",
        artifact: "High-Fidelity Usability Trials",
      },
      {
        step: "04",
        title: "Deliver & Measure",
        description:
          "Partnering with engineering through tokenized design systems, component specs, and post-release validation loops.",
        artifact: "Design System Specs & Telemetry",
      },
    ],
  },

  projects: [
    {
      id: "project-1",
      number: "01",
      title: "Export Comments",
      tagline: "Bridging the workflow gap between feedback visibility and design execution.",
      problem: "[Placeholder problem statement: Workflow friction in organizing, triaging, and addressing cross-functional review notes inside the native design canvas.]",
      solution: "[Placeholder solution: A task-driven review interface bringing structured action items, resolved states, and contextual anchors directly into the workspace.]",
      impactPlaceholder: "[Verified impact metric placeholder: Specific adoption rates and qualitative team feedback to be updated upon confirmation]",
      tags: ["Productivity Tooling", "Design System", "Figma Plugin", "B2B SaaS"],
      imageSrc: "/projects/export-comments.png",
      badgeLabel: "Featured Project · Relaunch",
      cardColor: {
        bg: "from-[#141226] via-[#100f1c] to-[#0a0a10]",
        border: "border-indigo-500/30",
        accent: "text-indigo-400",
        glow: "rgba(99, 102, 241, 0.2)",
      },
    },
    {
      id: "project-2",
      number: "02",
      title: "Aclis Customer Sentiment Intelligence",
      tagline: "Transforming multi-source feedback streams into unified executive decision intelligence.",
      problem: "[Placeholder problem: Feedback scattered across app stores, Trustpilot, and reviews without unified sentiment synthesis.]",
      solution: "[Placeholder solution: Multi-channel sentiment scoring, comparative trend timelines, and source-level drilldowns.]",
      impactPlaceholder: "[Metric placeholder: Quantified decision cycle improvements to be provided]",
      tags: ["Enterprise AI", "Analytics", "Data Intelligence", "B2B SaaS"],
      imageSrc: "/projects/aclis.png",
      badgeLabel: "Data Intelligence",
      cardColor: {
        bg: "from-[#0f1f1d] via-[#0d1716] to-[#0a0e0d]",
        border: "border-emerald-500/30",
        accent: "text-emerald-400",
        glow: "rgba(16, 185, 129, 0.2)",
      },
    },
    {
      id: "project-3",
      number: "03",
      title: "EMI World Pro Retail Reach",
      tagline: "A queue buster checkout solution and outreach expansion platform for brands and retailers.",
      problem: "[Placeholder problem: Physical retail checkout bottlenecks causing drop-offs during high-footfall cycles.]",
      solution: "[Placeholder solution: Direct-to-consumer mobile checkout expanding brand outreach across distributed retail tiers.]",
      impactPlaceholder: "[Metric placeholder: Projected multi-city consumer volume to be confirmed upon rollout]",
      tags: ["Fintech", "Checkout UX", "Retail Systems", "Mobile"],
      imageSrc: "/projects/emi-world-pro.png",
      badgeLabel: "Fintech Platform",
      cardColor: {
        bg: "from-[#221814] via-[#19120f] to-[#0d0a08]",
        border: "border-amber-500/30",
        accent: "text-amber-400",
        glow: "rgba(245, 158, 11, 0.2)",
      },
    },
    {
      id: "project-4",
      number: "04",
      title: "Mobile App Comparison Architecture",
      tagline: "Reducing booking drop-offs by enhancing comparative decision speed and traveler clarity.",
      problem: "[Placeholder problem: Cognitive fatigue from comparing multiple listings with subtle amenity and fee differences.]",
      solution: "[Placeholder solution: Side-by-side comparison drawer with structured amenity parity and transparent pricing breakdown.]",
      impactPlaceholder: "[Metric placeholder: Conversion lift and comparison completion benchmarks to be added]",
      tags: ["Mobile UX", "E-Commerce", "Heuristic Redesign", "Interaction"],
      imageSrc: "/projects/airbnb.png",
      badgeLabel: "Consumer Experience",
      cardColor: {
        bg: "from-[#24131b] via-[#190e13] to-[#0e080b]",
        border: "border-rose-500/30",
        accent: "text-rose-400",
        glow: "rgba(244, 63, 94, 0.2)",
      },
    },
    {
      id: "project-5",
      number: "05",
      title: "Saathi Navigation & Safety Companion",
      tagline: "Empowering women to navigate cities with confidence through rapid emergency response interaction.",
      problem: "[Placeholder problem: High anxiety and latency in accessing trusted assistance when navigating high-risk routes.]",
      solution: "[Placeholder solution: One-tap thumb-reachable SOS trigger, persistent location broadcasting, and safe landmarks map.]",
      impactPlaceholder: "[Metric placeholder: Emergency task completion duration and qualitative safety feedback to be added]",
      tags: ["Social Impact", "Mobile App", "Accessibility", "Safety Systems"],
      imageSrc: "/projects/saathi.png",
      badgeLabel: "Social Impact UX",
      cardColor: {
        bg: "from-[#1d1428] via-[#150e1f] to-[#0b0811]",
        border: "border-purple-500/30",
        accent: "text-purple-400",
        glow: "rgba(168, 85, 247, 0.2)",
      },
    },
    {
      id: "project-6",
      number: "06",
      title: "Scrumboard Agile Communication Tool",
      tagline: "Consolidating sprint ceremony notes, live meeting timers, and blocker tracking in one canvas.",
      problem: "[Placeholder problem: Disjointed ceremonies with sprint notes and blockers scattered across call and issue trackers.]",
      solution: "[Placeholder solution: Unified meeting workspace integrating live sprint timer, shared scratchpad, and blocker alerts.]",
      impactPlaceholder: "[Metric placeholder: Meeting overhead reduction benchmarks to be provided]",
      tags: ["Productivity", "B2B SaaS", "Agile Workflows", "Multiplayer UI"],
      imageSrc: "/projects/scrumboard.png",
      badgeLabel: "Collaboration Tooling",
      cardColor: {
        bg: "from-[#111926] via-[#0d131d] to-[#070b10]",
        border: "border-sky-500/30",
        accent: "text-sky-400",
        glow: "rgba(14, 165, 233, 0.2)",
      },
    },
    {
      id: "project-7",
      number: "07",
      title: "WellnessSync Personal Health Platform",
      tagline: "Transforming dense telemetry clutter into clear, actionable daily wellness habits.",
      problem: "[Placeholder problem: Fragmented biometric streams overwhelming users seeking quick daily habit feedback.]",
      solution: "[Placeholder solution: Clean data visualization cards grouping steps, recovery scores, and encouraging daily rings.]",
      impactPlaceholder: "[Metric placeholder: 30-day habit retention telemetry to be provided]",
      tags: ["HealthTech", "Data Visualization", "Mobile UX", "Habit Loops"],
      imageSrc: "/projects/wellness-app.png",
      badgeLabel: "Health & Wearables",
      cardColor: {
        bg: "from-[#12201b] via-[#0e1814] to-[#070c0a]",
        border: "border-teal-500/30",
        accent: "text-teal-400",
        glow: "rgba(20, 184, 166, 0.2)",
      },
    },
  ] as ProjectItem[],

  experience: [
    {
      period: "2025 – Present [Placeholder Dates]",
      role: "Product Designer [Sample Entry]",
      companyPlaceholder: "[Company / Studio Name Placeholder]",
      location: "[City / Remote]",
      statusLabel: "Current",
      summary:
        "Sample entry: Leading end-to-end UX for zero-to-one SaaS products, conducting generative user research, and architecting multi-tenant web application design systems.",
      highlights: [
        "[Sample achievement: Collaborated with cross-functional PM and engineering leads to prototype critical product epics]",
        "[Sample achievement: Built component library with variables and semantic tokens in Figma]",
      ],
    },
    {
      period: "2022 – 2024 [Placeholder Dates]",
      role: "UX Designer [Sample Entry]",
      companyPlaceholder: "[Technology Enterprise / Agency Placeholder]",
      location: "[City / Hybrid]",
      summary:
        "Sample entry: Designed role-based workflows for enterprise platforms, unifying complex on-premises and cloud telemetry into centralized monitoring dashboards.",
      highlights: [
        "[Sample achievement: Restructured complex information architecture to reduce administrative task completion time]",
        "[Sample achievement: Integrated AI-assisted task recommendations with human-in-the-loop validation]",
      ],
    },
    {
      period: "2020 – 2022 [Placeholder Dates]",
      role: "Associate UX / Interaction Designer [Sample Entry]",
      companyPlaceholder: "[Design Consultancy Placeholder]",
      location: "[City / On-site]",
      summary:
        "Sample entry: Executed user research interviews, wireframed responsive web applications, and delivered high-fidelity design specifications for development handoff.",
      highlights: [
        "[Sample achievement: Facilitated usability testing cohorts to uncover onboarding drop-off bottlenecks]",
        "[Sample achievement: Created wireframes and user journeys across B2B commerce touchpoints]",
      ],
    },
  ] as ExperienceItem[],

  tools: [
    { name: "Figma", category: "Core Design & Variables", note: "Primary UI/UX design, design systems & variables" },
    { name: "FigJam", category: "Ideation & Mapping", note: "Journey mapping, user flows & collaborative workshops" },
    { name: "Miro", category: "Research Synthesis", note: "Affinity mapping & stakeholder alignment diagrams" },
    { name: "Google Stitch", category: "Design Intelligence", note: "AI-assisted design explorations and synthesis" },
    { name: "Claude", category: "Generative Reasoning", note: "Research synthesis, edge-case analysis & UX writing" },
    { name: "ChatGPT", category: "Product Strategy", note: "Requirement formulation & design problem framing" },
  ] as ToolItem[],

  skills: [
    "Enterprise B2B SaaS",
    "Design Systems & Tokens",
    "Information Architecture",
    "Interaction Design",
    "User Journey Mapping",
    "Usability Testing",
    "AI-Assisted Workflow Design",
    "Rapid Prototyping",
    "Data Visualization",
    "Cross-Functional Handoff",
    "Accessibility (WCAG 2.1)",
    "Heuristic Evaluation",
  ],

  contact: {
    eyebrow: "05 / CONNECT",
    title: "Let's build products that matter.",
    subtitle:
      "I am currently open to product design opportunities, enterprise platform challenges, and strategic collaborations.",
    channels: [
      {
        type: "Email",
        displayLabel: "[debarghya.design@placeholder.io — Real email to be added]",
        note: "Preferred channel for recruiter inquiries",
        isPlaceholder: true,
      },
      {
        type: "LinkedIn",
        displayLabel: "linkedin.com/in/debarghyo-chaudhuri-27408790",
        note: "Professional background & endorsements",
        isPlaceholder: false,
      },
      {
        type: "Location",
        displayLabel: "[India · Open to Global, Remote & Hybrid Roles]",
        note: "Timezone flexibility for international teams",
        isPlaceholder: true,
      },
      {
        type: "Phone",
        displayLabel: "[+91 ••••• ••••• — Direct line available upon request]",
        note: "Contact details will be activated once confirmed",
        isPlaceholder: true,
      },
    ],
  },

  credits: {
    description:
      "Crafted with Next.js, Tailwind CSS, Framer Motion, and Figma. Generative coding and architectural assistance credited to Antigravity and Claude.",
  },
};
