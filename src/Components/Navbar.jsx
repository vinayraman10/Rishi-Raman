import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaTools /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-br from-black/80 via-black/50 to-red-900/70 backdrop-blur-sm shadow-lg shadow-black/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-5">
        {/* Logo */}
        <Link to={"/"} className="text-xl font-semibold  flex items-center gap-1 select-none">
          <span className="text-white font-serif">Rishi</span>
          <span className="text-red-500 font-script drop-shadow-lg">Raman</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-4 text-white/90 text-base font-medium">
          {links.map((link) => (
            <Link key={link.id} to={`/${link.id === "home" ? "" : link.id}`} onClick={() => setActive(link.id)} className="relative flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 group">
              {/* Background bubble for active/hover */}
              <span
                className={`absolute inset-0 rounded-full transition-all duration-300 
              ${active === link.id ? "bg-red-500/30 scale-100" : "scale-0 group-hover:scale-100 bg-red-500/20"}`}
              ></span>

              {/* Icon */}
              <span
                className={`relative z-10 text-lg transition-colors duration-300 
              ${active === link.id ? "text-red-400" : "text-white/90 group-hover:text-red-400"}`}
              >
                {link.icon}
              </span>

              {/* Label */}
              <span
                className={`relative z-10 transition-colors duration-300 
              ${active === link.id ? "text-red-400" : "group-hover:text-red-400"}`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white text-2xl hover:text-red-400 transition-colors focus:outline-none">☰</button>
      </div>
    </header>
  );
}
