import React from "react";
import { publications } from "@/data/portfolioData";
import { FileTextIcon, ClockIcon, CircuitIcon } from "@/components/icons";

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a] border-b border-[#1e293b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2.5">
            <span>// 07</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>SCHOLARLY WORK & PEER-REVIEWED PAPERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Publications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Published research covering vehicle-to-vehicle edge communication safety algorithms and low-power digital ALU architectures for energy-harvesting IoT nodes.
          </p>
        </div>

        {/* 2 Publications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <div
              key={pub.title}
              className="rounded-2xl bg-[#162238] border border-[#243552] p-7 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 shadow-xl hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#243552] pb-3.5">
                  <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold">
                    {pub.type.toUpperCase()} PAPER // 0{index + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                    <ClockIcon size={13} className="text-cyan-400" />
                    <span>{pub.date}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-[#0f172a] border border-[#243552] text-cyan-400 shrink-0 mt-0.5 group-hover:border-cyan-400/40 transition-colors">
                    <FileTextIcon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 font-sans leading-relaxed">
                      {pub.venue}
                    </p>
                  </div>
                </div>

                {pub.technologies && (
                  <div className="pt-2">
                    <div className="text-xs font-mono text-slate-400 mb-2">RESEARCH TOOLCHAIN:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {pub.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-[#0f172a] border border-[#2e4366] text-cyan-300 font-mono text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-[#243552] flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CircuitIcon size={14} className="text-cyan-400" />
                  AUTHORED BY ABHISHEK AHIRRAO
                </span>
                <span className="text-emerald-400 font-semibold text-[11px]">PEER REVIEWED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
