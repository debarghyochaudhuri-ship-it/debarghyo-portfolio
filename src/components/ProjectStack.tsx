"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_CONTENT, ProjectItem } from "@/content/portfolioData";

interface StackCardProps {
  project: ProjectItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function StackCard({ project, index, total, progress }: StackCardProps) {
  // For index === 0, the first card starts at position 0 from the start.
  // Each subsequent card rises from below over its allocated progress interval.
  const step = 1 / total;
  const start = index === 0 ? 0 : (index - 0.9) * step;
  const end = index === 0 ? 0.01 : index * step;

  // Parallax translation: card rises from below (y: 110% to 0%)
  const y = useTransform(
    progress,
    [Math.max(0, start), Math.min(1, end)],
    [index === 0 ? "0%" : "110%", "0%"]
  );

  // Subtle depth scale down when newer cards layer over this card
  const scale = useTransform(
    progress,
    [index * step, Math.min(1, (index + 1) * step)],
    [1, 0.96]
  );

  // Subtle darkening overlay when covered by subsequent card
  const overlayOpacity = useTransform(
    progress,
    [index * step, Math.min(1, (index + 0.8) * step)],
    [0, 0.45]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        zIndex: index + 1,
      }}
      className="absolute inset-0 w-full rounded-2xl md:rounded-3xl border border-white/15 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-gradient-to-br from-[#12131a] via-[#0c0d12] to-[#07080b] flex flex-col justify-between"
    >
      {/* Dimming overlay when card is layered underneath */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black pointer-events-none z-20"
      />

      {/* Card Header Bar */}
      <div className="relative z-10 px-6 sm:px-8 py-4 sm:py-5 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            PROJECT {project.number} / 07
          </span>
          {project.badgeLabel && (
            <span className="hidden sm:inline-block text-xs font-mono text-white/50">
              &middot; {project.badgeLabel}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-white/40">Scroll to stack next &darr;</span>
        </div>
      </div>

      {/* Main Card Body (2 Columns on large screens) */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-center flex-1">
        {/* Left Side: Structured Content */}
        <div className="flex flex-col justify-between h-full space-y-4">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base font-medium text-indigo-300/90 mb-4">
              {project.tagline}
            </p>

            {/* Problem & Solution Strip */}
            <div className="space-y-3 mb-4">
              <div className="rounded-xl p-3 sm:p-3.5 bg-white/[0.02] border border-white/10">
                <span className="font-mono text-[10px] uppercase font-bold text-rose-400 block mb-1">
                  Problem Statement [Sample]
                </span>
                <p className="text-xs text-white/70 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-xl p-3 sm:p-3.5 bg-white/[0.02] border border-white/10">
                <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 block mb-1">
                  Design Solution [Sample]
                </span>
                <p className="text-xs text-white/70 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="rounded-xl p-3 sm:p-3.5 bg-white/[0.02] border border-white/10">
                <span className="font-mono text-[10px] uppercase font-bold text-amber-400 block mb-1">
                  Business Impact Placeholder
                </span>
                <p className="text-xs text-white/70 leading-relaxed">
                  {project.impactPlaceholder}
                </p>
              </div>
            </div>
          </div>

          {/* Tags row */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Product Visual Canvas */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/15 bg-[#07080c] shadow-2xl">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 550px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Non-functioning destination notice */}
          <div className="absolute bottom-3 right-3 font-mono text-[10px] px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-white/60">
            [Case study detail unlinked — awaiting documentation]
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position across the parallax container height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const total = PORTFOLIO_CONTENT.projects.length;

  return (
    <section id="projects" className="relative scroll-mt-20">
      {/* Section Introduction */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-indigo-500" />
              <span className="font-mono text-xs uppercase tracking-widest text-indigo-400">
                02 / PORTFOLIO &middot; SCROLL-DRIVEN STACK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white/95">
              Selected Work (7 Projects)
            </h2>
          </div>
          <p className="text-xs font-mono text-white/50 max-w-sm">
            Scroll down: Each project rises and layers over the previous card in a continuous parallax stack.
          </p>
        </div>
      </div>

      {/* Desktop & Smooth Motion: Sticky Parallax Stage (height proportional to 7 cards) */}
      <div
        ref={containerRef}
        className="hidden md:block relative h-[520vh] w-full"
      >
        <div className="sticky top-20 h-[88vh] max-h-[820px] max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-center">
          <div className="relative w-full h-full max-h-[720px]">
            {PORTFOLIO_CONTENT.projects.map((project, idx) => (
              <StackCard
                key={project.id}
                project={project}
                index={idx}
                total={total}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile & Reduced-Motion Fallback: Clean Accessible Normal Vertical Flow */}
      <div className="md:hidden max-w-6xl mx-auto px-5 sm:px-8 space-y-8 pb-16">
        {PORTFOLIO_CONTENT.projects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-white/15 overflow-hidden bg-[#0c0d12] p-5 space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <span className="font-bold text-indigo-400">PROJECT {project.number} / 07</span>
              <span className="text-white/50">{project.badgeLabel}</span>
            </div>

            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#07080c]">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-xs text-indigo-300 mb-3">{project.tagline}</p>
              <div className="space-y-2 text-xs text-white/60 mb-4">
                <p><strong>Problem:</strong> {project.problem}</p>
                <p><strong>Solution:</strong> {project.solution}</p>
                <p className="text-amber-300/80"><strong>Impact:</strong> {project.impactPlaceholder}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
              {project.tags.map((t) => (
                <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
