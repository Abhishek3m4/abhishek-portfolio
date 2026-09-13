"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import TechnicalImage from "@/components/TechnicalImage";
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

        {/* Narrative, Portrait & Engineering Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Portrait Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl bg-[#171d27] border border-[#3b495e] p-3 shadow-2xl">
              {/* Technical Corner Notches */}
              <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

              <div className="rounded-xl overflow-hidden border border-[#242e3d] bg-[#0a0d12]">
                <TechnicalImage
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  aspectRatio="aspect-4/5"
                  imgClassName="object-cover object-top"
                  label="ENGINEER // ABHISHEK AHIRRAO"
                  tag="VERIFIED ASSET"
                  slotHint="public/images/profile/abhishek.jpeg"
                />
              </div>

              <div className="mt-3 px-1 flex items-center justify-between font-tech text-[11px] text-slate-300">
                <span className="font-semibold text-white uppercase">{personalInfo.name}</span>
                <span className="text-cyan-400 font-bold">ENTC 2023–2027</span>
              </div>
            </div>
          </div>

          {/* Center & Right: Narrative & Engineering Pillars */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-2xl bg-[#171d27] border border-[#242e3d] p-6 sm:p-8 space-y-4 shadow-xl">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-body">
                I am an Electronics & Telecommunication Engineering student at K.K. Wagh Institute of Engineering Education & Research, focusing on embedded systems, deterministic firmware, and hardware acceleration.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                Rather than relying solely on simulation models, I build and validate physical vehicle prototypes, custom sensor boards, and RTL digital logic. My experience spans Embedded C firmware, ESP32 FreeRTOS tasks, ESP-NOW wireless protocols, Verilog HDL synthesis on Artix-7 FPGAs, and MATLAB/Simulink dynamic modeling.
              </p>
            </div>

            {/* Core Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#171d27] border border-[#242e3d] flex flex-col justify-between shadow-md">
                <div className="p-2 w-fit rounded-lg bg-[#10151d] text-cyan-400 border border-[#242e3d] mb-2">
                  <CpuIcon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white uppercase">
                    Embedded & RTOS
                  </h3>
                  <p className="text-xs text-slate-400 font-body mt-1 leading-relaxed">
                    Deterministic FreeRTOS tasks, peripheral drivers, and low-latency execution.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#171d27] border border-[#242e3d] flex flex-col justify-between shadow-md">
                <div className="p-2 w-fit rounded-lg bg-[#10151d] text-amber-400 border border-[#242e3d] mb-2">
                  <FpgaIcon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white uppercase">
                    RTL & Digital Logic
                  </h3>
                  <p className="text-xs text-slate-400 font-body mt-1 leading-relaxed">
                    Verilog HDL synthesis on Artix-7 FPGAs and timing verification in ModelSim.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#171d27] border border-[#242e3d] flex flex-col justify-between shadow-md">
                <div className="p-2 w-fit rounded-lg bg-[#10151d] text-emerald-400 border border-[#242e3d] mb-2">
                  <CircuitIcon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white uppercase">
                    Control & Simulation
                  </h3>
                  <p className="text-xs text-slate-400 font-body mt-1 leading-relaxed">
                    MATLAB/Simulink dynamic system modeling and V2V wireless protocol verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
