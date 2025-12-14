import React, { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { FloatingNavAce } from "@/components/layout/NavbarFloatingAce.jsx";
import { FloatingDockAce } from "@/components/layout/NavFloatingAceV2.jsx";
import { Vortex } from "@/components/ui/vortex";
import { VortexAce } from "@/components/ui/VortexAce.jsx";

import Footer from "@/components/layout/Footer.jsx";

// import Home from "@/pages/Home.jsx";
// import About from "@/pages/About.jsx";
// import Projects from "@/pages/Projects.jsx";
// import Contact from "@/pages/Contact.jsx";
import "@/App.scss";
import Counter from "./pages/Counter";
import MyResume from "./pages/MyResume";
import { GridBackgroundAce } from "./components/ui/GridBackground";
import Navbar from "./components/layout/Navbar";
import NavLinkHeaderLeft from "./components/layout/NavLinkHeaderLeft";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Projects = lazy(() => import("@/pages/Projects"));
const Contact = lazy(() => import("@/pages/Contact"));
const Contactus = lazy(() => import("@/pages/Contactus"));

export default function App() {
  return (
    <>
      <FloatingDockAce />
      <VortexAce>
        <NavLinkHeaderLeft />
      </VortexAce>
      <main className="relative flex flex-col">
        {/* 🔹 Floating Navbar visible on all pages */}
        {/* <FloatingNavAce /> */}
        {/* <NavFloatingAceV2 /> */}

        {/* 🔹 Page Routes */}

        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <Home />
                </Suspense>
              }
            />
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
              path="/contact"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <Contact />
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
              path="/myresume"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <MyResume />
                </Suspense>
              }
            />
          </Routes>
        </div>

        {/* 🔹 Global Footer */}
        <Footer />
        {/* <Counter /> */}
      </main>
    </>
  );
}
