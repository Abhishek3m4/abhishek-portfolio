import React from "react";
import { otherProjects } from "@/data/portfolioData";
import { WaveformIcon, TrophyIcon, TerminalIcon, ControlIcon } from "@/components/icons";

export default function OtherProjects() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#070b13] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2">
            <span>// 04</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>SPECIALIZED ENGINEERING SYSTEMS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Simulation, Digital Twin & Edge Analytics
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Advanced engineering platforms spanning traffic digital twins, satellite radiation forecasting, and trajectory optimization.
          </p>
        </div>

        {/* 3 Secondary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg bg-[#0b121f] border border-slate-800/90 hover:border-cyan-500/30 p-5 flex flex-col justify-between transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-900/40">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.date}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white leading-snug">
                  {project.title}
                </h3>

                {project.context && (
                  <div className="p-2.5 rounded bg-[#070c17] border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed flex items-start gap-2">
                    {project.id === "twinx-digital-twin" ? (
                      <TrophyIcon size={14} className="text-amber-400 shrink-0 mt-0.5" />
                    ) : project.id === "gaganix-space-weather" ? (
                      <WaveformIcon size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    ) : (
                      <ControlIcon size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    <span className="text-slate-300 text-[11px]">{project.context}</span>
                  </div>
                )}

                <p className="text-xs text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#0d1627] border border-slate-800 text-slate-400 font-mono text-[10px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>ROLE: {project.role}</span>
                <span className="text-slate-400">RESEARCH / SIM</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
