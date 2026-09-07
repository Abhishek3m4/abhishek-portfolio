"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import TechnicalImage from "@/components/TechnicalImage";
import { ArrowDownIcon, TrophyIcon, CpuIcon, FpgaIcon, AwardIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#0a0d12] bg-cad-grid border-b border-[#242e3d] overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column: Bold Typography, Status Telemetry, & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Live System Telemetry Strip */}
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3 py-1.5 rounded-full bg-[#10151d]/90 border border-[#242e3d] backdrop-blur-md">
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
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.92]">
              {personalInfo.name}
            </h1>
            <h2 className="font-display text-xl sm:text-2xl text-cyan-300 font-semibold tracking-wide uppercase pt-1 flex items-center gap-2">
              <span>{personalInfo.primaryTitle}</span>
            </h2>
          </div>

          <div className="inline-block font-tech text-xs sm:text-sm text-slate-300 py-1.5 px-3 rounded-lg bg-[#171d27] border border-[#242e3d]">
            {personalInfo.focus}
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed font-body">
            Engineering physical embedded systems, deterministic real-time firmware, and hardware acceleration from microcontroller buses to FPGA digital logic.
          </p>

          {/* Key Merit & Impact Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
            <div className="p-2.5 rounded-xl bg-[#10151d] border border-amber-500/30">
              <div className="flex items-center gap-1.5 text-amber-400 font-tech text-[10px] font-bold uppercase mb-0.5">
                <TrophyIcon size={12} />
                <span>SIH 2025</span>
              </div>
              <span className="font-display text-sm font-bold text-white block leading-tight">
                1st Prize ₹1.5L
              </span>
              <span className="font-tech text-[9px] text-slate-400 block">Out of 50,000+</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#10151d] border border-cyan-500/30">
              <div className="flex items-center gap-1.5 text-cyan-400 font-tech text-[10px] font-bold uppercase mb-0.5">
                <AwardIcon size={12} />
                <span>ACADEMICS</span>
              </div>
              <span className="font-display text-sm font-bold text-white block leading-tight">
                8.69 CGPA
              </span>
              <span className="font-tech text-[9px] text-slate-400 block">Peak 9.00 SGPA</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#10151d] border border-emerald-500/30">
              <div className="flex items-center gap-1.5 text-emerald-400 font-tech text-[10px] font-bold uppercase mb-0.5">
                <CpuIcon size={12} />
                <span>SPACE CLUB</span>
              </div>
              <span className="font-display text-sm font-bold text-white block leading-tight">
                Avionics Lead
              </span>
              <span className="font-tech text-[9px] text-slate-400 block">Team Antariiksh</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#10151d] border border-indigo-500/30">
              <div className="flex items-center gap-1.5 text-indigo-400 font-tech text-[10px] font-bold uppercase mb-0.5">
                <FpgaIcon size={12} />
                <span>RESEARCH</span>
              </div>
              <span className="font-display text-sm font-bold text-white block leading-tight">
                2 Papers
              </span>
              <span className="font-tech text-[9px] text-slate-400 block">IJETED & ICITSC</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-tech text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-lg shadow-cyan-950/40 active:scale-95 cursor-pointer"
            >
              <span>EXPLORE WORK</span>
              <ArrowDownIcon size={14} />
            </a>

            <a
              href="#pipeline"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#171d27] hover:bg-[#202833] text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 font-tech text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
            >
              <span>SIGNAL PIPELINE</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#10151d] hover:bg-[#171d27] text-white border border-[#242e3d] hover:border-[#3b495e] font-tech text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
            >
              <span>CONTACT</span>
            </a>
          </div>
        </div>

        {/* Right Column: Asymmetric Rectangular Portrait Frame with HUD Telemetry */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Offset Background Architectural Shadow Layer */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#10151d] border border-[#242e3d] pointer-events-none -z-10" />

            {/* Main Portrait Card */}
            <div className="relative rounded-2xl bg-[#171d27] border border-[#3b495e] p-3 sm:p-4 shadow-2xl">
              {/* Technical Corner Notches */}
              <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

              {/* Photo Frame */}
              <div className="rounded-xl overflow-hidden border border-[#242e3d] bg-[#0a0d12]">
                <TechnicalImage
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  aspectRatio="aspect-4/5 sm:aspect-3/4"
                  imgClassName="object-cover object-top"
                  label="PORTRAIT // ABHISHEK AHIRRAO"
                  tag="ENGINEER"
                  slotHint="public/images/profile/abhishek.jpeg"
                />
              </div>

              {/* Minimal Bottom Label */}
              <div className="mt-3 px-1 flex items-center justify-between font-tech text-[11px] text-slate-300">
                <span className="font-semibold text-white uppercase">{personalInfo.name}</span>
                <span className="text-cyan-400 font-bold">ENTC 2023–2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
