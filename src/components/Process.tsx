"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Compass, Cpu, Sparkles, Workflow } from "lucide-react";
import { PORTFOLIO_CONTENT } from "@/content/portfolioData";

export default function Process() {
  const icons = [Compass, Workflow, Cpu, Sparkles];

  return (
    <section id="process" className="py-24 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto scroll-mt-24">
      {/* Eyebrow and Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-indigo-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-400">
              {PORTFOLIO_CONTENT.process.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/95">
            {PORTFOLIO_CONTENT.process.title}
          </h2>
        </div>
        <p className="text-sm text-white/60 max-w-md leading-relaxed">
          {PORTFOLIO_CONTENT.process.subtitle}
        </p>
      </div>

      {/* 4-Step Process Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PORTFOLIO_CONTENT.process.phases.map((phase, idx) => {
          const IconComponent = icons[idx] || Workflow;
          return (
            <div
              key={phase.step}
              className="group relative rounded-2xl p-6 bg-[#0c0d12]/90 border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with step & icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                    PHASE {phase.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-indigo-300 transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white/95 mb-2.5">
                  {phase.title}
                </h3>

                <p className="text-xs text-white/60 leading-relaxed mb-6">
                  {phase.description}
                </p>
              </div>

              {/* Artifact Output Tag */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block mb-1">
                  Key Deliverable
                </span>
                <span className="text-xs font-mono font-medium text-white/80">
                  {phase.artifact}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Process Transition Callout to Projects */}
      <div className="mt-12 rounded-2xl p-5 border border-white/10 bg-gradient-to-r from-indigo-950/20 via-transparent to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Bot className="w-5 h-5 text-indigo-400 shrink-0" />
          <p className="text-xs text-white/70">
            <strong>Scroll down into the 7-project stack</strong> to see these phases applied across enterprise platforms.
          </p>
        </div>
        <a
          href="#projects"
          className="text-xs font-mono font-semibold text-indigo-300 hover:text-white flex items-center gap-1.5 transition-colors shrink-0"
        >
          <span>Enter Project Stack</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
