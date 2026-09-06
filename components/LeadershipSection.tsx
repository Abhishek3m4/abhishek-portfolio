"use client";

import React from "react";
import { leadershipActivities } from "@/data/portfolioData";
import { UsersIcon } from "@/components/icons";

export default function LeadershipSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0d12] border-t border-[#171d27]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 font-tech text-xs text-cyan-400 tracking-wider uppercase mb-3">
            <span>// LEADERSHIP</span>
            <span className="w-8 h-[1px] bg-cyan-500/40" />
            <span>COORDINATION & ACTIVITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white">
            Leadership & Campus Roles
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl leading-relaxed font-body">
            Engineering team coordination, technical placement representation, and hardware competition management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipActivities.map((activity) => (
            <div
              key={activity.role}
              className="p-6 rounded-xl bg-[#10151d] border border-[#171d27] hover:border-[#202833] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 text-cyan-400 mb-3">
                  <UsersIcon size={16} />
                  <span className="text-xs font-tech tracking-wide uppercase">
                    {activity.organization}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {activity.role}
                </h3>
                {activity.detail && (
                  <p className="text-xs text-slate-400 leading-relaxed font-body">
                    {activity.detail}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#171d27] flex items-center justify-between text-xs font-tech text-slate-500">
                <span>CAMPUS RESPONSIBILITY</span>
                <span className="text-cyan-400">ACTIVE RECORD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
