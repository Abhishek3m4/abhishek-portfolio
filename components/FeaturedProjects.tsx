"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { featuredProjects, Project } from "@/data/portfolioData";
import {
  CpuIcon,
  FpgaIcon,
  CircuitIcon,
  RadioSignalIcon,
  ControlIcon,
  WaveformIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  TerminalIcon,
} from "@/components/icons";
import ProjectCaseStudyModal from "@/components/ProjectCaseStudyModal";

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = featuredProjects.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if modal is open
      if (selectedProject) return;

      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, selectedProject]);

  // Touch / swipe support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeProject = featuredProjects[currentIndex];

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b1120] border-b border-[#1e293b] transition-colors duration-300 relative"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider mb-2.5">
              <span>// 03</span>
              <span className="w-8 h-[1px] bg-cyan-500/50" />
              <span>PRIMARY HARDWARE & EMBEDDED SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Engineering Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Hardware-software integration, real-time wireless telemetry, FPGA RTL pipelines, and embedded automation prototypes.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="font-mono text-xs text-slate-400 mr-2">
              PROJECT <strong className="text-cyan-400 font-bold">0{currentIndex + 1}</strong> / 0{total}
            </span>
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-lg bg-[#162238] border border-[#243552] text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-[#1c2b45] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 active:scale-95"
              aria-label="Previous project slide"
              title="Previous project (or Left Arrow)"
            >
              <ChevronLeftIcon size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-lg bg-[#162238] border border-[#243552] text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-[#1c2b45] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 active:scale-95"
              aria-label="Next project slide"
              title="Next project (or Right Arrow)"
            >
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>

        {/* Main Featured Showcase Carousel Slide */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={activeProject.id}
            className="rounded-2xl bg-[#162238] border border-[#243552] hover:border-cyan-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top Engineering Callout Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#243552] pb-5 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold tracking-wider">
                  FEATURED HARDWARE // 0{currentIndex + 1}
                </span>
                <span className="text-xs font-mono text-slate-300">
                  ROLE: <strong className="text-white font-semibold">{activeProject.role}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 led-pulse" />
                <span>{activeProject.date}</span>
              </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Title, Narrative, Highlights, & Stack */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 mt-4 leading-relaxed font-sans">
                    {activeProject.description}
                  </p>
                </div>

                {/* Concepts or Highlights */}
                {activeProject.concepts && (
                  <div>
                    <div className="text-xs font-mono text-cyan-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                      <ControlIcon size={14} />
                      <span>SYSTEM ARCHITECTURE & CONTROL PRINCIPLES</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.concepts.map((concept) => (
                        <span
                          key={concept}
                          className="px-3 py-1 rounded-md bg-[#0f172a] border border-[#243552] text-slate-200 font-mono text-xs flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeProject.highlights && (
                  <div>
                    <div className="text-xs font-mono text-cyan-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                      <CircuitIcon size={14} />
                      <span>RTL & SYSTEM HIGHLIGHTS</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeProject.highlights.map((h) => (
                        <div
                          key={h}
                          className="p-2.5 rounded bg-[#0f172a] border border-[#243552] text-slate-200 text-xs font-mono flex items-center gap-2"
                        >
                          <CheckCircleIcon size={14} className="text-cyan-400 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hardware Stack */}
                <div>
                  <div className="text-xs font-mono text-slate-300 tracking-wider mb-2.5 flex items-center gap-1.5">
                    <CpuIcon size={14} className="text-cyan-400" />
                    <span>HARDWARE, SENSORS & SOFTWARE TOOLS</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#0f172a] border border-[#2e4366] text-slate-200 font-mono text-xs hover:border-cyan-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(activeProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-cyan-950/40 hover:shadow-cyan-500/20 active:scale-95"
                  >
                    <span>View Engineering Case Study</span>
                    <ChevronRightIcon size={15} />
                  </button>
                  <a
                    href="https://github.com/Abhishek3m4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0f172a] hover:bg-[#1a2842] text-slate-200 border border-[#243552] font-mono text-xs sm:text-sm transition-colors"
                  >
                    <ExternalLinkIcon size={14} className="text-slate-400" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Visual Engineering Diagram */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="rounded-xl bg-[#0f172a] border border-[#243552] p-5 space-y-4 font-mono shadow-inner">
                  <div className="flex items-center justify-between border-b border-[#243552] pb-3 text-xs">
                    <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                      {currentIndex === 0 ? (
                        <RadioSignalIcon size={14} />
                      ) : currentIndex === 1 ? (
                        <FpgaIcon size={14} />
                      ) : (
                        <CircuitIcon size={14} />
                      )}
                      {currentIndex === 0
                        ? "V2V COOPERATIVE CONTROL LOOP"
                        : currentIndex === 1
                        ? "FPGA PIPELINE ARCHITECTURE"
                        : "MICROCONTROLLER RELAY ISOLATION"}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {currentIndex === 0 ? "ESP-NOW P2P" : currentIndex === 1 ? "ARTIX-7 RTL" : "ESP32 GPIO"}
                    </span>
                  </div>

                  {/* Flow Steps for Current Project */}
                  {currentIndex === 0 && (
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-lg bg-[#162238] border border-[#243552] flex items-start gap-2.5">
                        <div className="p-1 rounded bg-cyan-950 text-cyan-400 shrink-0 mt-0.5">
                          <CpuIcon size={14} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Vehicle Node (ESP32)</div>
                          <div className="text-[11px] text-slate-300 font-sans mt-0.5">
                            MPU6050 IMU + Ultrasonic rangefinder + GPS telemetry acquisition
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center text-cyan-400/90 text-[10px] items-center gap-1 font-mono">
                        <span>↓</span>
                        <span>ESP-NOW Wireless Telemetry (&lt;10ms P2P Latency)</span>
                        <span>↓</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#162238] border border-[#243552] flex items-start gap-2.5">
                        <div className="p-1 rounded bg-emerald-950 text-emerald-400 shrink-0 mt-0.5">
                          <ControlIcon size={14} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Time-To-Collision (TTC) Engine</div>
                          <div className="text-[11px] text-slate-300 font-sans mt-0.5">
                            Relative velocity calculation, collision horizon prediction & safety bounds
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center text-cyan-400/90 text-[10px] items-center gap-1 font-mono">
                        <span>↓</span>
                        <span>Autonomous Decision & PWM Actuation</span>
                        <span>↓</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#162238] border border-[#243552] flex items-start gap-2.5">
                        <div className="p-1 rounded bg-amber-950 text-amber-400 shrink-0 mt-0.5">
                          <WaveformIcon size={14} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Actuation & Simulation</div>
                          <div className="text-[11px] text-slate-300 font-sans mt-0.5">
                            Motor driver PWM control + Python-based simulation & validation harness
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentIndex === 1 && (
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-lg bg-[#162238] border border-[#243552] flex items-start gap-2.5">
                        <div className="p-1 rounded bg-indigo-950 text-indigo-400 shrink-0 mt-0.5">
                          <FpgaIcon size={14} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Pixel Stream Ingestion</div>
                          <div className="text-[11px] text-slate-300 font-sans mt-0.5">
                            Synchronous streaming register pipeline for wildlife edge camera sensor
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center text-indigo-400/90 text-[10px] items-center gap-1 font-mono">
                        <span>↓</span>
                        <span>Hardware Feature Extraction</span>
                        <span>↓</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#162238] border border-[#243552] flex items-start gap-2.5">
                        <div className="p-1 rounded bg-cyan-950 text-cyan-400 shrink-0 mt-0.5">
                          <CircuitIcon size={14} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">64-Bit Signature Unit</div>
                          <div className="text-[11px] text-slate-300 font-sans mt-0.5">
                            Gradient-based perceptual signature calculation in RTL hardware
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center text-indigo-400/90 text-[10px] items-center gap-1 font-mono">
                        <span>↓</span>
                        <span>Single-Cycle Hamming Match</span>
                        <span>↓</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#162238] border border-[#243552] flex items-start gap-2.5">
                        <div className="p-1 rounded bg-emerald-950 text-emerald-400 shrink-0 mt-0.5">
                          <CheckCircleIcon size={14} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Duplicate Detection Decision</div>
                          <div className="text-[11px] text-slate-300 font-sans mt-0.5">
                            Inhibits redundant writes to SD card storage; verified in ModelSim & Vivado
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentIndex === 2 && (
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-lg bg-[#162238] border border-[#243552] flex items-start gap-2.5">
                        <div className="p-1 rounded bg-cyan-950 text-cyan-400 shrink-0 mt-0.5">
                          <CpuIcon size={14} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">ESP32 Controller Node</div>
                          <div className="text-[11px] text-slate-300 font-sans mt-0.5">
                            Non-blocking state machine listening for wireless switching requests
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center text-cyan-400/90 text-[10px] items-center gap-1 font-mono">
                        <span>↓</span>
                        <span>Galvanic Isolation Barrier</span>
                        <span>↓</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#162238] border border-[#243552] flex items-start gap-2.5">
                        <div className="p-1 rounded bg-amber-950 text-amber-400 shrink-0 mt-0.5">
                          <CircuitIcon size={14} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Optocoupler Isolation Stage</div>
                          <div className="text-[11px] text-slate-300 font-sans mt-0.5">
                            Separates 3.3V digital logic lines from 230V AC high-current load spikes
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center text-cyan-400/90 text-[10px] items-center gap-1 font-mono">
                        <span>↓</span>
                        <span>Relay Actuation</span>
                        <span>↓</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#162238] border border-[#243552] flex items-start gap-2.5">
                        <div className="p-1 rounded bg-emerald-950 text-emerald-400 shrink-0 mt-0.5">
                          <ControlIcon size={14} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">AC Appliance Switching</div>
                          <div className="text-[11px] text-slate-300 font-sans mt-0.5">
                            4-channel power relays with flyback diodes & creepage compliance
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Status Strip */}
                  <div className="pt-3 border-t border-[#243552] flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <TerminalIcon size={12} className="text-cyan-400" />
                      STATUS: VALIDATED
                    </span>
                    <span className="text-cyan-400 font-semibold">HARDWARE OPERATIONAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Indicators & Stacked Selector Tabs */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredProjects.map((project, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#162238] border-cyan-400/80 shadow-lg shadow-cyan-950/40 translate-y-[-2px]"
                      : "bg-[#0f172a] border-[#243552] hover:border-[#38bdf8]/40 hover:bg-[#142033]"
                  }`}
                  aria-label={`Switch to project ${idx + 1}: ${project.title}`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-semibold text-cyan-400">
                      // 0{idx + 1}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? "bg-cyan-400 led-pulse" : "bg-slate-700"
                      }`}
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2">
                    {project.title}
                  </div>
                  <div className="mt-2 text-[11px] font-mono text-slate-400">
                    {project.role}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Engineering Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
