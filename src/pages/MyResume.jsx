import React, { useRef } from "react";
import { AiOutlineGlobal, AiOutlineLinkedin } from "react-icons/ai";
import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

function MyResume() {
  const resumeRef = useRef(null);
  return (
    <div className="p-6 blocks print:p-0">
      <div className="flex justify-center print:hidden">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 mb-4 text-white bg-blue-700 rounded-lg print:p-0"
        >
          Download PDF
        </button>
      </div>

      <div
        ref={resumeRef}
        id="resume-container"
        className="max-w-5xl p-10 mx-auto bg-white shadow-xl rounded-xl print:p-0 print:shadow-none"
      >
        {/* your full resume content */}
        {/* HEADER */}
        <header className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] items-center gap-6">
            <img
              src="/shibu-sjr.jpg"
              alt="Shibu John Raphael"
              className="w-16 h-16 mx-auto rounded-full sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 outline outline-2 outline-slate-300 outline-offset-4"
            />
            <div className="">
              <h1 className="text-2xl font-bold text-blue-900 sm:text-3xl">
                Shibu John Raphael
              </h1>
              <p className="text-sm text-gray-600">
                Front-End Developer (React.js) • UI Engineer • AI-Augmented
                Developer
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-600 ">
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="text-blue-900 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              +91-9790740963
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="text-blue-900 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <a
                href="mailto:shiburaphael@gmail.com"
                className="hover:text-blue-600"
              >
                shiburaphael@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineLinkedin className="w-4 h-6 text-blue-950" />

              <a
                href="https://www.linkedin.com/in/shiburaphael/"
                className="hover:text-blue-600"
              >
                https://www.linkedin.com/in/shiburaphael/
              </a>
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineGlobal className="w-4 h-6 text-blue-950" />

              <a
                href="https://www.shiburaphael.netlify.app/"
                className="hover:text-blue-600"
              >
                shiburaphael.netlify.app
              </a>
            </p>
          </div>
        </header>

        <hr className="my-6" />
        {/* PROFILE */}
        <section>
          <h2 className="mb-2 font-semibold text-blue-600">PROFILE</h2>
          <p className="leading-relaxed text-gray-700">
            Front-End Developer (React.js) with 5+ years of hands-on experience
            building scalable, performant, and responsive web applications,
            backed by 10+ years of UI/UX expertise. Specialized in React.js,
            Redux, Tailwind CSS, Material UI, Bootstrap, Shadcn UI, reusable
            component architecture, micro-frontends with Module Federation, REST
            API integration, and performance optimization. Strong advocate of
            accessibility, clean code, automated testing and AI-augmented
            development workflows.
          </p>
        </section>

        <hr className="my-6" />
        {/* SKILLS */}
        <section className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-2 font-semibold text-blue-600">
              REACT.JS FRONT-END ENGINEERING
            </h2>
            <ul className="ml-5 space-y-1 text-gray-700 list-disc">
              <li>React.js, Redux workflows, component-driven development</li>
              <li>JavaScript (ES6+), HTML5, CSS3, SCSS</li>
              <li>Tailwind CSS, Material UI, Bootstrap, ShadCN UI</li>
              <li>Micro-frontends (Module Federation)</li>
              <li>REST APIs, JWT authentication</li>
              <li>Webpack, Vite, npm/yarn, CI/CD pipelines</li>
              <li>Reusable component libraries, UI style guide development</li>
              <li>Git, GitHub, distributed workflows</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-semibold text-blue-600">
              UX & PRODUCT DESIGN
            </h2>
            <ul className="ml-5 space-y-1 text-gray-700 list-disc">
              <li>UX research, usability testing, wireframes & prototypes</li>
              <li>Figma, Adobe XD, Axure, Framer</li>
              <li>Responsive design & accessibility (WCAG)</li>
              <li>Design systems, component consistency</li>
              <li>AI-assisted design & dev workflows</li>
              <li>Performance optimization & Lighthouse improvements</li>
            </ul>
          </div>
        </section>

        <div className="page-break"></div>
        <hr className="my-6" />
        {/* EXPERIENCE */}
        <section>
          <h2 className="mb-3 font-semibold text-blue-600">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div>
            <h3 className="text-lg font-bold text-blue-900">
              Lead Front-End Developer & UI/UX Specialist
            </h3>
            <p className="mb-2 text-sm text-gray-600">
              Customer Analytics Pvt. Ltd, Chennai — 2009–2024
            </p>

            <ul className="ml-5 space-y-2 text-gray-700 list-disc">
              <li>
                Built scalable front-end apps using{" "}
                <strong>
                  React.js, Tailwind CSS, Material UI, Bootstrap, ShadCN UI
                </strong>
                .
              </li>
              <li>
                Developed <strong>30+ reusable React components</strong>,
                boosting development speed.
              </li>
              <li>
                Implemented <strong>micro-frontends</strong> using Module
                Federation across distributed teams.
              </li>
              <li>
                Improved performance by <strong>30%</strong> through code
                optimization and memoization.
              </li>
              <li>
                Reduced bundle size by <strong>22%</strong> using tree-shaking
                and dynamic imports.
              </li>
              <li>
                Improved Lighthouse score from <strong>68 → 92</strong> and
                reduced load time by <strong>2.3 seconds</strong>.
              </li>
              <li>
                Delivered <strong>5+ micro-frontend modules</strong> for modular
                deployment.
              </li>
              <li>
                Strengthened UI consistency with design systems and component
                libraries.
              </li>
              <li>
                Used AI-assisted tools to improve code quality and accelerate
                development.
              </li>
              <li>
                Collaborated closely with backend, product, and QA teams using
                CI/CD workflows.
              </li>
            </ul>
          </div>
        </section>

        <hr className="my-6" />

        {/* PROJECTS */}
        <section>
          <h2 className="mb-3 font-semibold text-blue-600">
            PROJECT HIGHLIGHTS
          </h2>

          {/* CodaWorx */}
          <div className="mb-4">
            <h3 className="font-bold text-blue-900">CodaWorx</h3>
            <ul className="ml-5 space-y-1 text-gray-700 list-disc">
              <li>
                Developed scalable UI components using React.js + Tailwind CSS.
              </li>
              <li>
                Built dashboards, listing components and reusable UI modules.
              </li>
              <li>Integrated REST APIs and improved rendering performance.</li>
            </ul>
          </div>

          {/* CustomerAnalytics.com */}
          <div className="mb-4">
            <h3 className="font-bold text-blue-900">
              CustomerAnalytics.com — Corporate Website
            </h3>
            <ul className="ml-5 space-y-1 text-gray-700 list-disc">
              <li>Developed full React.js website UI with Tailwind + SCSS.</li>
              <li>
                Implemented SEO-friendly pages, reusable layouts, lazy loading &
                optimized assets.
              </li>
              <li>
                Improved Lighthouse scores and ensured WCAG accessibility.
              </li>
            </ul>
          </div>

          {/* The Hub */}
          <div className="mb-4">
            <h3 className="font-bold text-blue-900">
              The Hub Re-Platform — Tempur Sealy International
            </h3>
            <ul className="ml-5 space-y-1 text-gray-700 list-disc">
              <li>
                Built intuitive React components and API-driven UI screens.
              </li>
              <li>
                Improved engagement through UX enhancements and workflow
                improvements.
              </li>
            </ul>
          </div>

          {/* Other projects */}
          <div>
            <h3 className="font-bold text-blue-900">Other Projects</h3>
            <p className="text-gray-700">
              Royal Prestige, iMetx, TSI Connect Retailer, Product Pricing
              Portal — delivered responsive React UIs, component libraries,
              micro-frontend modules, and mobile-first solutions across multiple
              enterprise products.
            </p>
          </div>
        </section>

        <hr className="my-6" />
        <div className="page-break"></div>
        {/* EDUCATION */}
        <section>
          <h2 className="font-semibold text-blue-600">EDUCATION</h2>
          <p className="mt-2 text-gray-700">
            <strong>Bachelor of Commerce</strong> — University of Kerala
          </p>
        </section>
        <p className="text-gray-700">
          <strong>
            Post Graduate Diploma in Computer Applications (PGDCA)
          </strong>
          — Bytel Info Tech
        </p>
        <p className="text-gray-700">
          <strong>Arena Multimedia Specialist Program (AMSP)</strong> — School
          of Animation
        </p>

        <hr className="my-6" />

        {/* CERTIFICATIONS */}
        <section>
          <h2 className="font-semibold text-blue-600">CERTIFICATIONS</h2>
          <ul className="mt-2 ml-5 space-y-1 text-gray-700 list-disc">
            <li>
              Create High-Fidelity Designs and Prototypes in Figma —
              Google/Coursera
            </li>
            <li>
              Conduct UX Research and Test Early Concepts — Google/Coursera
            </li>
          </ul>
        </section>

        <hr className="my-6" />

        {/* LANGUAGES */}
        <section>
          <h2 className="font-semibold text-blue-600">
            FUNCTIONAL STRENGTHS & LANGUAGES
          </h2>
          <p className="mt-2 text-gray-700">
            Project Management • UX Leadership • Problem Solving • Communication
            • Time Management
          </p>
          <p className="mt-1 text-gray-700">
            <strong>Languages:</strong> English • Hindi • Tamil • Malayalam
          </p>
        </section>
      </div>
    </div>
  );
}

export default MyResume;
