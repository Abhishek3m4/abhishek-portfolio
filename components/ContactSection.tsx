"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
  MapPinIcon,
  ExternalLinkIcon,
  CheckCircleIcon,
  TerminalIcon,
} from "@/components/icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06090e] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2">
            <span>// 10</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>COMMUNICATION CHANNEL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Interested in collaboration, embedded systems development, real-time control projects, or research inquiries? Reach out via email or connect on LinkedIn and GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Direct Contact Box */}
          <div className="lg:col-span-7 rounded-xl bg-[#090f1a] border border-cyan-500/30 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <MailIcon size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">PRIMARY INBOX</span>
                    <span className="text-sm font-semibold text-white">Direct Engineering Contact</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 led-pulse" />
                  OPEN TO OPPORTUNITIES
                </span>
              </div>

              <div>
                <p className="text-xs font-mono text-slate-400 mb-2">EMAIL ADDRESS:</p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="px-4 py-3 rounded-lg bg-[#05080e] border border-cyan-900/60 text-cyan-300 font-mono text-sm sm:text-base hover:border-cyan-400 transition-colors truncate block flex-1"
                  >
                    {personalInfo.socials.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors shrink-0"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <CheckCircleIcon size={14} className="text-emerald-400" />
                        <span className="text-emerald-300">COPIED</span>
                      </>
                    ) : (
                      <>
                        <TerminalIcon size={14} />
                        <span>COPY ADDRESS</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#070c16] border border-slate-800/80 text-xs text-slate-300 font-mono space-y-1">
                <div className="text-cyan-400 font-semibold">// LOCATION COORDINATES</div>
                <div>{personalInfo.location}</div>
                <div className="text-slate-500 text-[11px] font-sans">
                  Available for embedded software roles, firmware development, research internships, and hardware integration projects.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>PGP / CLEAR-TEXT EMAIL</span>
              <span className="text-cyan-400">STATUS: RESPONSIVE</span>
            </div>
          </div>

          {/* Right Column: Profiles & Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            {/* GitHub Card */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0a101b] border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group shadow-md block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                  <GitHubIcon size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">SOURCE CODE & REPOSITORIES</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    github.com/Abhishek3m4
                  </div>
                </div>
              </div>
              <ExternalLinkIcon size={16} className="text-slate-500 group-hover:text-cyan-300 transition-colors" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0a101b] border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group shadow-md block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                  <LinkedInIcon size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">PROFESSIONAL NETWORK</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    linkedin.com/in/abhishek-ahirrao334
                  </div>
                </div>
              </div>
              <ExternalLinkIcon size={16} className="text-slate-500 group-hover:text-cyan-300 transition-colors" />
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-[#0a101b] border border-slate-800 flex items-center gap-3.5 shadow-md">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                <MapPinIcon size={20} />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">GEOGRAPHIC LOCATION</div>
                <div className="text-sm font-bold text-white">
                  {personalInfo.location}
                </div>
                <div className="text-[11px] font-mono text-slate-500">
                  IST (UTC+05:30)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
