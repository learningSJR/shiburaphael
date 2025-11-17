import React from "react";
import profile from "@/data/profile.js";
import { VortexAce } from "@/components/ui/VortexAce.jsx";
import { Vortex } from "@/components/ui/vortex";

export default function Footer() {
  return (
    <footer className="relative flex flex-col w-full">
      <div className="absolute inset-0 z-10 w-full h-full bg-black/40" />

      <span
        className="absolute inset-0 bg-[linear-gradient(90deg,#6366f1,#9333ea,#6366f1)] 
               bg-[length:200%_200%] animate-gradient-move blur-[1px]"
      />

      <VortexAce>
        <div className="container flex flex-col items-center justify-center text-sm text-center text-slate-500">
          <div className="w-[40rem] h-auto absolute top-0 animate-slide-x">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute top-0 w-3/4 h-px inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute top-0 w-1/4 h-px inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          </div>
          <div>
            <span>
              Created By <a href="#">{profile.name}</a> |{" "}
              <span class="far fa-copyright"></span> {new Date().getFullYear()}{" "}
              All rights reserved.
            </span>
          </div>
          <div className="mt-2 font-bold">
            {profile.email} • {profile.phone}
          </div>
          <div className="mt-2 font-bold">
            {`${new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              weekday: "long",
              month: "long",
              year: "numeric",
            })}`}
          </div>
        </div>
      </VortexAce>
    </footer>
  );
}
