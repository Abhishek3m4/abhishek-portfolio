import React from "react";
import { leadershipActivities } from "@/data/portfolioData";
import { UsersIcon, CircuitIcon, TerminalIcon } from "@/components/icons";

export default function LeadershipSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#06090e] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2">
            <span>// 09</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>COORDINATION & RESPONSIBILITY</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Leadership & Campus Activities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipActivities.map((activity) => (
            <div
              key={activity.role}
              className="p-5 rounded-lg bg-[#0b111c] border border-slate-800/90 hover:border-cyan-500/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <UsersIcon size={16} />
                  <span className="text-xs font-mono font-semibold tracking-wide">
                    {activity.organization}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {activity.role}
                </h3>
                {activity.detail && (
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {activity.detail}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>CAMPUS ROLE</span>
                <span className="text-cyan-400">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
