"use client";

import { motion } from "framer-motion";
import { Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_CONTENT } from "@/content/portfolioData";

export default function ToolsAndSkills() {
  return (
    <section id="tools" className="py-24 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-indigo-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-400">
              04 / TOOLING &amp; CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/95">
            Tools &amp; Skills
          </h2>
        </div>
        <p className="text-xs font-mono text-white/50 max-w-xs">
          [Notice: Sample tool and skill items listed as editable placeholders, not verified claims]
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left Column: Editable Tools Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Wrench className="w-4 h-4 text-indigo-400" />
            <h3 className="text-lg font-bold text-white/90">
              Design &amp; AI Stack <span className="text-xs font-mono text-white/40 font-normal">[Sample Stack]</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {PORTFOLIO_CONTENT.tools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl p-4 bg-[#0c0d12]/90 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white/95 text-base">{tool.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/50">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">{tool.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Product Design Skills Chips */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="text-lg font-bold text-white/90">
              Core Competencies <span className="text-xs font-mono text-white/40 font-normal">[Sample Skills]</span>
            </h3>
          </div>

          <div className="rounded-2xl p-6 bg-[#0c0d12]/90 border border-white/10">
            <p className="text-xs text-white/55 leading-relaxed mb-6">
              Sample product design methodologies spanning zero-to-one product framing, high-density data architectures, and tokenized design systems.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {PORTFOLIO_CONTENT.skills.map((skill) => (
                <div
                  key={skill}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all text-xs font-medium text-white/80"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
