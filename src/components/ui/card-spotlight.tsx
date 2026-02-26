import React, { useRef } from "react";

export function CardSpotlight({ children, className }) {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Spotlight Layer */}
      <div
        className="absolute inset-0 transition duration-300 opacity-0 pointer-events-none group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(99,102,241,0.15), transparent 40%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
