import React from "react";
import { NavLink } from "react-router-dom";

function NavLinkHeaderLeft() {
  return (
    <NavLink to="/" className="flex items-center justify-start gap-3 group">
      {/* Logo */}
      <img
        src="/sjr-logo.png"
        alt="Shibu john raphael-Logo"
        className="object-contain w-auto h-12 md:h-16"
      />

      {/* Vertical Divider */}
      <div className="w-[2px] h-10 bg-gradient-to-b from-blue-500 to-sky-400 opacity-60"></div>

      {/* Contact Text */}
      <div className="flex flex-col justify-center ml-2 leading-tight">
        <span className="text-xs text-slate-400">Call / WhatsApp Now</span>
        <span className="text-sm font-semibold text-transparent transition bg-gradient-to-r from-blue-400 to-sky-500 bg-clip-text group-hover:from-sky-400 group-hover:to-blue-500">
          +91 97907 40963
        </span>
      </div>
    </NavLink>
  );
}

export default NavLinkHeaderLeft;
