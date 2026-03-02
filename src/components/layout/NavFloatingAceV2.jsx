import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineHome } from "react-icons/hi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import {
  IconMenu2,
  IconX,
  IconBrandBehance,
  IconMail,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function NavFloatingAceV2() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { title: "Home", icon: <HiOutlineHome />, path: "/" },
    { title: "Products", icon: <AiOutlineProduct />, path: "/projects" },
    { title: "My Resume", icon: <IconFileCv />, path: "/myresumedynamic" },
    {
      title: "Case Study",
      icon: <IoBriefcaseOutline />,
      path: "/CaseStudyRetail",
    },
    { title: "Contact Us", icon: <IconMail />, path: "/contactus" },

    // External
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin />,
      external: "https://www.linkedin.com/in/shiburaphael/",
    },
    {
      title: "Behance",
      icon: <IconBrandBehance />,
      external: "https://www.behance.net/shiburaphael",
    },
  ];

  return (
    <div
      ref={menuRef}
      // className="fixed top-4 right-4 z-[999999] flex items-center sm:top-6 sm:right-6"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-3 text-white transition-transform rounded-full shadow-lg bg-neutral-900 hover:bg-neutral-700 active:scale-95"
      >
        {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
      </button>

      {/* Slide-out Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="absolute top-0 right-10 flex flex-row-reverse bg-slate-700 rounded-full px-2 py-2 shadow-lg space-x-reverse space-x-2 max-w-[90vw]"
          >
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.title}
                  href={link.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  className="p-2 transition rounded-full text-neutral-300 hover:text-white hover:bg-neutral-700"
                  onClick={() => setOpen(false)}
                >
                  {React.cloneElement(link.icon, { size: 20 })}
                </a>
              ) : (
                <Link
                  key={link.title}
                  to={link.path}
                  title={link.title}
                  className="p-2 transition rounded-full text-neutral-300 hover:text-white hover:bg-neutral-700"
                  onClick={() => setOpen(false)}
                >
                  {React.cloneElement(link.icon, { size: 20 })}
                </Link>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavFloatingAceV2;
