"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, ArrowUpRight, Lock, Sparkles } from "lucide-react";
import { PORTFOLIO_CONTENT } from "@/content/portfolioData";

export default function Contact() {
  const icons = [Mail, Globe, MapPin, Phone];

  return (
    <footer id="contact" className="py-24 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-white/10 scroll-mt-24">
      {/* Top Contact Row */}
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-3 block">
            {PORTFOLIO_CONTENT.contact.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white/95 mb-6">
            {PORTFOLIO_CONTENT.contact.title}
          </h2>
          <p className="text-white/60 leading-relaxed max-w-md text-sm sm:text-base mb-6">
            {PORTFOLIO_CONTENT.contact.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
            <Lock className="w-3.5 h-3.5" />
            <span>Placeholder notice: Contact destinations are unlinked until confirmed</span>
          </div>
        </div>

        {/* Contact Tiles */}
        <div className="grid sm:grid-cols-2 gap-4">
          {PORTFOLIO_CONTENT.contact.channels.map((channel, idx) => {
            const IconComponent = icons[idx] || Mail;
            return (
              <div
                key={channel.type}
                className="p-5 rounded-2xl border border-white/10 bg-[#0d0f15] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-white/40">
                      {channel.type}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-indigo-400">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="text-xs font-mono font-medium text-white/90 break-all mb-2">
                    {channel.displayLabel}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-white/40">
                  {channel.note}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Credits */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
        <div>&copy; 2026 {PORTFOLIO_CONTENT.profile.name} &middot; {PORTFOLIO_CONTENT.profile.role}</div>
        <div className="text-center sm:text-right max-w-md">
          {PORTFOLIO_CONTENT.credits.description}
        </div>
      </div>
    </footer>
  );
}
