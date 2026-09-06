import React from "react";
import { publications } from "@/data/portfolioData";
import { FileTextIcon, ClockIcon, CircuitIcon, FpgaIcon } from "@/components/icons";

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06090e] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2">
            <span>// 07</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>SCHOLARLY WORK & PEER-REVIEWED PAPERS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engineering Publications
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Published research covering vehicle-to-vehicle edge communication safety algorithms and low-power digital ALU architectures for energy-harvesting IoT nodes.
          </p>
        </div>

        {/* 2 Publications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <div
              key={pub.title}
              className="rounded-xl bg-[#0a111d] border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold">
                    {pub.type.toUpperCase()} PAPER // 0{index + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <ClockIcon size={12} className="text-cyan-400" />
                    <span>{pub.date}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <FileTextIcon size={18} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 font-sans leading-relaxed">
                      {pub.venue}
                    </p>
                  </div>
                </div>

                {pub.technologies && (
                  <div className="pt-2">
                    <div className="text-xs font-mono text-slate-400 mb-1.5">RESEARCH TOOLCHAIN:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {pub.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#0d1627] border border-slate-800 text-cyan-300 font-mono text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <CircuitIcon size={13} className="text-cyan-400" />
                  AUTHORED BY ABHISHEK AHIRRAO
                </span>
                <span className="text-emerald-400 text-[11px]">PEER REVIEWED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
