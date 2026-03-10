import React, { useState, useEffect, useRef } from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import Message from "./Message";

function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hello 👋 I'm Shibu's AI Resume Assistant. Ask me interview questions about my UX, React, projects or experience.",
      sender: "bot",
    },
  ]);

  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [input]);

  /* ---------------- SUGGESTED QUESTIONS (50) ---------------- */

  const suggestedQuestions = [
    "Tell me about yourself",
    "What is your UX design experience?",
    "How many years of experience do you have?",
    "What technologies do you specialize in?",
    "What enterprise platforms have you designed?",
    "What projects have you worked on?",
    "What was your most challenging project?",
    "How do you approach UX research?",
    "How do you conduct usability testing?",
    "What is your design thinking process?",
    "How do you validate UX decisions?",
    "What is your experience with React?",
    "What is your front-end development experience?",
    "What state management tools have you used?",
    "How do you structure React applications?",
    "How do you improve performance in React apps?",
    "What is your experience with Tailwind CSS?",
    "What is your experience with Material UI?",
    "What is your experience with Bootstrap?",
    "What is your experience with ShadCN UI?",
    "How do you handle API integrations?",
    "How do you ensure responsive design?",
    "How do you ensure accessibility in UI design?",
    "How do you handle cross-browser compatibility?",
    "What design tools do you use?",
    "What prototyping tools do you use?",
    "How do you collaborate with developers?",
    "How do you handle design handoff to developers?",
    "What is your experience with design systems?",
    "How do you scale UI architecture?",
    "How do you prioritize UX improvements?",
    "How do you measure UX success?",
    "What industries have you worked in?",
    "What leadership experience do you have?",
    "Have you mentored junior designers?",
    "How do you manage stakeholder feedback?",
    "How do you manage large design projects?",
    "How do you handle tight deadlines?",
    "What agile methodologies have you worked with?",
    "What is your experience working in product teams?",
    "What challenges did you face in enterprise UX?",
    "How do you stay updated with UX trends?",
    "What motivates you as a designer?",
    "What are your strongest UX skills?",
    "What are your strengths as a front-end developer?",
    "Why should we hire you?",
    "What value do you bring to a company?",
    "What is your notice period?",
    "When can you join?",
    "Where can we see your portfolio?",
    "How do you integrate AI-assisted development tools in your design process?",
  ];

  /* ---------------- KNOWLEDGE BASE ---------------- */

  const knowledgeBase = [
    {
      keywords: [
        "tell me about yourself",
        "introduce yourself",
        "background",
        "profile",
        "who are you",
      ],
      answer:
        "I am a Senior UX Designer and Lead Front-End Developer with over 15 years of experience designing enterprise digital platforms, analytics dashboards and scalable web applications.",
    },
    {
      keywords: [
        "Can you explain your",
        "approach to designing",
        "accessible user interfaces",
      ],
      answer: `Accessibility in user interface design is paramount to ensuring inclusivity for all users. My approach to designing accessible UIs begins with a thorough understanding of accessibility guidelines, particularly the WCAG standards.
During the development of projects like CustomerAnalytics.com, I implemented key accessibility features, ensuring that the site's layout was navigable by keyboard and screen readers. This involved utilizing semantic HTML and ARIA roles to enhance screen reader compatibility.
I regularly conduct usability testing with diverse user groups to gather feedback on accessibility aspects. This practice allows me to identify pain points for individuals with disabilities and iterate on designs accordingly. Using tools like Figma, I can prototype different versions and test their effectiveness.
In addition, I focus on color contrast and font size, ensuring that users with visual impairments can effectively interact with the UI. Utilizing design systems, I maintain consistency in presenting accessible elements across various components.
Moreover, I advocate for incorporating user feedback into the design iteration process. This dialogue with actual users informs necessary adjustments, making the product more usable and accessible.`,
    },
    {
      keywords: [
        "What strategies",
        "do you use for effective",
        "collaboration with cross-functional teams",
      ],
      answer: `Effective collaboration with cross-functional teams is essential for delivering successful UI/UX projects. I prioritize open communication and frequent updates as part of my collaborative approach.
In my role at Customer Analytics Pvt. Ltd, I facilitated regular meetings with teams including backend developers, product owners, and QA testers. These meetings allow for real-time feedback, ensuring all departments align with the product vision.
One of my strategies is using collaborative tools like GitHub for version control of design files and documentation. This ensures everyone has access to the most current versions and can offer input, which is crucial for iterative designs.
Additionally, I utilize Agile methodologies in our workflow, allowing for quick iterations based on feedback from testing phases. By prioritizing the inclusion of all voices during these phases, I ensure that functionality aligns with user needs.
Establishing a culture of respect and open dialogue is key. I make it a point to encourage team members to share their ideas and challenges freely, fostering an environment that contributes to high creative output and well-rounded product development.`,
    },
    {
      keywords: [
        "How do you measure",
        "the success of your UX designs",
        "post-launch?",
      ],
      answer: `Measuring the success of UX designs post-launch is crucial for determining the effectiveness of user experiences. I utilize multiple analytical tools to track user interactions and gather quantifiable data.
For instance, after launching The Hub Re-Platform project for Tempur Sealy International, I set up tracking via Google Analytics to monitor user behavior patterns, engagement rates, and conversion metrics.
Alongside quantitative data, I place significant value on qualitative insights through user feedback and usability testing conducted post-launch. Surveys and feedback forms provide valuable information regarding how users perceive the designs and whether they face any challenges.
I regularly analyze key performance indicators (KPIs) such as task success rate, time on task, error rates, and user satisfaction to assess the effectiveness of the designs.
Post-launch, I hold debrief meetings with the team to review collected data and user feedback. This collaborative review process aids in identifying areas for enhancement and informs future design iterations.`,
    },
    {
      keywords: [
        "How do you incorporate",
        "your UI/UX expertise",
        "in responsive web design projects?",
      ],
      answer: `My approach to incorporating my UI/UX expertise in responsive web design projects is multifaceted. I'm seasoned in creating responsive applications using React.js, Tailwind CSS, and Material UI, which allow me to deliver designs that adapt well to different screen sizes.
In my recent role as a Lead Front-End Developer with Customer Analytics Pvt. Ltd, I focused extensively on creating pixel-perfect layouts that satisfy user needs across various devices. I leverage tools like Figma for wireframing and prototyping, enabling iterative design and ensuring that the final product meets the users' expectations.
Throughout my career, I have conducted thorough user research and usability testing, allowing me to understand user behavior deeply, which directly informs my design decisions. This process is essential for achieving responsive design that not only looks good but also performs optimally.
I consistently apply design principles, such as fluid grids and flexible images, to ensure that my designs are both functional and aesthetically pleasing on devices of all sizes. Each project, such as the corporate website for CustomerAnalytics.com, involved architecting a responsive UI that enhanced user engagement while improving key performance indicators like Google Lighthouse scores.`,
    },
    {
      keywords: [
        "Describe",
        "your experience with implementing",
        "micro-frontend",
        "architecture in your projects.",
      ],
      answer: `Implementing micro-frontend architecture has been one of the highlights of my recent projects. I utilized Module Federation techniques to develop scalable and maintainable web applications that support independent deployments for different teams.
In my position at Customer Analytics Pvt. Ltd., I helped architect a series of micro-frontend solutions that significantly improved our team's workflow. For instance, by breaking larger applications into smaller, manageable units, we could deliver features more rapidly and mitigate risks associated with larger deployments.
I developed over 30 reusable components that were leveraged across various modules, thus ensuring a consistent user experience and reducing the amount of redundant code. This strategy not only boosted our development speed but also improved the performance by enhancing the overall architecture of our applications.
Moreover, my attention to performance optimization allowed us to reduce bundle sizes and implement lazy loading, resulting in faster load times and improved user satisfaction. For instance, in projects like CodaWorx and The Hub Re-Platform, I saw firsthand the benefits of a micro-frontend approach, as it allowed us to update individual modules without redeploying the entire application.`,
    },
    {
      keywords: [
        "How do you ensure",
        "accessibility",
        "(WCAG)",
        "in your designs",
        "and front-end applications?",
      ],
      answer: `Ensuring accessibility in my designs is a priority in my front-end development process. I incorporate WCAG guidelines right from the initial design phase, making it integral to my workflow.
I conduct thorough accessibility audits during and after the development phases. By utilizing tools and plugins such as Axe and WAVE, I can identify and remedy potential barriers faced by users with disabilities. For example, when developing the UI for the CustomerAnalytics.com website, I ensured that all images had descriptive alt text, ensuring they are accessible to screen readers.
I also focus on color contrasts and semantic HTML to enhance navigation. This method benefits users who may be visually impaired and ensures that all UI components are keyboard navigable, making them more usable for those unable to use a mouse.
Moreover, I engage in user testing with individuals who have disabilities to gather direct feedback on my designs. This practice has proven invaluable for understanding real-world challenges faced by users, allowing me to iterate on designs effectively. Projects like The Hub Re-Platform have benefited significantly from this inclusive approach, prioritizing equitable access to all users.`,
    },
    {
      keywords: [
        "What tools do you prefer",
        "for prototyping",
        "and designing",
        "high-fidelity user interfaces?",
      ],
      answer: `The tools I prefer for prototyping and designing high-fidelity user interfaces are essential to my development process. I have extensive experience with Figma, which allows real-time collaboration and iteration on designs, crucial for team workflows.
Utilizing Adobe XD for more visually rich interfaces enables me to create interactive prototypes that convey the intended user experience. I can showcase the user flows effectively, gathering team and stakeholder feedback early in the process.
Over the years, I have built reusable component libraries within these tools, which help maintain consistency across projects. This library facilitates faster design cycles and ensures that developers have a solid foundation to work from when implementing UI features.
Finally, I emphasize the importance of integrating my designs with code to ensure fidelity in the final product. By collaborating with developers and utilizing design systems, I've successfully delivered interfaces across multiple enterprise applications that meet both design and functional requirements.`,
    },
    {
      keywords: [""],
      answer: ``,
    },
    {
      keywords: [
        "ai",
        "ai tools",
        "ai assisted",
        "ai development",
        "design process ai",
        "ai integration",
      ],
      answer: `In my role as a Lead Front-End Developer, I have actively integrated AI-assisted development tools to enhance my design and development workflows.
For instance, utilizing tools that provide coding suggestions based on previous code patterns has significantly improved productivity and reduced debugging time. I often leverage AI to analyze user interactions and optimize user experience across the applications I develop.
During my previous project with Customer Analytics Pvt. Ltd, we implemented AI tools that helped analyze user data, which informed our design decisions. This analytical approach not only improved user experience but also assisted in predicting user behavior, allowing for more tailored designs.
Collaboration with AI has also helped in generating high-quality prototypes quickly. By using AI-driven design tools like Figma and Adobe XD, I can create designs that are both user-friendly and visually appealing with minimal effort.
Furthermore, integrating AI into our CI/CD pipeline facilitated continuous integration processes, which streamlined code deployment and significantly reduced deployment time. AI tools helped in automating test cases and ensuring code quality, which is crucial in maintaining high standards in UI/UX development.`,
    },

    {
      keywords: ["experience", "years", "career", "professional experience"],
      answer:
        "I have more than 15 years of experience in UX design, product design and digital platform development, with the last several years focusing heavily on React front-end architecture.",
    },

    {
      keywords: ["technologies", "tech stack", "tools", "frameworks", "stack"],
      answer:
        "My core stack includes React.js, JavaScript ES6+, Tailwind CSS, Material UI, Bootstrap, ShadCN UI, REST APIs, Git, Webpack and Vite.",
    },

    {
      keywords: ["projects", "portfolio", "products", "work examples"],
      answer:
        "Some major projects include CustomerAnalytics enterprise platform, Tempur Sealy Hub re-platform, Product Pricing Portal and TSI Connect retailer platform.",
    },

    {
      keywords: ["react", "reactjs", "frontend framework", "react development"],
      answer:
        "I build scalable React applications using component architecture, hooks, modular state management and API integration.",
    },

    {
      keywords: [
        "ux research",
        "user research",
        "research process",
        "user insights",
      ],
      answer:
        "My UX research process includes stakeholder interviews, user journey mapping, competitor analysis, usability testing and iterative prototyping.",
    },

    {
      keywords: ["design thinking", "design process"],
      answer:
        "My design thinking process includes understanding users, defining problems, ideating solutions, prototyping quickly and validating with real users.",
    },

    {
      keywords: ["usability testing", "testing users", "user testing"],
      answer:
        "I run usability tests using interactive prototypes, task scenarios and direct user feedback to validate design decisions.",
    },

    {
      keywords: ["design tools", "figma", "sketch", "adobe"],
      answer:
        "I primarily use Figma for UI design and prototyping along with Adobe tools when required for visual design.",
    },

    {
      keywords: [
        "developers",
        "collaboration",
        "engineering",
        "work with developers",
      ],
      answer:
        "I collaborate closely with developers through design systems, component documentation and often contribute directly to front-end implementation.",
    },

    {
      keywords: ["leadership", "team lead", "lead", "management"],
      answer:
        "I have led UX initiatives, mentored designers and guided cross-functional teams to deliver complex enterprise platforms.",
    },

    {
      keywords: ["design systems", "component library", "ui system"],
      answer:
        "I build scalable design systems with reusable UI components, documentation and developer collaboration.",
    },

    {
      keywords: ["responsive", "mobile", "adaptive design"],
      answer:
        "I design responsive layouts using grid systems, flexible components and mobile-first design principles.",
    },

    {
      keywords: ["accessibility", "a11y", "wcag"],
      answer:
        "I follow accessibility best practices including WCAG guidelines, semantic HTML, keyboard navigation and proper color contrast.",
    },

    {
      keywords: ["performance", "optimization", "speed"],
      answer:
        "I improve front-end performance using lazy loading, code splitting, optimized rendering and efficient component structure.",
    },

    {
      keywords: ["api", "integration", "backend connection"],
      answer:
        "I integrate REST APIs using modern async patterns with proper loading states, error handling and performance considerations.",
    },

    {
      keywords: ["git", "version control", "github"],
      answer:
        "I use Git extensively for version control, branching strategies and collaborative development workflows.",
    },

    {
      keywords: ["agile", "scrum", "sprints"],
      answer:
        "I work in Agile teams collaborating with product managers, developers and stakeholders in iterative development cycles.",
    },

    {
      keywords: ["industries", "domains", "sectors"],
      answer:
        "I have worked across enterprise analytics platforms, retail technology solutions and digital product ecosystems.",
    },

    {
      keywords: ["mentoring", "mentor", "junior designers"],
      answer:
        "I enjoy mentoring junior designers through design reviews, coaching and knowledge sharing.",
    },

    {
      keywords: ["stakeholder", "feedback", "business input"],
      answer:
        "I balance stakeholder feedback with user research insights to ensure the best product outcomes.",
    },

    {
      keywords: ["deadlines", "pressure", "time constraints"],
      answer:
        "I prioritize effectively, focus on high impact solutions and collaborate closely with teams to deliver results under tight deadlines.",
    },

    {
      keywords: ["why hire", "why should we hire"],
      answer:
        "I bring a rare combination of deep UX expertise and front-end engineering skills which helps bridge design and development.",
    },

    {
      keywords: ["motivation", "passion", "why design"],
      answer:
        "I’m passionate about solving complex user problems and building intuitive digital experiences that create measurable business value.",
    },

    {
      keywords: ["notice", "availability", "join", "joining"],
      answer: "I am available to join immediately.",
    },

    {
      keywords: ["portfolio", "work samples"],
      answer:
        "You can explore my portfolio to see detailed case studies of enterprise UX projects and digital product platforms.",
    },
    {
      keywords: ["portfolio", "can we see your"],
      answer:
        "You can explore my portfolio to https://shiburaphael.netlify.app/.",
    },
  ];

  /* ---------------- SMART MATCHING ---------------- */

  const generateReply = (q) => {
    const question = q.toLowerCase();

    let bestScore = 0;
    let bestAnswer = null;

    knowledgeBase.forEach((item) => {
      let score = 0;

      item.keywords.forEach((keyword) => {
        const cleanKeyword = keyword.toLowerCase();

        if (question.includes(cleanKeyword)) {
          score += 2;
        }

        // partial word match
        if (question.split(" ").includes(cleanKeyword)) {
          score += 1;
        }
      });

      if (score > bestScore) {
        bestScore = score;
        bestAnswer = item.answer;
      }
    });

    if (bestAnswer) return bestAnswer;

    return "That's a great question. My experience combines UX strategy, product design and React front-end engineering to build scalable digital platforms.";
  };
  /* ---------------- SEND MESSAGE ---------------- */

  const sendMessage = (question = input) => {
    if (!question.trim()) return;

    const userMsg = { text: question, sender: "user" };

    setMessages((prev) => [...prev, userMsg]);

    setInput("");

    setTyping(true);

    setTimeout(() => {
      const reply = generateReply(question);

      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);

      setTyping(false);
    }, 700);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <>
      {/* Chat Window */}

      <div
        className={`fixed bottom-24 right-4 z-[9998] w-[92vw] sm:w-[380px] md:w-[420px] h-[75vh] max-h-[640px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between px-4 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-500">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <img
              src="/shibu-sjr.jpg"
              alt="Shibu"
              className="object-cover border-2 rounded-full w-9 h-9 border-white/40"
            />
            {/* Title */}
            <div>
              <h3 className="font-semibold">AI Resume Assistant</h3>
              <p className="text-xs opacity-90">Ask me about Shibu</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-xl">
            ✕
          </button>
        </div>

        {/* Messages */}

        <div className="flex-1 p-4 space-y-3 overflow-y-scroll bg-gray-50">
          {messages.map((msg, i) => (
            <Message key={i} text={msg.text} sender={msg.sender} />
          ))}

          {typing && (
            <div className="text-sm text-gray-500">AI is typing...</div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Suggested Questions */}

        <div className="px-3 py-2 overflow-y-auto border-t bg-gray-50 max-h-32">
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                className="px-3 py-1 text-xs bg-white border rounded-full hover:bg-gray-100"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}

        <div className="flex gap-2 p-3 bg-white border-t">
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask an interview question..."
            className="flex-1 px-3 py-2 border rounded-lg outline-none resize-none max-h-32"
          />

          <button
            onClick={() => sendMessage()}
            className="px-4 py-2 text-white bg-indigo-600 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>

      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed right-4 bottom-6 z-[9999] flex items-center justify-center w-14 h-14 text-white bg-indigo-600 rounded-full shadow-xl hover:scale-110 transition"
      >
        <HiChatBubbleLeftRight size={26} />
      </button>
    </>
  );
}

export default React.memo(FloatingChatbot);
