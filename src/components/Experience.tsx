"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { PORTFOLIO_CONTENT } from "@/content/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-indigo-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-400">
              03 / BACKGROUND &amp; ABOUT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/95">
            Experience Timeline
          </h2>
        </div>
        <p className="text-xs font-mono text-white/50 max-w-xs">
          [Notice: Work history entries are clearly labeled placeholders until verified roles are provided]
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12">
        {PORTFOLIO_CONTENT.experience.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#050505] border-2 border-indigo-400 group-hover:scale-125 group-hover:bg-indigo-400 transition-all duration-300" />

            <div className="rounded-2xl p-6 sm:p-7 bg-[#0c0d12]/90 border border-white/10 hover:border-white/20 transition-all">
              {/* Top metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-white/5 text-white/80 border border-white/10 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {item.period}
                  </span>
                  {item.statusLabel && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      {item.statusLabel}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-white/50">
                  <MapPin className="w-3.5 h-3.5 text-white/40" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Role & Company */}
              <h3 className="text-xl sm:text-2xl font-bold text-white/95 mb-1">
                {item.role}
              </h3>
              <div className="text-sm font-mono text-indigo-300/90 mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-400" />
                <span>{item.companyPlaceholder}</span>
              </div>

              {/* Summary Description */}
              <p className="text-sm text-white/65 leading-relaxed mb-6">
                {item.summary}
              </p>

              {/* Highlights */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-white/55 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
