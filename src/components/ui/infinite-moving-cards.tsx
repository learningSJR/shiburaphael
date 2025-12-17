import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);
  const [start, setStart] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  // Duplicate items for infinite scroll
  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const children = Array.from(scrollerRef.current.children);

    children.forEach((child) => {
      const clone = child.cloneNode(true);
      scrollerRef.current.appendChild(clone);
    });

    setDirection();
    setSpeed();
    setStart(true);
  }, []);

  // Calculate tallest card height
  useLayoutEffect(() => {
    if (!cardRefs.current.length) return;

    const heights = cardRefs.current.map((el) => el?.offsetHeight || 0);

    setMaxHeight(Math.max(...heights));
  }, [items]);

  const setDirection = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const setSpeed = () => {
    if (!containerRef.current) return;
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            ref={(el) => (cardRefs.current[idx] = el)}
            className={cn(
              "relative shrink-0 rounded-2xl border",
              "w-[350px] md:w-[450px]",
              "px-8 py-6",
              "flex flex-col",
              "border-neutral-200 dark:border-slate-800",
              "text-black dark:text-white"
            )}
            style={{
              height: maxHeight ? `${maxHeight}px` : "auto",
              background: "linear-gradient(90deg, #04071d 0%, #0c0e23 100%)",
              borderRadius: "1.7rem",
            }}
          >
            <blockquote className="flex flex-col justify-between h-full">
              <span className="text-sm leading-relaxed text-gray-100">
                {item.quote}
              </span>

              <div className="mt-6">
                <p className="text-sm font-medium text-gray-400">{item.name}</p>
                <p className="text-xs text-gray-500">{item.title}</p>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
