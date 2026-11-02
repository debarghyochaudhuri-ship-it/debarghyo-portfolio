"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  highlight?: string;
}

const projects: ProjectItem[] = [
  {
    id: "emi-world-pro",
    number: "01",
    category: "D2C REACH EXPANSION PLATFORM &middot; 2026",
    title: "EMI World Pro: D2C Reach Expansion for Brands & Retailers",
    subtitle: "A queue buster checkout solution for customers and outreach expansion platform for retailers and brands.",
    description:
      "Launching across 12 tier 1 & 2 cities and 5+ retailers, with projected direct consumer traffic of 1.5 Mn.+ — a first for Pine Labs offline.",
    tags: ["CHECKOUT", "GROWTH", "RETAIL", "FINTECH"],
    image: "/projects/emi-world-pro.png",
    highlight: "Pine Labs &middot; 1.5M+ Projected Traffic",
  },
  {
    id: "export-comments",
    number: "02",
    category: "PRODUCTIVITY &middot; SAAS &middot; INTELLIGAIA",
    title: "Export Comments: Relaunching an Underperforming Product",
    subtitle: "Redesigning the product to solve the workflow gap between feedback visibility and execution.",
    description:
      "Surpassed 10,000+ total downloads in 17 months across Figma Community with a task-driven workflow redesign.",
    tags: ["FIGMA TOOLING", "WORKFLOW", "DESIGN SYSTEM"],
    image: "/projects/export-comments.png",
    highlight: "13K+ Downloads in 17 mo",
  },
  {
    id: "aclis",
    number: "03",
    category: "DATA INTELLIGENCE &middot; ENTERPRISE AI",
    title: "Aclis: Customer Sentiment & Data Intelligence Dashboard",
    subtitle: "Helping organizations decide quickly, understand sentiment, and make data-driven decisions.",
    description:
      "Multi-channel sentiment scoring and trend detection across app stores, Trustpilot, and reviews with unified executive reporting.",
    tags: ["ANALYTICS", "AI/ML", "ENTERPRISE SAAS"],
    image: "/projects/aclis.png",
    highlight: "Sentiment Score 80/100",
  },
  {
    id: "airbnb",
    number: "04",
    category: "MOBILE UX &middot; E-COMMERCE",
    title: "Airbnb Mobile App Redesign: Enhancing Decision Clarity",
    subtitle: "Reducing booking drop-offs by improving comparison clarity and decision speed.",
    description:
      "Streamlined listing comparison drawer and unified property parameters to build buyer confidence before checkout.",
    tags: ["MOBILE", "CONVERSION", "HEURISTICS"],
    image: "/projects/airbnb.png",
  },
  {
    id: "saathi",
    number: "05",
    category: "SOCIAL IMPACT &middot; MOBILE APP",
    title: "Saathi: Navigation & Safety Companion for Women",
    subtitle: "A social impact application putting safety first and empowering women to live fearlessly.",
    description:
      "High-stress emergency UX with one-tap SOS trigger, safe landmark routing, and automated live location broadcasting.",
    tags: ["SOCIAL IMPACT", "MOBILE", "ACCESSIBILITY"],
    image: "/projects/saathi.png",
  },
  {
    id: "scrumboard",
    number: "06",
    category: "B2B SAAS &middot; AGILE COLLABORATION",
    title: "Scrumboard: Streamlining Standups & Communication",
    subtitle: "Consolidating sprint ceremony notes, live meeting timers, and blockers into one canvas.",
    description:
      "Reduced remote meeting overhead and improved transparency for distributed engineering and design teams.",
    tags: ["COLLABORATION", "STANDUPS", "PRODUCTIVITY"],
    image: "/projects/scrumboard.png",
  },
  {
    id: "wellness-app",
    number: "07",
    category: "HEALTHTECH &middot; MOBILE EXPERIENCE",
    title: "WellnessSync: Transforming Data Clutter into Daily Clarity",
    subtitle: "Placing actionable daily health summaries and personal wellness milestones front and center.",
    description:
      "Re-architected fragmented fitness telemetry into intuitive daily habit rings and sleep scores.",
    tags: ["HEALTHTECH", "DATA VIZ", "HABIT LOOPS"],
    image: "/projects/wellness-app.png",
  },
];

export default function SelectedWork() {
  return (
    <section id="selected-work" className="py-24 px-6 lg:px-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-indigo-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-400">
              Selected Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
            Case Studies &amp; Product Solutions
          </h2>
        </div>
        <p className="text-sm text-white/50 font-mono max-w-xs">
          Showcasing real problems, strategic design systems, and business impact.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-24">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 items-center"
          >
            {/* Visual Screen Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d0f15] aspect-[16/10] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:border-white/20 transition-all duration-500">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none" />

              {project.highlight && (
                <div className="absolute top-4 left-4 font-mono text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white/90">
                  {project.highlight}
                </div>
              )}
            </div>

            {/* Details Content */}
            <div className="flex flex-col items-start">
              <div className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
                <span>{project.number}</span>
                <span>&middot;</span>
                <span dangerouslySetInnerHTML={{ __html: project.category }} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white/90 mb-3 group-hover:text-white transition-colors">
                {project.title}
              </h3>

              <p className="text-sm font-medium text-white/80 mb-3 leading-relaxed">
                {project.subtitle}
              </p>

              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={`#${project.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white group-hover:text-indigo-400 transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
