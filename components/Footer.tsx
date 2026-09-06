"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { TerminalIcon, ArrowDownIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070c] border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Status */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2 text-slate-200 font-semibold">
            <TerminalIcon size={14} className="text-cyan-400" />
            <span>{personalInfo.name}</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400 text-[11px]">{personalInfo.callsign}</span>
          </div>
          <p className="text-[11px] text-slate-500 font-sans">
            {personalInfo.primaryTitle} • {personalInfo.college}
          </p>
        </div>

        {/* Center: Real-time telemetry / build status */}
        <div className="flex items-center gap-4 text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 led-pulse" />
            SYS_TELEMETRY: STABLE
          </span>
          <span>•</span>
          <span>NO_TRACKERS</span>
          <span>•</span>
          <span>LATENCY: &lt;10ms</span>
        </div>

        {/* Right: Actions & Return to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            title="GitHub"
            aria-label="GitHub"
          >
            <GitHubIcon size={15} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={15} />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors text-xs"
            aria-label="Return to top of page"
          >
            <span className="rotate-180 inline-block">
              <ArrowDownIcon size={12} />
            </span>
            <span>TOP</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-600 gap-2">
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
