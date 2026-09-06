"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { CpuIcon, FpgaIcon, CircuitIcon } from "@/components/icons";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-12 bg-[#0a0d12] border-b border-[#242e3d] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="border-b border-[#242e3d] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-tech text-xs text-cyan-400 tracking-widest uppercase font-semibold block mb-1">
              PROFILE // IDENTITY
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Engineering Background
            </h2>
          </div>
          <span className="font-tech text-xs text-slate-400">
            NASHIK, MH // SPPU AFFILIATED
          </span>
        </div>

        {/* Narrative & Engineering Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Concise Human Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl bg-[#171d27] border border-[#242e3d] p-6 sm:p-8 space-y-4 shadow-xl">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-body">
                I am an Electronics & Telecommunication Engineering student at K.K. Wagh Institute of Engineering Education & Research, focusing on embedded systems, deterministic firmware, and hardware acceleration.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                Rather than relying solely on simulation models, I build and validate physical vehicle prototypes, custom sensor boards, and RTL digital logic. My experience spans Embedded C firmware, ESP32 FreeRTOS tasks, ESP-NOW wireless protocols, Verilog HDL synthesis on Artix-7 FPGAs, and MATLAB/Simulink dynamic modeling.
              </p>
            </div>
          </div>

          {/* Right: Core Engineering Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-xl bg-[#171d27] border border-[#242e3d] flex items-start gap-3 shadow-md">
              <div className="p-2 rounded-lg bg-[#10151d] text-cyan-400 border border-[#242e3d] shrink-0 mt-0.5">
                <CpuIcon size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white uppercase">
                  Embedded Systems & RTOS
                </h3>
                <p className="text-xs text-slate-400 font-body mt-1 leading-relaxed">
                  Microcontrollers, peripheral driver development, sensor acquisition, and deterministic execution.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#171d27] border border-[#242e3d] flex items-start gap-3 shadow-md">
              <div className="p-2 rounded-lg bg-[#10151d] text-amber-400 border border-[#242e3d] shrink-0 mt-0.5">
                <FpgaIcon size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white uppercase">
                  RTL & Digital Logic
                </h3>
                <p className="text-xs text-slate-400 font-body mt-1 leading-relaxed">
                  Verilog HDL synthesis on Xilinx Artix-7 FPGAs and timing verification in ModelSim.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#171d27] border border-[#242e3d] flex items-start gap-3 shadow-md">
              <div className="p-2 rounded-lg bg-[#10151d] text-emerald-400 border border-[#242e3d] shrink-0 mt-0.5">
                <CircuitIcon size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white uppercase">
                  Control & Simulation
                </h3>
                <p className="text-xs text-slate-400 font-body mt-1 leading-relaxed">
                  MATLAB/Simulink dynamic system modeling, RoadRunner 3D scenes, and V2V wireless protocol verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
