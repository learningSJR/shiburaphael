import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { FloatingDockAce } from "@/components/layout/NavFloatingAceV2.jsx";
import { VortexAce } from "@/components/ui/VortexAce.jsx";
import Footer from "@/components/layout/Footer.jsx";

import Home from "@/pages/Home.jsx";
import NavLinkHeaderLeft from "./components/layout/NavLinkHeaderLeft";

import "@/App.scss";

// Lazy-loaded pages
const About = lazy(() => import("@/pages/About"));
const Projects = lazy(() => import("@/pages/Projects"));
const Contactus = lazy(() => import("@/pages/Contactus"));
const MyResumeDynamic = lazy(() => import("@/pages/MyResumeDynamic"));

export default function App() {
  return (
    <>
      <FloatingDockAce />

      <VortexAce>
        <NavLinkHeaderLeft />
      </VortexAce>

      <main className="relative flex flex-col">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/about"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <About />
                </Suspense>
              }
            />

            <Route
              path="/projects"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <Projects />
                </Suspense>
              }
            />

            <Route
              path="/contactus"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <Contactus />
                </Suspense>
              }
            />

            <Route
              path="/myresumedynamic"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <MyResumeDynamic />
                </Suspense>
              }
            />
          </Routes>
        </div>

        <Footer />
      </main>
    </>
  );
}
