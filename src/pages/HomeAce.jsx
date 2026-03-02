import React, { memo, useMemo } from "react";
import { motion } from "motion/react";
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

export default function HomeAce() {
  return (
    <div className="px-4 mx-auto space-y-24 max-w-7xl sm:px-8 lg:px-12">
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
          <div className="py-10">
            <LayoutGrid cards={cards} />
          </div>
        </SectionWrapper>
      </Reveal>

      {/* SKILLS */}
      <Reveal delay={0.5}>
        <SectionWrapper title="Skills">
          <div className="py-20">
            <ThreeDMarquee images={skillImages} />
          </div>
        </SectionWrapper>
      </Reveal>
    </div>
  );
}

/* ============================
   HERO
============================ */

function HeroSection() {
  return (
    <section className="grid items-center min-h-[80vh] grid-cols-1 gap-12 md:grid-cols-2 text-center md:text-left">
      {/* LEFT */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl bg-gradient-to-l from-cyan-500 to-indigo-500 bg-clip-text">
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

      {/* RIGHT */}
      <div className="flex justify-center">
        <ImagesSlider className="h-[22rem] sm:h-[28rem]" images={heroImages} />
      </div>
    </section>
  );
}

/* ============================
   SECTION WRAPPER
============================ */

function SectionWrapper({ title, children }) {
  return (
    <div className="flex flex-col items-center w-full py-16 overflow-hidden bg-black/60 backdrop-blur-xl rounded-2xl">
      <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>

      <div className="relative w-full h-12 max-w-3xl my-6">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={800}
          className="w-full h-full"
          particleColor="#ffffff"
        />
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <div className="w-full px-4">{children}</div>
    </div>
  );
}

/* ============================
   FLIP WORDS
============================ */

const FlipWordsAce = memo(function FlipWordsAce() {
  const words = useMemo(() => ["Designer", "Front-End Developer"], []);
  return (
    <p className="text-lg text-neutral-400">
      Lead UI/UX <FlipWords words={words} />
    </p>
  );
});

/* ============================
   DATA
============================ */

const heroImages = [
  "./shibu.png",
  "./RI360.png",
  "./DW360.png",
  "./Finalytics.png",
];

const skillImages = [
  "./skills/bootstrap.png",
  "./skills/canva.png",
  "./skills/figma.png",
  "./skills/html.png",
  "./skills/illustrator.png",
  "./skills/javascript.png",
  "./skills/mongo.png",
  "./skills/nextjs.png",
  "./skills/node.png",
  "./skills/photoshop.png",
  "./skills/premier.png",
  "./skills/react.png",
  "./skills/visualstudio.png",
];

const cards = [
  {
    id: 1,
    content: (
      <CardContent
        title="Retail Intelligence 360"
        desc="AI-powered retail insights platform."
      />
    ),
    className: "md:col-span-2",
    thumbnail: "./Dashboard.png",
  },
  {
    id: 2,
    content: (
      <CardContent title="Hy Cite" desc="KPI dashboard & reporting system." />
    ),
    thumbnail: "./DashboardSummary.png",
  },
  {
    id: 3,
    content: (
      <CardContent
        title="The Principle 6"
        desc="Cooperative collaboration platform."
      />
    ),
    thumbnail: "./Landing.png",
  },
  {
    id: 4,
    content: (
      <CardContent
        title="Sump Cleaner"
        desc="Industrial cleaning workflow app."
      />
    ),
    className: "md:col-span-2",
    thumbnail: "./ProductDetail.png",
  },
];

function CardContent({ title, desc }) {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-2xl">{title}</p>
      <p className="mt-3 text-neutral-300">{desc}</p>
    </div>
  );
}
