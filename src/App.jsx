import React from "react";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import { FloatingDockAce } from "@/components/layout/NavFloatingAceV2.jsx";
import { VortexAce } from "@/components/ui/VortexAce.jsx";
import Footer from "@/components/layout/Footer.jsx";
import NavLinkHeaderLeft from "@/components/layout/NavLinkHeaderLeft";

import Home from "@/pages/Home.jsx";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contactus from "@/pages/Contactus";
import MyResumeDynamic from "@/pages/MyResumeDynamic";
import CaseStudyRetail from "@/pages/CaseStudyRetail";

import "@/App.scss";
import { element } from "three/src/nodes/TSL.js";
import Layout from "@/components/layout/Layout";
import UXMindsetsPage from "./components/uxlearning/UXMindsetsPage";
// import Chatbot from "@/pages/Chatbot";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "Projects", element: <Projects /> },
      { path: "CaseStudyRetail", element: <CaseStudyRetail /> },
      { path: "MyResumeDynamic", element: <MyResumeDynamic /> },
      { path: "Contactus", element: <Contactus /> },
      { path: "UXMindset", element: <UXMindsetsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
