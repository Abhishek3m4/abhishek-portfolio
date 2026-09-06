"use client";

import React, { useState } from "react";
import {
  technicalSkillCategories,
  featuredProjects,
  otherProjects,
  Project,
} from "@/data/portfolioData";
import {
  CpuIcon,
  RadioSignalIcon,
  FpgaIcon,
  ControlIcon,
  TerminalIcon,
  AutomationIcon,
  CircuitIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from "@/components/icons";
import ProjectCaseStudyModal from "@/components/ProjectCaseStudyModal";

export default function SkillsSection() {
  const [selectedCode, setSelectedCode] = useState<string>("MCU_CORE");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const allProjects = [...featuredProjects, ...otherProjects];

  const getCategoryIcon = (code: string) => {
    switch (code) {
      case "MCU_CORE":
        return <CpuIcon size={20} className="text-cyan-400" />;
      case "BUS_PROTO":
        return <RadioSignalIcon size={20} className="text-sky-400" />;
      case "RTL_SYNTH":
        return <FpgaIcon size={20} className="text-indigo-400" />;
      case "CTRL_SIM":
        return <ControlIcon size={20} className="text-emerald-400" />;
      case "EDGE_ML":
        return <TerminalIcon size={20} className="text-teal-400" />;
      case "IND_AUTO":
        return <AutomationIcon size={20} className="text-amber-400" />;
      default:
        return <CpuIcon size={20} className="text-cyan-400" />;
    }
  };

  const activeCategory =
    technicalSkillCategories.find((c) => c.code === selectedCode) ||
    technicalSkillCategories[0];

  const relatedProjects = (activeCategory.relatedProjectIds || [])
    .map((id) => allProjects.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined);

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b1120] border-b border-[#1e293b] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2.5">
            <span>// 02</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>TECHNICAL IDENTITY & TOOLCHAIN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Domains & Toolchain
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Select any domain below to inspect verified technologies and cross-reference with working hardware and simulation projects.
          </p>
        </div>

        {/* 6 Category Engineering Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technicalSkillCategories.map((category) => {
            const isSelected = category.code === selectedCode;
            return (
              <button
                key={category.code}
                onClick={() => setSelectedCode(category.code)}
                className={`text-left p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                  isSelected
                    ? "bg-[#162238] border-cyan-400 shadow-xl shadow-cyan-950/50 scale-[1.01]"
                    : "bg-[#0f172a] border-[#243552] hover:border-[#38bdf8]/50 hover:bg-[#142033]"
                }`}
                aria-pressed={isSelected}
                aria-label={`Select domain ${category.title}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-[#243552] pb-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-[#0b1120] border border-[#243552] group-hover:border-cyan-400/50 transition-colors">
                        {getCategoryIcon(category.code)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white tracking-wide">
                          {category.title}
                        </h3>
                        <span className="text-[11px] font-mono text-cyan-400 block">
                          [{category.code}]
                        </span>
                      </div>
                    </div>
                    <span
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        isSelected ? "bg-cyan-400 led-pulse" : "bg-slate-700"
                      }`}
                    />
                  </div>

                  {/* Subsystem Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-sans">
                    {category.description}
                  </p>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${
                          isSelected
                            ? "bg-[#0b1120] border border-cyan-500/40 text-cyan-200 font-medium"
                            : "bg-[#162238] border border-[#243552] text-slate-300"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status strip */}
                <div className="mt-5 pt-3 border-t border-[#243552] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{category.skills.length} VERIFIED TOOLS</span>
                  <span className={isSelected ? "text-cyan-400 font-bold" : "text-slate-400"}>
                    {isSelected ? "ACTIVE SELECTION" : "CLICK TO INSPECT"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Connected Projects & Hardware Cross-Reference Panel */}
        <div className="mt-8 rounded-2xl bg-[#162238] border border-[#243552] p-6 sm:p-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#243552] pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                <CircuitIcon size={18} />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 block font-semibold">
                  CROSS-REFERENCE PIPELINE // {activeCategory.code}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Real Projects Built with {activeCategory.title}
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-[#0f172a] px-3 py-1.5 rounded-lg border border-[#243552]">
              {relatedProjects.length} CONNECTED IMPLEMENTATIONS
            </span>
          </div>

          {relatedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-5 rounded-xl bg-[#0f172a] border border-[#243552] hover:border-cyan-400/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400 font-semibold">{p.role}</span>
                      <span className="text-slate-400">{p.date}</span>
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed font-sans">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.technologies.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#162238] border border-[#2e4366] text-slate-300 font-mono text-[11px]"
                        >
                          {t}
                        </span>
                      ))}
                      {p.technologies.length > 5 && (
                        <span className="px-2 py-0.5 rounded bg-[#162238] text-slate-400 font-mono text-[11px]">
                          +{p.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#243552] flex items-center justify-between">
                    <button
                      onClick={() => setModalProject(p)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Inspect Case Study</span>
                      <ChevronRightIcon size={14} />
                    </button>
                    <a
                      href="#projects"
                      className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                      View in Showcase
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-400 font-mono">
              Core foundation applied across all hardware systems.
            </p>
          )}
        </div>
      </div>

      {/* Case study modal */}
      <ProjectCaseStudyModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
