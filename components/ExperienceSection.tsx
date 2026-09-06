"use client";

import React, { useState } from "react";
import { engineeringExperiences } from "@/data/portfolioData";
import {
  CircuitIcon,
  CheckCircleIcon,
  ClockIcon,
  TerminalIcon,
  CpuIcon,
  WaveformIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@/components/icons";

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeExp = engineeringExperiences[activeIndex];
  const total = engineeringExperiences.length;

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a] border-b border-[#1e293b] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2.5">
            <span>// 05</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>RESEARCH & ENGINEERING EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Engineering & Internship History
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Aerospace simulation research and hands-on avionics subsystem engineering with strictly verified roles and responsibilities.
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Timeline Milestones */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono text-slate-400 tracking-wider mb-2">
              TIMELINE TRACK // SELECT MILESTONE
            </div>

            <div className="relative border-l-2 border-[#243552] ml-4 pl-6 space-y-6">
              {engineeringExperiences.map((exp, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div key={exp.organization} className="relative">
                    {/* Timeline Node Point */}
                    <button
                      onClick={() => setActiveIndex(idx)}
                      className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                        isActive
                          ? "bg-cyan-400 border-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)] scale-110"
                          : "bg-[#0b1120] border-[#334155] hover:border-cyan-400"
                      }`}
                      aria-label={`View experience at ${exp.organization}`}
                      aria-pressed={isActive}
                    />

                    {/* Timeline Milestone Button Card */}
                    <button
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                        isActive
                          ? "bg-[#162238] border-cyan-400/80 shadow-lg shadow-cyan-950/40 translate-x-1"
                          : "bg-[#111c30] border-[#243552] hover:border-[#38bdf8]/40 hover:bg-[#14223a] text-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                        <span className={isActive ? "text-cyan-400 font-bold" : "text-slate-400"}>
                          0{idx + 1} // {exp.date || "ONGOING"}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 led-pulse" />
                        )}
                      </div>
                      <div className="font-bold text-sm sm:text-base text-white leading-snug">
                        {exp.organization}
                      </div>
                      <div className="text-xs text-slate-300 font-mono mt-1">
                        {exp.role}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="pt-2 flex items-center justify-between font-mono text-xs text-slate-400">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + total) % total)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#162238] border border-[#243552] hover:border-cyan-400 text-slate-200 hover:text-cyan-300 transition-colors"
                aria-label="Previous experience"
              >
                <ChevronLeftIcon size={14} />
                <span>Prev Record</span>
              </button>
              <span>{activeIndex + 1} / {total}</span>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % total)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#162238] border border-[#243552] hover:border-cyan-400 text-slate-200 hover:text-cyan-300 transition-colors"
                aria-label="Next experience"
              >
                <span>Next Record</span>
                <ChevronRightIcon size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Active Experience Detail Dossier */}
          <div className="lg:col-span-8">
            <div
              key={activeExp.organization}
              className="rounded-2xl bg-[#162238] border border-[#243552] p-6 sm:p-8 lg:p-10 shadow-xl transition-all duration-300 space-y-6"
            >
              {/* Dossier Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#243552] pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono text-cyan-400 font-bold tracking-wider">
                      ACTIVE DOSSIER // 0{activeIndex + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 led-pulse" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeExp.organization}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-slate-300 mt-2">
                    <span className="text-cyan-300 font-semibold">{activeExp.role}</span>
                    {activeExp.position && (
                      <>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-300">{activeExp.position}</span>
                      </>
                    )}
                  </div>
                </div>

                {activeExp.date && (
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0f172a] border border-[#2e4366] text-xs font-mono text-slate-200">
                    <ClockIcon size={13} className="text-cyan-400" />
                    <span>{activeExp.date}</span>
                  </div>
                )}
              </div>

              {/* Research Project Badge if exists */}
              {activeExp.project && (
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0f172a] border border-cyan-500/40 text-xs font-mono text-cyan-200">
                  <TerminalIcon size={14} className="text-cyan-400 shrink-0" />
                  <span>PROJECT: {activeExp.project}</span>
                </div>
              )}

              {/* Description */}
              {activeExp.description && (
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                  {activeExp.description}
                </p>
              )}

              {/* Tools & Environments */}
              {activeExp.tools && (
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <CpuIcon size={14} className="text-cyan-400" />
                    <span>ENGINEERING TOOLS & ENVIRONMENTS</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeExp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-md bg-[#0f172a] border border-[#2e4366] text-cyan-200 font-mono text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Work Scope / Bullets */}
              <div>
                <div className="text-xs font-mono text-slate-300 mb-3 flex items-center gap-1.5">
                  <CircuitIcon size={14} className="text-teal-400" />
                  <span>KEY RESPONSIBILITIES & SYSTEM WORK</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeExp.work.map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-lg bg-[#0f172a] border border-[#243552] text-xs sm:text-sm text-slate-200 font-mono flex items-start gap-2.5 hover:border-cyan-500/40 transition-colors"
                    >
                      <CheckCircleIcon size={15} className="text-teal-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status footer strip */}
              <div className="pt-3 border-t border-[#243552] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <WaveformIcon size={13} className="text-cyan-400" />
                  CONFIRMED ENGINEERING HISTORY
                </span>
                <span className="text-emerald-400">VERIFIED CREDENTIAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
