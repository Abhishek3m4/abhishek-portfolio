"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import {
  CloseIcon,
  CheckCircleIcon,
  CircuitIcon,
  CpuIcon,
  TerminalIcon,
  GitHubIcon,
  ExternalLinkIcon,
  RadioSignalIcon,
} from "@/components/icons";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectCaseStudyModal({
  project,
  onClose,
}: ProjectCaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 modal-backdrop-animate bg-slate-950/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0f172a] border border-[#243552] shadow-2xl overflow-hidden modal-content-animate"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e293b] bg-[#131e34]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold">
              CASE STUDY // {project.category || "EMBEDDED SYSTEM"}
            </span>
            {caseStudy?.status && (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 led-pulse" />
                {caseStudy.status}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1e293b] transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Close case study dialog"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-200">
          {/* 1. Title & Overview */}
          <div>
            <div className="text-xs font-mono text-cyan-400 mb-1">
              ROLE: <strong className="text-slate-200">{project.role}</strong> • {project.date}
            </div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              {project.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* 2. Problem & Approach */}
          {caseStudy && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#162238] border border-[#243552] space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold tracking-wider">
                  <TerminalIcon size={14} />
                  <span>THE ENGINEERING PROBLEM</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#162238] border border-[#243552] space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                  <CircuitIcon size={14} />
                  <span>METHODOLOGY & APPROACH</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {caseStudy.approach}
                </p>
              </div>
            </div>
          )}

          {/* 3. Technology / Tools */}
          <div>
            <div className="text-xs font-mono text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5">
              <CpuIcon size={14} className="text-cyan-400" />
              <span>TECHNOLOGY & HARDWARE STACK</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-[#162238] border border-[#2e4366] text-slate-200 font-mono text-xs hover:border-cyan-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Architecture / Workflow */}
          {caseStudy && caseStudy.architecture.length > 0 && (
            <div>
              <div className="text-xs font-mono text-cyan-400 tracking-wider mb-3 flex items-center gap-1.5">
                <RadioSignalIcon size={14} />
                <span>SYSTEM ARCHITECTURE & WORKFLOW</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#141f33] border border-[#243552] text-xs text-slate-300 font-mono flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Implementation Highlights */}
          {caseStudy && caseStudy.implementation.length > 0 && (
            <div>
              <div className="text-xs font-mono text-slate-400 tracking-wider mb-3 flex items-center gap-1.5">
                <CircuitIcon size={14} className="text-teal-400" />
                <span>IMPLEMENTATION SPECIFICATIONS</span>
              </div>
              <div className="space-y-2">
                {caseStudy.implementation.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#141f33] border border-[#243552] text-xs text-slate-300 flex items-start gap-2.5"
                  >
                    <CheckCircleIcon size={15} className="text-teal-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Validated Results */}
          {caseStudy && caseStudy.results.length > 0 && (
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#13233b] to-[#101b2f] border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold tracking-wider">
                <CheckCircleIcon size={16} />
                <span>VALIDATION RESULTS & OUTCOMES</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                {caseStudy.results.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#1e293b] bg-[#131e34] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-400">
            ENGINEERING LOG // VERIFIED SPECIFICATIONS
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/Abhishek3m4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1e2d47] hover:bg-[#253857] text-white font-mono text-xs transition-colors border border-[#2e4366]"
            >
              <GitHubIcon size={14} />
              <span>GitHub Profile</span>
              <ExternalLinkIcon size={12} className="text-slate-400" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-semibold transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
