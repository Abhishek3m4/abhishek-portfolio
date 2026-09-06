"use client";

import React, { useState } from "react";
import { personalInfo, hardwareSignalFlowNodes } from "@/data/portfolioData";
import {
  ArrowDownIcon,
  GitHubIcon,
  LinkedInIcon,
  MapPinIcon,
  CpuIcon,
  CircuitIcon,
  TerminalIcon,
} from "@/components/icons";

export default function Hero() {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-circuit-grid border-b border-slate-900 overflow-hidden"
    >
      {/* Background ambient engineering glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-950/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-blue-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Engineering Status Header Bar */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-6 font-mono text-xs text-slate-400">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 led-pulse" />
            <span className="tracking-wide text-emerald-400 font-semibold">ACTIVE SYSTEM</span>
            <span className="text-slate-600">|</span>
            <span>B.Tech ENTC (2023–2027)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80 text-slate-400">
            <MapPinIcon size={13} className="text-cyan-400" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80 text-slate-400">
            <TerminalIcon size={13} className="text-amber-400" />
            <span>CGPA: 8.69 / 10 (Sem VI)</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Identity & Calls to Action */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase flex items-center gap-2">
                <span className="inline-block w-6 h-[1px] bg-cyan-500/60" />
                <span>{personalInfo.callsign}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-cyan-300">
                {personalInfo.primaryTitle}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed border-l-2 border-cyan-500/40 pl-4 py-0.5 bg-cyan-950/10">
              ENTC Student • Embedded Systems • Real-Time Systems • Hardware + Software
            </p>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Designing systems that bridge microcontrollers, sensor acquisition, low-latency communication protocols, FPGA/RTL acceleration, and autonomous control algorithms.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-cyan-500 hover:bg-cyan-400 text-[#06090e] font-mono text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-cyan-950/40 hover:shadow-cyan-500/20"
              >
                <span>View Projects</span>
                <ArrowDownIcon size={14} />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs sm:text-sm transition-colors"
              >
                <GitHubIcon size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs sm:text-sm transition-colors"
              >
                <LinkedInIcon size={15} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Micro-Telemetry Grid */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs text-slate-400">
              <div className="p-2.5 rounded bg-[#0b111c]/80 border border-slate-800/80">
                <span className="text-[10px] text-slate-500 block">COLLEGE</span>
                <span className="text-slate-200 font-medium truncate block" title={personalInfo.college}>
                  K.K. Wagh IEER
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#0b111c]/80 border border-slate-800/80">
                <span className="text-[10px] text-slate-500 block">KEY FOCUS</span>
                <span className="text-cyan-300 font-medium">Real-Time Systems</span>
              </div>
              <div className="p-2.5 rounded bg-[#0b111c]/80 border border-slate-800/80 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-500 block">HIGHEST SGPA</span>
                <span className="text-emerald-400 font-medium">{personalInfo.education.highestSgpa}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Hardware-to-System Visual Flow */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg bg-[#0a101a]/95 border border-cyan-950/70 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/90 pb-3 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-slate-400 ml-1">SYSTEM_PIPELINE // DATA_BUS</span>
                </div>
                <span className="text-[10px] text-cyan-400/90 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  REAL-TIME TRACE
                </span>
              </div>

              {/* Hardware-to-System Signal Flow Pipeline */}
              <div className="space-y-2 relative">
                {/* Circuit line connecting all nodes */}
                <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-emerald-500 to-amber-500 opacity-30" />

                {hardwareSignalFlowNodes.map((node, idx) => {
                  const isSelected = activeNode === idx;
                  return (
                    <div
                      key={node.step}
                      onMouseEnter={() => setActiveNode(idx)}
                      onClick={() => setActiveNode(idx)}
                      className={`relative flex items-center gap-3 p-2.5 rounded border transition-all cursor-pointer ${
                        isSelected
                          ? `${node.accent} shadow-sm`
                          : "border-slate-800/60 bg-[#0c1322]/40 hover:border-slate-700 hover:bg-[#0c1322]/70"
                      }`}
                    >
                      {/* Node Indicator */}
                      <div
                        className={`w-7 h-7 rounded flex items-center justify-center font-mono text-[11px] font-bold shrink-0 z-10 ${
                          isSelected
                            ? "bg-slate-900 border border-current text-white shadow-xs"
                            : "bg-slate-900/90 border border-slate-800 text-slate-400"
                        }`}
                      >
                        {node.step}
                      </div>

                      {/* Node Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-xs font-semibold tracking-wide ${isSelected ? "text-white" : "text-slate-200"}`}>
                            {node.label}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
                            [{node.code}]
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-mono truncate">
                          {node.sub}
                        </p>
                      </div>

                      {/* Small Active Pulse Indicator */}
                      <div className="shrink-0 flex items-center">
                        <span
                          className={`w-2 h-2 rounded-full ${node.dot} ${
                            isSelected ? "led-pulse" : "opacity-30"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Real-time Subsystem Trace Status Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CircuitIcon size={14} className="text-cyan-400" />
                  <span>HARDWARE–SOFTWARE SYNC</span>
                </div>
                <span className="text-emerald-400 text-[10px]">100% DETERMINISTIC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
