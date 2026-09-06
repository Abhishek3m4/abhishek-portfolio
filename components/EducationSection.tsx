"use client";

import React from "react";
import { educationTimeline } from "@/data/portfolioData";
import TechnicalImage from "@/components/TechnicalImage";

export default function EducationSection() {
  const primaryEdu = educationTimeline.find((e) => e.isPrimary) || educationTimeline[0];
  const secondaryEdu = educationTimeline.filter((e) => !e.isPrimary);

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-12 bg-[#10151d] border-b border-[#242e3d] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="border-b border-[#242e3d] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-tech text-xs text-cyan-400 tracking-widest uppercase font-semibold block mb-1">
              ACADEMIC TRACK // CREDENTIALS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Education & Milestones
            </h2>
          </div>
          <span className="font-tech text-xs text-slate-400">
            K.K. WAGH IEER • 2023–2027
          </span>
        </div>

        {/* Designed Vertical Hanging Milestone Spine */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          {/* Vertical Connecting Rail */}
          <div className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-[2px] bg-[#242e3d]" />

          {/* 1. Primary Milestone: B.Tech (2027) */}
          <div className="relative">
            {/* Hanging Node */}
            <div className="absolute -left-6 sm:-left-10 top-2 flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#10151d] border-2 border-cyan-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400 led-pulse" />
              </div>
            </div>

            <div className="font-tech text-xs font-bold text-cyan-400 tracking-wider mb-2">
              2023 – 2027 // CURRENT ENROLLMENT
            </div>

            {/* Dominant Primary B.Tech Card */}
            <div className="rounded-2xl bg-[#171d27] border border-cyan-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="font-tech text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                    {primaryEdu.institution}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                    {primaryEdu.degree}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body pt-1">
                    {primaryEdu.description}
                  </p>
                </div>

                {/* Performance Metrics */}
                <div className="flex flex-wrap lg:flex-col gap-3 shrink-0">
                  <div className="p-3.5 rounded-xl bg-[#0a0d12] border border-cyan-500/40 font-tech min-w-[140px]">
                    <span className="text-[10px] text-slate-400 block font-semibold">
                      CUMULATIVE CGPA
                    </span>
                    <span className="font-display text-2xl font-bold text-cyan-300 block mt-0.5">
                      {primaryEdu.score}
                    </span>
                    <span className="text-[10px] text-slate-400 block">Up to Sem VI</span>
                  </div>

                  {primaryEdu.secondaryScore && (
                    <div className="p-3.5 rounded-xl bg-[#0a0d12] border border-emerald-500/40 font-tech min-w-[140px]">
                      <span className="text-[10px] text-slate-400 block font-semibold">
                        HIGHEST SGPA
                      </span>
                      <span className="font-display text-2xl font-bold text-emerald-400 block mt-0.5">
                        {primaryEdu.secondaryScore}
                      </span>
                      <span className="text-[10px] text-emerald-400 block">Peak Term</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Campus Visual & Coursework */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-[#242e3d] items-center">
                <div className="lg:col-span-7 space-y-2">
                  <span className="font-tech text-xs text-slate-300 uppercase block font-semibold">
                    Core Coursework & Specialized Laboratory Domains:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {primaryEdu.courseworkOrFocus?.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 py-1 rounded bg-[#0a0d12] border border-[#242e3d] font-tech text-xs text-slate-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-xl overflow-hidden border border-[#242e3d] bg-[#0a0d12] p-1.5 shadow-inner">
                    <TechnicalImage
                      src={primaryEdu.image}
                      alt={primaryEdu.institution}
                      aspectRatio="aspect-16/9"
                      label="CAMPUS // K.K. WAGH IEER"
                      tag="INSTITUTE"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Milestones: HSC & SSC */}
          {secondaryEdu.map((edu) => (
            <div key={edu.id} className="relative">
              {/* Hanging Node */}
              <div className="absolute -left-6 sm:-left-10 top-2 flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#10151d] border-2 border-[#3b495e] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#3b495e]" />
                </div>
              </div>

              <div className="font-tech text-xs font-bold text-slate-400 tracking-wider mb-2">
                {edu.duration} // COMPLETED
              </div>

              <div className="rounded-2xl bg-[#171d27] border border-[#242e3d] p-6 sm:p-8 shadow-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#242e3d] pb-3">
                  <div>
                    <h4 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                      {edu.degree}
                    </h4>
                    <span className="font-tech text-xs text-slate-400">
                      {edu.institution}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-tech text-xs">
                    <span className="px-2.5 py-1 rounded bg-[#0a0d12] border border-[#242e3d] text-cyan-300 font-bold">
                      {edu.scoreLabel}: {edu.score}
                    </span>
                    {edu.secondaryScore && (
                      <span className="px-2.5 py-1 rounded bg-[#0a0d12] border border-[#242e3d] text-emerald-300 font-bold">
                        {edu.secondaryScoreLabel}: {edu.secondaryScore}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 text-sm font-body leading-relaxed">
                  {edu.description}
                </p>

                {/* Banner image if present */}
                {edu.image && (
                  <div className="rounded-xl overflow-hidden border border-[#242e3d] bg-[#0a0d12] p-1 shadow-inner">
                    <TechnicalImage
                      src={edu.image}
                      alt={edu.institution}
                      aspectRatio="aspect-16/6"
                      objectFit="contain"
                      label={`ACADEMIC // ${edu.institution}`}
                      tag="RECORD"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
