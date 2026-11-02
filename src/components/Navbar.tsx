"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PORTFOLIO_CONTENT } from "@/content/portfolioData";

const NAV_LINKS = [
  { label: "Work", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#experience" },
  { label: "Tools & Skills", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "process", "projects", "experience", "tools", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between rounded-full bg-[#0a0a0e]/80 backdrop-blur-xl border border-white/10 px-5 sm:px-6 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg py-0.5"
          aria-label="Debarghya - Return to top"
        >
          <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-indigo-300 transition-colors">
            {PORTFOLIO_CONTENT.profile.name}
          </span>
          <span className="font-mono text-[10px] text-white/40 tracking-wider hidden sm:inline-block">
            / {PORTFOLIO_CONTENT.profile.role}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1.5 lg:gap-2 text-xs font-medium"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isTargetActive =
              (link.href === "#process" && activeSection === "process") ||
              (link.href === "#projects" && activeSection === "projects") ||
              (link.href === "#experience" && activeSection === "experience") ||
              (link.href === "#tools" && activeSection === "tools") ||
              (link.href === "#contact" && activeSection === "contact");

            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                  isTargetActive ? "text-white font-semibold" : "text-white/60 hover:text-white"
                }`}
              >
                {isTargetActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/15 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Availability Badge & CTA Button */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{PORTFOLIO_CONTENT.profile.availability}</span>
          </div>

          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-white text-black hover:bg-white/90 active:scale-95 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 cursor-pointer"
          >
            Get in Touch
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-[#0c0d12]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl"
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PORTFOLIO_CONTENT.profile.availability}</span>
            </div>

            <nav className="flex flex-col gap-1 text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
