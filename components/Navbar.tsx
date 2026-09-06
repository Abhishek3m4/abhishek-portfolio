"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { MenuIcon, CloseIcon, GitHubIcon, LinkedInIcon, TerminalIcon } from "@/components/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "achievements",
        "publications",
        "contact",
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
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
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Achievements", href: "#achievements", id: "achievements" },
    { label: "Publications", href: "#publications", id: "publications" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#06090e]/90 backdrop-blur-md border-b border-cyan-950/40 shadow-lg shadow-black/40 py-2.5"
          : "bg-[#06090e]/60 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Callsign / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded px-1.5 py-0.5"
          aria-label="Home"
        >
          <div className="flex items-center justify-center w-7 h-7 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 transition-colors">
            <TerminalIcon size={14} />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 led-pulse" />
              <span>SYS_READY // ENTC</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded text-xs font-mono tracking-wide transition-all ${
                  isActive
                    ? "text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 shadow-xs"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/50"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Quick Social Action Icons & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded border border-slate-800 bg-slate-900/70 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GitHubIcon size={16} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded border border-slate-800 bg-slate-900/70 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded border border-slate-800 bg-slate-900 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-cyan-950/60 bg-[#070b13]/98 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <div className="px-3 py-2 border-b border-slate-800/80 mb-2 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 led-pulse" />
              STATUS: NOMINAL
            </span>
            <span>NASHIK, IN</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded font-mono text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/80 flex items-center gap-3 px-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-300"
            >
              <GitHubIcon size={15} /> GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-300"
            >
              <LinkedInIcon size={15} /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
