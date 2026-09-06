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
  isOpen?: boolean;
  onClose: () => void;
}

export default function ProjectCaseStudyModal({
  project,
  isOpen = true,
  onClose,
}: ProjectCaseStudyModalProps) {
  useEffect(() => {
    if (!project || !isOpen) return;

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
  }, [project, isOpen, onClose]);

  if (!project || !isOpen) return null;

  const caseStudy = project.caseStudy;
  const projectDomain = (project as any).category || project.domain || "EMBEDDED SYSTEM";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#10151d] border border-[#202833] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#171d27] bg-[#171d27]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-tech text-xs font-semibold uppercase">
              Case Study // {projectDomain}
            </span>
            {caseStudy?.status && (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-tech text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {caseStudy.status}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#202833] transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Close case study dialog"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-200">
          {/* 1. Title & Overview */}
          <div>
            <div className="text-xs font-tech text-cyan-400 mb-1 uppercase">
              Role: <strong className="text-slate-200">{project.role}</strong> • {project.date}
            </div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight uppercase">
              {project.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-body">
              {project.description}
            </p>
          </div>

          {/* 2. Problem & Approach */}
          {caseStudy && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#171d27] border border-[#202833] space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-tech text-amber-400 font-semibold tracking-wider uppercase">
                  <TerminalIcon size={14} />
                  <span>The Engineering Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#171d27] border border-[#202833] space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 font-semibold tracking-wider uppercase">
                  <CircuitIcon size={14} />
                  <span>Methodology & Approach</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  {caseStudy.approach}
                </p>
              </div>
            </div>
          )}

          {/* 3. Technology / Tools */}
          <div>
            <div className="text-xs font-tech text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5 uppercase">
              <CpuIcon size={14} className="text-cyan-400" />
              <span>Technology & Hardware Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-[#171d27] border border-[#202833] text-slate-200 font-tech text-xs hover:border-cyan-400/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Architecture / Workflow */}
          {caseStudy && caseStudy.architecture.length > 0 && (
            <div>
              <div className="text-xs font-tech text-cyan-400 tracking-wider mb-3 flex items-center gap-1.5 uppercase">
                <RadioSignalIcon size={14} />
                <span>System Architecture & Specifications</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#0a0d12] border border-[#171d27] text-xs text-slate-300 font-tech flex items-start gap-2.5"
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
              <div className="text-xs font-tech text-slate-400 tracking-wider mb-3 flex items-center gap-1.5 uppercase">
                <CircuitIcon size={14} className="text-teal-400" />
                <span>Implementation Highlights</span>
              </div>
              <div className="space-y-2">
                {caseStudy.implementation.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#0a0d12] border border-[#171d27] text-xs text-slate-300 flex items-start gap-2.5"
                  >
                    <CheckCircleIcon size={15} className="text-teal-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Validated Results */}
          {caseStudy && caseStudy.results.length > 0 && (
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-tech text-emerald-400 font-semibold tracking-wider uppercase">
                <CheckCircleIcon size={16} />
                <span>Validation Results & Outcomes</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                {caseStudy.results.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span className="font-body">{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#171d27] bg-[#171d27] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-tech text-slate-400">
            ENGINEERING SPECIFICATION ARCHIVE
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/Abhishek3m4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#202833] hover:bg-[#283240] text-white font-tech text-xs transition-colors border border-[#2e4366]"
            >
              <GitHubIcon size={14} />
              <span>GitHub Profile</span>
              <ExternalLinkIcon size={12} className="text-slate-400" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-tech text-xs font-semibold transition-colors uppercase"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
