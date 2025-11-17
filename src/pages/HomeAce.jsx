import React, { useState, useEffect, memo, useMemo } from "react";
import { motion } from "motion/react";
import { FaLocationArrow } from "react-icons/fa";

import profile from "@/data/profile.js";
import experience from "@/data/experience.js";
import projects from "@/data/projects.js";
import myworks from "@/data/myworks.js";

import Reveal from "@/components/common/Reveal.jsx";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { SparklesCore } from "@/components/ui/sparkles";
import { Vortex } from "@/components/ui/vortex";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import MagicButton from "@/components/ui/MagicButton.jsx";
import { Contact2Icon, MailIcon } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import SkillsAbilities from "@/pages/SkillsAbilities";

export default function HomeAce() {
  return (
    <div className="px-4 mx-auto space-y-20 section sm:px-10 lg:px-8 sm:col-1 ptop">
      {/* 🌟 Hero Section */}
      <Reveal direction="up">
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 min-h-[80vh] text-center md:text-left">
          {/* Left Column */}

          <div className="flex flex-col items-center justify-around px-6 space-y-5 md:items-start">
            <div className="sm:px-6 sm:w-full">
              <h1 className="mb-4 text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl font-heading bg-gradient-to-l from-cyan-600 to-indigo-500 bg-clip-text">
                {profile.name}
              </h1>

              <p className="mb-4 text-base font-medium text-slate-300">
                <FlipWordsAce />
              </p>

              <p className="max-w-md min-w-full text-sm font-normal leading-relaxed text-justify text-slate-400 sm:text-base summary">
                {profile.summary.split("\n")[0]}
              </p>
              <p className="max-w-md min-w-full text-sm font-normal leading-relaxed text-justify text-slate-400 sm:text-base summary">
                {profile.summary.split("\n")[1]}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-6 md:justify-start sm:px-6">
              {/* <button className="h-10 px-4 py-2 text-sm text-center text-white transition border w-36 sm:w-40 rounded-xl bg-blue-600/10 hover:bg-blue-600/50 border-blue-600/20">
                Contact →
              </button> */}

              {/* <button className="h-10 px-4 py-2 text-sm text-center text-white transition border w-36 sm:w-40 rounded-xl bg-blue-600/10 hover:bg-blue-600/50 border-blue-600/20">
                Projects →
              </button> */}

              <a href="#about">
                <MagicButton
                  title="Contact"
                  icon={<MailIcon />}
                  // position="right"
                />
              </a>
              <a href="#about">
                <MagicButton
                  title="Projects"
                  icon={<FaLocationArrow />}
                  // position="right"
                />
              </a>
            </div>
          </div>

          {/* Right Column — Image Slider */}
          <div className="flex items-center justify-center">
            <ImagesSliderAce />
          </div>
        </section>
      </Reveal>
      {/* 💼 Projects Section */}
      <Reveal direction="up" delay={0.2}>
        <section>
          <SparklesAce title="Projects">
            <InfiniteMovingCardsAce items={projects} />
          </SparklesAce>
        </section>
      </Reveal>

      {/* 🧠 Experience Section */}
      <Reveal direction="up" delay={0.4}>
        <section>
          <SparklesAce title="Experience">
            <AnimatedTestimonialsAce data={experience} />
          </SparklesAce>
        </section>
      </Reveal>
      <Reveal direction="up" delay={0.5}>
        <section>
          <SparklesAce title="Apple">
            <AppleCardsCarouselAce />
          </SparklesAce>
        </section>
      </Reveal>
      <Reveal direction="up" delay={0.5}>
        <section>
          <SparklesAce title="Works">
            <LayoutGridAce />
          </SparklesAce>
        </section>
      </Reveal>
      <Reveal direction="up" delay={0.6}>
        <section>
          <SparklesAce title="Skills">
            <ThreeDMarqueeAce />
          </SparklesAce>
        </section>
      </Reveal>

      <Reveal direction="up" delay={0.6}>
        <section>
          <SparklesAce title="Skills">
            <SkillsAbilities />
          </SparklesAce>
        </section>
      </Reveal>

      {/* <Reveal>
        <HeroScrollAce
          title="My Works"
          children={`${myworks.map((projectImg) => projectImg)}`}
        />
      </Reveal> */}
      {/* <Reveal>
        <HeroScrollAceV2 title="My Works" images={myworks} />
      </Reveal> */}
    </div>
  );
}

const FlipWordsAce = memo(function FlipWordsAce() {
  const words = useMemo(() => ["Designer", "Front-End Developer"], []);
  return (
    <span className="inline-flex text-lg sm:text-xl text-neutral-400 dark:text-neutral-300">
      Lead UI/UX <FlipWords words={words} />
    </span>
  );
});

const SparklesSection = memo(function SparklesSection({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-6 mt-16 overflow-hidden bg-black rounded-xl sm:p-10">
      <h2 className="mb-6 text-xl font-bold text-center text-white sm:text-2xl lg:text-4xl">
        {title}
      </h2>

      <div className="relative w-full h-8 max-w-5xl mb-8">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_150px_at_top,transparent_20%,white)]"></div>
      </div>

      <div className="w-full h-auto">{children}</div>
    </div>
  );
});
const InfiniteMovingCardsAce = memo(function InfiniteMovingCardsAce({ items }) {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center overflow-hidden p-4">
      <InfiniteMovingCards items={items} direction="right" speed="slow" />
    </div>
  );
});

const AnimatedTestimonialsAce = memo(function AnimatedTestimonialsAce({
  data,
}) {
  return <AnimatedTestimonials testimonials={data} />;
});
const ImagesSliderAce = memo(function ImagesSliderAce() {
  const images = [
    "./shibu.png",
    "./sjr-logo.png",
    "./RI360.png",
    "./DW360.png",
    "./Finalytics.png",
    "./PIXD.png",
    "./FHC.png",
    "./popShop.png",
    "./popShopAdmin.png",
    "./popShopAdminDashboard.png",
    "./popShopOrderDetails.png",
    "./timeline-curve.svg",
    "./AxMigration-timeline-curve.svg",
    "./AxMigration-timeline-text.svg",
    "./timeline.svg",
  ];
  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
      <ImagesSlider
        className="h-[20rem] sm:h-[25rem] md:h-[30rem]"
        images={images}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col items-center justify-center"
        />
      </ImagesSlider>
    </div>
  );
});
function SparklesAce({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden bg-black rounded-md">
      <h1 className="relative z-20 text-xl font-bold text-center text-white md:text-2xl lg:text-4xl">
        {title}
      </h1>
      <div className="w-[40rem] h-auto relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute top-0 w-3/4 h-px inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute top-0 w-1/4 h-px inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-20"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      {children}
    </div>
  );
}

function HeroScrollAce({ title, children }) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {title}
              <br />
              {/* <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span> */}
            </h1>
          </>
        }
      >
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {loadedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`work-${index}`}
              height={300}
              width={400}
              className="object-cover transition-opacity duration-700 opacity-100 rounded-2xl"
            />
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
}

function HeroScrollAceV2({ title, images }) {
  return (
    <div className="flex flex-col overflow-hidden">
      {images.map((img, index) => (
        <ContainerScroll
          key={index}
          titleComponent={
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {title} #{index + 1}
            </h1>
          }
        >
          <ScrollBody image={img} />
        </ContainerScroll>
      ))}
    </div>
  );
}

function ScrollBody({ image }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setLoaded(true);
  }, [image]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      {!loaded ? (
        <div className="w-16 h-16 border-4 border-gray-300 rounded-full border-t-indigo-500 animate-spin" />
      ) : (
        <img
          src={image}
          alt="my work"
          height={720}
          width={1400}
          className="object-cover object-center h-full mx-auto opacity-0 rounded-2xl animate-fadeIn"
          draggable={false}
        />
      )}
    </div>
  );
}

function LayoutGridAce() {
  return (
    <div className="w-full h-screen py-20">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Retail Intelligence 360
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        Our Retail Intelligence 360 aids firms in effectively targeting sales
        and marketing for maximum growth and market placement.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">Hy Cite</p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        Define new business objective by selecting KPIs, set thresholds, success
        criteria etc. Set up alerts to stay on top of critical updates.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        The Principle 6
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        Leveraging the power of cooperative cooperation
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">Sump Cleaner</p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        Clean sumps faster, smarter and safer
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "./Dashboard.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "./DashboardSummary.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "./Landing.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "./ProductDetail.png",
  },
];

function AuroraBackgroundAce({ children }) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        {children}
      </motion.div>
    </AuroraBackground>
  );
}
function VortexAce({ children }) {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex flex-col items-center justify-center w-full h-full px-2 py-4 md:px-10"
      >
        {children}
      </Vortex>
    </div>
  );
}

function ThreeDMarqueeAce() {
  const images = [
    "./skills/bootstrap.png",
    "./skills/canva.png",
    "./skills/figma.png",
    "./skills/html.png",
    "./skills/illustrator.png",
    "./skills/html.png",
    "./skills/javascript.png",
    "./skills/mongo.png",
    "./skills/nextjs.png",
    "./skills/node.png",
    "./skills/photoshop.png",
    "./skills/premier.png",
    "./skills/react.png",
    "./skills/visualstudio.png",
    "./skills/figma.png",
    "./skills/bootstrap.png",
    "./skills/canva.png",
    "./skills/figma.png",
    "./skills/html.png",
    "./skills/illustrator.png",
    "./skills/node.png",
    "./skills/javascript.png",
    "./skills/mongo.png",
    "./skills/nextjs.png",
    "./skills/node.png",
    "./skills/photoshop.png",
    "./skills/nextjs.png",
    "./skills/react.png",
    "./skills/visualstudio.png",
    "./skills/premier.png",
  ];
  return (
    <div className="p-2 mx-auto my-10 max-w-7xl ring-1 ring-neutral-700/10">
      <ThreeDMarquee images={images} />
    </div>
  );
}

function AppleCardsCarouselAce() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="pl-4 mx-auto font-sans text-xl font-bold max-w-7xl md:text-5xl text-neutral-800 dark:text-neutral-200">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="max-w-3xl mx-auto font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="object-contain w-full h-full mx-auto md:w-1/2 md:h-1/2"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
