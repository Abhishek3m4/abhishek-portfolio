"use client";

import React, { useState } from "react";
import { technicalSkillCategories } from "@/data/portfolioData";
import {
  CpuIcon,
  RadioSignalIcon,
  FpgaIcon,
  ControlIcon,
  TerminalIcon,
  AutomationIcon,
} from "@/components/icons";

export default function SkillsSection() {
  const [selectedCode, setSelectedCode] = useState<string>("MCU");

  const getCategoryIcon = (code: string) => {
    switch (code) {
      case "MCU":
        return <CpuIcon size={20} className="text-cyan-400" />;
      case "BUS":
        return <RadioSignalIcon size={20} className="text-teal-400" />;
      case "RTL":
        return <FpgaIcon size={20} className="text-amber-400" />;
      case "SIM":
        return <ControlIcon size={20} className="text-emerald-400" />;
      case "ML":
        return <TerminalIcon size={20} className="text-sky-400" />;
      case "PLC":
        return <AutomationIcon size={20} className="text-violet-400" />;
      default:
        return <CpuIcon size={20} className="text-cyan-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-12 bg-[#0a0d12] border-b border-[#242e3d]"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#242e3d] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-tech text-xs text-cyan-400 tracking-widest uppercase font-semibold block mb-1">
              DOMAINS // TOOLCHAIN
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Technical Disciplines
            </h2>
          </div>
          <span className="font-tech text-xs text-slate-400">
            6 SPECIALIZED DOMAINS
          </span>
        </div>

        {/* Interactive Domain Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkillCategories.map((cat) => {
            const isSelected = selectedCode === cat.code;

            return (
              <div
                key={cat.code}
                onClick={() => setSelectedCode(cat.code)}
                className={`p-6 rounded-2xl bg-[#171d27] border transition-all duration-200 cursor-pointer shadow-xl flex flex-col justify-between ${
                  isSelected
                    ? "border-cyan-400/80 shadow-cyan-950/20"
                    : "border-[#242e3d] hover:border-[#3b495e]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#242e3d] pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#10151d] border border-[#242e3d]">
                        {getCategoryIcon(cat.code)}
                      </div>
                      <span className="font-tech text-xs font-bold text-slate-300 uppercase">
                        {cat.code}
                      </span>
                    </div>

                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 led-pulse" />
                    )}
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-slate-400 text-xs font-body leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#242e3d]/80">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-[#10151d] border border-[#242e3d] font-tech text-[11px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
