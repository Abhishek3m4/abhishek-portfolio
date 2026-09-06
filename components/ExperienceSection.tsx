import React from "react";
import { engineeringExperiences } from "@/data/portfolioData";
import { CircuitIcon, CheckCircleIcon, ClockIcon, TerminalIcon } from "@/components/icons";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06090e] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2">
            <span>// 05</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>RESEARCH & ENGINEERING EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Practical Engineering & Internship History
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Simulation-based aerospace research and hands-on avionics subsystem engineering with strictly verified roles and responsibilities.
          </p>
        </div>

        {/* Timeline / Experience Cards */}
        <div className="space-y-8">
          {engineeringExperiences.map((exp, index) => (
            <div
              key={exp.organization}
              className="rounded-xl bg-[#0a101c] border border-slate-800 p-6 sm:p-8 relative transition-all hover:border-cyan-500/40 shadow-lg"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800/80 pb-5 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                      EXP 0{index + 1} //
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.organization}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                    <span className="text-cyan-300 font-semibold">{exp.role}</span>
                    {exp.position && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">{exp.position}</span>
                      </>
                    )}
                  </div>
                </div>

                {exp.date && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0e1726] border border-slate-700 text-xs font-mono text-slate-300">
                    <ClockIcon size={13} className="text-cyan-400" />
                    <span>{exp.date}</span>
                  </div>
                )}
              </div>

              {/* Project / Description */}
              {exp.project && (
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded bg-[#070d17] border border-cyan-900/40 text-xs font-mono text-cyan-300">
                  <TerminalIcon size={13} />
                  <span>PROJECT: {exp.project}</span>
                </div>
              )}

              {exp.description && (
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {exp.description}
                </p>
              )}

              {/* Tools if specified */}
              {exp.tools && (
                <div className="mb-5">
                  <div className="text-xs font-mono text-slate-400 mb-2">TOOLS & ENVIRONMENTS:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded bg-[#0d1728] border border-cyan-950 text-cyan-300 font-mono text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Work Scope / Bullets */}
              <div>
                <div className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-1.5">
                  <CircuitIcon size={14} className="text-cyan-400" />
                  <span>KEY RESPONSIBILITIES & WORK PERFORMED:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {exp.work.map((item) => (
                    <div
                      key={item}
                      className="p-2.5 rounded bg-[#080e19] border border-slate-800/80 text-xs text-slate-300 font-mono flex items-start gap-2.5"
                    >
                      <CheckCircleIcon size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
