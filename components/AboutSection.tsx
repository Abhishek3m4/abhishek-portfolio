import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { GraduationCapIcon, CircuitIcon, CpuIcon, FpgaIcon, TerminalIcon } from "@/components/icons";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06090e] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2">
            <span>// 01</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engineering Profile & Core Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative (exact foundation from prompt) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 sm:p-7 rounded-lg bg-[#0b111c] border border-cyan-950/70 text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 shadow-lg">
              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded bg-[#0b111c]/90 border border-slate-800/80">
                <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
                  <CpuIcon size={16} />
                  <span className="font-mono text-xs font-semibold">Embedded Core</span>
                </div>
                <p className="text-xs text-slate-400">
                  Microcontrollers, peripheral drivers, sensor acquisition & deterministic execution.
                </p>
              </div>

              <div className="p-3.5 rounded bg-[#0b111c]/90 border border-slate-800/80">
                <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
                  <FpgaIcon size={16} />
                  <span className="font-mono text-xs font-semibold">RTL & Digital</span>
                </div>
                <p className="text-xs text-slate-400">
                  Verilog HDL, ModelSim verification & FPGA hardware synthesis.
                </p>
              </div>

              <div className="p-3.5 rounded bg-[#0b111c]/90 border border-slate-800/80">
                <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                  <CircuitIcon size={16} />
                  <span className="font-mono text-xs font-semibold">Real-Time Control</span>
                </div>
                <p className="text-xs text-slate-400">
                  V2V wireless telemetry, MATLAB/Simulink modeling & scenario validation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Credential Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-lg bg-[#0b111c] border border-slate-800 p-6 shadow-xl relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <GraduationCapIcon size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">EDUCATION</span>
                    <span className="text-sm font-semibold text-white">Undergraduate Engineering</span>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-800/80 text-cyan-300 border border-slate-700">
                  {personalInfo.education.duration}
                </span>
              </div>

              {/* Institution details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-white leading-snug">
                    {personalInfo.education.degree}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {personalInfo.college}
                  </p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    {personalInfo.location}
                  </p>
                </div>

                {/* Score telemetry boxes */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded bg-[#070d17] border border-cyan-900/40">
                    <div className="text-[10px] font-mono text-slate-400 tracking-wider">CUMULATIVE CGPA</div>
                    <div className="text-2xl font-bold font-mono text-cyan-300 mt-0.5">
                      {personalInfo.education.cgpa}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      {personalInfo.education.cgpaNote}
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-[#070d17] border border-emerald-900/40">
                    <div className="text-[10px] font-mono text-slate-400 tracking-wider">HIGHEST SGPA</div>
                    <div className="text-2xl font-bold font-mono text-emerald-400 mt-0.5">
                      {personalInfo.education.highestSgpa}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      Semester Peak
                    </div>
                  </div>
                </div>

                {/* Technical status summary */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <TerminalIcon size={13} className="text-cyan-400" />
                    <span>CURRICULUM FOCUS</span>
                  </div>
                  <span className="text-slate-300">Embedded + VLSI + Telecom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
