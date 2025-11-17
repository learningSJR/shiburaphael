import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconMenu2,
  IconX,
  IconBrandBehance,
  IconContract,
  IconMail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function FloatingDockAce() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // ✅ Close menu when clicking outside (mobile-friendly)
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
    { title: "Home", icon: <IconHome />, href: "/" },
    { title: "Products", icon: <IconTerminal2 />, href: "/projects" },
    { title: "Components", icon: <IconMail />, href: "/about" },
    // { title: "Changelog", icon: <IconExchange />, href: "#" },
    { title: "Twitter", icon: <IconBrandLinkedin />, href: "#" },
    // { title: "Twitter", icon: <IconBrandX />, href: "#" },
    { title: "GitHub", icon: <IconBrandGithub />, href: "#" },
    { title: "Behance", icon: <IconBrandBehance />, href: "#" },
  ];

  return (
    <div
      ref={menuRef}
      className="fixed top-4 right-4 z-[999999] flex items-center sm:top-6 sm:right-6"
    >
      {/* Toggle Button (always visible on mobile) */}
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
            className="absolute top-0 right-14 flex flex-row-reverse bg-neutral-800 rounded-full px-3 py-2 shadow-lg space-x-reverse space-x-3 max-w-[90vw]"
          >
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                title={link.title}
                className="p-2 transition rounded-full text-neutral-300 hover:text-white hover:bg-neutral-700"
              >
                {React.cloneElement(link.icon, { size: 20 })}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
