"use client";

import React from "react";
import { achievements } from "@/data/portfolioData";
import { TrophyIcon, AwardIcon } from "@/components/icons";

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-12 bg-[#10151d] border-b border-[#242e3d]"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#242e3d] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-tech text-xs text-amber-400 tracking-widest uppercase font-semibold block mb-1">
              HONORS // COMPETITIONS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Major Achievements
            </h2>
          </div>
          <span className="font-tech text-xs text-slate-400">
            NATIONAL LEVEL MERIT
          </span>
        </div>

        {/* Milestone Rail Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#171d27] border border-[#242e3d] p-6 sm:p-8 lg:p-10 shadow-xl space-y-6 relative group hover:border-amber-400/60 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Milestone Index & Year */}
                <div className="flex items-center justify-between border-b border-[#242e3d] pb-4 mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-4xl sm:text-5xl font-black text-amber-400">
                      0{idx + 1}
                    </span>
                    <span className="font-tech text-xs text-slate-400 uppercase">
                      // {item.year}
                    </span>
                  </div>

                  <span className="font-tech text-xs px-3 py-1 rounded bg-[#0a0d12] border border-amber-500/40 text-amber-300 font-bold">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <div className="font-tech text-xs text-slate-400">
                    Organized by: <span className="text-slate-200">{item.organizer}</span>
                  </div>
                </div>

                {/* Solution Highlight */}
                <div className="mt-6 p-4 rounded-xl bg-[#0a0d12] border border-[#242e3d] font-body text-xs sm:text-sm text-slate-300 space-y-1">
                  <span className="font-tech text-[10px] text-slate-400 uppercase block font-semibold">
                    Winning Solution & Domain:
                  </span>
                  <p className="text-white font-medium">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Bottom Award Banner */}
              <div className="pt-4 border-t border-[#242e3d] flex items-center justify-between font-tech text-xs">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <TrophyIcon size={16} />
                  <span className="font-semibold uppercase">Prize Award</span>
                </div>
                <span className="font-display text-xl font-bold text-amber-300">
                  {item.award}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
