import React, { memo, useMemo } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MailIcon } from "lucide-react";

import profile from "@/data/profile.js";
import experience from "@/data/experience.js";
import projects from "@/data/projects.js";

import Reveal from "@/components/common/Reveal.jsx";
import { ImagesSlider } from "@/components/ui/images-slider";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { SparklesCore } from "@/components/ui/sparkles";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { FlipWords } from "@/components/ui/flip-words";
import MagicButton from "@/components/ui/MagicButton.jsx";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function Home() {
  return (
    <div className="px-4 py-16 mx-auto space-y-24 max-w-7xl sm:px-8 lg:px-12">
      {/* HERO */}
      <Reveal>
        <HeroSection />
      </Reveal>

      {/* PROJECTS */}
      <Reveal delay={0.2}>
        <SectionWrapper title="Projects">
          <InfiniteMovingCards
            items={projects}
            direction="right"
            speed="slow"
          />
        </SectionWrapper>
      </Reveal>

      {/* EXPERIENCE */}
      <Reveal delay={0.3}>
        <SectionWrapper title="Experience">
          <AnimatedTestimonials testimonials={experience} />
        </SectionWrapper>
      </Reveal>

      {/* WORKS */}
      <Reveal delay={0.4}>
        <SectionWrapper title="Works">
          <div className="min-h-[600px]">
            {/* <LayoutGrid cards={cards} /> */}
            <CardCarousel />
          </div>
        </SectionWrapper>
      </Reveal>

      {/* SKILLS */}
      <Reveal delay={0.5}>
        <SectionWrapper title="Skills">
          <div className="p-2 mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5  ring-neutral-700/10 dark:bg-neutral-800">
            <ThreeDMarquee images={skillImages} />
          </div>
        </SectionWrapper>
      </Reveal>
    </div>
  );
}

/* ================= HERO ================= */

function HeroSection() {
  return (
    <section className="grid items-center min-h-[80vh] grid-cols-1 gap-12 md:grid-cols-2 text-center md:text-left">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl bg-gradient-to-l from-cyan-500 to-indigo-500 bg-clip-text">
          {profile.name}
        </h1>

        <FlipWordsAce />

        <p className="max-w-lg mx-auto text-sm leading-relaxed text-slate-400 md:mx-0 sm:text-base">
          {profile.summary}
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          <a href="/contactus">
            <MagicButton title="Contact" icon={<MailIcon />} />
          </a>
          <a href="/projects">
            <MagicButton title="Projects" icon={<FaLocationArrow />} />
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <ImagesSlider className="h-[22rem] sm:h-[28rem]" images={heroImages} />
      </div>
    </section>
  );
}

/* ================= SECTION WRAPPER ================= */

function SectionWrapper({ title, children }) {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden rounded-2xl">
      <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>

      <div className="relative w-full h-20 max-w-3xl my-6">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute top-0 w-3/4 h-px inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute top-0 w-1/4 h-px inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#ffffff"
        />
        <div className="absolute inset-0 w-full h-full bg-slate-950/50 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <div className="w-full px-4">{children}</div>
    </div>
  );
}

/* ================= FLIP WORDS ================= */

const FlipWordsAce = memo(function FlipWordsAce() {
  const words = useMemo(() => ["Designer", "Front-End Developer"], []);
  return (
    <p className="text-lg text-neutral-400">
      Lead UI/UX <FlipWords words={words} />
    </p>
  );
});

/* ================= DATA ================= */

const heroImages = [
  "./shibu.png",
  "./RI360.png",
  "./DW360.png",
  "./Finalytics.png",
];

const skillImages = [
  "/skills/nextjs.png",
  "/skills/bootstrap.png",
  "/skills/canva.png",
  "/skills/figma.png",
  "/skills/html.png",
  "/skills/illustrator.png",
  "/skills/javascript.png",
  "/skills/mongo.png",
  "/skills/nextjs.png",
  "/skills/node.png",
  "/skills/photoshop.png",
  "/skills/premier.png",
  "/skills/react.png",
  "/skills/visualstudio.png",
  "/skills/html.png",
  "/skills/illustrator.png",
  "/skills/javascript.png",
  "/skills/mongo.png",
  "/skills/node.png",
  "/skills/bootstrap.png",
  "/skills/canva.png",
  "/skills/figma.png",
  "/skills/html.png",
  "/skills/illustrator.png",
  "/skills/javascript.png",
  "/skills/mongo.png",
  "/skills/bootstrap.png",
  "/skills/canva.png",
  "/skills/figma.png",
  "/skills/html.png",
  "/skills/illustrator.png",
  "/skills/javascript.png",
  "/skills/mongo.png",
  "/skills/canva.png",
  "/skills/mongo.png",
  "/skills/photoshop.png",
  "/skills/node.png",
  "/skills/photoshop.png",
  "/skills/premier.png",
  "/skills/react.png",
  "/skills/visualstudio.png",
  "/skills/photoshop.png",
  "/skills/nextjs.png",
];

const cards = [
  {
    id: 1,
    content: (
      <CardContent
        title="Retail Intelligence 360"
        desc="AI-powered retail insights platform. Retailers are equipped with the latest BI platforms, yet they are unable to easily get to the pulse of their Business, Market or Customer. Reports and charts alone can only go so far - Businesses need ready-to-consume insights without needing data analysts to explain them!"
      />
    ),
    className: "md:col-span-2",
    thumbnail: "./Dashboard.png",
  },
  {
    id: 2,
    content: (
      <CardContent
        title="Hy Cite"
        desc="The Hy Cite KPI dashboard was designed with enterprise-grade security at its foundation. Each user’s access is dynamically controlled through row-level security (RLS), ensuring visibility is limited strictly to authorized data.

By integrating role-based permissions and structured workspace governance, the solution protects sensitive business metrics while maintaining a seamless user experience.

Whether accessed by internal stakeholders or distributed across departments, the dashboard delivers secure, performance-optimized insights—empowering decision-making without compromising data integrity."
      />
    ),
    thumbnail: "./DashboardSummary.png",
  },
  {
    id: 3,
    content: (
      <CardContent
        title="IRGA Plantation Performance Analysis Report"
        desc="We designed and developed a comprehensive web application that integrates Power BI reports to deliver advanced data visualization and actionable insights. The platform supports automated data uploads, enabling Power BI dashboards to refresh dynamically with the latest information for real-time tracking of expenditure, yield metrics, and forecasting.

An integrated admin module manages user roles and permissions, ensuring secure, role-based access to sensitive operational data.

The solution transformed raw plantation data into interactive, decision-ready dashboards. Automated data workflows reduced manual processing time, while structured access control maintained data integrity and security. As a result, stakeholders gained faster, more accurate insights to support strategic planning and operational efficiency."
      />
    ),
    thumbnail: "./IRGA.png",
  },
  {
    id: 4,
    content: (
      <CardContent
        title="Sump Cleaner"
        desc={`Mazak Fluid Solutions designs and manufactures industrial systems such as Sump Shark® sump cleaners, dumping hoppers, and coolant dispensers—critical equipment that maintains fluid integrity, prevents contamination, and ensures safe, efficient manufacturing operations.

For this project, we developed both a corporate website and a centralized monitoring dashboard platform.

The website communicates product capabilities, technical specifications, and industry applications in a clear, conversion-focused structure. It strengthens brand positioning while making complex industrial solutions accessible to decision-makers.

The dashboard platform enables real-time monitoring of dumping hoppers and coolant dispensers, allowing operators to track performance metrics, manage fluid levels, schedule maintenance, and order replacement parts. Role-based access ensures secure system oversight across teams and facilities.

By combining a marketing-driven web presence with a data-driven operational dashboard, the solution bridges product communication and real-world industrial performance management.`}
      />
    ),
    className: "md:col-span-2",
    thumbnail: "./ProductDetail.png",
  },
];

function CardContent({ title, desc }) {
  return (
    <div>
      <p className="text-xl font-bold text-primary md:text-3xl">{title}</p>
      <p className="mt-3 text-slate-700">{desc}</p>
    </div>
  );
}

function CardCarousel() {
  const mappedCards = cards.map((card, index) => (
    <Card
      key={card.thumbnail}
      card={{
        src: card.thumbnail,
        title: card.content.props.title,
        category: "",
        content: card.content,
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full">
      {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Selected Works
      </h2> */}

      <Carousel items={mappedCards} />
    </div>
  );
}
