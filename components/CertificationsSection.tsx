"use client";

import React from "react";
import { certifications } from "@/data/portfolioData";
import { CheckCircleIcon, ClockIcon } from "@/components/icons";

export default function CertificationsSection() {
  const completed = certifications.filter((c) => c.status === "Completed");
  const ongoing = certifications.filter((c) => c.status === "Ongoing");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0d12] border-t border-[#171d27]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 font-tech text-xs text-cyan-400 tracking-wider uppercase mb-3">
            <span>// CREDENTIALS</span>
            <span className="w-8 h-[1px] bg-cyan-500/40" />
            <span>CERTIFICATIONS & CONTINUOUS LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white">
            Professional Certifications
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl leading-relaxed font-body">
            Formal validation in simulation, C programming, and industrial networking, with ongoing technical expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* COMPLETED CERTIFICATIONS */}
          <div className="rounded-xl bg-[#10151d] border border-[#171d27] p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-[#171d27] pb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <h3 className="text-xs font-tech font-bold text-emerald-400 uppercase tracking-wider">
                  Verified Credentials
                </h3>
              </div>
              <span className="text-xs font-tech text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-800/40">
                {completed.length} COMPLETE
              </span>
            </div>

            <div className="space-y-3">
              {completed.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 rounded-lg bg-[#0a0d12] border border-[#171d27] flex items-start justify-between gap-3 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-xs font-tech text-slate-400 mt-1">
                        Issuer: <span className="text-slate-300">{cert.issuer}</span>
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-tech px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
                    VERIFIED
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ONGOING / IN PROGRESS */}
          <div className="rounded-xl bg-[#10151d] border border-[#171d27] p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-[#171d27] pb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <h3 className="text-xs font-tech font-bold text-amber-400 uppercase tracking-wider">
                  Currently In Progress
                </h3>
              </div>
              <span className="text-xs font-tech text-amber-400 bg-amber-950/40 px-2.5 py-0.5 rounded border border-amber-800/40">
                {ongoing.length} ACTIVE
              </span>
            </div>

            <div className="space-y-3">
              {ongoing.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 rounded-lg bg-[#0a0d12] border border-[#171d27] flex items-start justify-between gap-3 hover:border-amber-500/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <ClockIcon size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-xs font-tech text-slate-400 mt-1">
                        Track: <span className="text-slate-300">{cert.issuer}</span>
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-tech px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40">
                    IN PROGRESS
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
