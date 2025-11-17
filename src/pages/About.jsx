import React from "react";
import profile from "@/data/profile.js";
import Reveal from "@/components/common/Reveal.jsx";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <main className="section space-y-16 pt-24">
      <BackgroundBoxes />
    </main>
  );
}

function BackgroundBoxes() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <AboutUs />
      <SkillsSet />
    </div>
  );
}

function AboutUs() {
  return (
    <>
      <Reveal>
        <h1
          className={cn(
            "md:text-4xl text-xl text-white relative z-20 text-center"
          )}
        >
          About Me
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20 container px-6">
          I’m <strong>{profile.name}</strong>, a passionate{" "}
          <span className="text-secondary">{profile.title}</span> with over 15
          years of experience designing and developing human-centered digital
          products.
        </p>
      </Reveal>
    </>
  );
}

function SkillsSet() {
  return (
    <Reveal delay={0.2}>
      <h3 className={cn("text-2xl font-semibold text-secondary mb-4")}>
        Core Skills
      </h3>
      <div className={cn("flex flex-wrap gap-3")}>
        {profile.skills.map((skill, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <span className="px-3 py-1 border border-primary text-primary rounded-full text-sm">
              {skill}
            </span>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
