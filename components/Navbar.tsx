"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { MenuIcon, CloseIcon, GitHubIcon, LinkedInIcon, TerminalIcon } from "@/components/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledRatio = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledRatio);

      setScrolled(winScroll > 20);

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
          if (rect.top <= 200 && rect.bottom >= 200) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1120]/95 backdrop-blur-md border-b border-[#243552] shadow-xl shadow-black/40 py-2.5"
          : "bg-[#0b1120]/80 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      {/* Subtle Scroll Progress Indicator across top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#1e293b]">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Callsign / Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-wider focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-2 py-1"
          aria-label="Home"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 group-hover:border-cyan-400 transition-colors shadow-xs">
            <TerminalIcon size={15} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">
              {personalInfo.name}
            </span>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 led-pulse" />
              <span>SYS_READY // ENTC</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                  isActive
                    ? "text-cyan-300 bg-[#162238] border border-cyan-500/40 shadow-xs font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-[#162238]/60"
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
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg border border-[#243552] bg-[#162238] text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GitHubIcon size={15} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg border border-[#243552] bg-[#162238] text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon size={15} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-[#243552] bg-[#162238] text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[#243552] bg-[#0f172a] px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#243552] text-xs font-mono text-cyan-400 font-semibold">
            <span>NAVIGATION MATRIX</span>
            <span>AA // ENTC</span>
          </div>
          <nav className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-mono tracking-wide transition-all ${
                    isActive
                      ? "text-cyan-300 bg-[#162238] border border-cyan-500/50 font-bold"
                      : "text-slate-300 hover:text-white bg-[#162238]/40 border border-[#243552]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 flex items-center gap-3 border-t border-[#243552]">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-[#243552] bg-[#162238] text-xs font-mono text-slate-200"
            >
              <GitHubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-[#243552] bg-[#162238] text-xs font-mono text-slate-200"
            >
              <LinkedInIcon size={14} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
