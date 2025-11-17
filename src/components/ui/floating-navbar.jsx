import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) setVisible(true);
      else setVisible(direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "flex items-center space-x-3 px-4 py-2 rounded-full shadow-md backdrop-blur bg-black/70 border border-white/10 max-w-fit text-sm text-white",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "6px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            className={cn(
              "flex items-center gap-1 px-3 py-1 rounded transition",
              location.pathname === item.link
                ? "bg-blue-600/40 text-white"
                : "hover:bg-neutral-800 text-neutral-300"
            )}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
