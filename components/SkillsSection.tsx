"use client";

import React, { useState } from "react";
import { technicalSkillCategories, SkillCategory } from "@/data/portfolioData";
import {
  CpuIcon,
  RadioSignalIcon,
  FpgaIcon,
  ControlIcon,
  TerminalIcon,
  AutomationIcon,
  CheckCircleIcon,
} from "@/components/icons";

const DOMAIN_DEEP_DIVES: Record<
  string,
  {
    toolchain: string[];
    appliedIn: string[];
    keyHighlights: string[];
  }
> = {
  MCU: {
    toolchain: ["ESP-IDF", "Arduino IDE", "FreeRTOS Kernel", "VS Code", "Logic Analyzers"],
    appliedIn: ["V2V Autonomous Vehicle Control", "Mobile Smart Home Automation", "Flight Computer Subsystem"],
    keyHighlights: [
      "Dual-core task pinning and FreeRTOS queue management",
      "Deterministic microsecond interrupt service routines (ISR)",
      "Non-blocking GPIO and precision PWM motor control",
    ],
  },
  BUS: {
    toolchain: ["Saleae Logic Analyzer", "Oscilloscopes", "Wireshark", "CAN Transceivers"],
    appliedIn: ["V2V Peer-to-Peer Telemetry Loop", "IMU & Sensor Acquisition Harness", "Avionics Bus Routing"],
    keyHighlights: [
      "ESP-NOW connectionless broadcast with sub-10ms latency",
      "SPI and I²C multi-drop sensor communication up to 400 kHz",
      "CAN 2.0B differential bus arbitration and packet framing",
    ],
  },
  RTL: {
    toolchain: ["Xilinx Vivado", "ModelSim", "Digilent Adept", "Nexys A7 Toolchain"],
    appliedIn: ["FPGA Real-Time Image Deduplication Engine", "Low-Power Dynamic ALU Design"],
    keyHighlights: [
      "Synthesizing Verilog HDL structural & behavioral architectures on Artix-7 100T",
      "Clock-cycle accurate pipelined Hamming distance comparator arrays",
      "ModelSim testbench verification and static timing analysis closure",
    ],
  },
  SIM: {
    toolchain: ["MATLAB", "Simulink", "RoadRunner", "Automated Driving Toolbox", "OpenRocket"],
    appliedIn: ["TwinX Indian Traffic Simulation (SIH 2025 Winner)", "Water Rocket Parametric Optimization"],
    keyHighlights: [
      "Mathematical modeling of non-linear vehicle dynamics & aerodynamics",
      "3D scenario creation for heterogeneous non-lane-based traffic",
      "Monte Carlo trajectory optimization and stability margin analysis",
    ],
  },
  ML: {
    toolchain: ["Python 3", "PyTorch", "OpenCV", "NumPy", "Pandas", "Scikit-Learn"],
    appliedIn: ["TwinX AI Scenario Generation", "Wildlife Edge Camera Traps", "Telemetry Log Analysis"],
    keyHighlights: [
      "Computer vision preprocessing and perceptual image hashing algorithms",
      "Edge model inference integration with embedded hardware",
      "Automated sensor logging, regression modeling, and telemetry visualization",
    ],
  },
  PLC: {
    toolchain: ["Siemens TIA Portal v17", "PLCSIM", "WinCC Flexible", "Step 7"],
    appliedIn: ["Industrial Conveyor Automation Simulator", "Fault Protection Interlocks"],
    keyHighlights: [
      "Ladder Logic (LAD) and Function Block Diagram (FBD) programming",
      "Human-Machine Interface (HMI) screen design and alarm telemetry",
      "PROFINET industrial networking and sensor actuator integration",
    ],
  },
};

export default function SkillsSection() {
  const [selectedCode, setSelectedCode] = useState<string>("MCU");
  const selectedCategory =
    technicalSkillCategories.find((c) => c.code === selectedCode) || technicalSkillCategories[0];
  const deepDive = DOMAIN_DEEP_DIVES[selectedCode] || DOMAIN_DEEP_DIVES["MCU"];

  const getCategoryIcon = (code: string) => {
    switch (code) {
      case "MCU":
        return <CpuIcon size={20} className="text-cyan-400" />;
      case "BUS":
        return <RadioSignalIcon size={20} className="text-teal-400" />;
      case "RTL":
        return <FpgaIcon size={20} className="text-amber-400" />;
      case "SIM":
        return <ControlIcon size={20} className="text-emerald-400" />;
      case "ML":
        return <TerminalIcon size={20} className="text-sky-400" />;
      case "PLC":
        return <AutomationIcon size={20} className="text-violet-400" />;
      default:
        return <CpuIcon size={20} className="text-cyan-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-12 bg-[#0a0d12] border-b border-[#242e3d]"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#242e3d] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-tech text-xs text-cyan-400 tracking-widest uppercase font-semibold block mb-1">
              DOMAINS // TOOLCHAIN & METHODOLOGIES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Technical Disciplines
            </h2>
          </div>
          <span className="font-tech text-xs text-slate-400">
            6 CORE DOMAINS // INTERACTIVE DOSSIER
          </span>
        </div>

        {/* Interactive Domain Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkillCategories.map((cat) => {
            const isSelected = selectedCode === cat.code;

            return (
              <div
                key={cat.code}
                onClick={() => setSelectedCode(cat.code)}
                className={`p-6 rounded-2xl bg-[#171d27] border transition-all duration-200 cursor-pointer shadow-xl flex flex-col justify-between group ${
                  isSelected
                    ? "border-cyan-400/90 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400/40"
                    : "border-[#242e3d] hover:border-[#3b495e] hover:bg-[#1a212d]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#242e3d] pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#10151d] border border-[#242e3d]">
                        {getCategoryIcon(cat.code)}
                      </div>
                      <span className="font-tech text-xs font-bold text-slate-300 uppercase">
                        {cat.code}
                      </span>
                    </div>

                    {isSelected ? (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 led-pulse" />
                    ) : (
                      <span className="font-tech text-[10px] text-slate-400 uppercase group-hover:text-cyan-400 transition-colors">
                        SELECT →
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-slate-400 text-xs font-body leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#242e3d]/80">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-0.5 rounded font-tech text-[11px] transition-colors ${
                        isSelected
                          ? "bg-[#10151d] border border-cyan-500/40 text-cyan-200"
                          : "bg-[#10151d] border border-[#242e3d] text-slate-300"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Domain Deep Dive Dossier */}
        <div className="rounded-2xl bg-[#10151d] border border-[#242e3d] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#242e3d] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-tech text-xs px-3 py-1 rounded bg-[#171d27] border border-cyan-500/40 text-cyan-300 font-bold uppercase">
                DOMAIN DOSSIER // {selectedCategory.code}
              </span>
              <span className="font-display text-lg sm:text-xl font-bold text-white uppercase">
                {selectedCategory.title}
              </span>
            </div>
            <span className="font-tech text-xs text-emerald-400 flex items-center gap-1.5">
              <CheckCircleIcon size={14} />
              <span>ACTIVE DOMAIN</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Toolchain & Environments */}
            <div className="space-y-3">
              <span className="font-tech text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                Primary Toolchain & IDEs:
              </span>
              <div className="flex flex-wrap gap-2">
                {deepDive.toolchain.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg bg-[#171d27] border border-[#242e3d] font-tech text-xs text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Applied Systems & Projects */}
            <div className="space-y-3">
              <span className="font-tech text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                Applied in Projects:
              </span>
              <div className="space-y-1.5">
                {deepDive.appliedIn.map((proj) => (
                  <div
                    key={proj}
                    className="p-2 rounded-lg bg-[#171d27] border border-[#242e3d] font-tech text-xs text-cyan-300 truncate"
                  >
                    ▸ {proj}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Verification Highlights */}
            <div className="space-y-3">
              <span className="font-tech text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                Engineering Highlights:
              </span>
              <ul className="space-y-1.5 text-xs font-body text-slate-300">
                {deepDive.keyHighlights.map((hl, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-cyan-400 shrink-0">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
