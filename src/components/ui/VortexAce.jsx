import React from "react";
import { Vortex } from "@/components/ui/vortex";
export function VortexAce({ children }) {
  return (
    <div className="w-[calc(100%)] mx-auto rounded-md  h-[6rem] overflow-hidden relative">
      <div className="absolute inset-0 z-10 w-full h-full bg-black/40" />
      <Vortex
        // backgroundColor="black"
        className="flex flex-col items-center justify-center w-full h-full px-2 py-4 md:px-10"
      >
        {children}
      </Vortex>
    </div>
  );
}
