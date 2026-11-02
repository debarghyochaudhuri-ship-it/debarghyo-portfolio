"use client";

import { motion } from "framer-motion";
import ProjectCard, { type ProjectCardProps } from "./ProjectCard";

const sampleProjects: ProjectCardProps[] = [
  {
    title: "Aclis — Customer Feedback Intelligence",
    categoryNumber: "01",
    categoryLabel: "Enterprise AI &middot; Analytics",
    problemSolution:
      "Problem: Fragmented sentiment telemetry across disjointed review stores. Solution: Unified multi-channel sentiment modeling with real-time trend detection.",
    tags: ["B2B SaaS", "Figma", "UX Architecture", "Enterprise AI"],
    imageSrc: "/projects/aclis.png",
    imageAlt: "Aclis Customer Sentiment Intelligence Dashboard",
    kpiHighlight: "Sentiment Score 80/100",
  },
  {
    title: "EMI World Pro — D2C Reach Expansion Platform",
    categoryNumber: "02",
    categoryLabel: "Fintech &middot; Pine Labs",
    problemSolution:
      "Problem: Physical retail checkout bottlenecks causing drop-offs. Solution: Mobile queue-buster checkout expanding brand outreach across 12 tier-1 & 2 cities.",
    tags: ["Fintech", "FlutterFlow", "Checkout UX", "Growth"],
    imageSrc: "/projects/emi-world-pro.png",
    imageAlt: "EMI World Pro by Pine Labs",
    kpiHighlight: "1.5M+ Projected Traffic",
  },
  {
    title: "Export Comments — Feedback Workflow Tooling",
    categoryNumber: "03",
    categoryLabel: "Productivity &middot; Intelligaia",
    problemSolution:
      "Problem: Disconnected canvas reviews delaying design revisions. Solution: Task-centric feedback synthesis built directly into the designer's native workspace.",
    tags: ["B2B SaaS", "Figma Plugin", "Design Systems", "Workflow"],
    imageSrc: "/projects/export-comments.png",
    imageAlt: "Export Comments Figma Plugin",
    kpiHighlight: "13K+ Downloads in 17 mo",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 lg:px-12 max-w-6xl mx-auto">
      {/* Section Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-indigo-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-400">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white/90">
            Selected Projects
          </h2>
        </div>
        <p className="text-sm text-white/60 font-sans max-w-sm leading-relaxed">
          High-impact digital products crafted with precision, research-backed UX, and measurable business outcomes.
        </p>
      </motion.div>

      {/* Staggered Responsive Grid: 1 col on mobile, 2 cols on desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
      >
        {sampleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </section>
  );
}
