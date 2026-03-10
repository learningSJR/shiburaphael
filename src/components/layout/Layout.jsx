import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "./Header";
import { VortexAce } from "@/components/ui/VortexAce.jsx";
import { Vortex } from "@/components/ui/vortex";
import FloatingChatboat from "@/components/chatbot/FloatingChatboat";
function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="border-b backdrop-blur-xl bg-white/5 border-white/10">
          <VortexAce>
            <Header />
          </VortexAce>
        </div>
      </div>
      <main className="relative flex-1 pt-20 blocks bg-slate-950 bg-dark-radial">
        <Outlet />
      </main>
      <Footer />
      {/* Floating AI Resume Chatbot */}
      <FloatingChatboat />
    </div>
  );
}

export default Layout;
