"use client";

import React, { useState, useEffect } from "react";

interface MetricItem {
  val: string;
  lbl: string | React.ReactNode;
  isNumerical?: boolean;
}

interface QuickReadApproachItem {
  bold: string;
  desc: string;
}

interface Project {
  id: string;
  bigTitle: string;
  category: string;
  goal?: string;
  problem: string;
  solution: string;
  metricsType: "SUCCESS METRICS" | "FEATURE HIGHLIGHTS";
  metrics: MetricItem[];
  caseStudyUrl: string;
  roleTagline: string;
  bgColorClass: string;
  image: string;
  // Quick Read Modal Content
  title: string;
  meta: string;
  role?: string;
  headline: string;
  intro: string;
  challenge: string[];
  approach: QuickReadApproachItem[];
  approachNote?: string;
  outcome?: string[];
  takeaway?: string;
  carouselImages: string[];
}

interface ExperienceItem {
  period: string;
  isCurrent: boolean;
  company: string;
  badge?: string;
  badgeType?: "current" | "edu" | "partner";
  role: string;
  location: string;
  logo: React.ReactNode;
  summary?: string;
  subgroups?: {
    title?: string;
    bullets: (string | React.ReactNode)[];
  }[];
  bullets?: (string | React.ReactNode)[];
  educationHighlight?: {
    logo: React.ReactNode;
    text: React.ReactNode;
  };
}

interface EducationItem {
  institution: string;
  qualification: string;
  period?: string;
  badge?: string;
  logo: React.ReactNode;
}

const projects: Project[] = [
  {
    id: "export-comments",
    bigTitle: "Export Comments",
    category: "Enterprise SaaS · Figma Plugin · Intelligaia",
    problem:
      "Users found the experience confusing, with low adoption and negative feedback. The product lacked a clear USP beyond Figma’s built-in comment features.",
    solution:
      "Redesigned feedback management with task conversion, ownership, AI-assisted suggestions, and analytics.",
    metricsType: "SUCCESS METRICS",
    metrics: [
      { val: "10K+", lbl: "Total downloads", isNumerical: true },
      { val: "+45%", lbl: "Downloads after relaunch", isNumerical: true },
      { val: "30%", lbl: "Positive feedback", isNumerical: true },
    ],
    caseStudyUrl:
      "https://www.figma.com/proto/jz4Q8X7OAOYpq5GK7OMmti/Export-Comment--New-concept?page-id=40000134%3A14808&node-id=40000784-151083&viewport=-38%2C244%2C0.13&t=ZEyNDUmZ71LeBtp2-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=40000784-151083",
    roleTagline: "Enterprise SaaS · Figma Plugin · Intelligaia",
    bgColorClass: "v2-card-bg-carmine",
    image: "/Export comments/Export comments.png",
    title: "Export Comments",
    meta: "Enterprise SaaS · Figma Plugin · Intelligaia",
    headline: "Turning design feedback into actionable work",
    intro:
      "Export Comments is a Figma plugin that helps design teams collect, organise and manage feedback from their Figma files in one place.",
    challenge: [
      "When I took ownership of the product, it was already available on Figma Community, but adoption was lower than expected. Users found the experience unintuitive and struggled to see its value beyond Figma's native commenting features.",
      "Through usability testing, user conversations, surveys and Figma Community feedback, I found that designers didn't need another place to read comments. They needed a better way to act on them.",
    ],
    approach: [
      {
        bold: "Centralised dashboard",
        desc: "An overview of pending, overdue and completed comments.",
      },
      {
        bold: "Actionable tasks",
        desc: "Convert feedback into tasks, assign owners and priorities, and set due dates.",
      },
      {
        bold: "Team analytics",
        desc: "Help managers understand resolution rates, activity and project bottlenecks.",
      },
      {
        bold: "AI-assisted recommendations",
        desc: "Generate suggested tasks and subtasks that users can review, edit, accept or ignore.",
      },
    ],
    approachNote:
      "I worked closely with product managers and developers throughout the redesign and relaunch.",
    outcome: [
      "10K+ total downloads.",
      "Approximately 45% increase in downloads after relaunch.",
      "Approximately 30% increase in positive user feedback.",
    ],
    takeaway:
      "Improving the interface wasn't enough. We needed to rethink the value the product delivered — from simply viewing comments to helping teams turn feedback into action.",
    carouselImages: [
      "/Export comments/Export comments.png",
      "/Export comments/Comments view.png",
      "/Export comments/AI Task conversion.png",
      "/Export comments/Analytics dashboard.png",
    ],
  },
  {
    id: "aclis",
    bigTitle: "Aclis Intelligence",
    category: "Enterprise AI · Data Intelligence · Intelligaia",
    problem:
      "Customer sentiment, pain points, and lifetime value were difficult to interpret across multiple dashboards.",
    solution:
      "Designed sentiment and CLTV dashboards with clear KPIs, trends, and actionable customer insights.",
    metricsType: "FEATURE HIGHLIGHTS",
    metrics: [
      {
        val: "Sentiment Analytics",
        lbl: "Track sentiment, pain points, and regional trends.",
        isNumerical: false,
      },
      {
        val: "CLTV Analytics",
        lbl: "Explore customer lifetime value and insights.",
        isNumerical: false,
      },
    ],
    caseStudyUrl:
      "https://www.figma.com/proto/97IF1CRKM0yWbkNWe1iPoV/ACLIS-5.0?page-id=52398%3A37814&node-id=52626-41034&viewport=-5989%2C2161%2C0.16&t=6Cuad7QfgHKAYX8O-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=52626-41034",
    roleTagline: "Enterprise AI · Data Intelligence · Intelligaia",
    bgColorClass: "v2-card-bg-emerald",
    image: "/Aclis/Aclis.png",
    title: "ACLIS Intelligence",
    meta: "Enterprise AI · Data Intelligence · Intelligaia",
    headline: "Making customer intelligence easier to understand and act on",
    intro:
      "ACLIS is a customer sentiment intelligence platform designed for business leaders and customer experience teams. It brings feedback from surveys, support tickets, social media and online reviews into one place.",
    challenge: [
      "The challenge was helping decision-makers identify recurring customer problems without manually analysing large volumes of feedback.",
    ],
    approach: [
      {
        bold: "Executive-friendly dashboards",
        desc: "Prioritised important metrics and trends, with deeper information available when needed.",
      },
      {
        bold: "Connected insights",
        desc: "Allowed users to explore the actual customer comments behind sentiment trends and recurring topics.",
      },
      {
        bold: "AI-powered intelligence",
        desc: "Grouped customer pain points by department, highlighted severity and suggested possible solutions.",
      },
      {
        bold: "Conversational AI assistant",
        desc: "Enabled users to explore dashboard information and ask questions about their data in natural language.",
      },
    ],
    approachNote:
      "The goal was to move beyond displaying charts and numbers. I wanted to help business leaders understand what customers were saying, why it mattered and where action was needed.",
    carouselImages: [
      "/Aclis/Dashboard.png",
      "/Aclis/CLTV.png",
      "/Aclis/Cohort.png",
      "/Aclis/Competitive analysis.png",
    ],
  },
  {
    id: "airbnb",
    bigTitle: "Airbnb Redesign",
    category: "Mobile UX · Booking Experience",
    problem:
      "Comparing accommodation listings and amenities can make it difficult for travellers to evaluate options confidently before booking.",
    solution:
      "Redesigned the mobile search and comparison experience to make listing details easier to scan, compare, and evaluate before booking.",
    metricsType: "FEATURE HIGHLIGHTS",
    metrics: [
      {
        val: "Faster Comparison",
        lbl: "Evaluate multiple listings more easily.",
        isNumerical: false,
      },
      {
        val: "Clearer Information",
        lbl: "Review key details and amenities with less friction.",
        isNumerical: false,
      },
    ],
    caseStudyUrl:
      "https://www.figma.com/proto/suuPQLn8vK5tEmBk2gu7ER/%3CDebarghyo%3E-%3CG-1103%3E-%3C-Air-BNB%3E?page-id=974%3A6588&node-id=974-8743&viewport=533%2C-84%2C0.1&t=6JxLLZdYWlFkYual-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=974%3A8743",
    roleTagline: "Mobile UX · Booking Experience",
    bgColorClass: "v2-card-bg-ruby",
    image: "/Air bnb/Airbnb.png",
    title: "Airbnb Redesign",
    meta: "Mobile UX · Booking Experience",
    headline: "Making it easier to compare, choose and book with confidence",
    intro:
      "This project explored how the Airbnb mobile booking experience could be made easier to navigate, particularly when users are comparing multiple accommodation options.",
    challenge: [
      "Make important listing information easier to find and understand without overwhelming users.",
    ],
    approach: [
      {
        bold: "Information hierarchy",
        desc: "Make key listing details easier to scan.",
      },
      {
        bold: "Listing comparison",
        desc: "Help users evaluate accommodation options more confidently.",
      },
      {
        bold: "Booking clarity",
        desc: "Improve how amenities, property details and relevant information are presented.",
      },
    ],
    approachNote:
      "The goal was to reduce the effort involved in comparing stays and help users make more confident booking decisions.",
    carouselImages: [
      "/Air bnb/Airbnb.png",
      "/Air bnb/Compare.png",
      "/Air bnb/Map.png",
      "/Air bnb/AI recommendation.png",
    ],
  },
  {
    id: "saathi",
    bigTitle: "Saathi",
    category: "Social Impact · Personal Safety",
    problem:
      "Women travelling alone may feel unsafe and lack a quick, dependable way to share their location or reach trusted contacts when they need assistance.",
    solution:
      "Designed a personal safety companion with one-tap SOS, live location sharing, emergency contacts, and supporting safety features.",
    metricsType: "SUCCESS METRICS",
    metrics: [
      {
        val: "85%",
        lbl: "Enhanced Safety Perception",
        isNumerical: true,
      },
      {
        val: "90%",
        lbl: "Faster Emergency Response",
        isNumerical: true,
      },
      {
        val: "90%",
        lbl: "Increased Confidence",
        isNumerical: true,
      },
    ],
    caseStudyUrl: "https://debarghyochaudhuri.wixstudio.com/saathi",
    roleTagline: "Social Impact · Personal Safety",
    bgColorClass: "v2-card-bg-indigo",
    image: "/Saathi/Saathi.png",
    title: "Saathi",
    meta: "Social Impact · Personal Safety",
    headline: "Making personal safety more accessible when travelling alone",
    intro:
      "Saathi is a women's safety concept designed to help women feel more supported and connected when travelling alone.",
    challenge: [
      "Explore how technology could make it easier to reach trusted contacts and access help when someone feels unsafe.",
    ],
    approach: [
      {
        bold: "One-tap SOS",
        desc: "Quickly initiate an emergency alert.",
      },
      {
        bold: "Live location sharing",
        desc: "Share location with trusted contacts.",
      },
      {
        bold: "Emergency contacts",
        desc: "Make reaching trusted people easier.",
      },
      {
        bold: "AI-powered guidance",
        desc: "Provide supportive safety information when needed.",
      },
    ],
    approachNote:
      "The aim was to create an experience that makes seeking help simpler and gives users greater confidence when travelling.",
    carouselImages: [
      "/Saathi/Home.png",
      "/Saathi/SOS.png",
      "/Saathi/Maps.png",
      "/Saathi/AI assistant.png",
    ],
  },
  {
    id: "scrumboard",
    bigTitle: "Scrumboard Agile Tool",
    category: "B2B Productivity · Agile Workflows",
    problem:
      "Distributed teams need a consistent way to plan sprints, document ceremonies, track attendance, and maintain project history across concurrent projects.",
    solution:
      "Designed a central Scrum workspace for sprint planning, backlog management, meeting notes, attendance, timers, and searchable meeting history.",
    metricsType: "FEATURE HIGHLIGHTS",
    metrics: [
      {
        val: "Sprint Management",
        lbl: "Planning, tracking, and notes in one workspace.",
        isNumerical: false,
      },
      {
        val: "Team Alignment",
        lbl: "Centralised documentation and shared project context.",
        isNumerical: false,
      },
    ],
    caseStudyUrl: "https://debarghyochaudhuri.wixstudio.com/crumboard",
    roleTagline: "B2B Productivity · Agile Workflows",
    bgColorClass: "v2-card-bg-blue",
    image: "/Scrumboard/Scrumboard.png",
    title: "Scrumboard",
    meta: "B2B Productivity · Agile Workflows",
    headline: "Bringing agile team workflows into one workspace",
    intro:
      "Scrumboard is a project management tool designed to help agile teams organise their sprint activities and keep project information accessible.",
    challenge: [
      "Distributed teams often need to manage sprint planning, backlogs, meetings and team updates across different tools. This can make it difficult to maintain a shared understanding of project progress.",
    ],
    approach: [
      {
        bold: "Sprint management",
        desc: "Plan sprints, manage backlogs and track work.",
      },
      {
        bold: "Team collaboration",
        desc: "Maintain meeting notes, attendance and shared project context.",
      },
      {
        bold: "Meeting history",
        desc: "Keep discussions and decisions organised and searchable.",
      },
    ],
    approachNote:
      "The focus was to make everyday agile workflows easier to manage while helping teams stay aligned, even when working across locations.",
    carouselImages: [
      "/Scrumboard/Dashboard.png",
      "/Scrumboard/Scrum notes.png",
      "/Scrumboard/Scrum setup.png",
      "/Scrumboard/Scrumboard.png",
    ],
  },
  {
    id: "wellness",
    bigTitle: "WellnessSync Health App",
    category: "Healthtech · Wellness Tracking",
    problem:
      "Dense activity and health data can make it difficult for users to understand daily progress and recognise meaningful patterns.",
    solution:
      "Redesigned health dashboards with clear activity summaries, progress indicators, and habit-building milestones.",
    metricsType: "FEATURE HIGHLIGHTS",
    metrics: [
      {
        val: "Activity Tracking",
        lbl: "Daily progress at a glance.",
        isNumerical: false,
      },
      {
        val: "Habit Building",
        lbl: "Milestones and insights that support consistent routines.",
        isNumerical: false,
      },
    ],
    caseStudyUrl:
      "https://preview.webflow.com/preview/wellness-app-29d5a9?utm_medium=preview_link&utm_source=designer&utm_content=wellness-app-29d5a9&preview=1ad0ef232f03e2958327e85c60402276&workflow=sitePreview",
    roleTagline: "Healthtech · Wellness Tracking",
    bgColorClass: "v2-card-bg-teal",
    image: "/Wellness app/Wellness app.png",
    title: "WellnessSync",
    meta: "Healthtech · Wellness Tracking",
    headline: "Making health data easier to understand and act on",
    intro:
      "WellnessSync is a health and wellness app redesign focused on making everyday health information easier to understand.",
    challenge: [
      "Users were presented with a lot of activity and health data, but it wasn't always easy to understand their progress or know what to focus on.",
    ],
    approach: [
      {
        bold: "Clear activity summaries",
        desc: "Making important health information easier to scan.",
      },
      {
        bold: "Progress indicators",
        desc: "Helping users understand how they're doing at a glance.",
      },
      {
        bold: "Habit milestones",
        desc: "Making everyday progress more visible and encouraging consistency.",
      },
    ],
    approachNote:
      "The goal was to move away from overwhelming users with numbers and create a more approachable experience that helps them stay connected to their health goals.",
    carouselImages: [
      "/Wellness app/Home.png",
      "/Wellness app/Activity.png",
      "/Wellness app/Workout.png",
      "/Wellness app/Community.png",
    ],
  },
];

const experiences: ExperienceItem[] = [
  {
    period: "March 2025 – Present",
    isCurrent: true,
    company: "Freelance & Professional Development",
    badge: "Current",
    badgeType: "current",
    role: "UX/UI Designer",
    location: "Remote",
    logo: (
      <div style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "14px" }}>
        FP
      </div>
    ),
    bullets: [
      "Freelance UX/UI design for web and small-business clients.",
      "Conduct research, create user flows, and develop high-fidelity prototypes based on client briefs.",
    ],
    educationHighlight: {
      logo: (
        <img
          src="/images/Sunderland.png"
          alt="University of Sunderland Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            background: "#ffffff",
            padding: "3px",
          }}
        />
      ),
      text: (
        <span>
          Concurrently pursuing an MDes in Design at the{" "}
          <strong style={{ color: "#ffffff", fontWeight: 600 }}>University of Sunderland, UK,</strong> from 2026 to 2028.
        </span>
      ),
    },
  },
  {
    period: "October 2021 – October 2024",
    isCurrent: false,
    company: "Intelligaia",
    role: "User Experience Designer",
    location: "Chandigarh",
    logo: (
      <img
        src="/images/Intelligaia.png"
        alt="Intelligaia Logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          background: "#ffffff",
          padding: "4px",
        }}
      />
    ),
    summary:
      "Led end-to-end design for internal products, from problem framing to delivery, aligning user needs with business goals alongside product managers and engineers, while collaborating with external teams on enterprise product solutions.",
    subgroups: [
      {
        title: "Feedback Management Platform Redesign",
        bullets: [
          "Redesigned the platform around a task-driven workflow, increasing downloads by 45% and improving product adoption.",
          "Conducted user interviews, surveys, and usability testing, synthesising findings into actionable design decisions.",
          "Advocated for a workflow-first redesign over feature expansion, aligning stakeholders around the underlying user problem.",
          "Contributed to a 30% increase in positive user feedback.",
        ],
      },
      {
        title: "Enterprise Product Experiences — Cisco & HPE",
        bullets: [
          "Designed a unified enterprise experience bringing together on-premises and cloud data, simplifying complex storage workflows through role-based experiences for administrators and analysts.",
          "Redesigned Cisco's enterprise order management experience by simplifying information architecture, reducing cognitive load, and improving task efficiency through intuitive search, filtering, and content organisation.",
        ],
      },
      {
        title: "AI-Assisted Task Suggestions",
        bullets: [
          "Introduced AI-assisted task suggestions with human-in-the-loop validation to improve efficiency and user trust.",
        ],
      },
    ],
  },
  {
    period: "November 2020 – September 2021",
    isCurrent: false,
    company: "Fortune Agro Net",
    role: "Commission-Based Agent",
    location: "India",
    logo: (
      <img
        src="/images/fortune-agro-net.png"
        alt="Fortune Agro Net Logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          background: "#ffffff",
          padding: "2px",
        }}
      />
    ),
    bullets: [
      "Marketed products directly to customers.",
    ],
  },
  {
    period: "September 2017 – January 2020",
    isCurrent: false,
    company: "Double Negative & Pixel Digital",
    role: "VFX Artist",
    location: "Mumbai",
    logo: (
      <img
        src="/images/DNEG.png"
        alt="DNEG Logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          background: "#0d262a",
        }}
      />
    ),
    bullets: [
      "Delivered visual effects for feature films and series.",
    ],
  },
];

const educationList: EducationItem[] = [
  {
    institution: "University of Sunderland, UK",
    qualification: "Master's in Design (MDes)",
    period: "2026–2028 · In progress",
    badge: "In Progress",
    logo: (
      <img
        src="/images/Sunderland.png"
        alt="University of Sunderland Logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          background: "#ffffff",
          padding: "4px",
        }}
      />
    ),
  },
  {
    institution: "MIT Institute of Design",
    qualification: "PG Programme — Design Thinking and Digital Transformation",
    logo: (
      <div style={{ background: "#1e293b", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#38bdf8", fontWeight: 800, fontSize: "13px" }}>
        MIT
      </div>
    ),
  },
  {
    institution: "Maya Academy of Advanced Cinematic",
    qualification: "Professional Diploma in Animation & VFX",
    logo: (
      <div style={{ background: "#27272a", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fb923c", fontWeight: 800, fontSize: "13px" }}>
        MA
      </div>
    ),
  },
];

const techStacks = [
  { name: "Figma", icon: "❖" },
  { name: "FigJam", icon: "✎" },
  { name: "Claude AI", icon: "⚡" },
  { name: "ChatGPT / OpenAI", icon: "💬" },
  { name: "Google Gemini", icon: "✦" },
  { name: "Miro", icon: "☷" },
  { name: "Figma Make", icon: "⚙" },
  { name: "Google Stitch", icon: "◈" },
  { name: "Lovable", icon: "♡" },
];

const skillsList = [
  "Wireframing & User Flows",
  "Interaction Design",
  "Usability Testing & User Research",
  "Design Systems & Component Libraries",
  "Cross-Functional Collaboration",
  "Data Visualization & Dashboards",
  "Design Thinking",
  "Stakeholder Communication",
  "AI-Assisted Product Design",
];

interface ProcessStep {
  id: string;
  title: string;
  desc: string;
  iconClass: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    id: "understand",
    title: "UNDERSTAND",
    desc: "Define user pain points, business goals, success metrics, and constraints.",
    iconClass: "icon-understand",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    id: "research",
    title: "RESEARCH",
    desc: "Conduct primary and secondary research to uncover user needs and opportunities.",
    iconClass: "icon-research",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
  },
  {
    id: "ideate",
    title: "IDEATE & ALIGN",
    desc: "Brainstorm solutions with designers, PMs, stakeholders, and developers.",
    iconClass: "icon-ideate",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="9" y1="18" x2="15" y2="18"></line>
        <line x1="10" y1="22" x2="14" y2="22"></line>
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
      </svg>
    ),
  },
  {
    id: "design",
    title: "DESIGN & ITERATE",
    desc: "Create and refine designs through continuous collaboration and feedback.",
    iconClass: "icon-design",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
  },
  {
    id: "validate",
    title: "VALIDATE",
    desc: "Use usability testing and A/B testing, where appropriate, to evaluate outcomes against user and business goals.",
    iconClass: "icon-validate",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
  {
    id: "deliver",
    title: "DELIVER & ENSURE QUALITY",
    desc: "Document designs, support development, and verify design parity through QA and demos.",
    iconClass: "icon-deliver",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="m9 15 2 2 4-4"></path>
      </svg>
    ),
  },
];

export default function PortfolioPage() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isFullscreenViewer, setIsFullscreenViewer] = useState<boolean>(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState<boolean>(false);
  const [expandedExpIndex, setExpandedExpIndex] = useState<number | null>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const modalOverlayRef = React.useRef<HTMLDivElement>(null);
  const savedModalScrollRef = React.useRef<number>(0);
  const scrollPosRef = React.useRef<number>(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Smooth video completion and subtle blur transition (zero jerk, silky ease into pause, plays once)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.loop = false;
    video.playbackRate = 1.0;
    video.play().catch(() => {});

    let blurTriggered = false;
    let animId: number;
    let lastAppliedRate = 1.0;

    const checkSettle = () => {
      if (!video) return;

      const duration = video.duration;
      const currentTime = video.currentTime;

      if (duration && !isNaN(duration) && duration > 0) {
        const settleWindow = 2.4;
        const triggerTime = Math.max(0, duration - settleWindow);

        if (currentTime >= triggerTime) {
          if (!blurTriggered) {
            blurTriggered = true;
            video.classList.add("is-settled");
          }

          const progress = Math.min(1, Math.max(0, (currentTime - triggerTime) / settleWindow));
          // Gentle quadratic deceleration curve: 1.0 -> 0.45
          const ease = progress * progress;
          const targetRate = Math.max(0.45, 1.0 - ease * 0.55);

          // Throttle updates to avoid media decoder clock reset thrashing
          if (Math.abs(lastAppliedRate - targetRate) >= 0.02) {
            video.playbackRate = targetRate;
            lastAppliedRate = targetRate;
          }

          // Gentle pause at resting frame while blur completes its final soft ease
          if (currentTime >= duration - 0.08 || progress >= 1) {
            video.pause();
            video.classList.add("is-settled");
            return;
          }
        }
      }

      if (!video.paused && !video.ended) {
        animId = requestAnimationFrame(checkSettle);
      }
    };

    animId = requestAnimationFrame(checkSettle);

    const onPlay = () => {
      animId = requestAnimationFrame(checkSettle);
    };

    const onTimeUpdate = () => {
      checkSettle();
    };

    const onEnded = () => {
      video.pause();
      video.classList.add("is-settled");
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    return () => {
      cancelAnimationFrame(animId);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  // Fold 1 -> Fold 2 camera pan/zoom into desk diary and smooth blur
  useEffect(() => {
    let ticking = false;

    // Direct element refs to avoid re-calculating entire DOM styles on documentElement
    const cameraCanvas = document.querySelector<HTMLElement>(".v2-camera-canvas");
    const blurLayer = document.querySelector<HTMLElement>(".v2-camera-blur-layer");
    const cameraOverlay = document.querySelector<HTMLElement>(".v2-camera-overlay");
    const heroContent = document.querySelector<HTMLElement>(".v2-hero-content");

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Normalize scroll progress over first 700px with smooth cubic easing (no linear jerk)
          const rawProgress = Math.min(1, Math.max(0, scrollY / 700));
          // Smoothstep function: 3*t^2 - 2*t^3 gives an S-curve with zero first derivative at t=0 and t=1
          const smoothProgress = rawProgress * rawProgress * (3 - 2 * rawProgress);

          // Camera scale: smoothly zooms 1.0 -> 3.0x into desk diary
          const scale = 1.0 + smoothProgress * 2.0;
          // Overlay darkening: 0.35 -> 0.72
          const overlay = 0.35 + smoothProgress * 0.37;
          // Blur layer opacity: 0.0 -> 1.0
          const blurOpacity = smoothProgress;
          // Hero text smoothly floats & fades out
          const heroTextOpacity = Math.max(0, 1 - rawProgress * 1.6);
          const heroTextY = -rawProgress * 45;

          // Directly apply transforms and opacities (GPU compositor friendly, 60/120fps smooth)
          if (cameraCanvas) {
            cameraCanvas.style.transform = `scale(${scale.toFixed(4)}) translate3d(0, 0, 0)`;
          }
          if (blurLayer) {
            blurLayer.style.opacity = blurOpacity.toFixed(3);
          }
          if (cameraOverlay) {
            cameraOverlay.style.opacity = overlay.toFixed(3);
          }
          if (heroContent) {
            heroContent.style.opacity = heroTextOpacity.toFixed(3);
            heroContent.style.transform = `translate3d(0, ${heroTextY.toFixed(1)}px, 0)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll-driven progressive stacking, depth fade & parallax for Fold 2 Projects
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const cards = document.querySelectorAll<HTMLElement>(".v2-project-card");
    if (!cards.length) return;

    if (prefersReducedMotion) {
      cards.forEach((card) => {
        card.style.top = "";
        card.style.transform = "";
        card.style.filter = "";
        card.style.opacity = "";
        card.style.borderColor = "";
        card.style.pointerEvents = "auto";
        const titleEl = card.querySelector<HTMLElement>(".v2-project-bigtitle");
        const leftEl = card.querySelector<HTMLElement>(".v2-card-left");
        const mockup = card.querySelector<HTMLElement>(".v2-mockup-wrapper");
        if (titleEl) titleEl.style.opacity = "";
        if (leftEl) {
          const subContent = leftEl.querySelectorAll<HTMLElement>(
            ".v2-project-category-label, .v2-card-section-group, .v2-card-bottom-group"
          );
          subContent.forEach((el) => {
            el.style.opacity = "";
          });
        }
        if (mockup) {
          mockup.style.transform = "";
          mockup.style.opacity = "";
        }
      });
      return;
    }

    let ticking = false;

    const updateStacking = () => {
      const isMobile = window.innerWidth <= 767;
      const isTouchDevice =
        typeof navigator !== "undefined" &&
        (navigator.maxTouchPoints > 0 ||
          Number(((navigator as unknown) as { msMaxTouchPoints?: number }).msMaxTouchPoints || 0) > 0);
      const isTablet =
        !isMobile &&
        (window.innerWidth <= 1024 ||
          (isTouchDevice && window.innerWidth <= 1366) ||
          (window.innerWidth <= 1366 && window.innerHeight <= 920));
      const baseTop = isMobile ? 48 : isTablet ? 54 : 60;
      const stepOffset = isMobile ? 0 : isTablet ? 0 : 50;
      const travelDist = isMobile ? 180 : 250;
      const N = cards.length;

      // 1. Calculate how much each incoming card j has moved upward to overlap card j-1 (p[j] from 0.0 to 1.0)
      const p = new Array(N).fill(0);

      for (let j = 1; j < N; j++) {
        const card = cards[j];
        const rect = card.getBoundingClientRect();
        const targetTop = baseTop + j * stepOffset;
        p[j] = Math.min(
          1.0,
          Math.max(0.0, (targetTop + travelDist - rect.top) / travelDist)
        );
      }

      if (isMobile || isTablet) {
        // Mobile & Tablet: all cards align identically at baseTop.
        // When card k+1 reaches near full overlap (p[k+1] >= 0.98), card k is cleanly hidden
        // so no bottom edge, border, or text peeks out behind the active card.
        cards.forEach((card, k) => {
          card.style.top = `${baseTop}px`;
          const isCovered = k < N - 1 && p[k + 1] >= 0.98;
          card.style.visibility = isCovered ? "hidden" : "visible";
          card.style.opacity = isCovered ? "0" : "1";
          card.style.transform = "none";
          card.style.filter = "none";
          card.style.pointerEvents = isCovered ? "none" : "auto";
          card.style.borderColor = "rgba(255, 255, 255, 0.10)";

          const titleEl = card.querySelector<HTMLElement>(".v2-project-bigtitle");
          const leftEl = card.querySelector<HTMLElement>(".v2-card-left");
          const mockup = card.querySelector<HTMLElement>(".v2-mockup-wrapper");
          if (titleEl) titleEl.style.opacity = isCovered ? "0" : "1";
          if (leftEl) {
            const subContent = leftEl.querySelectorAll<HTMLElement>(
              ".v2-project-category-label, .v2-card-section-group, .v2-card-bottom-group"
            );
            subContent.forEach((el) => {
              el.style.opacity = isCovered ? "0" : "1";
            });
          }
          if (mockup) {
            mockup.style.opacity = isCovered ? "0" : "1";
            mockup.style.transform = "none";
          }
        });
        return;
      } else {
        // Desktop: PRESERVE EXACT EXISTING BEHAVIOUR COMPLETELY
        cards.forEach((card, k) => {
          card.style.top = "";
          let stackDepth = 0;
          for (let j = k + 1; j < N; j++) {
            stackDepth += p[j];
          }

          card.style.visibility = "visible";

          // Refined depth attenuation matching reference image:
          // Headers of all stacked cards remain crisp, legible, and visible
          // - Active card (depth 0): 100% brightness, 100% opacity
          // - 1 card behind (depth 1): ~86% brightness, ~88% opacity
          // - 2 cards behind (depth 2): ~74% brightness, ~76% opacity
          // - 3 cards behind (depth 3): ~62% brightness, ~65% opacity
          // - 4 cards behind (depth 4): ~52% brightness, ~55% opacity
          // - 5 cards behind (depth 5): ~44% brightness, ~48% opacity (clear legible silver-gray)
          let opacity = 1.0;
          let brightness = 1.0;
          let titleOpacity = 1.0;
          let scale = 1.0;

          if (stackDepth <= 0) {
            opacity = 1.0;
            brightness = 1.0;
            titleOpacity = 1.0;
            scale = 1.0;
          } else if (stackDepth <= 1) {
            opacity = 1.0 - stackDepth * 0.12;
            brightness = 1.0 - stackDepth * 0.14;
            titleOpacity = 1.0 - stackDepth * 0.12;
            scale = 1.0 - stackDepth * 0.012;
          } else if (stackDepth <= 2) {
            const d = stackDepth - 1;
            opacity = 0.88 - d * 0.12;
            brightness = 0.86 - d * 0.12;
            titleOpacity = 0.88 - d * 0.12;
            scale = 0.988 - d * 0.012;
          } else if (stackDepth <= 3) {
            const d = stackDepth - 2;
            opacity = 0.76 - d * 0.11;
            brightness = 0.74 - d * 0.12;
            titleOpacity = 0.76 - d * 0.11;
            scale = 0.976 - d * 0.010;
          } else if (stackDepth <= 4) {
            const d = stackDepth - 3;
            opacity = 0.65 - d * 0.10;
            brightness = 0.62 - d * 0.10;
            titleOpacity = 0.65 - d * 0.10;
            scale = 0.966 - d * 0.008;
          } else {
            const d = Math.min(1.0, stackDepth - 4);
            opacity = 0.55 - d * 0.07;
            brightness = 0.52 - d * 0.08;
            titleOpacity = 0.55 - d * 0.07;
            scale = 0.958 - d * 0.006;
          }

          // Keep card background 100% opaque to prevent bleed-through while darkening surface
          card.style.opacity = "1";
          card.style.filter = `brightness(${brightness.toFixed(3)})`;
          card.style.transform = `scale(${scale.toFixed(4)})`;
          card.style.borderColor = `rgba(255, 255, 255, ${(0.12 * Math.max(0.3, opacity)).toFixed(3)})`;

          // Apply progressive text and graphic opacity to inner card content
          const titleEl = card.querySelector<HTMLElement>(".v2-project-bigtitle");
          const leftEl = card.querySelector<HTMLElement>(".v2-card-left");
          const mockup = card.querySelector<HTMLElement>(".v2-mockup-wrapper");
          if (titleEl) titleEl.style.opacity = titleOpacity.toFixed(3);
          if (leftEl) {
            const subContent = leftEl.querySelectorAll<HTMLElement>(
              ".v2-project-category-label, .v2-card-section-group, .v2-card-bottom-group"
            );
            subContent.forEach((el) => {
              el.style.opacity = opacity.toFixed(3);
            });
          }
          if (mockup) {
            mockup.style.opacity = opacity.toFixed(3);
            // Subtle floating parallax for the product mockup inside the card
            const rect = card.getBoundingClientRect();
            const vh = window.innerHeight || 900;
            const cardCenter = rect.top + rect.height / 2;
            const dist = (cardCenter - vh / 2) / vh;
            const offset = Math.max(-20, Math.min(20, dist * -24));
            mockup.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
          }

          // Interactive accessibility: disable clicks on cards buried behind
          card.style.pointerEvents = stackDepth >= 0.85 ? "none" : "auto";
        });
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateStacking();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    updateStacking();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("touchmove", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);



  // Comprehensive background scroll-locking for modals
  useEffect(() => {
    const isModalOpen = activeModalIndex !== null || isAboutModalOpen;

    if (isModalOpen) {
      // Save current scroll position of the background page
      scrollPosRef.current = window.scrollY;

      // Prevent background scrolling and scroll-chaining on html and body
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overscrollBehavior = "none";
      document.body.style.overscrollBehavior = "none";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      // Unlock html and body
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";
      document.body.style.overscrollBehavior = "";
      document.body.style.paddingRight = "";

      // Restore original page scroll position
      if (scrollPosRef.current !== undefined) {
        window.scrollTo(0, scrollPosRef.current);
      }
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";
      document.body.style.overscrollBehavior = "";
      document.body.style.paddingRight = "";
    };
  }, [activeModalIndex, isAboutModalOpen]);

  // Restore Quick Read modal scroll position when returning from full-screen image viewer
  useEffect(() => {
    if (!isFullscreenViewer && savedModalScrollRef.current > 0) {
      const scrollEl = document.getElementById("modalDynamicContent");
      if (scrollEl) {
        scrollEl.scrollTop = savedModalScrollRef.current;
      }
    }
  }, [isFullscreenViewer]);

  // Keyboard navigation & hierarchy
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Hierarchy 1: Full-screen Image Viewer
      if (isFullscreenViewer) {
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          setIsFullscreenViewer(false);
          return;
        }
        if (activeModalIndex !== null) {
          const proj = projects[activeModalIndex];
          if (proj && proj.carouselImages.length > 1) {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              setActiveSlideIndex((prev) =>
                prev > 0 ? prev - 1 : proj.carouselImages.length - 1
              );
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              setActiveSlideIndex((prev) =>
                prev < proj.carouselImages.length - 1 ? prev + 1 : 0
              );
            }
          }
        }
        return;
      }

      // Hierarchy 2: Quick Read or About Modal
      if (e.key === "Escape") {
        e.preventDefault();
        setActiveModalIndex(null);
        setIsAboutModalOpen(false);
        setIsFullscreenViewer(false);
        return;
      }

      // Quick Read arrow keys image navigation
      if (activeModalIndex !== null) {
        const proj = projects[activeModalIndex];
        if (proj && proj.carouselImages.length > 1) {
          if (e.key === "ArrowLeft") {
            setActiveSlideIndex((prev) =>
              prev > 0 ? prev - 1 : proj.carouselImages.length - 1
            );
          } else if (e.key === "ArrowRight") {
            setActiveSlideIndex((prev) =>
              prev < proj.carouselImages.length - 1 ? prev + 1 : 0
            );
          }
        }
      }
    };

    if (activeModalIndex !== null || isAboutModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalIndex, isAboutModalOpen, isFullscreenViewer]);

  // Touch swipe support for mobile image navigation with directional disambiguation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || activeModalIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY !== null ? touchStartY - touchEndY : 0;
    const proj = projects[activeModalIndex];

    if (proj && proj.carouselImages.length > 1) {
      // In Fullscreen mode (State B), any clear horizontal swipe > 35px triggers navigation
      // In Quick Read (State A), ensure horizontal swipe is dominant so vertical content scrolling is smooth
      const isDominantHorizontal = isFullscreenViewer
        ? Math.abs(diffX) > 35
        : Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.35;

      if (isDominantHorizontal) {
        if (diffX > 0) {
          // Swipe left -> next image
          setActiveSlideIndex((prev) =>
            prev < proj.carouselImages.length - 1 ? prev + 1 : 0
          );
        } else {
          // Swipe right -> previous image
          setActiveSlideIndex((prev) =>
            prev > 0 ? prev - 1 : proj.carouselImages.length - 1
          );
        }
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };



  const activeProject =
    activeModalIndex !== null ? projects[activeModalIndex] : null;

  return (
    <>
      {/* Accessible Skip Link */}
      <a href="#work" className="skip-link">
        Skip to selected work
      </a>

      {/* ═══════════ NAVBAR (VERSION 2) ═══════════ */}
      <nav className="navbar" id="navbar" aria-label="Main Navigation">
        <div className="v2-nav-logo">
          DEBARGHYO<span className="slash">/</span>BUILDS
        </div>
        <div className="v2-nav-links">
          <a href="#work" className="v2-nav-item">
            <span className="num">01</span>WORK
          </a>
          <a href="#experience" className="v2-nav-item">
            <span className="num">02</span>EXPERIENCE
          </a>
          <a href="#skills" className="v2-nav-item">
            <span className="num">03</span>SKILLS
          </a>
          <a href="#contact" className="v2-nav-item">
            <span className="num">04</span>CONTACT
          </a>
        </div>
        <div>
          <a href="#contact" className="v2-btn-contact">
            GET IN TOUCH ↗
          </a>
        </div>
      </nav>

      {/* ═══════════ CINEMATIC CAMERA CANVAS (DESK DIARY ZOOM & BLUR) ═══════════ */}
      <div className="v2-camera-canvas-wrapper" aria-hidden="true">
        <div className="v2-camera-canvas">
          <div className="v2-scene-stage">
            <video
              ref={videoRef}
              className="v2-scene-base-video"
              autoPlay
              muted
              playsInline
              poster="/images/hero-cinematic.png"
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              aria-hidden="true"
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
              <img
                src="/images/hero-cinematic.png"
                alt=""
                className="v2-scene-base-img"
                aria-hidden="true"
              />
            </video>
          </div>
        </div>
        <div className="v2-camera-blur-layer" />
        <div className="v2-camera-overlay" />
      </div>

      <main id="main-content">
        {/* ═══════════ HERO (VERSION 2 CINEMATIC EDITORIAL FOLD) ═══════════ */}
        <section className="v2-hero" id="hero" aria-label="Introduction">
          <div className="v2-hero-overlay" aria-hidden="true" />

          <div className="v2-hero-content">
            {/* Status row at top of content group */}
            <div className="v2-status-row">
              <div className="v2-pill-status">
                <span className="dot" aria-hidden="true" />
                AVAILABLE FOR WORK
              </div>
            </div>

            {/* Title, Pitch & CTAs Cohesive Group */}
            <div className="v2-hero-title">
              <h1 className="v2-headline-main">
                Good design is all about solving{" "}
                <span className="v2-headline-accent">user needs</span> and{" "}
                <span className="v2-nowrap"><span className="v2-headline-accent">business problems</span>.</span>
              </h1>

              <p className="v2-hero-bio">
                I design digital products that bring user needs and business goals together by focusing on simplifying complex workflows and creating intuitive experiences.
              </p>

              <div className="v2-actions-row v2-hero-actions">
                <a
                  href="https://drive.google.com/file/d/1zuY2GUiRSBCEYxxKPc02o1fdFl-jTHTh/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-btn-readstudy"
                >
                  View My Resume
                </a>
                <button
                  type="button"
                  className="v2-hero-link-secondary"
                  onClick={() => setIsAboutModalOpen(true)}
                  aria-haspopup="dialog"
                  aria-expanded={isAboutModalOpen}
                >
                  About Me <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Subtle Bottom Scroll Indicator */}
          <a
            href="#work"
            className="v2-hero-scroll-indicator"
            aria-label="Scroll down to see the projects"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("work");
              if (target) {
                const navbar = document.querySelector(".navbar");
                const navHeight = navbar
                  ? navbar.getBoundingClientRect().height
                  : 70;
                const targetY =
                  target.getBoundingClientRect().top +
                  window.scrollY -
                  navHeight;
                window.scrollTo({
                  top: targetY,
                  behavior: "smooth",
                });
              }
            }}
          >
            <span className="v2-scroll-indicator-text">
              Scroll down to see the projects
            </span>
            <span className="v2-scroll-indicator-circle">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="v2-scroll-arrow-svg"
                aria-hidden="true"
              >
                <path
                  d="M3 5.5L7 9.5L11 5.5"
                  stroke="url(#v2HeroScrollArrowGrad)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="v2HeroScrollArrowGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="50%" stopColor="#ff6b35" />
                    <stop offset="100%" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </a>
        </section>

        {/* ═══════════ FOLD 2: DESIGN PROCESS (WHITE) + STACKING PROJECTS (PARALLAX) ═══════════ */}
        <div className="v2-fold2-wrapper" id="work">
          {/* SECTION 2A: DESIGN PROCESS */}
          <section className="v2-process-section" id="process" aria-label="Design Process">
            <div className="v2-process-container">
              <div className="v2-process-section-label">MY DESIGN PROCESS</div>
              <h2 className="v2-process-title">
                From understanding the problem <br />
                <span className="v2-gradient-text">to delivering meaningful solutions.</span>
              </h2>
              <p className="v2-process-subtitle">
                I combine user research, cross-functional collaboration, iterative design, and validation to create experiences that meet user needs and business goals.
              </p>

              {/* Process Step Pill Bar with 6 clean static steps */}
              <div className="v2-process-pillbar" role="list">
                {processSteps.map((step, idx) => (
                  <React.Fragment key={step.id}>
                    <div className="v2-process-step" role="listitem">
                      <div className={`v2-step-icon ${step.iconClass}`} aria-hidden="true">
                        {step.icon}
                      </div>
                      <div className="v2-step-title">{step.title}</div>
                    </div>
                    {idx < processSteps.length - 1 && (
                      <div className="v2-process-arrow" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 2B: SELECTED PROJECTS */}
          <section className="v2-stacking-projects" aria-label="Selected Projects">
            <div className="v2-card-stack">
              {projects.map((project, idx) => (
                <article
                  key={project.id}
                  className={`v2-project-card ${project.bgColorClass}`}
                  id={`project-${project.id}`}
                  style={
                    {
                      zIndex: idx + 10,
                      "--card-index": idx,
                    } as React.CSSProperties
                  }
                >
                  {/* Left Column: Typography, Narrative & Metrics */}
                  <div className="v2-card-left">
                    <div className="v2-card-top-group">
                      <h3 className="v2-project-bigtitle">
                        {project.bigTitle}
                      </h3>

                      <div className="v2-project-category-label">
                        {project.category}
                      </div>

                      <div className="v2-card-section-group">
                        <div className="v2-card-pill">PROBLEM STATEMENT</div>
                        <p className="v2-card-narrative-text">
                          {project.problem}
                        </p>
                      </div>

                      <div className="v2-card-section-group">
                        <div className="v2-card-pill">DESIGN SOLUTION</div>
                        <p className="v2-card-narrative-text">
                          {project.solution}
                        </p>
                      </div>

                      {/* Success Metrics / Feature Highlights */}
                      <div className="v2-card-metrics-section">
                        <div className="v2-card-pill v2-metrics-pill">
                          {project.metricsType}
                        </div>
                        <div className="v2-metrics-row">
                          {project.metrics.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className={`v2-metric-block ${
                                m.isNumerical ? "" : "v2-highlight-block"
                              }`}
                            >
                              <div
                                className={
                                  m.isNumerical
                                    ? "v2-metric-val"
                                    : "v2-highlight-title"
                                }
                              >
                                {m.val}
                              </div>
                              <div
                                className={
                                  m.isNumerical
                                    ? "v2-metric-lbl"
                                    : "v2-highlight-desc"
                                }
                              >
                                {m.lbl}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="v2-card-bottom-group">
                      <div className="v2-actions-row">
                        <a
                          href={project.caseStudyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="v2-btn-readstudy"
                        >
                          Read Case Study ↗
                        </a>
                        <button
                          type="button"
                          className="v2-btn-secondary-action"
                          onClick={() => {
                            setActiveModalIndex(idx);
                            setActiveSlideIndex(0);
                            setIsFullscreenViewer(false);
                          }}
                        >
                          Quick Read
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Floating High-Res Product Mockup */}
                  <div className="v2-card-right">
                    <div className="v2-mockup-wrapper">
                      <img
                        src={project.image}
                        alt={`${project.title} UI screen`}
                        loading="eager"
                      />
                    </div>
                  </div>
                </article>
              ))}
              {/* End-of-stack spacer provides in-flow scroll distance so the final card locks into its sticky stack position */}
              <div className="v2-card-stack-spacer" aria-hidden="true" />
            </div>
          </section>
        </div>

        {/* ═══════════ FOLD 3: FROSTED GLASS EXPERIENCE SECTION ═══════════ */}
        <section
          className="v2-experience-section"
          id="experience"
          aria-label="Professional Experience"
        >
          <div className="v2-experience-header">
            <h2 className="v2-experience-title">
              My <span className="v2-gradient-text">Experience</span>
            </h2>
          </div>

          <div className="v2-experience-card">
            <div className="v2-timeline-list">
              {/* Vertical connecting track */}
              <div className="v2-timeline-track" aria-hidden="true" />

              {experiences.map((exp, idx) => {
                const isExpanded = expandedExpIndex === idx;
                return (
                  <div
                    key={idx}
                    className="v2-timeline-row"
                    onClick={() =>
                      setExpandedExpIndex(isExpanded ? null : idx)
                    }
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setExpandedExpIndex(isExpanded ? null : idx);
                      }
                    }}
                  >
                    {/* Column 1: Date Period */}
                    <div className="v2-tl-date">{exp.period}</div>

                    {/* Column 2: Timeline Node */}
                    <div className="v2-tl-node-container" aria-hidden="true">
                      <div
                        className={`v2-tl-node ${
                          exp.isCurrent ? "active" : ""
                        }`}
                      />
                    </div>

                    {/* Column 3: Company Logo */}
                    <div className="v2-tl-logo" aria-hidden="true">
                      {exp.logo}
                    </div>

                    {/* Column 4: Role, Company, Location & Bullets */}
                    <div className="v2-tl-content">
                      <div className="v2-tl-company-row">
                        <span className="v2-tl-company-name">
                          {exp.company}
                        </span>
                        {exp.badge && (
                          <span
                            className={`v2-tl-badge ${
                              exp.badgeType === "edu" ? "v2-tl-badge-edu" : ""
                            }`}
                          >
                            {exp.badge}
                          </span>
                        )}
                      </div>

                      <div className="v2-tl-role">{exp.role}</div>
                      <div className="v2-tl-location">{exp.location}</div>

                      {/* Expandable Bullet Points & Sub-engagements */}
                      {isExpanded && (
                        <div className="v2-tl-details">
                          {exp.summary && (
                            <p
                              style={{
                                fontFamily: "var(--font-primary)",
                                fontSize: "15px",
                                lineHeight: "1.6",
                                color: "rgba(255, 255, 255, 0.85)",
                                marginBottom: "14px",
                              }}
                            >
                              {exp.summary}
                            </p>
                          )}
                          {exp.subgroups
                            ? exp.subgroups.map((group, gIdx) => (
                                <div
                                  key={gIdx}
                                  style={{
                                    marginTop: gIdx > 0 ? "16px" : "6px",
                                  }}
                                >
                                  {group.title && (
                                    <div
                                      style={{
                                        fontFamily: "var(--font-primary)",
                                        fontSize: "15px",
                                        fontWeight: 600,
                                        color: "#ffffff",
                                        marginBottom: "8px",
                                      }}
                                    >
                                      {group.title}
                                    </div>
                                  )}
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "8px",
                                    }}
                                  >
                                    {group.bullets.map((bullet, bIdx) => (
                                      <div
                                        key={bIdx}
                                        className="v2-tl-bullet"
                                      >
                                        <span>{bullet}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))
                            : exp.bullets &&
                              exp.bullets.map((bullet, bIdx) => (
                                <div key={bIdx} className="v2-tl-bullet">
                                  <span>{bullet}</span>
                                </div>
                              ))}
                          {exp.educationHighlight && (
                            <div className="v2-tl-bullet v2-tl-bullet-with-logo">
                              <div
                                className="v2-tl-bullet-logo"
                                aria-hidden="true"
                              >
                                {exp.educationHighlight.logo}
                              </div>
                              <span>{exp.educationHighlight.text}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Column 5: Expand / Collapse Chevron */}
                    <div className="v2-tl-chevron" aria-hidden="true">
                      {isExpanded ? "∧" : "∨"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ EDUCATION SECTION ═══════════ */}
        <section
          className="v2-experience-section"
          id="education"
          aria-label="Education"
          style={{ paddingTop: "60px" }}
        >
          <div className="v2-experience-header">
            <h2 className="v2-experience-title">
              <span className="v2-gradient-text">Education</span>
            </h2>
          </div>

          <div className="v2-experience-card">
            <div className="v2-timeline-list">
              <div className="v2-timeline-track" aria-hidden="true" />
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="v2-timeline-row"
                  style={{ cursor: "default" }}
                >
                  <div className="v2-tl-date">{edu.period || "Completed"}</div>
                  <div className="v2-tl-node-container" aria-hidden="true">
                    <div
                      className={`v2-tl-node ${
                        edu.period?.includes("progress") ? "active" : ""
                      }`}
                    />
                  </div>
                  <div className="v2-tl-logo" aria-hidden="true">
                    {edu.logo}
                  </div>
                  <div className="v2-tl-content">
                    <div className="v2-tl-company-row">
                      <span className="v2-tl-company-name">
                        {edu.institution}
                      </span>
                      {edu.badge && (
                        <span className="v2-tl-badge v2-tl-badge-edu">
                          {edu.badge}
                        </span>
                      )}
                    </div>
                    <div className="v2-tl-role">{edu.qualification}</div>
                  </div>
                  <div
                    className="v2-tl-chevron"
                    style={{ opacity: 0 }}
                    aria-hidden="true"
                  >
                    •
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FOLD 4: TECH STACKS & SKILLS SECTION ═══════════ */}
        <section
          className="v2-stacks-section"
          id="skills"
          aria-label="Tech Stacks & Skills"
        >
          <div className="v2-stacks-container">
            {/* Part 1: Tech Stacks I have used */}
            <h2 className="v2-stacks-title">
              <span className="v2-gradient-text">Tech Stacks</span> I Have Used
            </h2>
            <div className="v2-tech-strip">
              {techStacks.map((tech, idx) => (
                <div key={idx} className="v2-tech-card">
                  <span className="v2-tech-icon" aria-hidden="true">
                    {tech.icon}
                  </span>
                  <span className="v2-tech-name">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Part 2: Skills Cloud */}
            <h2 className="v2-stacks-title">
              <span className="v2-gradient-text">Skills</span>
            </h2>
            <div className="v2-skills-cloud">
              {skillsList.map((skill, idx) => (
                <div key={idx} className="v2-skill-pill">
                  {skill}
                </div>
              ))}
            </div>

            {/* Part 3: Let's design the future together callout */}
            <div>
              <div className="v2-stacks-callout">
                Let&apos;s design for the future together{" "}
                <span className="v2-sparkle" aria-hidden="true">
                  ✨
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ FOLD 5: CONTACT ME (EXACT SCREENSHOT LAYOUT) ═══════════ */}
        <section
          className="v2-contact-section"
          id="contact"
          aria-label="Contact Information"
        >
          <div className="v2-contact-container">
            {/* Massive Heading */}
            <h2 className="v2-contact-bigtitle">
              <span className="v2-gradient-text">Contact</span> Me.
            </h2>

            {/* Contact Rows List */}
            <div className="v2-contact-list">
              {/* Row 1: Email */}
              <a
                href="mailto:debarghyochaudhuri@gmail.com"
                className="v2-contact-row"
              >
                <div className="v2-contact-left">
                  <div className="v2-contact-circle-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 7L2 7" />
                    </svg>
                  </div>
                  <div className="v2-contact-text">
                    <span className="v2-contact-label">EMAIL ME</span>
                    <span className="v2-contact-val">
                      debarghyochaudhuri@gmail.com
                    </span>
                  </div>
                </div>
                <div className="v2-contact-arrow" aria-hidden="true">
                  ↗
                </div>
              </a>

              {/* Row 2: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/debarghyo-chaudhuri-27408790"
                target="_blank"
                rel="noopener noreferrer"
                className="v2-contact-row"
              >
                <div className="v2-contact-left">
                  <div className="v2-contact-circle-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div className="v2-contact-text">
                    <span className="v2-contact-label">LINKEDIN</span>
                    <span className="v2-contact-val">
                      linkedin.com/in/debarghyo-chaudhuri-27408790
                    </span>
                  </div>
                </div>
                <div className="v2-contact-arrow" aria-hidden="true">
                  ↗
                </div>
              </a>

              {/* Row 3: Call Now */}
              <a href="tel:+919831722816" className="v2-contact-row">
                <div className="v2-contact-left">
                  <div className="v2-contact-circle-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="v2-contact-text">
                    <span className="v2-contact-label">CALL NOW</span>
                    <span className="v2-contact-val">+91 98317 22816</span>
                  </div>
                </div>
                <div className="v2-contact-arrow" aria-hidden="true">
                  ↗
                </div>
              </a>
            </div>

            {/* Statement */}
            <p className="v2-contact-statement">
              Available for ambitious products and interesting problems and
              conversations.
              <span className="v2-ambition-spark" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="v2AmbitionGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFA048" />
                      <stop offset="50%" stopColor="#FF5A1F" />
                      <stop offset="100%" stopColor="#F43F5E" />
                    </linearGradient>
                  </defs>
                  {/* Central 4-point ambition star */}
                  <path
                    d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
                    fill="url(#v2AmbitionGrad)"
                  />
                  {/* Creative insight / dialogue spark nodes */}
                  <circle cx="19.5" cy="4.5" r="2" fill="#FFC278" />
                  <circle cx="4.5" cy="19.5" r="1.5" fill="#FFA048" opacity="0.85" />
                </svg>
              </span>
            </p>

            {/* Imagined by me & Executed with Antigravity */}
            <div className="v2-vibecoded-wrap">
              <div className="v2-vibecoded-line">
                <span>Imagined by me and executed with</span>
                <div className="v2-tool-icons" aria-label="Tools used">
                  {/* Tool: Google Antigravity */}
                  <div
                    className="v2-tool-circle"
                    title="Google Antigravity"
                    aria-label="Google Antigravity"
                  >
                    <img
                      src="/images/antigravity.png"
                      alt="Google Antigravity"
                      style={{
                        width: "20px",
                        height: "20px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="v2-copyright">
                Copyright © 2026 Debarghyo Chaudhuri. All Rights Reserved.
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════ MODAL OVERLAY (QUICK READ & FULLSCREEN VIEWER) ═══════════ */}
      {activeProject && (
        <div
          ref={modalOverlayRef}
          className={`modal-overlay active ${isFullscreenViewer ? "is-fullscreen" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              if (isFullscreenViewer) {
                setIsFullscreenViewer(false);
              } else {
                setActiveModalIndex(null);
              }
            }
          }}
        >
          <div className={`modal-shell ${isFullscreenViewer ? "is-fullscreen" : ""}`}>
            <button
              type="button"
              className="modal-close"
              aria-label={isFullscreenViewer ? "Return to Quick Read" : "Close dialog"}
              title={isFullscreenViewer ? "Return to Quick Read (Esc)" : "Close (Esc)"}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (isFullscreenViewer) {
                  setIsFullscreenViewer(false);
                } else {
                  setActiveModalIndex(null);
                }
              }}
              onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
              }}
              onTouchEnd={(e) => {
                e.stopPropagation();
              }}
            >
              &times;
            </button>

            <div className={`modal ${isFullscreenViewer ? "is-fullscreen" : ""}`}>
              <div id="modalDynamicContent" className="modal-scroll-body">
              {/* TOP CAROUSEL / FULLSCREEN IMAGE VIEWER */}
              <div
                className={`modal-carousel ${
                  activeProject.id === "scrumboard"
                    ? "modal-carousel-scrumboard"
                    : activeProject.id === "export-comments"
                    ? "modal-carousel-export-comments"
                    : ""
                }`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="modal-carousel-track">
                  <img
                    src={
                      activeProject.carouselImages[activeSlideIndex] ||
                      activeProject.image
                    }
                    alt={`${activeProject.title} preview slide ${activeSlideIndex + 1}`}
                    className="modal-carousel-img"
                  />
                </div>

                {/* Expand Button for Full-Screen Mode (State A) */}
                {!isFullscreenViewer && (
                  <button
                    type="button"
                    className="modal-carousel-expand"
                    aria-label="View screenshot in full screen"
                    title="Expand to full screen"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      savedModalScrollRef.current =
                        document.getElementById("modalDynamicContent")?.scrollTop || 0;
                      setIsFullscreenViewer(true);
                    }}
                    onPointerDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onTouchStart={(e) => {
                      e.stopPropagation();
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M9 21H3v-6" />
                      <path d="M21 3l-7 7" />
                      <path d="M3 21l7-7" />
                    </svg>
                  </button>
                )}

                {activeProject.carouselImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="modal-carousel-nav prev"
                      aria-label="Previous screenshot"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const scrollEl = document.getElementById("modalDynamicContent");
                        const curScroll = scrollEl ? scrollEl.scrollTop : 0;
                        setActiveSlideIndex((prev) =>
                          prev > 0
                            ? prev - 1
                            : activeProject.carouselImages.length - 1
                        );
                        if (scrollEl && !isFullscreenViewer) {
                          requestAnimationFrame(() => {
                            if (scrollEl) scrollEl.scrollTop = curScroll;
                          });
                        }
                      }}
                      onPointerDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation();
                      }}
                      onTouchEnd={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="modal-carousel-nav next"
                      aria-label="Next screenshot"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const scrollEl = document.getElementById("modalDynamicContent");
                        const curScroll = scrollEl ? scrollEl.scrollTop : 0;
                        setActiveSlideIndex((prev) =>
                          prev < activeProject.carouselImages.length - 1
                            ? prev + 1
                            : 0
                        );
                        if (scrollEl && !isFullscreenViewer) {
                          requestAnimationFrame(() => {
                            if (scrollEl) scrollEl.scrollTop = curScroll;
                          });
                        }
                      }}
                      onPointerDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation();
                      }}
                      onTouchEnd={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                    <div className="modal-carousel-counter">
                      {String(activeSlideIndex + 1).padStart(2, "0")} /{" "}
                      {String(activeProject.carouselImages.length).padStart(
                        2,
                        "0"
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* QUICK READ CONTENT */}
              <div className="quickread-body">
                <div className="quickread-header">
                  <span className="quickread-meta">{activeProject.meta}</span>
                  <h2 id="modalTitle" className="quickread-title">
                    {activeProject.title}
                  </h2>
                  <div className="quickread-headline">
                    {activeProject.headline}
                  </div>
                  <p className="quickread-intro">{activeProject.intro}</p>
                </div>

                {/* THE CHALLENGE */}
                {activeProject.challenge &&
                  activeProject.challenge.length > 0 && (
                    <div className="modal-section">
                      <div className="modal-section-title">The Challenge</div>
                      {activeProject.challenge.map((paragraph, cIdx) => (
                        <p
                          key={cIdx}
                          className="modal-text"
                          style={cIdx > 0 ? { marginTop: "12px" } : {}}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                {/* MY APPROACH */}
                {activeProject.approach &&
                  activeProject.approach.length > 0 && (
                    <div className="modal-section">
                      <div className="modal-section-title">My Approach</div>
                      <ul className="quickread-list">
                        {activeProject.approach.map((item, aIdx) => (
                          <li key={aIdx}>
                            <strong>{item.bold}:</strong> {item.desc}
                          </li>
                        ))}
                      </ul>
                      {activeProject.approachNote && (
                        <p className="modal-text" style={{ marginTop: "14px" }}>
                          {activeProject.approachNote}
                        </p>
                      )}
                    </div>
                  )}

                {/* THE OUTCOME */}
                {activeProject.outcome && activeProject.outcome.length > 0 && (
                  <div className="modal-section">
                    <div className="modal-section-title">The Outcome</div>
                    <ul className="quickread-list">
                      {activeProject.outcome.map((out, oIdx) => (
                        <li key={oIdx}>{out}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* KEY TAKEAWAY */}
                {activeProject.takeaway && (
                  <div className="modal-section">
                    <div className="modal-section-title">Key takeaway</div>
                    <p className="modal-text">{activeProject.takeaway}</p>
                  </div>
                )}

                {/* BOTTOM CTA */}
                <div className="quickread-bottom-cta">
                  <div className="quickread-cta-text">
                    <h3 className="quickread-cta-heading">
                      Want to explore the full project?
                    </h3>
                    <p className="quickread-cta-sub">
                      Read the complete case study to explore the research,
                      design process and decisions in detail.
                    </p>
                  </div>
                  <a
                    href={activeProject.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v2-btn-readstudy quickread-cta-btn"
                  >
                    Read Full Case Study ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* ═══════════ ABOUT ME EDITORIAL MODAL OVERLAY ═══════════ */}
      {isAboutModalOpen && (
        <div
          className="modal-overlay active"
          role="dialog"
          aria-modal="true"
          aria-labelledby="aboutModalTitle"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsAboutModalOpen(false);
          }}
        >
          <div className="modal-shell modal-shell-about">
            <button
              type="button"
              className="modal-close"
              aria-label="Close About Me dialog"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsAboutModalOpen(false);
              }}
              onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
              }}
              onTouchEnd={(e) => {
                e.stopPropagation();
              }}
            >
              &times;
            </button>

            <div className="modal modal-about">
              <div className="modal-scroll-body about-modal-scroll">
              <div className="about-modal-grid">
              {/* Left Column: Portrait Photograph */}
              <div className="about-modal-photo-col">
                <div className="about-modal-photo-wrapper">
                  <img
                    src="/images/about%20me.png"
                    alt="Debarghyo Chaudhuri"
                    className="about-modal-photo"
                  />
                </div>
              </div>

              {/* Right Column: Editorial About Me Content */}
              <div className="about-modal-content-col">
                <div className="about-modal-label">A LITTLE ABOUT ME</div>
                <h2 id="aboutModalTitle" className="about-modal-title">
                  Designing Experiences That Make a Difference
                </h2>
                <div className="about-modal-body">
                  <p className="about-modal-paragraph">
                    Every design tells a story, and mine began in the world of animation and visual effects.
                  </p>
                  <p className="about-modal-paragraph">
                    I spent three years working as a VFX artist, bringing visual stories to life for films and entertainment projects. That experience taught me how to think visually, pay attention to detail, and turn creative ideas into meaningful experiences. But over time, I realised I wanted to create something people wouldn&apos;t just watch, but actively interact with and use. That&apos;s what led me to UX design.
                  </p>
                  <p className="about-modal-paragraph">
                    Over the past four years, I&apos;ve been working as a UX/Product Designer, designing digital experiences across enterprise SaaS, data intelligence, and AI-powered products. At Intelligaia, I worked on products for enterprise clients including Cisco and HPE, translating complex workflows and business requirements into clear, intuitive experiences.
                  </p>
                  <p className="about-modal-paragraph">
                    One project I&apos;m particularly proud of is Export Comments, a Figma plugin that I helped rethink and relaunch. By understanding user frustrations, refining the experience, and collaborating with the team, we turned a struggling product into a more useful tool that gained over 10K downloads.
                  </p>
                  <p className="about-modal-paragraph">
                    My approach to design starts with understanding people and the problems they face. I enjoy working through ambiguity, connecting user needs with business goals, and collaborating with product managers and engineers to turn ideas into practical solutions.
                  </p>
                  <p className="about-modal-paragraph">
                    For me, good design isn&apos;t just about how something looks. It&apos;s about making complex things feel simple, helping people accomplish what they need, and creating experiences that make a meaningful difference.
                  </p>
                  <p className="about-modal-paragraph">
                    <strong>Beyond the screen:</strong> I&apos;m naturally curious, enjoy exploring new technologies, and am particularly interested in how AI is changing the way we design and interact with digital products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
}
