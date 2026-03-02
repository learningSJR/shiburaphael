import React from "react";
import { GridBackgroundAce } from "@/components/ui/GridBackground";
import Carousel from "@/components/ui/carousel";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import PersonaCard from "@/pages/PersonaCard";
import { personas } from "@/data/personas";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Reveal from "@/components/common/Reveal";
import {
  BarChart3,
  Lightbulb,
  Brain,
  BrainCircuit,
  FileSpreadsheet,
  Database,
  ShieldCheck,
  Gauge,
  Lock,
  Users,
  MessageSquare,
  Search,
} from "lucide-react";

/* ---------- Reusable Components ---------- */
const slideData = [
  {
    title: "Retail AI Insights",
    button: "View",
    src: "./Dashboard.jpg",
  },
  {
    title: "Market Potential",
    button: "View",
    src: "./market_Potential.webp",
  },
  {
    title: "Trade Area - ZIP Assessments",
    button: "View",
    src: "./trade_Area_ZIP Assessments.webp",
  },
  {
    title: "Competitive Environment",
    button: "View",
    src: "./competitive_Environment.png",
  },
  {
    title: "Store Diagnostics",
    button: "View",
    src: "./store-1.webp",
  },
  {
    title: "Store Performance Report",
    button: "View",
    src: "./store-2.webp",
  },
  {
    title: "Market Potential Growth Trend",
    button: "View",
    src: "./predictive-1.webp",
  },
  {
    title: "Potential Site Locations",
    button: "View",
    src: "./predictive-2.webp",
  },
  {
    title: "Potential Trade Area Analysis",
    button: "View",
    src: "./predictive-3.webp",
  },
];

function Section({ title, children, index }) {
  const isEven = index % 2 === 0;
  return (
    <section
      className={`px-6 py-20 ${isEven ? "bg-slate-900/90" : "bg-slate-950/90"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="csheading">{title}</h2>
        <div className="leading-relaxed text-base-content/80">{children}</div>
      </div>
    </section>
  );
}

function HighlightCard({ title, children }) {
  return (
    <div className="flex flex-col w-full h-full p-6 transition duration-300 border rounded-2xl hover:shadow-2xl bg-primary/10 border-primary/20">
      <h3 className="font-extrabold text-primary">{title}</h3>

      <p className="flex-1 mt-3 text-sm text-base-content/70">{children}</p>
    </div>
  );
}

/* ---------- Main Page ---------- */

export default function CaseStudyRetail() {
  return (
    <div className="min-h-screen blocks bg-slate-950">
      {/* HERO */}
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 [background-size:40px_40px] 
[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),
linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),
linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
      ></div>
      <div className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-slate-800/90">
        {/* Background Accent Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
        </div>

        {/* Decorative Image */}
        <img
          src="./bgcard.png"
          className="absolute bottom-0 right-0 scale-110 rotate-100 opacity-10 hue-rotate-90"
        />

        <div className="relative z-10 w-full max-w-5xl px-6 mx-auto text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent md:text-6xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
            Retail AI Insights 360
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed md:text-xl text-slate-400">
            Designing an AI-powered enterprise analytics platform focused on
            insight-first decision intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-4 py-2 text-sm font-semibold border rounded-full border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
              Enterprise SaaS
            </span>

            <span className="px-4 py-2 text-sm font-semibold border rounded-full border-cyan-400/40 bg-cyan-400/10 text-cyan-300">
              AI Analytics
            </span>

            <span className="px-4 py-2 text-sm font-semibold text-purple-300 border rounded-full border-purple-400/40 bg-purple-400/10">
              UX Strategy
            </span>
          </div>
        </div>
      </div>

      {/* PROJECT VISION */}
      <Section title="Project Vision" index={0}>
        <Reveal>
          <div className="p-6 mt-10 border-2 border-dashed rounded-2xl bg-primary/10 border-primary/20">
            <p className="text-xl font-normal leading-relaxed text-foreground ">
              Transform complex retail data into clear, actionable
              <span className="text-primary"> AI-driven insights </span>
              that empower executives and managers to make faster, smarter
              decisions.
            </p>

            <p className="mt-2 text-xl leading-relaxed text-muted-foreground">
              Instead of building another dashboard filled with metrics, the
              vision was to design an{" "}
              <span className="font-medium text-foreground">
                insight-first decision intelligence platform
              </span>{" "}
              — one that delivers clarity, not complexity.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* PROBLEM */}
      <Section title="Problem" index={1}>
        <Reveal>
          <ul className="pl-6 space-y-4">
            <li className="flex items-start gap-3">
              <BarChart3 className="w-5 h-5 mt-1 text-primary" />
              <span>Retailers struggled with complex BI dashboards</span>
            </li>

            <li className="flex items-start gap-3">
              <Brain className="w-5 h-5 mt-1 text-primary" />
              <span>AI predictions lacked explainability</span>
            </li>

            <li className="flex items-start gap-3">
              <BrainCircuit className="w-5 h-5 mt-1 text-primary" />
              <span>Data-heavy interfaces caused cognitive overload</span>
            </li>

            <li className="flex items-start gap-3">
              <FileSpreadsheet className="w-5 h-5 mt-1 text-primary" />
              <span>Low adoption and heavy Excel exports</span>
            </li>
          </ul>
        </Reveal>
      </Section>

      {/* CONSTRAINTS */}
      <Section title="Constraints" index={2}>
        <Reveal>
          <ul className="pl-6 space-y-4">
            <li className="flex items-start gap-3">
              <Database className="w-5 h-5 mt-1 text-primary" />
              <span>Large enterprise datasets</span>
            </li>

            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 mt-1 text-primary" />
              <span>Role-Based Access Control (RBAC)</span>
            </li>

            <li className="flex items-start gap-3">
              <Gauge className="w-5 h-5 mt-1 text-primary" />
              <span>Performance limitations</span>
            </li>

            <li className="flex items-start gap-3">
              <Lock className="w-5 h-5 mt-1 text-primary" />
              <span>Security & compliance requirements</span>
            </li>
          </ul>
        </Reveal>
      </Section>

      {/* PERSONAS */}

      <Section title="Meet the Users (Personas)" index={3}>
        <Reveal>
          <HoverEffect gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {personas.map((persona, index) => (
              <CardSpotlight key={index} className="h-full rounded-2xl">
                <PersonaCard {...persona} />
              </CardSpotlight>
            ))}
          </HoverEffect>
        </Reveal>
      </Section>

      {/* RESEARCH */}

      <Section title="Research" index={4}>
        <Reveal>
          <p className="w-full text-muted-foreground">
            To deeply understand retailer challenges, we conducted qualitative
            and quantitative research across stakeholders, end users, and system
            analytics.
          </p>

          {/* Research Methods */}
          <CardSpotlight>
            <HoverEffect gridClassName="gap-4 md:grid-cols-2 items-stretch">
              <div className="flex gap-4 p-4 border rounded-xl bg-surface-dark border-border-dark">
                <Users className="w-6 h-6 mt-1 text-primary" />
                <div>
                  <h4 className="font-semibold">Stakeholder Workshops</h4>
                  <p className="text-sm opacity-70">
                    Identified business goals, KPIs, and pain points in current
                    BI systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border rounded-xl bg-surface-dark border-border-dark">
                <MessageSquare className="w-6 h-6 mt-1 text-primary" />
                <div>
                  <h4 className="font-semibold">User Interviews</h4>
                  <p className="text-sm opacity-70">
                    Conducted 12 one-on-one interviews with retail managers and
                    analysts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border rounded-xl bg-surface-dark border-border-dark">
                <Search className="w-6 h-6 mt-1 text-primary" />
                <div>
                  <h4 className="font-semibold">Usability Testing</h4>
                  <p className="text-sm opacity-70">
                    Observed task completion patterns and cognitive load
                    triggers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border rounded-xl bg-surface-dark border-border-dark">
                <BarChart3 className="w-6 h-6 mt-1 text-primary" />
                <div>
                  <h4 className="font-semibold">Analytics Review</h4>
                  <p className="text-sm opacity-70">
                    Analyzed dashboard usage, drop-offs, and Excel export
                    behavior.
                  </p>
                </div>
              </div>
            </HoverEffect>
          </CardSpotlight>
          {/* Stats Highlight */}
          <div className="p-6 border rounded-2xl bg-primary/10 border-primary/20">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 text-lg font-semibold">Key Insight</h4>
                <p className="text-xl italic text-primary">
                  “We don’t want data. We want answers.”
                </p>
              </div>

              <div className="text-center md:text-right">
                <div className="text-5xl font-bold text-primary">12</div>
                <div className="text-sm opacity-70">
                  User Interviews Conducted
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-4 mt-10 border-l-4 rounded-xl bg-surface-dark/60 border-primary">
            <Lightbulb className="w-6 h-6 mt-1 text-primary" />
            <div>
              <h4 className="font-semibold">Research Findings</h4>
              <p className="text-sm opacity-70">
                We combined qualitative interviews with behavioral analytics to
                understand why retailers avoided BI dashboards despite their
                advanced capabilities.
              </p>
              <p className="mt-2 text-sm opacity-70">
                Our research revealed two critical gaps: users were overwhelmed
                by dense data interfaces, and they lacked trust in AI-generated
                predictions due to limited explainability and contextual
                clarity.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* UX STRATEGY */}
      <Section title="UX Strategy" index={5}>
        <Reveal className="h-full">
          <p className="text-muted-foreground">
            The UX strategy focused on reducing cognitive overload, increasing
            trust in AI outputs, and enabling faster executive-level
            decision-making through structured insight delivery.
          </p>

          <HoverEffect gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 auto-rows-fr items-stretch">
            <HighlightCard title="Insight-First Information Hierarchy">
              Surfaced critical alerts, summaries, and recommendations before
              exposing detailed charts — shifting from data exploration to
              decision enablement.
            </HighlightCard>
            <HighlightCard title="Role-Based Personalization">
              Designed adaptive dashboards tailored to executives, regional
              managers, and analysts — ensuring relevant data visibility without
              noise.
            </HighlightCard>

            <HighlightCard title="Explainable AI Framework">
              Introduced confidence scores, reasoning tooltips, and contextual
              breakdowns to improve trust and transparency in predictive
              insights.
            </HighlightCard>

            <HighlightCard title="Progressive Disclosure Model">
              Delivered high-level summaries first, allowing users to drill down
              into detailed reports only when deeper analysis was required.
            </HighlightCard>
          </HoverEffect>
        </Reveal>
      </Section>

      {/* WIREFLOW */}
      <Section title="Wireflow & Interaction" index={6}>
        <p>
          Designed modular dashboards with alert cards, simplified navigation,
          collapsible data tables, and predictive panels.
        </p>

        <div className="mt-10">
          <div className="relative w-full overflow-hidden rounded-xl">
            <div className="relative w-full h-full py-20 overflow-hidden">
              <Carousel slides={slideData} />
            </div>
          </div>
        </div>
      </Section>

      {/* ACCESSIBILITY */}
      <Section title="Accessibility & Compliance" index={7}>
        <Reveal>
          <HoverEffect gridClassName="gap-6 md:grid-cols-2">
            <div className="p-6 cscard">
              <h4 className="font-semibold text-primary">
                WCAG 2.2 AA Compliance
              </h4>
              <p className="mt-2 text-sm text-base-content/70">
                Maintained AA-level color contrast across dashboards, charts,
                and interactive components.
              </p>
            </div>

            <div className="p-6 cscard">
              <h4 className="font-semibold text-primary">
                Full Keyboard Navigation
              </h4>
              <p className="mt-2 text-sm text-base-content/70">
                Enabled logical tab order and focus states for executive
                workflows.
              </p>
            </div>

            <div className="p-6 cscard">
              <h4 className="font-semibold text-primary">
                Assistive Technology Support
              </h4>
              <p className="mt-2 text-sm text-base-content/70">
                Implemented ARIA labeling for dynamic charts and predictive
                insight modules.
              </p>
            </div>

            <div className="p-6 cscard">
              <h4 className="font-semibold text-primary">
                Clear Feedback States
              </h4>
              <p className="mt-2 text-sm text-base-content/70">
                Designed accessible error states, loading states, and empty data
                views to reduce confusion.
              </p>
            </div>
          </HoverEffect>
        </Reveal>
      </Section>

      {/* DESIGN SYSTEM */}
      <Section title="Design System Decisions" index={8}>
        <Reveal>
          <HoverEffect gridClassName="md:grid-cols-3">
            <CardSpotlight>
              <HighlightCard title="Reusable Insight Cards">
                Standardized KPI & alert components.
              </HighlightCard>
            </CardSpotlight>
            <CardSpotlight>
              <HighlightCard title="Data Table Pattern">
                Sticky headers, bulk actions, saved filters.
              </HighlightCard>
            </CardSpotlight>
            <CardSpotlight>
              <HighlightCard title="Semantic Color Tokens">
                Success, warning, and critical states.
              </HighlightCard>
            </CardSpotlight>
          </HoverEffect>
        </Reveal>
      </Section>

      {/* RESULTS */}
      <Section title="Results & Impact" index={9}>
        <Reveal>
          <HoverEffect gridClassName="grid-cols-1 gap-6 md:grid-cols-3">
            <CardSpotlight className="resultcard">
              <div className="text-sm font-extrabold tracking-wider uppercase text-base-content/60">
                Engagement
              </div>
              <div className="mt-2 text-4xl font-bold text-success">+32%</div>
              <p className="mt-2 text-sm text-base-content/70">
                Increase in executive dashboard interaction
              </p>
            </CardSpotlight>
            <CardSpotlight className="resultcard">
              <div className="text-sm tracking-wider uppercase text-base-content/60">
                Time to Insight
              </div>
              <div className="mt-2 text-4xl font-bold text-success">-27%</div>
              <p className="mt-2 text-sm text-base-content/70">
                Faster decision-making cycle
              </p>
            </CardSpotlight>
            <CardSpotlight className="resultcard">
              <div className="text-sm tracking-wider uppercase text-base-content/60">
                Support Reduction
              </div>
              <div className="mt-2 text-4xl font-bold text-success">-22%</div>
              <p className="mt-2 text-sm text-base-content/70">
                Decrease in reporting-related tickets
              </p>
            </CardSpotlight>
          </HoverEffect>
        </Reveal>
      </Section>

      {/* LEARNINGS */}
      <Section title="Key Learnings" index={10}>
        <Reveal>
          <HoverEffect gridClassName="gap-6 md:grid-cols-2">
            <div className="learning">
              <h4 className="font-semibold text-primary">
                Systems Thinking Over Screens
              </h4>
              <p className="mt-2 text-sm text-base-content/70">
                Enterprise UX requires understanding workflows, stakeholders,
                and dependencies — not just designing isolated interfaces.
              </p>
            </div>

            <div className="learning">
              <h4 className="font-semibold text-primary">
                Explainability Builds Trust
              </h4>
              <p className="mt-2 text-sm text-base-content/70">
                AI-driven features must communicate confidence, reasoning, and
                context to gain executive adoption.
              </p>
            </div>

            <div className="learning">
              <h4 className="font-semibold text-primary">
                Simplifying Role-Based Complexity
              </h4>
              <p className="mt-2 text-sm text-base-content/70">
                Adaptive dashboards reduced cognitive overload by surfacing only
                context-relevant information per user role.
              </p>
            </div>

            <div className="learning">
              <h4 className="font-semibold text-primary">
                Validate Early, Save Cost
              </h4>
              <p className="mt-2 text-sm text-base-content/70">
                Early usability testing prevented large-scale redesign cycles
                and accelerated stakeholder alignment.
              </p>
            </div>
          </HoverEffect>
        </Reveal>
      </Section>
    </div>
  );
}
