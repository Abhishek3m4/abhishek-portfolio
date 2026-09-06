"use client";

import React, { useState } from "react";
import { otherProjects, Project } from "@/data/portfolioData";
import {
  WaveformIcon,
  TrophyIcon,
  ControlIcon,
  ChevronRightIcon,
} from "@/components/icons";
import ProjectCaseStudyModal from "@/components/ProjectCaseStudyModal";

export default function OtherProjects() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a] border-b border-[#1e293b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2.5">
            <span>// 04</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>SPECIALIZED ENGINEERING SYSTEMS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Simulation, Digital Twin & Edge Analytics
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Advanced engineering platforms spanning traffic digital twins, satellite radiation forecasting, and trajectory optimization.
          </p>
        </div>

        {/* 3 Secondary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#162238] border border-[#243552] hover:border-cyan-400/60 p-6 flex flex-col justify-between transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 group"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-[#243552] pb-3">
                  <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/40 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Context callout */}
                {project.context && (
                  <div className="p-3 rounded-xl bg-[#0f172a] border border-[#243552] text-xs text-slate-300 font-mono leading-relaxed flex items-start gap-2.5">
                    {project.id === "twinx-digital-twin" ? (
                      <TrophyIcon size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    ) : project.id === "gaganix-space-weather" ? (
                      <WaveformIcon size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    ) : (
                      <ControlIcon size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    <span className="text-slate-200 text-xs font-sans font-medium">{project.context}</span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#0f172a] border border-[#2e4366] text-slate-300 font-mono text-xs hover:border-cyan-400 hover:text-cyan-200 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-6 pt-4 border-t border-[#243552] flex items-center justify-between">
                <button
                  onClick={() => setModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:text-cyan-300 focus:outline-none"
                  aria-label={`View architecture for ${project.title}`}
                >
                  <span>Inspect Case Study</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    <ChevronRightIcon size={14} />
                  </span>
                </button>
                <span className="text-[11px] font-mono text-slate-400">
                  {project.role.split(" ")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
