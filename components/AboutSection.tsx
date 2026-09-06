import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { GraduationCapIcon, CircuitIcon, CpuIcon, FpgaIcon, TerminalIcon } from "@/components/icons";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b1120] border-b border-[#1e293b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2.5">
            <span>// 01</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Profile & Core Focus
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Academics, hardware engineering philosophy, and the foundations of real-time embedded software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#162238] border border-[#243552] text-slate-200 text-sm sm:text-base leading-relaxed space-y-4 shadow-xl">
              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-200 leading-relaxed font-sans">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#162238] border border-[#243552] hover:border-cyan-400/50 transition-colors shadow-sm">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <CpuIcon size={18} />
                  <span className="font-mono text-xs font-bold">Embedded Core</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Microcontrollers, peripheral drivers, sensor acquisition & deterministic execution.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#162238] border border-[#243552] hover:border-emerald-400/50 transition-colors shadow-sm">
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <FpgaIcon size={18} />
                  <span className="font-mono text-xs font-bold">RTL & Digital</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Verilog HDL, ModelSim verification & FPGA hardware synthesis.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#162238] border border-[#243552] hover:border-amber-400/50 transition-colors shadow-sm">
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <CircuitIcon size={18} />
                  <span className="font-mono text-xs font-bold">Real-Time Control</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  V2V wireless telemetry, MATLAB/Simulink modeling & scenario validation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Credential Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-[#162238] border border-[#243552] p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#243552] pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <GraduationCapIcon size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block font-semibold">ACADEMIC PROFILE</span>
                    <span className="text-sm font-bold text-white">Undergraduate Engineering</span>
                  </div>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#0f172a] text-cyan-300 border border-[#2e4366] font-semibold">
                  {personalInfo.education.duration}
                </span>
              </div>

              {/* Institution details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {personalInfo.education.degree}
                  </h3>
                  <p className="text-sm text-slate-200 mt-1 font-medium">
                    {personalInfo.college}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {personalInfo.location}
                  </p>
                </div>

                {/* Score telemetry boxes */}
                <div className="grid grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 rounded-xl bg-[#0f172a] border border-cyan-500/40 shadow-inner">
                    <div className="text-[10px] font-mono text-slate-300 tracking-wider font-semibold">CUMULATIVE CGPA</div>
                    <div className="text-3xl font-extrabold font-mono text-cyan-300 mt-1">
                      {personalInfo.education.cgpa}
                    </div>
                    <div className="text-xs text-slate-400 font-mono mt-1">
                      {personalInfo.education.cgpaNote}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0f172a] border border-emerald-500/40 shadow-inner">
                    <div className="text-[10px] font-mono text-slate-300 tracking-wider font-semibold">HIGHEST SGPA</div>
                    <div className="text-3xl font-extrabold font-mono text-emerald-400 mt-1">
                      {personalInfo.education.highestSgpa}
                    </div>
                    <div className="text-xs text-slate-400 font-mono mt-1">
                      Semester Peak
                    </div>
                  </div>
                </div>

                {/* Technical status summary */}
                <div className="pt-3 border-t border-[#243552] flex items-center justify-between text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <TerminalIcon size={14} className="text-cyan-400" />
                    <span>CORE TRACK</span>
                  </div>
                  <span className="text-white font-medium">Embedded + VLSI + Telecom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
