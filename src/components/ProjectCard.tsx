"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  categoryNumber?: string;
  categoryLabel?: string;
  problemSolution: string;
  tags: string[];
  imageSrc: string;
  imageAlt?: string;
  kpiHighlight?: string;
  href?: string;
}

export default function ProjectCard({
  title,
  categoryNumber,
  categoryLabel,
  problemSolution,
  tags,
  imageSrc,
  imageAlt,
  kpiHighlight,
  href = "#",
}: ProjectCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: "easeOut",
          },
        },
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group relative rounded-2xl border border-white/10 hover:border-white/25 bg-[#0a0c12]/80 hover:bg-[#0e1018] backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-colors duration-300"
    >
      {/* Subtle top-light gradient sheen on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Mockup Image Area */}
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#050608] border border-white/10 group-hover:border-white/20 transition-colors mb-6 shadow-inner">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c12]/80 via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Highlight Badge */}
          {kpiHighlight && (
            <div className="absolute top-3.5 left-3.5 font-mono text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white/90 shadow-md">
              {kpiHighlight}
            </div>
          )}

          {/* Hover Arrow Icon overlay */}
          <div className="absolute bottom-3.5 right-3.5 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-indigo-600 transition-all duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Category & Number Eyebrow */}
        {(categoryNumber || categoryLabel) && (
          <div className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2.5 flex items-center gap-2">
            {categoryNumber && <span>{categoryNumber}</span>}
            {categoryNumber && categoryLabel && <span>&middot;</span>}
            {categoryLabel && <span>{categoryLabel}</span>}
          </div>
        )}

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white/90 mb-3 group-hover:text-white transition-colors leading-snug">
          {title}
        </h3>

        {/* 2-line Problem & Solution Description */}
        <p className="text-sm text-white/60 leading-relaxed line-clamp-2 mb-6">
          {problemSolution}
        </p>
      </div>

      {/* Pill-shaped Tags Row */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] font-medium tracking-wide px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/70 group-hover:border-white/20 group-hover:text-white/90 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
