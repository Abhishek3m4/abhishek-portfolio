"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import TechnicalImage from "@/components/TechnicalImage";
import { ArrowDownIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0a0d12] bg-cad-grid border-b border-[#242e3d] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Bold Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="font-tech text-xs text-cyan-400 tracking-widest uppercase font-semibold block">
              PORTFOLIO // 2026
            </span>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95]">
              {personalInfo.name}
            </h1>
            <h2 className="font-display text-xl sm:text-2xl text-cyan-300 font-semibold tracking-wide uppercase pt-1">
              {personalInfo.primaryTitle}
            </h2>
          </div>

          <div className="inline-block font-tech text-xs sm:text-sm text-slate-300 py-1.5 px-3 rounded bg-[#171d27] border border-[#242e3d]">
            {personalInfo.focus}
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed font-body">
            Designing physical embedded systems, deterministic firmware, and hardware acceleration from microcontroller buses to FPGA digital logic.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-tech text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-lg shadow-cyan-950/40 active:scale-95 cursor-pointer"
            >
              <span>VIEW WORK</span>
              <ArrowDownIcon size={14} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#171d27] hover:bg-[#202833] text-white border border-[#242e3d] hover:border-[#3b495e] font-tech text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
            >
              <span>CONTACT</span>
            </a>
          </div>
        </div>

        {/* Right Column: Asymmetric Rectangular Portrait Frame */}
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
                  slotHint="public/images/profile/abhishek.jpg"
                />
              </div>

              {/* Minimal Bottom Label */}
              <div className="mt-3 px-1 flex items-center justify-between font-tech text-[11px] text-slate-300">
                <span className="font-semibold text-white uppercase">{personalInfo.name}</span>
                <span className="text-cyan-400">ENTC 2023–2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
