"use client";

import React, { useState } from "react";
import { hardwareSignalFlowNodes, SignalFlowNode } from "@/data/portfolioData";
import {
  CpuIcon,
  RadioSignalIcon,
  FpgaIcon,
  ControlIcon,
  CircuitIcon,
  WaveformIcon,
} from "@/components/icons";

export default function HardwarePipelineSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeNode = hardwareSignalFlowNodes[activeStepIndex];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CpuIcon size={22} className="text-cyan-400" />;
      case 1:
        return <WaveformIcon size={22} className="text-sky-400" />;
      case 2:
        return <RadioSignalIcon size={22} className="text-indigo-400" />;
      case 3:
        return <ControlIcon size={22} className="text-emerald-400" />;
      case 4:
        return <FpgaIcon size={22} className="text-amber-400" />;
      case 5:
        return <CircuitIcon size={22} className="text-teal-400" />;
      default:
        return <CpuIcon size={22} className="text-cyan-400" />;
    }
  };

  return (
    <section
      id="pipeline"
      className="py-24 px-4 sm:px-6 lg:px-12 bg-[#0a0d12] bg-cad-grid border-b border-[#242e3d] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#242e3d] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs text-cyan-400 tracking-widest uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 led-pulse" />
              <span>SYSTEMS ARCHITECTURE // DATAFLOW PIPELINE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              Hardware Signal Flow
            </h2>
          </div>
          <p className="font-tech text-xs text-slate-400 max-w-md">
            Interactive breakdown of the deterministic signal loop—from transducer acquisition through FreeRTOS scheduling and FPGA logic down to physical actuation.
          </p>
        </div>

        {/* Interactive Pipeline Stepper Bar */}
        <div className="relative">
          {/* Horizontal Connecting Rail Wire (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-10 right-10 h-[2px] bg-[#242e3d] -z-0">
            {/* Animated Data Packet Glow traveling along the bus */}
            <div
              className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-500"
              style={{
                width: "25%",
                marginLeft: `${(activeStepIndex / (hardwareSignalFlowNodes.length - 1)) * 75}%`,
              }}
            />
          </div>

          {/* Stepper Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {hardwareSignalFlowNodes.map((node, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={node.code}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    isActive
                      ? "bg-[#171d27] border-cyan-400 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400/40"
                      : "bg-[#10151d] border-[#242e3d] hover:border-[#3b495e] hover:bg-[#141b25]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-display text-lg font-bold ${
                        isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-slate-300"
                      }`}
                    >
                      {node.step}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center border ${
                        isActive
                          ? "bg-[#0a0d12] border-cyan-500/50"
                          : "bg-[#0a0d12] border-[#242e3d]"
                      }`}
                    >
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <div>
                    <span
                      className={`font-tech text-[10px] tracking-wider uppercase block ${
                        isActive ? "text-cyan-300 font-semibold" : "text-slate-400"
                      }`}
                    >
                      {node.code}
                    </span>
                    <h3 className="font-display text-sm font-bold text-white uppercase tracking-tight truncate">
                      {node.label}
                    </h3>
                  </div>

                  {isActive && (
                    <div className="w-full h-1 rounded-full bg-cyan-400 mt-2.5 shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive HUD Card */}
        <div className="rounded-2xl bg-[#171d27] border border-[#242e3d] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left: Stage Title & Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-tech text-xs px-3 py-1 rounded bg-[#10151d] border border-cyan-500/40 text-cyan-300 font-bold uppercase">
                  PHASE {activeNode.step} // {activeNode.code}
                </span>
                <span className="font-tech text-xs text-slate-400">
                  {activeNode.sub}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                {activeNode.label}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                {activeNode.description}
              </p>

              {/* Protocols & Bus Standards */}
              <div className="pt-2">
                <span className="font-tech text-xs text-slate-400 uppercase tracking-wider block font-semibold mb-2">
                  Protocols & Interfacing Standards:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeNode.protocols.map((proto) => (
                    <span
                      key={proto}
                      className="px-3 py-1 rounded-lg bg-[#10151d] border border-[#242e3d] font-tech text-xs text-cyan-300"
                    >
                      {proto}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Technical Specifications Matrix */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl bg-[#10151d] border border-[#242e3d] p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-[#242e3d] pb-2.5">
                  <span className="font-tech text-xs text-slate-300 font-semibold uppercase">
                    BENCHMARK TELEMETRY
                  </span>
                  <span className="font-tech text-[10px] text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    VERIFIED IN LAB
                  </span>
                </div>

                <div className="space-y-2.5 pt-1">
                  {activeNode.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-[#171d27]/70 border border-[#242e3d]/80 font-tech text-xs"
                    >
                      <span className="text-slate-400">SPEC_0{sIdx + 1}</span>
                      <span className="font-bold text-white tracking-wide">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Navigation Between Pipeline Stages */}
              <div className="flex items-center justify-between font-tech text-xs text-slate-400 pt-1">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(prev - 1, 0))}
                  className="px-3.5 py-2 rounded-lg bg-[#10151d] border border-[#242e3d] hover:border-cyan-400 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  ← PREV STAGE
                </button>

                <span>
                  STEP {activeStepIndex + 1} OF {hardwareSignalFlowNodes.length}
                </span>

                <button
                  type="button"
                  disabled={activeStepIndex === hardwareSignalFlowNodes.length - 1}
                  onClick={() =>
                    setActiveStepIndex((prev) =>
                      Math.min(prev + 1, hardwareSignalFlowNodes.length - 1)
                    )
                  }
                  className="px-3.5 py-2 rounded-lg bg-[#10151d] border border-[#242e3d] hover:border-cyan-400 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  NEXT STAGE →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
