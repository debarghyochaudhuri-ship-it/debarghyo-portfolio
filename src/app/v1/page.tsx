"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Project {
  title: string;
  meta: string;
  role: string;
  image: string;
  problem: string;
  audience: string;
  constraints: string;
  process: string;
  decisions: string;
  outcome: string;
}

const projectData: Project[] = [
  {
    title: "Export Comments (by Intelligaia)",
    meta: "Figma Tooling · SaaS · Intelligaia",
    role: "UX Designer",
    image: "/images/export-comments.png",
    problem:
      "The original feedback tool suffered from low user adoption because designers and reviewers faced a disconnected workflow between viewing comments and implementing revisions.",
    audience:
      "Designers, design systems leads, and cross-functional product stakeholders working in Figma.",
    constraints:
      "Figma plugin API constraints, sandboxed permissions, and requirement to integrate with existing design tokens.",
    process:
      "Conducted user research and usability testing on underperforming areas; advocated for a task-driven redesign rather than merely stacking features.",
    decisions:
      "Structured feedback around action items with clear status indicators (Resolved, Unresolved, Unseen) directly accessible inside the active canvas.",
    outcome:
      "Relaunched product achieved 13,000+ community downloads in 17 months and surpassed 10,000 total installs with a 30% rise in positive feedback.",
  },
  {
    title: "Aclis: Customer Sentiment Dashboard",
    meta: "Enterprise Analytics · Data Intelligence",
    role: "UX / Product Designer",
    image: "/images/aclis.png",
    problem:
      "Product leaders had difficulty tracking customer perception because feedback was fragmented across app stores, Trustpilot, and reviews without unified sentiment synthesis.",
    audience:
      "Product managers, CX leadership, and brand intelligence analysts.",
    constraints:
      "Dense time-series data aggregation, multi-source ingestion latency, and complex filtering needs.",
    process:
      "Mapped user journeys for sentiment analysts; created visual timeline trend curves that visually link critical drops in rating to specific release events.",
    decisions:
      "Implemented source-weighted sentiment scoring (0-100 gauge) paired with contextual review bubbles showing direct customer quotes.",
    outcome:
      "Enabled organizations to quickly identify recurring sentiment pain points and prioritize roadmap decisions with data confidence.",
  },
  {
    title: "Airbnb Mobile App Redesign",
    meta: "Mobile UX · E-Commerce",
    role: "UX / Product Designer",
    image: "/images/airbnb.png",
    problem:
      "Users experienced decision fatigue and booking drop-offs when trying to compare multiple properties with subtle differences in pricing, amenities, and location.",
    audience:
      "Travelers and remote workers booking accommodations on iOS and Android.",
    constraints:
      "Mobile screen real estate constraints, preserving familiar brand aesthetics while introducing comparative capabilities.",
    process:
      "Conducted heuristic evaluation of the booking funnel and prototyped dedicated property comparison flows.",
    decisions:
      "Introduced a streamlined 'Compare' drawer allowing guests to inspect up to 3 listings side-by-side with matched amenity criteria.",
    outcome:
      "Reduced decision friction and improved booking confidence by presenting high-signal comparative parameters.",
  },
  {
    title: "Saathi: Navigation & Safety Companion",
    meta: "Social Impact · Mobile Application",
    role: "UX / Product Designer",
    image: "/images/saathi.png",
    problem:
      "Women navigating unfamiliar urban routes lacked a fast, low-friction emergency alert system and clear visibility into safe nearby landmarks.",
    audience:
      "Women commuters, students, and urban travelers.",
    constraints:
      "High-stress psychological environment where interactions must require minimum cognitive effort and succeed under poor lighting or shaky hands.",
    process:
      "Safety interviews, route hazard mapping, and rapid interaction stress-testing.",
    decisions:
      "Designed a prominent, thumb-reachable SOS trigger, persistent location broadcasting, and one-tap routing to nearest police stations and emergency contacts.",
    outcome:
      "Delivered a compassionate, highly accessible interaction design that ensures emergency actions complete within 2 taps.",
  },
  {
    title: "Scrumboard: Agile Communication Tool",
    meta: "B2B SaaS · Productivity",
    role: "UX / Product Designer · Intelligaia",
    image: "/images/scrumboard.png",
    problem:
      "Agile teams suffered from disorganized ceremonies where standup notes, sprint timers, and blocker discussions were split between video calls and ticket trackers.",
    audience:
      "Scrum masters, developers, and product designers collaborating remotely.",
    constraints:
      "Need for real-time multiplayer synchronization and minimal friction during time-boxed meetings.",
    process:
      "Audited daily standup workflows; created a unified meeting workspace interface.",
    decisions:
      "Combined a shared scratchpad with a live sprint countdown timer, active blocker alerts, and one-click board management.",
    outcome:
      "Helped teams maintain strict time-boxing and improved transparency around daily work blockers.",
  },
  {
    title: "WellnessSync: Health & Activity Tracker",
    meta: "HealthTech · Mobile Experience",
    role: "UX / Product Designer",
    image: "/images/wellness-app.png",
    problem:
      "Users were overwhelmed by visual clutter and buried metrics in their health tracking app, leading to poor habit adherence.",
    audience:
      "Fitness enthusiasts and individuals building healthy daily routines.",
    constraints:
      "Dense biometric data streams (heart rate, steps, sleep cycles) needing clear visual hierarchy on small screens.",
    process:
      "Card sorting and information hierarchy restructuring to prioritize actionable daily summaries over raw telemetry.",
    decisions:
      "Organized home dashboard into clean summary cards for steps, calories, and sleep duration with visual completion rings.",
    outcome:
      "Transformed cluttered health telemetry into clear, motivating daily milestones.",
  },
];

export default function PortfolioPage() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalIndex(null);
      }
    };
    if (activeModalIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeModalIndex]);

  const activeProject =
    activeModalIndex !== null ? projectData[activeModalIndex] : null;

  return (
    <>
      {/* Accessible Skip Link */}
      <a href="#work" className="skip-link">
        Skip to selected work
      </a>

      {/* ═══════════ NAVBAR ═══════════ */}
      <nav className="navbar" id="navbar" aria-label="Main Navigation">
        <div className="nav-logo">
          Debarghyo Chaudhuri<span>.</span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Selected Work</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="nav-cta">
            Get in Touch
          </a>
        </div>
      </nav>

      <main id="main-content">
        {/* ═══════════ HERO (FOLD 1) ═══════════ */}
        <section className="hero" id="hero" aria-label="Introduction">
          <div className="hero-bg-grid" aria-hidden="true" />
          <div className="hero-ambient-glow" aria-hidden="true" />

          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="dot" aria-hidden="true" />
                UX / Product Designer · 4 Years Experience
              </div>
              <h1>
                Designing intuitive product systems for{" "}
                <span className="highlight">Enterprise SaaS &amp; AI</span>.
              </h1>
              <p className="hero-description">
                I balance user workflows, engineering feasibility, and business
                clarity across complex digital products. Experience designing
                solutions for Cisco and HPE.
              </p>
              <div className="hero-actions">
                <a href="#work" className="btn-primary">
                  Explore Selected Work &rarr;
                </a>
                <a href="#contact" className="btn-secondary">
                  Get in Touch
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="number">4</div>
                  <div className="label">Years Experience</div>
                </div>
                <div className="hero-stat">
                  <div className="number">B2B &amp; SaaS</div>
                  <div className="label">Domain Expertise</div>
                </div>
                <div className="hero-stat">
                  <div className="number">13K+</div>
                  <div className="label">Figma Plugin Installs</div>
                </div>
              </div>
            </div>

            {/* Authentic UX / Figma Canvas Preview Hero Image */}
            <div className="hero-visual" aria-hidden="true">
              <div className="figma-canvas-workspace">
                <div className="figma-toolbar">
                  <div className="figma-tool-icons">
                    <span className="active">❖ Select</span>
                    <span># Frame</span>
                    <span>T Text</span>
                    <span>💬 Review</span>
                  </div>
                  <div className="figma-zoom-chip">100% · Figma Canvas</div>
                </div>

                <div className="figma-canvas-body">
                  {/* Multi-player cursors */}
                  <div className="figma-cursor cursor-pm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#f59e0b"
                    >
                      <path d="M0 0l7 20 4-7 8-3z" />
                    </svg>
                    <span className="cursor-tag">Cisco PM: Approving IA</span>
                  </div>

                  <div className="figma-frame-node">
                    <div className="frame-header-tag">
                      <span>❖</span> Component: Sentiment Insight Card
                    </div>
                    <div className="auto-layout-indicator">
                      <span className="layout-tag">
                        Auto-Layout: Row · Gap: 12px
                      </span>
                      <span className="dimension-tag">W: 420px · H: Hug</span>
                    </div>

                    <div className="component-preview-row">
                      <div className="comp-card">
                        <div className="title">User Sentiment Score</div>
                        <div className="metric">80 / 100</div>
                      </div>
                      <div className="comp-card">
                        <div className="title">Figma Community Relaunch</div>
                        <div className="metric">13,000+ DLs</div>
                      </div>
                    </div>

                    <div className="comp-banner">
                      <span>
                        ✦ AI Task Suggestion: <strong>High Confidence</strong>
                      </span>
                      <span
                        style={{ color: "var(--figma-green)", fontWeight: 600 }}
                      >
                        Validated
                      </span>
                    </div>
                  </div>

                  <div className="figma-cursor cursor-debarghyo">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#6366f1"
                    >
                      <path d="M0 0l7 20 4-7 8-3z" />
                    </svg>
                    <span className="cursor-tag">
                      Debarghyo (UX / Product Designer)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ ABOUT ME (FOLD 2) ═══════════ */}
        <section
          className="section"
          id="about"
          aria-label="About Debarghyo Chaudhuri"
        >
          <div className="section-header">
            <div className="section-label">01 / Background</div>
            <h2 className="section-title">About My Practice</h2>
            <p className="section-subtitle">
              A concise summary of confirmed professional background and design
              discipline.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a{" "}
                <strong>
                  UX / Product Designer with 4 years of experience
                </strong>{" "}
                designing enterprise, SaaS, and AI-powered products. Skilled at
                turning complex challenges into intuitive, scalable experiences
                through research, product thinking, and interaction design.
              </p>
              <p>
                At <strong>Intelligaia</strong> (Oct 2021 &ndash; Oct 2024), I
                led end-to-end design on internal products from problem framing
                to delivery, aligning user needs with business goals alongside
                product managers and engineers, while also collaborating with
                external partner teams for enterprise leaders including{" "}
                <strong>Cisco</strong> and <strong>HPE</strong>.
              </p>
              <p>
                Currently active in freelance UX/UI design (Mar 2025 &ndash;
                Present) and pursuing an <strong>MDes in Design</strong> at the
                University of Sunderland, UK (2026 &ndash; 2028).
              </p>
            </div>

            <div className="provenance-card">
              <div className="provenance-title">
                <span>💼</span> Confirmed Work History
              </div>
              <div className="experience-timeline">
                <div className="timeline-item">
                  <div className="timeline-role">Freelance UX/UI Designer</div>
                  <div className="timeline-company">Self-employed · Remote</div>
                  <div className="timeline-date">Mar 2025 &ndash; Present</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-role">User Experience Designer</div>
                  <div className="timeline-company">
                    Intelligaia · Chandigarh / Hybrid
                  </div>
                  <div className="timeline-date">
                    Oct 2021 &ndash; Oct 2024 (3 yrs)
                  </div>
                </div>
              </div>

              <div className="skills-tag-group">
                <div className="skills-tag-title">
                  Verified Technical Competencies
                </div>
                <div className="tag-cloud">
                  <span className="tag-pill">Design Systems</span>
                  <span className="tag-pill">Enterprise SaaS</span>
                  <span className="tag-pill">Information Architecture</span>
                  <span className="tag-pill">User Flows</span>
                  <span className="tag-pill">Usability Testing</span>
                  <span className="tag-pill">Figma Prototyping</span>
                  <span className="tag-pill">AI-Assisted Product Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ SELECTED WORK (FOLD 3) ═══════════ */}
        <section className="section" id="work" aria-label="Selected Projects">
          <div className="section-header">
            <div className="section-label">02 / Portfolio</div>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">
              Real product design projects showing the problem statement,
              solution, business impact, and UI screens.
            </p>
          </div>

          <div className="projects-list">
            {/* PROJECT 1: EXPORT COMMENTS (BY INTELLIGAIA) */}
            <article className="project-card-full" id="project-export-comments">
              <div className="project-ui-showcase">
                <img
                  src="/images/export-comments.png"
                  alt="Export Comments UI by Intelligaia - Relaunched to achieve 10K+ downloads"
                  loading="lazy"
                />
              </div>
              <div className="project-details-content">
                <div>
                  <div className="project-tag-bar">
                    <span className="badge-domain">Figma Tooling · SaaS</span>
                    <span className="badge-verified-metric">
                      13K downloads in 17 months
                    </span>
                  </div>
                  <h3 className="project-heading">
                    Export Comments (by Intelligaia)
                  </h3>
                  <div className="project-role-line">
                    Role: UX Designer · Intelligaia
                  </div>
                  <p className="project-brief">
                    Relaunched an underperforming feedback management product to
                    achieve 10K+ downloads and solve the workflow gap between
                    feedback visibility and execution.
                  </p>
                  <div className="project-matrix">
                    <div className="matrix-box">
                      <div className="m-label prob">Problem</div>
                      <div className="m-text">
                        Underperforming workflow gap between feedback
                        visibility and design execution.
                      </div>
                    </div>
                    <div className="matrix-box">
                      <div className="m-label sol">Solution</div>
                      <div className="m-text">
                        Task-driven redesign with inline review synthesis
                        directly in the Figma canvas.
                      </div>
                    </div>
                    <div className="matrix-box">
                      <div className="m-label res">Outcome</div>
                      <div className="m-text">
                        Reached <strong>13K downloads in 17 months</strong>;
                        surpassed 10K total installs.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-actions">
                  <button
                    type="button"
                    className="btn-view-study"
                    onClick={() => setActiveModalIndex(0)}
                    aria-haspopup="dialog"
                  >
                    View case details &rarr;
                  </button>
                </div>
              </div>
            </article>

            {/* PROJECT 2: ACLIS DATA INTELLIGENCE DASHBOARD */}
            <article className="project-card-full" id="project-aclis">
              <div className="project-ui-showcase">
                <img
                  src="/images/aclis.png"
                  alt="Aclis Data Intelligence Dashboard for understanding customer sentiment"
                  loading="lazy"
                />
              </div>
              <div className="project-details-content">
                <div>
                  <div className="project-tag-bar">
                    <span className="badge-domain">
                      Enterprise Analytics · AI
                    </span>
                  </div>
                  <h3 className="project-heading">
                    Aclis: Customer Sentiment Dashboard
                  </h3>
                  <div className="project-role-line">
                    Role: UX / Product Designer · Intelligaia
                  </div>
                  <p className="project-brief">
                    A data intelligence dashboard designed to help organizations
                    understand customer sentiment, identify trends across
                    sources, and make data-driven decisions quickly.
                  </p>
                  <div className="project-matrix">
                    <div className="matrix-box">
                      <div className="m-label prob">Problem</div>
                      <div className="m-text">
                        Customer feedback scattered across app stores, Gartner,
                        and social channels without unified trend synthesis.
                      </div>
                    </div>
                    <div className="matrix-box">
                      <div className="m-label sol">Solution</div>
                      <div className="m-text">
                        Multi-channel sentiment scoring, comparative trend
                        timelines, and source-level drilldowns.
                      </div>
                    </div>
                    <div className="matrix-box">
                      <div className="m-label res">Outcome</div>
                      <div className="m-text">
                        Faster decision cycles for product teams monitoring
                        cross-platform reputation.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-actions">
                  <button
                    type="button"
                    className="btn-view-study"
                    onClick={() => setActiveModalIndex(1)}
                    aria-haspopup="dialog"
                  >
                    View case details &rarr;
                  </button>
                </div>
              </div>
            </article>

            {/* PROJECT 3: AIRBNB MOBILE APP REDESIGN */}
            <article className="project-card-full" id="project-airbnb">
              <div className="project-ui-showcase">
                <img
                  src="/images/airbnb.png"
                  alt="Airbnb mobile app redesign to enhance user confidence and clarity"
                  loading="lazy"
                />
              </div>
              <div className="project-details-content">
                <div>
                  <div className="project-tag-bar">
                    <span className="badge-domain">Mobile UX · E-Commerce</span>
                  </div>
                  <h3 className="project-heading">Airbnb Mobile App Redesign</h3>
                  <div className="project-role-line">
                    Role: UX / Product Designer
                  </div>
                  <p className="project-brief">
                    Redesigned key browsing and comparison flows in the Airbnb
                    mobile app to enhance user booking confidence, clarity, and
                    decision speed.
                  </p>
                  <div className="project-matrix">
                    <div className="matrix-box">
                      <div className="m-label prob">Problem</div>
                      <div className="m-text">
                        Booking drop-offs caused by cognitive overload when
                        comparing multi-listing amenities and pricing.
                      </div>
                    </div>
                    <div className="matrix-box">
                      <div className="m-label sol">Solution</div>
                      <div className="m-text">
                        Side-by-side listing comparison feature and streamlined
                        information hierarchy on property pages.
                      </div>
                    </div>
                    <div className="matrix-box">
                      <div className="m-label res">Outcome</div>
                      <div className="m-text">
                        Higher decision speed, reduced comparison friction, and
                        improved booking confidence.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-actions">
                  <button
                    type="button"
                    className="btn-view-study"
                    onClick={() => setActiveModalIndex(2)}
                    aria-haspopup="dialog"
                  >
                    View case details &rarr;
                  </button>
                </div>
              </div>
            </article>

            {/* PROJECT 4: SAATHI WOMEN'S SAFETY APP */}
            <article className="project-card-full" id="project-saathi">
              <div className="project-ui-showcase">
                <img
                  src="/images/saathi.png"
                  alt="Saathi social impact navigation and safety application"
                  loading="lazy"
                />
              </div>
              <div className="project-details-content">
                <div>
                  <div className="project-tag-bar">
                    <span className="badge-domain">
                      Social Impact · Mobile Product
                    </span>
                  </div>
                  <h3 className="project-heading">
                    Saathi: Navigation &amp; Safety Companion
                  </h3>
                  <div className="project-role-line">
                    Role: UX / Product Designer
                  </div>
                  <p className="project-brief">
                    A social impact application that puts safety first,
                    empowering women to navigate cities with confidence and
                    peace of mind through rapid emergency access.
                  </p>
                  <div className="project-matrix">
                    <div className="matrix-box">
                      <div className="m-label prob">Problem</div>
                      <div className="m-text">
                        High anxiety and slow access to trusted assistance when
                        navigating unfamiliar or high-risk routes.
                      </div>
                    </div>
                    <div className="matrix-box">
                      <div className="m-label sol">Solution</div>
                      <div className="m-text">
                        Prominent one-tap SOS trigger, safe route mapping with
                        police stations, and quick contact broadcasting.
                      </div>
                    </div>
                    <div className="matrix-box">
                      <div className="m-label res">Outcome</div>
                      <div className="m-text">
                        Intuitive high-stress interaction design ensuring
                        critical actions take under 2 seconds.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-actions">
                  <button
                    type="button"
                    className="btn-view-study"
                    onClick={() => setActiveModalIndex(3)}
                    aria-haspopup="dialog"
                  >
                    View case details &rarr;
                  </button>
                </div>
              </div>
            </article>

            {/* PROJECT 5: SCRUMBOARD COLLABORATION TOOL */}
            <article className="project-card-full" id="project-scrumboard">
              <div className="project-ui-showcase">
                <img
                  src="/images/scrumboard.png"
                  alt="Scrumboard project communication and agile collaboration tool"
                  loading="lazy"
                />
              </div>
              <div className="project-details-content">
                <div>
                  <div className="project-tag-bar">
                    <span className="badge-domain">
                      B2B SaaS · Productivity
                    </span>
                  </div>
                  <h3 className="project-heading">
                    Scrumboard: Agile Communication Tool
                  </h3>
                  <div className="project-role-line">
                    Role: UX / Product Designer · Intelligaia
                  </div>
                  <p className="project-brief">
                    Designed to streamline project communication, daily
                    standups, and agile ceremonies for distributed development
                    and design teams.
                  </p>
                  <div className="project-matrix">
                    <div className="matrix-box">
                      <div className="m-label prob">Problem</div>
                      <div className="m-text">
                        Disjointed standups with sprint notes, blockers, and
                        timelines isolated across multiple tools.
                      </div>
                    </div>
                    <div className="matrix-box">
                      <div className="m-label sol">Solution</div>
                      <div className="m-text">
                        Integrated workspace with live meeting timer, blocker
                        callouts, and sprint ceremony management.
                      </div>
                    </div>
                    <div className="matrix-box">
                      <div className="m-label res">Outcome</div>
                      <div className="m-text">
                        Reduced meeting overhead and unified project status
                        reporting in one shared view.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-actions">
                  <button
                    type="button"
                    className="btn-view-study"
                    onClick={() => setActiveModalIndex(4)}
                    aria-haspopup="dialog"
                  >
                    View case details &rarr;
                  </button>
                </div>
              </div>
            </article>

            {/* PROJECT 6: WELLNESS APP (WELLNESSSYNC) */}
            <article className="project-card-full" id="project-wellness">
              <div className="project-ui-showcase">
                <img
                  src="/images/wellness-app.png"
                  alt="WellnessSync health dashboard and data-driven insights"
                  loading="lazy"
                />
              </div>
              <div className="project-details-content">
                <div>
                  <div className="project-tag-bar">
                    <span className="badge-domain">
                      HealthTech · Mobile UX
                    </span>
                  </div>
                  <h3 className="project-heading">
                    WellnessSync: Health &amp; Activity Tracker
                  </h3>
                  <div className="project-role-line">
                    Role: UX / Product Designer
                  </div>
                  <p className="project-brief">
                    Reimagined the WellnessSync app to transform visual clutter
                    into clarity, placing daily health summaries and personal
                    wellness goals front and center.
                  </p>
                  <div className="project-matrix">
                    <div className="matrix-box">
                      <div className="m-label prob">Problem</div>
                      <div className="m-text">
                        Fragmented activity logs and dense stats overwhelmed
                        users trying to track daily health progress.
                      </div>
                    </div>
                    <div className="matrix-box">
                      <div className="m-label sol">Solution</div>
                      <div className="m-text">
                        Clean dashboard cards highlighting steps, sleep score,
                        and visual progress ring indicators.
                      </div>
                    </div>
                    <div className="matrix-box">
                      <div className="m-label res">Outcome</div>
                      <div className="m-text">
                        Improved daily habit retention through quick-glance data
                        hierarchy and encouraging feedback.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-actions">
                  <button
                    type="button"
                    className="btn-view-study"
                    onClick={() => setActiveModalIndex(5)}
                    aria-haspopup="dialog"
                  >
                    View case details &rarr;
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ═══════════ CONTACT (FOLD 4) ═══════════ */}
        <section className="section" id="contact" aria-label="Contact Information">
          <div className="section-header">
            <div className="section-label">03 / Connect</div>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Reach out directly for full-time UX / Product Design opportunities
              or collaborations.
            </p>
          </div>

          <div className="contact-grid">
            <a
              href="mailto:debarghyochaudhuri@gmail.com"
              className="contact-tile"
            >
              <div className="contact-tile-icon" aria-hidden="true">
                ✉
              </div>
              <div className="contact-tile-info">
                <div className="c-type">Email</div>
                <div className="c-val">debarghyochaudhuri@gmail.com</div>
              </div>
            </a>

            <a href="tel:9831722816" className="contact-tile">
              <div className="contact-tile-icon" aria-hidden="true">
                📞
              </div>
              <div className="contact-tile-info">
                <div className="c-type">Phone</div>
                <div className="c-val">+91 9831722816</div>
              </div>
            </a>

            <div className="contact-tile">
              <div className="contact-tile-icon" aria-hidden="true">
                📍
              </div>
              <div className="contact-tile-info">
                <div className="c-type">Availability</div>
                <div className="c-val">Open to UX / Product Roles</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer>
        <div>&copy; Debarghyo Chaudhuri &mdash; UX / Product Designer</div>
        <div>Enterprise SaaS &amp; AI-Powered Products</div>
      </footer>

      {/* ═══════════ MODAL OVERLAY (STRUCTURED CASE STUDY) ═══════════ */}
      {activeProject && (
        <div
          className="modal-overlay active"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModalIndex(null);
          }}
        >
          <div className="modal-shell">
            <button
              type="button"
              className="modal-close"
              aria-label="Close dialog"
              onClick={() => setActiveModalIndex(null)}
            >
              &times;
            </button>
            <div className="modal">
              <div id="modalDynamicContent" className="modal-scroll-body">
              <div className="modal-ui-hero">
                <img
                  src={activeProject.image}
                  alt={`${activeProject.title} preview`}
                />
              </div>
              <div style={{ marginBottom: "16px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "var(--accent-light)",
                    fontWeight: 600,
                  }}
                >
                  {activeProject.meta}
                </span>
                <h2
                  id="modalTitle"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginTop: "4px",
                  }}
                >
                  {activeProject.title}
                </h2>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#38bdf8",
                    marginTop: "4px",
                  }}
                >
                  <strong>Role:</strong> {activeProject.role}
                </div>
              </div>

              <div
                className="modal-section"
                style={{
                  marginTop: "16px",
                  borderTop: "none",
                  paddingTop: 0,
                }}
              >
                <div className="modal-section-title">Problem Statement</div>
                <p className="modal-text">{activeProject.problem}</p>
              </div>

              <div className="modal-section">
                <div className="modal-section-title">
                  Target Audience &amp; Constraints
                </div>
                <p className="modal-text">
                  <strong>Audience:</strong> {activeProject.audience}
                </p>
                <p className="modal-text" style={{ marginTop: "6px" }}>
                  <strong>Constraints:</strong> {activeProject.constraints}
                </p>
              </div>

              <div className="modal-section">
                <div className="modal-section-title">
                  Process &amp; Key Design Decisions
                </div>
                <p className="modal-text">
                  <strong>Process:</strong> {activeProject.process}
                </p>
                <p className="modal-text" style={{ marginTop: "6px" }}>
                  <strong>Key Decisions:</strong> {activeProject.decisions}
                </p>
              </div>

              <div className="modal-section">
                <div className="modal-section-title">
                  Business Impact &amp; Outcome
                </div>
                <p className="modal-text">{activeProject.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* ═══════════ VERSION SWITCHER DOCK ═══════════ */}
      <aside className="version-switcher" aria-label="Version switcher">
        <Link href="/v1" className="version-pill active">
          V1 (Original)
        </Link>
        <Link href="/" className="version-pill">
          V2 (Cinematic)
        </Link>
      </aside>
    </>
  );
}
