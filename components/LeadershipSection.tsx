import React from "react";
import { leadershipActivities } from "@/data/portfolioData";
import { UsersIcon } from "@/components/icons";

export default function LeadershipSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a] border-b border-[#1e293b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2.5">
            <span>// 09</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>COORDINATION & RESPONSIBILITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Leadership & Campus Activities
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Leading engineering subsystems, technical placement coordination, and competitive circuit challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipActivities.map((activity) => (
            <div
              key={activity.role}
              className="p-6 rounded-2xl bg-[#162238] border border-[#243552] hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center gap-2 text-cyan-400 mb-2.5">
                  <UsersIcon size={18} />
                  <span className="text-xs font-mono font-bold tracking-wide">
                    {activity.organization}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {activity.role}
                </h3>
                {activity.detail && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {activity.detail}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#243552] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>CAMPUS ROLE</span>
                <span className="text-cyan-400 font-semibold">ACTIVE RECORD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
