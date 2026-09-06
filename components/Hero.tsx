"use client";

import React, { useState } from "react";
import { personalInfo, hardwareSignalFlowNodes } from "@/data/portfolioData";
import {
  ArrowDownIcon,
  GitHubIcon,
  LinkedInIcon,
  MapPinIcon,
  CircuitIcon,
  TerminalIcon,
} from "@/components/icons";

export default function Hero() {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0b1120] bg-circuit-grid border-b border-[#1e293b] overflow-hidden"
    >
      {/* Background ambient engineering node glows - soft and restrained */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-cyan-950/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-16 right-12 w-80 h-80 bg-blue-950/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Stage 1: Engineering Status Header Bar */}
        <div className="hero-enter-1 flex flex-wrap items-center gap-2.5 sm:gap-4 mb-6 font-mono text-xs text-slate-300">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162238] border border-[#243552] text-slate-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 led-pulse" />
            <span className="tracking-wide text-emerald-400 font-semibold">ACTIVE SYSTEM</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-200">B.Tech ENTC (2023–2027)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#162238]/70 border border-[#243552] text-slate-300">
            <MapPinIcon size={13} className="text-cyan-400" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#162238]/70 border border-[#243552] text-slate-300">
            <TerminalIcon size={13} className="text-amber-400" />
            <span>CGPA: 8.69 / 10 (Sem VI)</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Staged Identity & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Stage 2 & 3: Callsign, Name & Professional Title */}
            <div className="space-y-3">
              <div className="hero-enter-2 font-mono text-xs text-cyan-400 tracking-widest uppercase flex items-center gap-2 font-semibold">
                <span className="inline-block w-6 h-[2px] bg-cyan-400" />
                <span>{personalInfo.callsign}</span>
              </div>
              <h1 className="hero-enter-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="hero-enter-3 text-xl sm:text-2xl font-semibold text-cyan-300">
                {personalInfo.primaryTitle}
              </h2>
            </div>

            {/* Stage 4: Description */}
            <div className="hero-enter-4 space-y-3">
              <p className="text-sm sm:text-base text-slate-100 max-w-2xl leading-relaxed border-l-2 border-cyan-400 pl-4 py-1 bg-[#162238]/60 rounded-r-lg font-mono text-xs sm:text-sm">
                ENTC Student • Embedded Systems • Real-Time Systems • Hardware + Software
              </p>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed font-sans">
                Designing systems that bridge microcontrollers, sensor acquisition, low-latency communication protocols, FPGA/RTL acceleration, and autonomous control algorithms.
              </p>
            </div>

            {/* Stage 5: CTAs & Micro-Telemetry */}
            <div className="hero-enter-5 space-y-5 pt-1">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-cyan-950/50 hover:shadow-cyan-500/20 active:scale-95"
                >
                  <span>View Projects</span>
                  <ArrowDownIcon size={14} />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#162238] hover:bg-[#1f2f4c] text-white border border-[#243552] hover:border-cyan-400/50 font-mono text-xs sm:text-sm transition-all active:scale-95"
                >
                  <GitHubIcon size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#162238] hover:bg-[#1f2f4c] text-white border border-[#243552] hover:border-cyan-400/50 font-mono text-xs sm:text-sm transition-all active:scale-95"
                >
                  <LinkedInIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Quick Micro-Telemetry Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#162238] border border-[#243552] shadow-sm">
                  <span className="text-[10px] text-slate-400 block font-semibold">COLLEGE</span>
                  <span className="text-white font-medium truncate block mt-0.5" title={personalInfo.college}>
                    K.K. Wagh IEER
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#162238] border border-[#243552] shadow-sm">
                  <span className="text-[10px] text-slate-400 block font-semibold">KEY FOCUS</span>
                  <span className="text-cyan-300 font-medium block mt-0.5">Real-Time Systems</span>
                </div>
                <div className="p-3 rounded-xl bg-[#162238] border border-[#243552] col-span-2 sm:col-span-1 shadow-sm">
                  <span className="text-[10px] text-slate-400 block font-semibold">HIGHEST SGPA</span>
                  <span className="text-emerald-400 font-bold block mt-0.5">{personalInfo.education.highestSgpa}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Hardware-to-System Visual Flow */}
          <div className="lg:col-span-5 hero-enter-4">
            <div className="relative rounded-2xl bg-[#162238] border border-[#243552] p-5 sm:p-6 shadow-2xl backdrop-blur-md">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-[#243552] pb-3 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
                  </div>
                  <span className="text-slate-300 ml-1 font-semibold">SYSTEM_PIPELINE // DATA_BUS</span>
                </div>
                <span className="text-[10px] text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/40 font-semibold">
                  REAL-TIME TRACE
                </span>
              </div>

              {/* Hardware-to-System Signal Flow Pipeline */}
              <div className="space-y-2 relative">
                {/* Circuit line connecting all nodes */}
                <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-400 via-emerald-400 to-amber-400 opacity-40" />

                {hardwareSignalFlowNodes.map((node, idx) => {
                  const isSelected = activeNode === idx;
                  return (
                    <button
                      key={node.step}
                      type="button"
                      onMouseEnter={() => setActiveNode(idx)}
                      onClick={() => setActiveNode(idx)}
                      className={`w-full text-left relative flex items-center gap-3 p-2.5 rounded-xl border transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                        isSelected
                          ? `${node.accent} border-cyan-400/80 shadow-md translate-x-1`
                          : "border-[#243552] bg-[#0f172a] hover:border-slate-500 hover:bg-[#142033]"
                      }`}
                    >
                      {/* Node Indicator */}
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 z-10 ${
                          isSelected
                            ? "bg-slate-900 border border-current text-white shadow-xs"
                            : "bg-[#162238] border border-[#243552] text-slate-300"
                        }`}
                      >
                        {node.step}
                      </div>

                      {/* Node Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-xs font-bold tracking-wide ${isSelected ? "text-white" : "text-slate-200"}`}>
                            {node.label}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                            [{node.code}]
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 font-mono truncate mt-0.5">
                          {node.sub}
                        </p>
                      </div>

                      {/* Small Active Pulse Indicator */}
                      <div className="shrink-0 flex items-center">
                        <span
                          className={`w-2 h-2 rounded-full ${node.dot} ${
                            isSelected ? "led-pulse" : "opacity-40"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Real-time Subsystem Trace Status Footer */}
              <div className="mt-4 pt-3 border-t border-[#243552] flex items-center justify-between text-[11px] font-mono text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CircuitIcon size={14} className="text-cyan-400" />
                  <span>HARDWARE–SOFTWARE SYNC</span>
                </div>
                <span className="text-emerald-400 font-semibold text-[10px]">100% DETERMINISTIC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
