import React from "react";
import { Vortex } from "@/components/ui/vortex";
export function VortexAce({ children }) {
  return (
    <div className="w-[calc(100%)] mx-auto rounded-md  h-[6rem] overflow-hidden relative">
      {/* <div className="relative w-full h-20 overflow-hidden"> */}
      <div className="absolute inset-0 z-10 w-full h-full bg-black/40" />
      <Vortex
        // backgroundColor="black"
        // className="flex items-center justify-start w-full h-full px-2 py-4 md:px-10"
        particleCount={150}
        rangeY={40}
        baseSpeed={0.2}
        rangeSpeed={0.5}
        baseRadius={0.6}
        rangeRadius={1}
        baseHue={240}
        // className="flex items-center w-full h-full px-8"
        className="flex items-center justify-between w-full h-full px-0"
      >
        {children}
      </Vortex>
    </div>
  );
}
