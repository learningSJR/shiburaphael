import React from "react";
import profile from "@/data/profile.js";
import Reveal from "@/components/common/Reveal.jsx";
import Button from "@/components/ui/Button.jsx";
import WeatherApp from "./WeatherApp";

export default function Projects() {
  return (
    <main className="space-y-16 section xl:px-12">
      <Reveal>
        <h2 className="text-4xl font-bold text-center font-heading text-primary">
          Projects
        </h2>
      </Reveal>

      <div className="container">
        <div className="grid items-stretch gap-8 shadow md:grid-cols-2">
          {profile.projects.map((project, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="flex flex-col h-full card">
                <h3 className="text-xl font-semibold text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{project.desc}</p>
                <p className="mt-3 text-xs font-bold text-secondary">
                  {project.framework}
                </p>
                {/* <Button variant="outline" className="mt-4">
                View Details
              </Button> */}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="flex justify-center w-full mt-6">
          <WeatherApp />
        </div>
      </div>
    </main>
  );
}
