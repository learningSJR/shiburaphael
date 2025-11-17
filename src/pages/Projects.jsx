import React from "react";
import profile from "@/data/profile.js";
import Reveal from "@/components/common/Reveal.jsx";
import Button from "@/components/ui/Button.jsx";
import WeatherApp from "./WeatherApp";

export default function Projects() {
  return (
    <main className="section space-y-16 xl:px-12">
      <Reveal>
        <h2 className="text-4xl font-heading font-bold text-primary text-center">
          Projects
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8">
        {profile.projects.map((project, i) => (
          <Reveal key={i} delay={i * 0.15}>
            <div className="card">
              <h3 className="text-xl font-semibold text-primary">
                {project.title}
              </h3>
              <p className="text-slate-700 text-sm mt-2">{project.desc}</p>
              <p className="text-xs text-secondary mt-3">{project.framework}</p>
              <Button variant="outline" className="mt-4">
                View Details
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
      <WeatherApp />
    </main>
  );
}
