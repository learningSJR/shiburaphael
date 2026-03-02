"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  className,
  ...props
}: {
  radius?: number;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const mask = useMotionTemplate`
    radial-gradient(
      ${radius}px circle at ${mouseX}px ${mouseY}px,
      white,
      transparent 80%
    )
  `;

  return (
    <div
      className={cn("relative overflow-hidden group/spotlight", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      {/* Spotlight Glow Layer */}
      <motion.div
        className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 pointer-events-none group-hover/spotlight:opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.12) 0%, rgba(6,182,212,0.08) 40%, transparent 70%)",
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      >
        {/* {isHovering && (
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="absolute inset-0 bg-transparent pointer-events-none"
            colors={[
              [16, 185, 129], // emerald
              [6, 182, 212], // cyan
            ]}
            dotSize={2}
          />
        )} */}
      </motion.div>

      {/* Content stays above */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
