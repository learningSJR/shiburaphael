import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="top-0 left-0 z-50 border-b md:w-full md:fixed bg-surface-dark/90 backdrop-blur border-border-dark ">
      <div className="container flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-3 group">
          {/* Logo */}
          <img
            src="/sjr-logo.png"
            alt="SJR Logo"
            className="object-contain w-auto h-12"
          />

          {/* Vertical Divider */}
          <div className="w-px h-10 bg-gradient-to-b from-blue-500 to-sky-400 opacity-60"></div>

          {/* Contact Text */}
          <div className="flex flex-col justify-center ml-2 leading-tight">
            <span className="text-xs text-slate-400">Call / WhatsApp Now</span>
            <span className="text-sm font-semibold text-transparent transition bg-gradient-to-r from-blue-400 to-sky-500 bg-clip-text group-hover:from-sky-400 group-hover:to-blue-500">
              +91 97907 40963
            </span>
          </div>
        </NavLink>

        <nav className="flex gap-6 text-sm text-text-dark">
          {["Home", "About", "Projects", "Contact"].map((page) => (
            <NavLink
              key={page}
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "hover:text-blue-400 transition"
              }
            >
              {page}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
