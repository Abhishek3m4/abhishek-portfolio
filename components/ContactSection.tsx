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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b1120] border-b border-[#1e293b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2.5">
            <span>// 10</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>COMMUNICATION CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let&apos;s build something.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Interested in collaboration, embedded systems development, real-time control projects, or research inquiries? Reach out directly via email or connect on LinkedIn and GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Direct Contact Box */}
          <div className="lg:col-span-7 rounded-2xl bg-[#162238] border border-[#243552] p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#243552] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-xs">
                    <MailIcon size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block font-semibold">PRIMARY INBOX</span>
                    <span className="text-base font-bold text-white">Direct Engineering Contact</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40 flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 led-pulse" />
                  OPEN TO OPPORTUNITIES
                </span>
              </div>

              <div>
                <p className="text-xs font-mono text-slate-300 mb-2 font-semibold">EMAIL ADDRESS:</p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="px-4 py-3.5 rounded-xl bg-[#0f172a] border border-[#2e4366] text-cyan-300 font-mono text-sm sm:text-base hover:border-cyan-400 transition-colors truncate block flex-1 font-semibold"
                  >
                    {personalInfo.socials.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="px-5 py-3.5 rounded-xl bg-[#1e2d47] hover:bg-[#253857] text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all border border-[#2e4366] hover:border-cyan-400/50 shrink-0 active:scale-95"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <CheckCircleIcon size={16} className="text-emerald-400" />
                        <span className="text-emerald-300">COPIED</span>
                      </>
                    ) : (
                      <>
                        <TerminalIcon size={16} />
                        <span>COPY ADDRESS</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0f172a] border border-[#243552] text-xs sm:text-sm text-slate-200 font-mono space-y-2 shadow-inner">
                <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <MapPinIcon size={14} />
                  <span>LOCATION COORDINATES // {personalInfo.location}</span>
                </div>
                <div className="text-slate-300 font-sans leading-relaxed text-xs sm:text-sm">
                  Available for embedded software roles, firmware engineering, aerospace simulation research, and hardware integration projects.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#243552] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>PGP / ENCRYPTED & CLEAR-TEXT EMAIL</span>
              <span className="text-cyan-400 font-semibold">STATUS: RESPONSIVE</span>
            </div>
          </div>

          {/* Right Column: Profiles & Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            {/* GitHub Card */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#162238] border border-[#243552] hover:border-cyan-400/60 transition-all duration-200 flex items-center justify-between group shadow-lg hover:-translate-y-0.5 block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-[#243552] flex items-center justify-center text-slate-200 group-hover:text-cyan-300 group-hover:border-cyan-400/40 transition-colors shadow-xs">
                  <GitHubIcon size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 font-semibold">SOURCE CODE & REPOSITORIES</div>
                  <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    github.com/Abhishek3m4
                  </div>
                </div>
              </div>
              <ExternalLinkIcon size={18} className="text-slate-400 group-hover:text-cyan-300 transition-colors" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#162238] border border-[#243552] hover:border-cyan-400/60 transition-all duration-200 flex items-center justify-between group shadow-lg hover:-translate-y-0.5 block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-[#243552] flex items-center justify-center text-slate-200 group-hover:text-cyan-300 group-hover:border-cyan-400/40 transition-colors shadow-xs">
                  <LinkedInIcon size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 font-semibold">PROFESSIONAL NETWORK</div>
                  <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    linkedin.com/in/abhishek-ahirrao334
                  </div>
                </div>
              </div>
              <ExternalLinkIcon size={18} className="text-slate-400 group-hover:text-cyan-300 transition-colors" />
            </a>

            {/* Academic Institute Card */}
            <div className="p-6 rounded-2xl bg-[#162238] border border-[#243552] shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-[#243552] flex items-center justify-center text-cyan-400 shadow-xs">
                  <TerminalIcon size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 font-semibold">CAMPUS AFFILIATION</div>
                  <div className="text-sm font-bold text-white leading-snug">
                    {personalInfo.college}
                  </div>
                  <div className="text-xs text-cyan-300 font-mono mt-0.5">
                    Department of E&TC Engineering
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
