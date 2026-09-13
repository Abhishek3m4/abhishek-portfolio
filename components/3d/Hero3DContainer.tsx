"use client";

import React from "react";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data/portfolioData";
import { ArrowDownIcon, TrophyIcon, CpuIcon, FpgaIcon, AwardIcon } from "@/components/icons";
import { useHeroScroll } from "./useHeroScroll";

// Dynamically import Hero3DScene with SSR disabled to guarantee zero hydration mismatch
const DynamicHero3DScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#0a0d12] flex items-center justify-center">
      <div className="flex items-center gap-2 font-tech text-xs text-cyan-400">
        <span className="w-2 h-2 rounded-full bg-cyan-400 led-pulse" />
        <span>INITIALIZING 3D KINEMATICS...</span>
      </div>
    </div>
  ),
});

export default function Hero3DContainer() {
  const {
    containerRef,
    pinTargetRef,
    stage1TextRef,
    stage2TextRef,
    stage3TextRef,
    cameraStateRef,
    vehicleStateRef,
    scrollProgress,
    isReducedMotion,
    isMobile,
  } = useHeroScroll();

  return (
    <div
      ref={containerRef}
      id="home"
      className={`relative w-full ${
        isReducedMotion ? "min-h-screen" : "min-h-screen"
      } bg-[#0a0d12] border-b border-[#242e3d] overflow-hidden`}
    >
      {/* Pinned Viewport Frame */}
      <div
        ref={pinTargetRef}
        className="relative w-full h-screen flex flex-col justify-center overflow-hidden"
      >
        {/* Ambient Radial Lighting Glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none z-0" />

        {/* 3D WebGL Canvas Layer (z-0) */}
        <DynamicHero3DScene
          cameraStateRef={cameraStateRef}
          vehicleStateRef={vehicleStateRef}
          modelPath="/models/hero-vehicle.glb"
          isMobile={isMobile}
        />

        {/* Cinematic Scroll Progress HUD Indicator (Top Right) */}
        {!isReducedMotion && (
          <div className="absolute top-24 right-4 sm:right-8 lg:right-12 z-20 pointer-events-none flex items-center gap-3 font-tech text-[11px] text-slate-400 bg-[#10151d]/85 px-3 py-1.5 rounded-full border border-[#242e3d] backdrop-blur-md">
            <span className="text-cyan-400 font-bold">HERO TRAJECTORY</span>
            <div className="w-16 h-1.5 bg-[#171d27] rounded-full overflow-hidden border border-[#242e3d]">
              <div
                className="h-full bg-cyan-400 transition-all duration-75 ease-out rounded-full"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <span className="text-slate-300 font-mono w-7 text-right">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        )}

        {/* Interactive Typography Overlay Layer (z-10, pointer-events-none with pointer-events-auto on buttons) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pointer-events-none">
          {/* ─────────────────────────────────────────────────────────────
              STAGE 1 TYPOGRAPHY (0% -> ~30% Scroll): Identity & Credentials
             ───────────────────────────────────────────────────────────── */}
          <div
            ref={stage1TextRef}
            className="w-full max-w-2xl space-y-5 will-change-transform"
          >
            {/* Live System Telemetry Strip */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3 py-1.5 rounded-full bg-[#10151d]/90 border border-[#242e3d] backdrop-blur-md pointer-events-auto">
              <span className="flex items-center gap-1.5 font-tech text-[11px] text-emerald-400 font-semibold uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 led-pulse" />
                SYSTEM ACTIVE // 2026
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="font-tech text-[11px] text-cyan-300 hidden sm:inline">
                ESP32 • ARTIX-7 FPGA • FREERTOS
              </span>
              <span className="text-slate-600 hidden md:inline">•</span>
              <span className="font-tech text-[11px] text-slate-400 hidden md:inline">
                NASHIK, MH
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.92] drop-shadow-md">
                {personalInfo.name}
              </h1>
              <h2 className="font-display text-lg sm:text-2xl text-cyan-300 font-semibold tracking-wide uppercase pt-1 flex items-center gap-2">
                <span>{personalInfo.primaryTitle}</span>
              </h2>
            </div>

            <div className="inline-block font-tech text-xs sm:text-sm text-slate-300 py-1.5 px-3 rounded-lg bg-[#171d27]/90 border border-[#242e3d] backdrop-blur-sm pointer-events-auto">
              {personalInfo.focus}
            </div>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed font-body drop-shadow">
              Building real-world embedded systems, low-latency telemetry, and FPGA digital logic at K.K. Wagh Institute of Engineering Education & Research (SPPU).
            </p>

            {/* Key Merit & Impact Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 pointer-events-auto">
              <div className="p-2.5 rounded-xl bg-[#10151d]/90 border border-amber-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-amber-400 font-tech text-[10px] font-bold uppercase mb-0.5">
                  <TrophyIcon size={12} />
                  <span>SIH 2025</span>
                </div>
                <span className="font-display text-sm font-bold text-white block leading-tight">
                  1st Prize ₹1.5L
                </span>
                <span className="font-tech text-[9px] text-slate-400 block">Out of 50,000+</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#10151d]/90 border border-cyan-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-cyan-400 font-tech text-[10px] font-bold uppercase mb-0.5">
                  <AwardIcon size={12} />
                  <span>ACADEMICS</span>
                </div>
                <span className="font-display text-sm font-bold text-white block leading-tight">
                  8.69 CGPA
                </span>
                <span className="font-tech text-[9px] text-slate-400 block">Peak 9.00 SGPA</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#10151d]/90 border border-emerald-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-emerald-400 font-tech text-[10px] font-bold uppercase mb-0.5">
                  <CpuIcon size={12} />
                  <span>SPACE CLUB</span>
                </div>
                <span className="font-display text-sm font-bold text-white block leading-tight">
                  Avionics Lead
                </span>
                <span className="font-tech text-[9px] text-slate-400 block">Team Antariiksh</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#10151d]/90 border border-indigo-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-indigo-400 font-tech text-[10px] font-bold uppercase mb-0.5">
                  <FpgaIcon size={12} />
                  <span>RESEARCH</span>
                </div>
                <span className="font-display text-sm font-bold text-white block leading-tight">
                  2 Papers
                </span>
                <span className="font-tech text-[9px] text-slate-400 block">Published</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 pointer-events-auto">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-tech text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-lg shadow-cyan-950/40 active:scale-95 cursor-pointer"
              >
                <span>EXPLORE WORK</span>
                <ArrowDownIcon size={14} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Abhishek_Ahirrao_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#171d27]/90 hover:bg-[#202833] text-cyan-300 border border-cyan-500/40 hover:border-cyan-400/70 font-tech text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
              >
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#10151d]/90 hover:bg-[#171d27] text-white border border-[#242e3d] hover:border-[#3b495e] font-tech text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
              >
                <span>CONTACT</span>
              </a>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              STAGE 2 TYPOGRAPHY (~30% -> ~70% Scroll): Autonomous Systems & RTOS Focus
             ───────────────────────────────────────────────────────────── */}
          {!isReducedMotion && (
            <div
              ref={stage2TextRef}
              className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 lg:left-12 max-w-xl space-y-4 opacity-0 pointer-events-none will-change-transform"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10151d]/90 border border-cyan-500/40 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 led-pulse" />
                <span className="font-tech text-xs text-cyan-300 font-bold uppercase tracking-wider">
                  AUTONOMOUS SYSTEMS // KINEMATICS
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-lg">
                Deterministic Cyber-Physical Prototyping
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body drop-shadow bg-[#0a0d12]/70 p-4 rounded-xl border border-[#242e3d] backdrop-blur-md">
                Connecting mathematical vehicle dynamics to physical microcontrollers. From FreeRTOS task priority assignment on ESP32 to low-latency ESP-NOW peer-to-peer telemetry and Artix-7 RTL logic synthesis.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 rounded bg-[#171d27]/90 border border-[#242e3d] font-tech text-xs text-cyan-300">
                  32ms P2P LATENCY
                </span>
                <span className="px-3 py-1 rounded bg-[#171d27]/90 border border-[#242e3d] font-tech text-xs text-emerald-400">
                  ROADRUNNER 3D DYNAMICS
                </span>
                <span className="px-3 py-1 rounded bg-[#171d27]/90 border border-[#242e3d] font-tech text-xs text-amber-400">
                  HARDWARE-IN-THE-LOOP
                </span>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              STAGE 3 TYPOGRAPHY (~70% -> ~95% Scroll): Transition to Projects Rail
             ───────────────────────────────────────────────────────────── */}
          {!isReducedMotion && (
            <div
              ref={stage3TextRef}
              className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 lg:right-12 max-w-md text-right space-y-3 opacity-0 pointer-events-none will-change-transform"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10151d]/90 border border-cyan-500/40 backdrop-blur-md ml-auto">
                <span className="font-tech text-xs text-cyan-400 font-bold uppercase tracking-wider">
                  TRANSITION // 05 FLAGSHIP SYSTEMS
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-lg">
                Entering Hanging Projects Rail
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body drop-shadow bg-[#0a0d12]/80 p-3 rounded-xl border border-[#242e3d] backdrop-blur-md inline-block">
                Scroll to explore physical vehicle controls, digital twins, FPGA deduplication, and avionics flight instrumentation.
              </p>

              <div className="flex items-center justify-end gap-2 text-cyan-400 font-tech text-xs font-semibold pt-1">
                <span>VERTICAL SCROLL CONTROLS HORIZONTAL RAIL</span>
                <span className="animate-bounce inline-block">↓</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Scroll Hint */}
        {!isReducedMotion && scrollProgress < 0.15 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center gap-1.5 text-slate-400 font-tech text-[11px] animate-pulse">
            <span className="tracking-widest uppercase">SCROLL TO OPERATE KINEMATICS</span>
            <ArrowDownIcon size={14} className="text-cyan-400" />
          </div>
        )}
      </div>
    </div>
  );
}
