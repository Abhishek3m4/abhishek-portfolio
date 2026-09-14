"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { TerminalIcon, ArrowDownIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import ViewCounter from "@/components/ViewCounter";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0d12] border-t border-[#171d27] py-12 px-4 sm:px-6 lg:px-8 font-tech text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2 text-white font-medium">
            <TerminalIcon size={14} className="text-cyan-400" />
            <span className="tracking-wider uppercase">{personalInfo.name}</span>
            <span className="text-slate-600">/</span>
            <span className="text-cyan-400 text-xs">PORTFOLIO</span>
          </div>
          <p className="text-xs text-slate-500 font-body">
            {personalInfo.primaryTitle} • {personalInfo.college}
          </p>
        </div>

        {/* Center: Engineering Focus */}
        <div className="text-center text-xs text-slate-500 hidden sm:block">
          <span>HARDWARE–SOFTWARE INTEGRATION • REAL-TIME SYSTEMS • RTL DESIGN</span>
        </div>

        {/* Right: Actions & Return to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-[#10151d] border border-[#171d27] text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
            title="GitHub"
            aria-label="GitHub"
          >
            <GitHubIcon size={15} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-[#10151d] border border-[#171d27] text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={15} />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#10151d] border border-[#171d27] hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 transition-colors text-xs"
            aria-label="Return to top of page"
          >
            <span className="rotate-180 inline-block">
              <ArrowDownIcon size={12} />
            </span>
            <span>TOP</span>
          </button>
        </div>
      </div>

      {/* Online Visitor Telemetry & Profile Views Showcase */}
      <div className="max-w-7xl mx-auto mt-8">
        <ViewCounter variant="panel" />
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#171d27] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <div>
          © {new Date().getFullYear()} Abhishek Ahirrao. All rights reserved.
        </div>
        <div className="text-slate-600">
          Built with Next.js, React, Tailwind CSS & GSAP ScrollTrigger
        </div>
      </div>
    </footer>
  );
}
