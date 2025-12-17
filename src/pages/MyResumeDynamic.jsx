import React, { useRef } from "react";
import CVtitle from "./CVtitle";
import { AiOutlineGlobal, AiOutlineLinkedin } from "react-icons/ai";
import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

import resume from "@/data/resume.json";
const ICONS = {
  phone: PhoneIcon,
  email: EnvelopeIcon,
  globe: GlobeAltIcon,
  linkedin: AiOutlineLinkedin,
  location: GlobeAltIcon, // or MapPinIcon if you add it
};
function MyResumeDynamic() {
  const resumeRef = useRef(null);

  const {
    basics,
    skills,
    ProfessionalExperience,
    projectHighlights,
    education,
    certifications,
    strengths,
  } = resume[0];

  return (
    <div className="p-10 md:p-10 sm:p-6 print:p-0 blocks">
      {/* PRINT BUTTON */}
      <div className="flex justify-center print:hidden">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 mb-4 text-white bg-blue-700 rounded-lg"
        >
          Download PDF
        </button>
      </div>

      <div
        ref={resumeRef}
        id="resume-container"
        className="max-w-5xl p-4 mx-auto bg-white shadow-xl lg:p-10 sm:p-2 rounded-xl print:p-0 print:shadow-none"
      >
        {/* HEADER */}
        <ResumeHeader basics={basics} />

        {/* PROFILE */}
        <section className="mt-4">
          <CVtitle>About Me</CVtitle>
          {basics.summary.map((line, idx) => (
            <p className="mb-2 text-justify text-gray-700" key={idx}>
              {line}
            </p>
          ))}
        </section>

        {/* SKILLS */}
        <section className="mt-4 text-slate-600">
          <CVtitle>Core Skills</CVtitle>
          <div className="grid gap-6 py-2 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-2 rounded shadow">
                <h4 className="font-bold underline">
                  {category.replace(/(A-Z)/g, "$1")}
                </h4>
                <ul className="px-4 list-disc">
                  {items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {/* EDUCATION */}
        <section className="mt-4 text-slate-600">
          <CVtitle>EDUCATION</CVtitle>
          <h2 className="font-semibold text-blue-600"></h2>
          {education.map((edu, i) => (
            <p key={i} className="flex flex-col py-1 text-gray-700">
              <strong>{edu.degree}</strong>{" "}
              <em className="text-0.5xl">{edu.institution}</em>
            </p>
          ))}
        </section>

        {/* EXPERIENCE */}
        <section className="mt-6 text-slate-700">
          <CVtitle>PROFESSIONAL EXPERIENCE</CVtitle>
          <div className="space-y-8">
            {ProfessionalExperience.map((job, idx) => (
              <div key={idx} className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {/* LEFT COLUMN */}
                <div className="text-sm md:col-span-1 text-slate-600">
                  <p className="font-semibold">{job.period}</p>
                  <p className="mt-1 font-bold text-slate-800">{job.company}</p>
                  {job.location && (
                    <p className="text-xs text-slate-500">{job.location}</p>
                  )}
                </div>

                {/* RIGHT COLUMN */}
                <div className="md:col-span-3">
                  <h3 className="font-bold text-slate-900">{job.role}</h3>

                  <ul className="mt-2 ml-5 space-y-1 list-disc">
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {job.techStack && (
                    <p className="p-4 mt-2 text-sm rounded shadow text-slate-500">
                      <strong className="font-bold underline">
                        Tech Stack:
                      </strong>{" "}
                      {job.techStack.join(", ")}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-6 text-slate-700">
          <CVtitle> PROJECT HIGHLIGHTS</CVtitle>

          {projectHighlights.map((project, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-bold">{project.name}</h3>
              <ul className="ml-5 space-y-1 list-disc">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* LANGUAGES & STRENGTHS */}
        <section className="mt-6 text-slate-700">
          <CVtitle> FUNCTIONAL STRENGTHS & LANGUAGES</CVtitle>
          <div className="grid gap-6 py-2 md:grid-cols-2">
            {Object.entries(strengths).map(([category, items]) => (
              <div key={category} className="p-2 rounded shadow">
                <h4 className="font-bold underline">
                  {category.replace(/(A-Z)/g, "$1")}
                </h4>
                <ul className="px-4 list-disc">
                  {items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mt-6 text-slate-700">
          <CVtitle> CERTIFICATIONS</CVtitle>
          <ul className="ml-5 text-gray-700 list-disc">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MyResumeDynamic;

function ResumeHeader({ basics }) {
  return (
    <header>
      {/* SLANTED HEADER */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-200 clip-header" />

        <div className="relative z-10 flex items-center justify-between px-2 py-8 md:px-10">
          {/* Left Content */}
          <div>
            <h1 className="text-0.5-xl font-extrabold tracking-wide uppercase text-slate-900">
              {basics.name}
            </h1>

            <p className="mt-1 text-sm font-semibold tracking-widest uppercase text-slate-700">
              {basics.titleHead}
            </p>

            <p className="mt-2 text-[0.5rem] tracking-widest uppercase md:text-xs text-slate-600">
              {basics.title}
            </p>
          </div>

          {/* Profile Image */}
          <img
            src={basics.image}
            alt={basics.name}
            className="object-top w-32 h-32 border-4 border-white rounded-full shadow-md"
          />
        </div>
      </div>

      {/* CONTACT STRIP */}
      <div className="w-full py-4 mt-4 border-t-2 border-b-2 ">
        <ul className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-600">
          {basics.links.map((link, idx) => {
            const Icon = ICONS[link.icon];

            return (
              <li key={idx} className="flex items-center gap-2">
                {Icon && (
                  <Icon className="w-5 h-5 text-slate-600-900 shrink-0" />
                )}

                {link.type === "email" ? (
                  <a
                    href={`mailto:${link.value}`}
                    className="hover:underline text-slate-600"
                  >
                    {link.value}
                  </a>
                ) : link.type === "website" || link.type === "linkedin" ? (
                  <a
                    href={link.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-slate-600"
                  >
                    {link.value}
                  </a>
                ) : (
                  <span>{link.value}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
