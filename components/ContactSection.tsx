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
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0d12] border-t border-[#171d27]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 font-tech text-xs text-cyan-400 tracking-wider uppercase mb-3">
            <span>// 07</span>
            <span className="w-8 h-[1px] bg-cyan-500/40" />
            <span>CONTACT & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
            Let&apos;s Build Something
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Interested in firmware development, real-time control, FPGA RTL design, or research collaboration? Reach out directly via email or connect on professional platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Direct Contact Box */}
          <div className="lg:col-span-7 rounded-xl bg-[#10151d] border border-[#171d27] p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#171d27] pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <MailIcon size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-tech text-slate-400 block uppercase">Primary Inbox</span>
                    <span className="text-base font-semibold text-white">Direct Engineering Contact</span>
                  </div>
                </div>
                <span className="font-tech text-xs text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded border border-emerald-800/40 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  AVAILABLE
                </span>
              </div>

              <div>
                <p className="text-xs font-tech text-slate-400 mb-2 uppercase tracking-wider">Email Address</p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="px-4 py-3 rounded-lg bg-[#0a0d12] border border-[#202833] text-cyan-300 font-tech text-sm hover:border-cyan-400/60 transition-colors truncate block flex-1"
                  >
                    {personalInfo.socials.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="px-5 py-3 rounded-lg bg-[#171d27] hover:bg-[#202833] text-white font-tech text-xs font-medium flex items-center justify-center gap-2 transition-all border border-[#202833] hover:border-cyan-400/50 shrink-0 active:scale-95"
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

              <div className="p-5 rounded-lg bg-[#0a0d12] border border-[#171d27] text-xs sm:text-sm text-slate-300 space-y-2">
                <div className="text-cyan-400 font-tech text-xs flex items-center gap-2">
                  <MapPinIcon size={14} />
                  <span>LOCATION — {personalInfo.location}</span>
                </div>
                <div className="text-slate-400 leading-relaxed text-xs">
                  Available for embedded software roles, firmware engineering, aerospace avionics research, and hardware–software integration projects.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#171d27] flex items-center justify-between text-xs font-tech text-slate-500">
              <span>NASHIK / PUNE / BANGALORE / REMOTE</span>
              <span className="text-cyan-400">STATUS: ACTIVE</span>
            </div>
          </div>

          {/* Right Column: Profiles & Academic Affiliation */}
          <div className="lg:col-span-5 space-y-4">
            {/* GitHub Card */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-[#10151d] border border-[#171d27] hover:border-cyan-400/40 transition-all duration-200 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0a0d12] border border-[#171d27] flex items-center justify-center text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-colors">
                  <GitHubIcon size={22} />
                </div>
                <div>
                  <div className="text-xs font-tech text-slate-400 uppercase">Repositories & Code</div>
                  <div className="text-base font-medium text-white group-hover:text-cyan-300 transition-colors">
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
              className="p-6 rounded-xl bg-[#10151d] border border-[#171d27] hover:border-cyan-400/40 transition-all duration-200 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0a0d12] border border-[#171d27] flex items-center justify-center text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-colors">
                  <LinkedInIcon size={22} />
                </div>
                <div>
                  <div className="text-xs font-tech text-slate-400 uppercase">Professional Network</div>
                  <div className="text-base font-medium text-white group-hover:text-cyan-300 transition-colors">
                    linkedin.com/in/abhishek-ahirrao334
                  </div>
                </div>
              </div>
              <ExternalLinkIcon size={16} className="text-slate-500 group-hover:text-cyan-300 transition-colors" />
            </a>

            {/* Academic Institute Card */}
            <div className="p-6 rounded-xl bg-[#10151d] border border-[#171d27]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0a0d12] border border-[#171d27] flex items-center justify-center text-cyan-400">
                  <TerminalIcon size={20} />
                </div>
                <div>
                  <div className="text-xs font-tech text-slate-400 uppercase">Academic Affiliation</div>
                  <div className="text-sm font-medium text-white leading-snug">
                    {personalInfo.college}
                  </div>
                  <div className="text-xs text-cyan-400 font-tech mt-0.5">
                    Dept. of Electronics & Telecommunication Engineering
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
