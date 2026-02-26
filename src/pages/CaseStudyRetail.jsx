import { GridBackgroundAce } from "@/components/ui/GridBackground";
import Carousel from "@/components/ui/carousel";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import PersonaCard from "@/pages/PersonaCard";
import { personas } from "@/data/personas";
import React from "react";

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
      className={`px-6 py-20 border-b border-base-300 ${isEven ? "bg-slate-700" : "bg-slate-950"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 text-3xl font-bold md:text-4xl text-emerald-600">
          {title}
        </h2>
        <div className="space-y-6 leading-relaxed text-base-content/80">
          {children}
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ title, children }) {
  return (
    <div className="border shadow-md card bg-base-100 border-base-300 ">
      <div className="card-body">
        <h3 className="card-title text-secondary">{title}</h3>
        <p className="text-sm text-base-content/70">{children}</p>
      </div>
    </div>
  );
}

/* ---------- Main Page ---------- */

export default function CaseStudyRetail() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* HERO */}
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 [background-size:40px_40px] 
  [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),
  linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
  dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),
  linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
      ></div>
      <div className="relative z-10 overflow-hidden hero bg-gradient-to-r from-slate-900 to-secondary text-primary-content py-28">
        <img
          src="./bgcard.png"
          className="absolute top-0 right-0 hue-rotate-45 opacity-5"
        />
        <div className="w-full max-w-4xl mx-auto text-center hero-content">
          <div>
            <h1 className="mb-6 text-5xl font-bold text-emerald-800">
              Retail AI Insights 360
            </h1>
            <p className="text-lg opacity-90">
              Designing an AI-powered enterprise analytics platform focused on
              insight-first decision intelligence.
            </p>
            <div className="mt-6 badge badge-outline badge-lg">
              <span className="font-extrabold">Enterprise SaaS </span>•{" "}
              <span className="font-extrabold">AI Analytics </span>•{" "}
              <span className="font-extrabold">UX Strategy</span>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT VISION */}
      <Section title="Project Vision" index={0}>
        <p>
          Transform complex retail data into clear, actionable AI-driven
          insights that enable executives and managers to make faster, smarter
          decisions.
        </p>
        <p>
          Instead of building another dashboard, the goal was to create an
          insight-first decision intelligence platform.
        </p>
      </Section>

      {/* PROBLEM */}
      <Section title="Problem" index={1}>
        <ul className="pl-6 space-y-2 list-disc">
          <li>Retailers struggled with complex BI dashboards</li>
          <li>AI predictions lacked explainability</li>
          <li>Data-heavy interfaces caused cognitive overload</li>
          <li>Low adoption and heavy Excel exports</li>
        </ul>
      </Section>

      {/* CONSTRAINTS */}
      <Section title="Constraints" index={2}>
        <ul className="pl-6 space-y-2 list-disc">
          <li>Large enterprise datasets</li>
          <li>Role-Based Access Control (RBAC)</li>
          <li>Performance limitations</li>
          <li>Security & compliance requirements</li>
        </ul>
      </Section>

      {/* PERSONAS */}
      <Section title="Meet the Users (Personas)" index={3}>
        <div className="grid items-stretch gap-8 md:grid-cols-3">
          {personas.map((persona, index) => (
            <PersonaCard key={index} {...persona} />
          ))}
        </div>
      </Section>

      {/* RESEARCH */}
      <Section title="Research" index={4}>
        <p>
          Conducted stakeholder workshops, user interviews, usability testing,
          and analytics review.
        </p>
        <div className="mt-6 shadow stats">
          <div className="stat">
            <div className="stat-title">User Interviews</div>
            <div className="stat-value">12</div>
          </div>
          <div className="stat">
            <div className="stat-title">Key Insight</div>
            <div className="text-sm stat-value">
              “We don’t want data. We want answers.”
            </div>
          </div>
        </div>
      </Section>

      {/* UX STRATEGY */}
      <Section title="UX Strategy" index={5}>
        <div className="grid gap-6 md:grid-cols-2">
          <HighlightCard title="Insight-First Layout">
            Prioritized alerts and summaries before detailed charts.
          </HighlightCard>
          <HighlightCard title="Role-Based Personalization">
            Custom dashboards for executives and managers.
          </HighlightCard>
          <HighlightCard title="Explainable AI">
            Confidence scores and reasoning for predictions.
          </HighlightCard>
          <HighlightCard title="Progressive Disclosure">
            Summary first, drill-down when needed.
          </HighlightCard>
        </div>
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
      <Section title="Accessibility (WCAG 2.2)" index={7}>
        <ul className="pl-6 space-y-2 list-disc">
          <li>AA color contrast compliance</li>
          <li>Keyboard navigability</li>
          <li>ARIA labels for charts</li>
          <li>Clear error & empty states</li>
        </ul>
      </Section>

      {/* DESIGN SYSTEM */}
      <Section title="Design System Decisions" index={8}>
        <div className="grid gap-6 md:grid-cols-3">
          <HighlightCard title="Reusable Insight Cards">
            Standardized KPI & alert components.
          </HighlightCard>
          <HighlightCard title="Data Table Pattern">
            Sticky headers, bulk actions, saved filters.
          </HighlightCard>
          <HighlightCard title="Semantic Color Tokens">
            Success, warning, and critical states.
          </HighlightCard>
        </div>
      </Section>

      {/* RESULTS */}
      <Section title="Results & Impact" index={9}>
        <div className="shadow stats">
          <div className="stat">
            <div className="stat-title">Engagement</div>
            <div className="stat-value text-success">+32%</div>
          </div>
          <div className="stat">
            <div className="stat-title">Time to Insight</div>
            <div className="stat-value text-success">-27%</div>
          </div>
          <div className="stat">
            <div className="stat-title">Support Reduction</div>
            <div className="stat-value text-success">-22%</div>
          </div>
        </div>
      </Section>

      {/* LEARNINGS */}
      <Section title="Learnings" index={10}>
        <ul className="pl-6 space-y-2 list-disc">
          <li>Enterprise UX requires systems thinking</li>
          <li>AI must be explainable to build trust</li>
          <li>Role-based complexity needs simplification</li>
          <li>Early validation prevents redesign cost</li>
        </ul>
      </Section>
    </div>
  );
}
