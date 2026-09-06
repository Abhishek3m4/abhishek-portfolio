import React from "react";
import { certifications } from "@/data/portfolioData";
import { CheckCircleIcon, ClockIcon, AwardIcon } from "@/components/icons";

export default function CertificationsSection() {
  const completed = certifications.filter((c) => c.status === "Completed");
  const ongoing = certifications.filter((c) => c.status === "Ongoing");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#070b13] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2">
            <span>// 08</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>CONTINUOUS LEARNING & CERTIFICATIONS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Professional Certifications & Coursework
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Formal validation in simulation, C programming, and industrial networking, with ongoing technical expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* COMPLETED CERTIFICATIONS */}
          <div className="rounded-xl bg-[#0a111c] border border-emerald-500/30 p-6 space-y-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 led-pulse" />
                <h3 className="text-sm font-semibold font-mono text-emerald-300 tracking-wide">
                  COMPLETED CREDENTIALS
                </h3>
              </div>
              <span className="text-xs font-mono text-emerald-400/90 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/40">
                {completed.length} VERIFIED
              </span>
            </div>

            <div className="space-y-3">
              {completed.map((cert) => (
                <div
                  key={cert.name}
                  className="p-3.5 rounded-lg bg-[#070d17] border border-slate-800/80 flex items-start justify-between gap-3 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        Issuer: <span className="text-slate-200">{cert.issuer}</span>
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    COMPLETE
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ONGOING / IN PROGRESS */}
          <div className="rounded-xl bg-[#0a111c] border border-amber-500/30 p-6 space-y-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 led-pulse" />
                <h3 className="text-sm font-semibold font-mono text-amber-300 tracking-wide">
                  CURRENTLY IN PROGRESS
                </h3>
              </div>
              <span className="text-xs font-mono text-amber-400/90 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-800/40">
                {ongoing.length} ACTIVE COURSES
              </span>
            </div>

            <div className="space-y-3">
              {ongoing.map((cert) => (
                <div
                  key={cert.name}
                  className="p-3.5 rounded-lg bg-[#070d17] border border-slate-800/80 flex items-start justify-between gap-3 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <ClockIcon size={18} className="text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        Platform / Track: <span className="text-slate-200">{cert.issuer}</span>
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                    ONGOING
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
