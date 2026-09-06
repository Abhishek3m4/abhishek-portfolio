import React from "react";
import { achievements } from "@/data/portfolioData";
import { TrophyIcon, SparklesIcon, CircuitIcon, FpgaIcon } from "@/components/icons";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b1120] border-b border-[#1e293b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-wider mb-2.5">
            <span>// 06</span>
            <span className="w-8 h-[1px] bg-amber-500/50" />
            <span>HONORS & COMPETITIVE EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Major Hackathon & National Wins
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            First-place competitive outcomes in national-scale simulations and real-time hardware/FPGA engineering hackathons.
          </p>
        </div>

        {/* 2 Visually Strong Achievement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievement 01: SIH 2025 */}
          <div className="relative rounded-2xl bg-[#162238] border-2 border-amber-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden group hover:border-amber-400 transition-all duration-300">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Badge row */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/50 text-amber-300 font-mono text-xs font-bold">
                  <TrophyIcon size={15} className="text-amber-400" />
                  <span>NATIONAL CHAMPION // SIH 2025</span>
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400">
                  {achievements[0].award}
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  {achievements[0].title}
                </h3>
                <p className="text-sm font-mono text-slate-300 mt-1.5">
                  Organized by: <strong className="text-amber-300 font-semibold">{achievements[0].organizer}</strong>
                </p>
              </div>

              {/* Solution Card */}
              <div className="p-5 rounded-xl bg-[#0f172a] border border-amber-900/50 space-y-2.5 font-mono text-xs shadow-inner">
                <div className="text-slate-300 flex items-center gap-1.5 font-semibold">
                  <SparklesIcon size={14} className="text-amber-400" />
                  <span>WINNING ARCHITECTURE & SOLUTION:</span>
                </div>
                <div className="text-white text-sm sm:text-base font-bold">
                  {achievements[0].solution}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed pt-1">
                  Digital twin platform integrating high-fidelity scenario design, MATLAB/Simulink co-simulation, and AI-assisted traffic optimization for complex Indian road dynamics.
                </p>
              </div>

              <div className="pt-2 border-t border-[#243552] flex items-center justify-between text-xs font-mono text-slate-300">
                <span>STAGE: NATIONAL FINALS</span>
                <span className="text-amber-400 font-bold">CASH PRIZE: ₹1,50,000</span>
              </div>
            </div>
          </div>

          {/* Achievement 02: Unplugged Hackathon */}
          <div className="relative rounded-2xl bg-[#162238] border-2 border-cyan-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden group hover:border-cyan-400 transition-all duration-300">
            {/* Ambient cyan glow */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Badge row */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/50 text-cyan-300 font-mono text-xs font-bold">
                  <FpgaIcon size={15} className="text-cyan-400" />
                  <span>FIRST PRIZE // HARDWARE HACKATHON</span>
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-cyan-400">
                  {achievements[1].award}
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  {achievements[1].title}
                </h3>
                <p className="text-sm font-mono text-slate-300 mt-1.5">
                  Hosted by: <strong className="text-cyan-300 font-semibold">{achievements[1].organizer}</strong>
                </p>
                {achievements[1].role && (
                  <p className="text-xs font-mono text-slate-300 mt-1">
                    Role: <span className="text-white font-semibold">{achievements[1].role}</span>
                  </p>
                )}
              </div>

              {/* Solution Card */}
              <div className="p-5 rounded-xl bg-[#0f172a] border border-cyan-900/50 space-y-2.5 font-mono text-xs shadow-inner">
                <div className="text-slate-300 flex items-center gap-1.5 font-semibold">
                  <CircuitIcon size={14} className="text-cyan-400" />
                  <span>WINNING FPGA / VLSI SOLUTION:</span>
                </div>
                <div className="text-white text-sm sm:text-base font-bold">
                  {achievements[1].solution}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed pt-1">
                  Verilog HDL register-transfer pipeline implementing 64-bit signature generation and hardware deduplication for high-throughput edge sensors.
                </p>
              </div>

              <div className="pt-2 border-t border-[#243552] flex items-center justify-between text-xs font-mono text-slate-300">
                <span>CATEGORY: VLSI / FPGA DESIGN</span>
                <span className="text-cyan-400 font-bold">CASH PRIZE: ₹25,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
