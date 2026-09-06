import React from "react";
import { featuredProjects } from "@/data/portfolioData";
import {
  CpuIcon,
  FpgaIcon,
  CircuitIcon,
  RadioSignalIcon,
  ControlIcon,
  WaveformIcon,
  CheckCircleIcon,
} from "@/components/icons";

export default function FeaturedProjects() {
  const p1 = featuredProjects[0];
  const p2 = featuredProjects[1];
  const p3 = featuredProjects[2];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06090e] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2">
            <span>// 03</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>PRIMARY HARDWARE & EMBEDDED SYSTEMS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Featured Engineering Projects
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Hardware-software integration, real-time wireless communication, FPGA RTL pipelines, and embedded automation prototypes.
          </p>
        </div>

        <div className="space-y-10">
          {/* PROJECT 01: Largest / Flagship Project */}
          <div className="rounded-xl bg-[#090f1a] border-2 border-cyan-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
            {/* Top Engineering Callout Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cyan-950 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-mono text-xs font-bold tracking-wider">
                  FLAGSHIP EMBEDDED PROJECT // 01
                </span>
                <span className="text-xs font-mono text-slate-400">
                  ROLE: <strong className="text-slate-200">{p1.role}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-emerald-400 led-pulse" />
                <span>{p1.date}</span>
              </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Description, Concepts, & Hardware Stack */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    {p1.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                    {p1.description}
                  </p>
                </div>

                {/* Core Engineering Concepts */}
                <div>
                  <div className="text-xs font-mono text-cyan-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                    <ControlIcon size={14} />
                    <span>SYSTEM ARCHITECTURE & CONTROL CONCEPTS</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p1.concepts?.map((concept) => (
                      <span
                        key={concept}
                        className="px-3 py-1 rounded-md bg-[#0c1626] border border-cyan-900/50 text-cyan-200 font-mono text-xs flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies / Hardware Sensors */}
                <div>
                  <div className="text-xs font-mono text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                    <CpuIcon size={14} className="text-cyan-400" />
                    <span>HARDWARE, SENSORS & SOFTWARE STACK</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p1.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#0b1220] border border-slate-800 text-slate-300 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Technical Architecture Diagram Card */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="rounded-lg bg-[#070b13] border border-cyan-900/40 p-5 space-y-4 font-mono">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 text-xs">
                    <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                      <RadioSignalIcon size={14} />
                      V2V COOPERATIVE CONTROL LOOP
                    </span>
                    <span className="text-[10px] text-slate-500">ESP-NOW P2P</span>
                  </div>

                  {/* Visual schematic of the telemetry flow */}
                  <div className="space-y-2.5 text-xs">
                    <div className="p-2.5 rounded bg-[#0a1220] border border-slate-800 flex items-start gap-2.5">
                      <div className="p-1 rounded bg-cyan-950 text-cyan-400 shrink-0 mt-0.5">
                        <CpuIcon size={14} />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-200">Vehicle Node (ESP32)</div>
                        <div className="text-[11px] text-slate-400 font-sans">
                          MPU6050 IMU + Ultrasonic rangefinder + GPS telemetry acquisition
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center text-cyan-500/80 text-[10px] items-center gap-1">
                      <span>↓</span>
                      <span>ESP-NOW Wireless Telemetry (Low Latency Peer-to-Peer)</span>
                      <span>↓</span>
                    </div>

                    <div className="p-2.5 rounded bg-[#0a1220] border border-slate-800 flex items-start gap-2.5">
                      <div className="p-1 rounded bg-emerald-950 text-emerald-400 shrink-0 mt-0.5">
                        <ControlIcon size={14} />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-200">Time-To-Collision (TTC) Engine</div>
                        <div className="text-[11px] text-slate-400 font-sans">
                          Relative velocity calculation, collision horizon prediction & safety bounds
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center text-cyan-500/80 text-[10px] items-center gap-1">
                      <span>↓</span>
                      <span>Autonomous Decision & PWM Actuation</span>
                      <span>↓</span>
                    </div>

                    <div className="p-2.5 rounded bg-[#0a1220] border border-slate-800 flex items-start gap-2.5">
                      <div className="p-1 rounded bg-amber-950 text-amber-400 shrink-0 mt-0.5">
                        <WaveformIcon size={14} />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-200">Actuation & Simulation</div>
                        <div className="text-[11px] text-slate-400 font-sans">
                          Motor driver PWM control + Python-based simulation & validation harness
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>STATUS: ACTIVE PROTOTYPE</span>
                    <span className="text-cyan-400">HARDWARE VALIDATED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECTS 02 & 03: Two Prominent Grid Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PROJECT 02: FPGA Real-Time Image Deduplication */}
            <div className="rounded-xl bg-[#090f1a] border border-indigo-500/30 p-6 sm:p-7 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="px-2.5 py-0.5 rounded bg-indigo-950/70 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-semibold">
                    PROJECT 02 // FPGA / RTL DESIGN
                  </span>
                  <span className="text-xs font-mono text-slate-400">{p2.date}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {p2.title}
                  </h3>
                  <div className="text-xs font-mono text-indigo-300 mt-1">
                    Role: {p2.role}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {p2.description}
                </p>

                {/* Show Items */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono text-indigo-400 flex items-center gap-1.5">
                    <FpgaIcon size={14} />
                    <span>IMPLEMENTATION & VERIFICATION HIGHLIGHTS</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {p2.highlights?.map((item) => (
                      <div
                        key={item}
                        className="p-2 rounded bg-[#0b1424] border border-slate-800/90 text-slate-300 font-mono text-xs flex items-center gap-2"
                      >
                        <CheckCircleIcon size={13} className="text-indigo-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-400 mb-2">TARGET HARDWARE & EDA TOOLS:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {p2.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-[#0d1728] border border-indigo-900/50 text-indigo-200 font-mono text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>TARGET: ARTIX-7 FPGA</span>
                <span className="text-indigo-400">SYNTHESIZED & VERIFIED</span>
              </div>
            </div>

            {/* PROJECT 03: Mobile-Controlled Smart Home Automation */}
            <div className="rounded-xl bg-[#090f1a] border border-slate-800/90 hover:border-cyan-500/30 p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                    PROJECT 03 // IOT & EMBEDDED
                  </span>
                  <span className="text-xs font-mono text-slate-400">{p3.date}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {p3.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mt-1">
                    Role: {p3.role}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {p3.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <CircuitIcon size={14} className="text-cyan-400" />
                    <span>SYSTEM ARCHITECTURE</span>
                  </div>
                  <div className="space-y-1.5">
                    {p3.highlights?.map((h) => (
                      <div
                        key={h}
                        className="p-2 rounded bg-[#0b1424] border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-2"
                      >
                        <CheckCircleIcon size={13} className="text-cyan-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-400 mb-2">MICROCONTROLLERS & DRIVERS:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {p3.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-[#0d1728] border border-slate-800 text-slate-300 font-mono text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>PLATFORM: ESP32 / ARDUINO</span>
                <span className="text-emerald-400">HARDWARE OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
