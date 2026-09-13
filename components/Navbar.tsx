"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { MenuIcon, CloseIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      setScrolled(winScroll > 20);

      const sectionIds = ["home", "work", "experience", "pipeline", "about", "education", "contact"];
      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260 && rect.bottom >= 260) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "WORK", href: "#work", id: "work" },
    { label: "EXPERIENCE", href: "#experience", id: "experience" },
    { label: "PIPELINE", href: "#pipeline", id: "pipeline" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "EDUCATION", href: "#education", id: "education" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0d12]/90 backdrop-blur-md border-b border-[#242e3d] py-3 shadow-xl shadow-black/40"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-3 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-lg px-1.5 py-1"
          aria-label="Home"
        >
          <div className="w-8 h-8 rounded bg-[#171d27] border border-[#242e3d] flex items-center justify-center font-tech font-bold text-xs text-cyan-400 group-hover:border-cyan-400/60 transition-colors">
            AA
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-wider text-white group-hover:text-cyan-300 transition-colors">
              {personalInfo.name.toUpperCase()}
            </span>
            <span className="font-tech text-[10px] text-slate-400 tracking-wider">
              ENTC • EMBEDDED
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#10151d]/70 px-3 py-1.5 rounded-full border border-[#242e3d]/80">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1 rounded-full font-tech text-xs tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? "text-cyan-300 font-semibold bg-[#171d27] border border-[#3b495e]"
                    : "text-slate-300 hover:text-white hover:bg-[#171d27]/50"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* External Quick Links & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#171d27] border border-transparent hover:border-[#242e3d] transition-all"
            aria-label="GitHub Profile"
          >
            <GitHubIcon size={16} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#171d27] border border-transparent hover:border-[#242e3d] transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon size={16} />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-[#171d27] border border-[#242e3d] text-slate-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0d12]/98 border-b border-[#242e3d] px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-lg font-tech text-xs tracking-wider uppercase flex items-center justify-between ${
                    isActive
                      ? "bg-[#171d27] text-cyan-300 font-bold border-l-2 border-cyan-400"
                      : "text-slate-300 hover:bg-[#171d27]/60 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
