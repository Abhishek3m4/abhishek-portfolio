import React from "react";
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
  const getCategoryIcon = (code: string) => {
    switch (code) {
      case "MCU_CORE":
        return <CpuIcon size={18} className="text-cyan-400" />;
      case "BUS_PROTO":
        return <RadioSignalIcon size={18} className="text-sky-400" />;
      case "RTL_SYNTH":
        return <FpgaIcon size={18} className="text-indigo-400" />;
      case "CTRL_SIM":
        return <ControlIcon size={18} className="text-emerald-400" />;
      case "EDGE_ML":
        return <TerminalIcon size={18} className="text-teal-400" />;
      case "IND_AUTO":
        return <AutomationIcon size={18} className="text-amber-400" />;
      default:
        return <CpuIcon size={18} className="text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06090e] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2">
            <span>// 02</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>TECHNICAL IDENTITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engineering Domains & Toolchain
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Structured into six core engineering disciplines spanning hardware abstraction, serial telemetry, RTL digital synthesis, dynamic control simulation, and industrial automation.
          </p>
        </div>

        {/* 6 Category Engineering Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkillCategories.map((category) => (
            <div
              key={category.code}
              className="rounded-lg bg-[#0a101b] border border-slate-800/90 hover:border-cyan-500/30 p-5 flex flex-col justify-between transition-all duration-200 shadow-md group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                      {getCategoryIcon(category.code)}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white tracking-wide">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-cyan-400/90 block">
                        [{category.code}]
                      </span>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                </div>

                {/* Subsystem Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-[#0e1626] border border-slate-800/90 text-slate-300 font-mono text-[11px] hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status strip */}
              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>{category.skills.length} TECHNOLOGIES</span>
                <span className="text-slate-600">PRODUCTION READY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
