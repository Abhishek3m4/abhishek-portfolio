"use client";

import React from "react";
import { publications } from "@/data/portfolioData";
import { FileTextIcon } from "@/components/icons";

export default function PublicationsSection() {
  return (
    <section
      id="publications"
      className="py-20 px-4 sm:px-6 lg:px-12 bg-[#0a0d12] border-b border-[#242e3d]"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#242e3d] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-tech text-xs text-cyan-400 tracking-widest uppercase font-semibold block mb-1">
              RESEARCH // SCHOLARLY WORK
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Publications
            </h2>
          </div>
          <span className="font-tech text-xs text-slate-400">
            PEER-REVIEWED PAPERS
          </span>
        </div>

        {/* Editorial Vertical List */}
        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div
              key={pub.title}
              className="rounded-2xl bg-[#171d27] border border-[#242e3d] p-6 sm:p-8 hover:border-cyan-400/50 transition-all shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="font-tech text-xs px-2.5 py-0.5 rounded bg-[#10151d] text-cyan-300 border border-cyan-500/30 font-bold">
                    {pub.type.toUpperCase()}
                  </span>
                  <span className="font-tech text-xs text-slate-400">
                    {pub.date}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-tight leading-snug">
                  {pub.title}
                </h3>

                <p className="text-slate-300 text-sm font-body leading-relaxed">
                  {pub.venue}
                </p>

                {pub.technologies && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {pub.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#10151d] border border-[#242e3d] font-tech text-[11px] text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="font-display text-3xl font-black text-slate-400 shrink-0 self-start md:self-center">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
