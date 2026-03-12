import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiX } from "react-icons/fi";

const mindsets = [
  {
    title: "Empathy",
    description:
      "Empathy means understanding the user's feelings, frustrations, and needs so that design decisions are based on real human experiences.",
    example:
      "Example: When designing a food delivery app for elderly users, increasing font size and simplifying navigation makes the experience easier and more accessible.",
  },
  {
    title: "Curiosity",
    description:
      "Curiosity drives UX designers to ask why users behave in certain ways and uncover hidden usability issues.",
    example:
      "Example: Investigating why users abandon a checkout process may reveal that the form is too long or confusing.",
  },
  {
    title: "Continuous Learning",
    description:
      "UX designers must continuously update their knowledge because technology, tools, and user expectations constantly evolve.",
    example:
      "Example: Learning accessibility standards, new design systems, or emerging interaction patterns.",
  },
  {
    title: "Problem Solving",
    description:
      "UX design is fundamentally about solving real user problems rather than only focusing on visual aesthetics.",
    example:
      "Example: If users cannot find the search feature, redesigning navigation to make search prominent improves usability.",
  },
  {
    title: "Creativity",
    description:
      "Creativity allows designers to transform complex interactions into simple, engaging experiences.",
    example:
      "Example: Using interactive onboarding with visuals instead of long instructional text.",
  },
  {
    title: "Persistence",
    description:
      "Great UX rarely happens on the first attempt. Designers iterate, test, and refine until the experience improves.",
    example:
      "Example: Testing multiple versions of a signup flow until completion rates improve.",
  },
  {
    title: "Innovation",
    description:
      "Innovation encourages designers to think beyond traditional solutions and explore smarter interactions.",
    example:
      "Example: Using voice input or automatic location detection instead of manual address entry.",
  },
  {
    title: "Passion for the Process",
    description:
      "Great UX designers enjoy every stage of the design journey, from research and ideation to testing and refinement.",
    example:
      "Example: Conducting usability tests to observe real user behavior and discover insights.",
  },
  {
    title: "Craft Mastery",
    description:
      "Craft mastery focuses on refining details such as typography, spacing, hierarchy, and accessibility.",
    example:
      "Example: Improving layout spacing and visual hierarchy to increase readability and clarity.",
  },
  {
    title: "Resilience",
    description:
      "Resilience helps designers accept feedback positively and iterate on their work instead of getting discouraged.",
    example:
      "Example: Revising a design after stakeholder feedback to produce a better final solution.",
  },
];

export default function UXMindsetsPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-6 py-20 bg-dark-radial blocks">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-slate-400">
            UX Designer Thinking Framework
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-gray-600">
            This framework represents how I approach user experience design.
            Instead of focusing only on tools, I focus on empathy, curiosity,
            creativity, and solving meaningful user problems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mindsets.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.25 }}
                className={isActive ? "lg:col-span-3 md:col-span-2" : ""}
              >
                <motion.div
                  layout
                  onClick={() => toggleCard(index)}
                  className={`cursor-pointer rounded-2xl p-6 border bg-[#0F172A] text-white shadow-md transition
                    ${isActive ? "border-sky-400 ring-2 ring-sky-400/40" : "border-gray-700 hover:border-gray-500"}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="mb-1 text-xs text-gray-400">
                        Mindset {index + 1}
                      </p>
                      <h2 className="text-xl font-semibold text-white">
                        {item.title}
                      </h2>
                    </div>

                    <div className="text-gray-300">
                      {isActive ? <FiX size={20} /> : <FiEye size={20} />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-gray-700">
                          <p className="mb-4 leading-relaxed text-gray-200">
                            {item.description}
                          </p>

                          <p className="text-sm text-gray-400">
                            {item.example}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
