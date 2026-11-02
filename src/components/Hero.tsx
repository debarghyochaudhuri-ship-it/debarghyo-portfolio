"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Layers, Cpu } from "lucide-react";
import Image from "next/image";
import { PORTFOLIO_CONTENT } from "@/content/portfolioData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex items-center justify-center px-5 sm:px-8 lg:px-12 pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[520px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_30%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid lg:grid-cols-[1.12fr_0.88fr] gap-12 lg:gap-16 items-center">
        {/* Left Column: Profile, Headline & Elevator Pitch */}
        <div className="flex flex-col items-start">
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-medium tracking-wide text-white/80">
              {PORTFOLIO_CONTENT.profile.name} &middot; {PORTFOLIO_CONTENT.profile.role}
            </span>
          </div>

          {/* Memorable Original UX Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.9rem] font-bold tracking-tight text-white/95 leading-[1.08] mb-6">
            {PORTFOLIO_CONTENT.profile.headlineMain}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-cyan-200">
              {PORTFOLIO_CONTENT.profile.headlineAccent}
            </span>
          </h1>

          {/* Elevator Pitch */}
          <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mb-3">
            {PORTFOLIO_CONTENT.profile.elevatorPitch}
          </p>
          <p className="text-[11px] font-mono text-white/35 mb-8">
            {PORTFOLIO_CONTENT.profile.pitchPlaceholderNotice}
          </p>

          {/* Actions Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
            <a
              href="#process"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:shadow-[0_0_45px_rgba(99,102,241,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Explore Process &amp; Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white/70 hover:text-white/95 border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Domain Anchors */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10 text-xs font-mono text-white/45">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" /> Enterprise SaaS
            </span>
            <span>&middot;</span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" /> AI-Assisted UX
            </span>
            <span>&middot;</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Design Systems
            </span>
          </div>
        </div>

        {/* Right Column: Visual Product Design Stage */}
        <div className="relative">
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-[0_24px_60px_rgba(0,0,0,0.7)]">
            <div className="relative rounded-[15px] bg-[#0c0d12]/90 backdrop-blur-xl p-5 overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-white/45">
                    system-architecture.fig
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  UX / Product
                </span>
              </div>

              {/* High-Contrast Interactive Artwork Thumbnail */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#08090d]">
                <Image
                  src="/projects/export-comments.png"
                  alt="Product design workflow visual preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent opacity-50" />

                <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="font-medium text-[11px]">Systemic Workflow Optimization</span>
                </div>
              </div>

              {/* Bottom Stage Bar */}
              <div className="mt-4 flex items-center justify-between text-xs text-white/45 font-mono">
                <span>01 &middot; EXPORT COMMENTS</span>
                <span className="text-white/70">Scroll down for Process &amp; Projects &darr;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
