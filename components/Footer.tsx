"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { TerminalIcon, ArrowDownIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1120] border-t border-[#1e293b] py-14 px-4 sm:px-6 lg:px-8 font-mono text-xs text-slate-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Status */}
        <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
          <div className="flex items-center gap-2 text-white font-bold">
            <TerminalIcon size={15} className="text-cyan-400" />
            <span>{personalInfo.name}</span>
            <span className="text-slate-500">|</span>
            <span className="text-cyan-400 text-xs font-semibold">{personalInfo.callsign}</span>
          </div>
          <p className="text-xs text-slate-400 font-sans">
            {personalInfo.primaryTitle} • {personalInfo.college}
          </p>
        </div>

        {/* Center: Real-time telemetry / build status */}
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 led-pulse" />
            SYS_TELEMETRY: STABLE
          </span>
          <span className="text-slate-600">•</span>
          <span>NO_TRACKERS</span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400 font-semibold">LATENCY: &lt;10ms</span>
        </div>

        {/* Right: Actions & Return to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-[#162238] border border-[#243552] text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
            title="GitHub"
            aria-label="GitHub"
          >
            <GitHubIcon size={16} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-[#162238] border border-[#243552] text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={16} />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#162238] border border-[#243552] hover:border-cyan-400/60 text-slate-200 hover:text-cyan-300 transition-colors text-xs font-semibold"
            aria-label="Return to top of page"
          >
            <span className="rotate-180 inline-block">
              <ArrowDownIcon size={12} />
            </span>
            <span>TOP</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <div>
          © {new Date().getFullYear()} Abhishek Ahirrao. Designed with embedded engineering principles.
        </div>
        <div>
          Hardware–Software Integration • Real-Time Systems • FPGA RTL
        </div>
      </div>
    </footer>
  );
}
