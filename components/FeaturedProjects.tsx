"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featuredProjects, Project } from "@/data/portfolioData";
import TechnicalImage from "@/components/TechnicalImage";
import { GitHubIcon } from "@/components/icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECT_CATEGORIES = [
  { label: "ALL SYSTEMS", id: "all" },
  { label: "DIGITAL TWIN", id: "twinx-digital-twin" },
  { label: "V2V AUTONOMOUS", id: "v2v-autonomous-vehicle-control" },
  { label: "FPGA / RTL", id: "fpga-image-deduplication-engine" },
  { label: "SMART IOT", id: "mobile-smart-home-automation" },
  { label: "AEROSPACE", id: "water-rocket-parametric-optimization" },
];

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.innerWidth >= 768;

    if (!isDesktop || prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth + 140;
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.8,
          start: "top top",
          end: () => `+=${getScrollAmount() * 1.3}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              Math.floor(self.progress * featuredProjects.length),
              featuredProjects.length - 1
            );
            setActiveIndex(idx);
          },
        },
      });

      return () => {
        tween.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSelectFilter = (catId: string) => {
    setActiveFilter(catId);
    if (catId === "all") return;

    const targetIdx = featuredProjects.findIndex((p) => p.id === catId);
    if (targetIdx !== -1) {
      setActiveIndex(targetIdx);
      const track = trackRef.current;
      if (track) {
        const cardWidth = track.scrollWidth / featuredProjects.length;
        track.scrollTo({
          left: targetIdx * cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, featuredProjects.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-[#10151d] border-b border-[#242e3d] overflow-hidden"
    >
      {/* Container that stays pinned during GSAP scrub on desktop */}
      <div className="w-full min-h-screen flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-6 lg:px-12">
        {/* Top Header, Filters & Navigation Controls */}
        <div className="max-w-7xl mx-auto w-full space-y-4 pb-6 border-b border-[#242e3d] z-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-tech text-xs text-cyan-400 tracking-widest uppercase mb-1">
                <span>WORK // FLAGSHIP HARDWARE & SOFTWARE</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
                Selected Projects
              </h2>
            </div>

            {/* Progress Indicator & Buttons */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeIndex === 0}
                  className="w-8 h-8 rounded-lg bg-[#171d27] border border-[#242e3d] text-slate-300 hover:text-white hover:border-cyan-400 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeIndex === featuredProjects.length - 1}
                  className="w-8 h-8 rounded-lg bg-[#171d27] border border-[#242e3d] text-slate-300 hover:text-white hover:border-cyan-400 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next project"
                >
                  →
                </button>
              </div>

              <div className="flex items-center gap-3 font-tech text-xs text-slate-400">
                <span className="font-display text-xl font-bold text-cyan-400">
                  0{activeIndex + 1}
                </span>
                <div className="w-24 sm:w-36 h-[3px] bg-[#171d27] rounded-full overflow-hidden border border-[#242e3d]">
                  <div
                    className="h-full bg-cyan-400 transition-all duration-150 ease-out rounded-full"
                    style={{
                      width: `${Math.max(
                        ((activeIndex + 1) / featuredProjects.length) * 100,
                        15
                      )}%`,
                    }}
                  />
                </div>
                <span className="text-slate-400">0{featuredProjects.length}</span>
              </div>
            </div>
          </div>

          {/* Quick Domain Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {PROJECT_CATEGORIES.map((cat) => {
              const isSelected =
                activeFilter === cat.id ||
                (cat.id !== "all" && featuredProjects[activeIndex]?.id === cat.id);
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectFilter(cat.id)}
                  className={`px-3 py-1 rounded-full font-tech text-[11px] tracking-wider uppercase transition-colors cursor-pointer border ${
                    isSelected
                      ? "bg-cyan-950/80 text-cyan-300 border-cyan-500/60 font-semibold"
                      : "bg-[#171d27] text-slate-400 border-[#242e3d] hover:border-[#3b495e] hover:text-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Physical Hanging Rail System */}
        <div className="flex-1 flex flex-col justify-center w-full py-6 sm:py-10 relative">
          {/* Continuous Horizontal Hanging Rail (Desktop) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 z-10 pointer-events-none">
            <div className="w-full h-[2px] bg-[#242e3d] shadow-sm relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            </div>
          </div>

          {/* Moving Track */}
          <div className="w-full overflow-x-auto md:overflow-visible no-scrollbar">
            <div
              ref={trackRef}
              className="flex gap-8 lg:gap-12 md:pl-6 md:pr-24 will-change-transform items-start"
            >
              {featuredProjects.map((project, idx) => {
                const isCurrent = idx === activeIndex;
                const offsetClass = idx % 2 === 0 ? "md:pt-14" : "md:pt-20";

                return (
                  <div
                    key={project.id}
                    className={`shrink-0 w-[92vw] sm:w-[82vw] md:w-[68vw] lg:w-[60vw] xl:w-[54vw] flex flex-col items-center ${offsetClass}`}
                  >
                    {/* Hanging Node & Vertical Stem (Desktop) */}
                    <div className="hidden md:flex flex-col items-center mb-0 relative z-20">
                      {/* Node connected to the top rail */}
                      <div
                        className="w-4 h-4 rounded-full border-2 transition-colors flex items-center justify-center shadow-md bg-[#10151d]"
                        style={{
                          borderColor: isCurrent ? project.accentColor : "#3b495e",
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: isCurrent ? project.accentColor : "#3b495e",
                          }}
                        />
                      </div>

                      {/* Vertical Hanging Stem */}
                      <div
                        className="w-[2px] h-10 transition-colors"
                        style={{
                          backgroundColor: isCurrent ? project.accentColor : "#242e3d",
                        }}
                      />
                    </div>

                    {/* Suspended Hanging Content Card */}
                    <div
                      className="w-full rounded-2xl bg-[#171d27] border p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 relative group"
                      style={{
                        borderColor: isCurrent ? `${project.accentColor}80` : "#242e3d",
                      }}
                    >
                      {/* Top Header: Number & Role */}
                      <div className="flex items-baseline justify-between border-b border-[#242e3d] pb-4 mb-6">
                        <div className="flex items-baseline gap-3">
                          <span
                            className="font-display text-4xl sm:text-5xl font-black"
                            style={{ color: project.accentColor }}
                          >
                            0{idx + 1}
                          </span>
                          <span className="font-tech text-xs text-slate-400">
                            / 0{featuredProjects.length}
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="font-tech text-xs text-slate-300 block font-medium">
                            {project.role}
                          </span>
                          <span className="font-tech text-[11px] text-slate-400 block">
                            {project.date}
                          </span>
                        </div>
                      </div>

                      {/* Card Body Grid: Details & Visual */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                        {/* Left: Content & Technologies */}
                        <div className="lg:col-span-6 space-y-4">
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight leading-tight">
                            {project.title}
                          </h3>

                          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                            {project.description}
                          </p>

                          {/* Technology Pills */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded bg-[#10151d] border border-[#242e3d] font-tech text-xs text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Action: Direct GitHub Link */}
                          <div className="flex items-center gap-3 pt-3">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-tech text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer hover:brightness-110"
                                style={{
                                  backgroundColor: project.accentColor,
                                  color: "#0a0d12",
                                }}
                                aria-label={`View ${project.title} on GitHub`}
                              >
                                <GitHubIcon size={15} />
                                <span>VIEW SOURCE / REPOSITORY</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Right: Strong Image Visual */}
                        <div className="lg:col-span-6">
                          <div className="rounded-xl overflow-hidden border border-[#242e3d] bg-[#0a0d12] p-1.5 shadow-inner">
                            <TechnicalImage
                              src={project.image}
                              alt={project.title}
                              aspectRatio="aspect-16/10"
                              label={`SYSTEM // ${project.id.toUpperCase()}`}
                              tag="VERIFIED ASSET"
                              slotHint={`public${project.image}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="hidden md:flex items-center justify-between font-tech text-[11px] text-slate-400 pt-3 border-t border-[#242e3d]/60">
          <span>VERTICAL SCROLL CONTROLS HORIZONTAL RAIL</span>
          <span>PHYSICAL HANGING-CARD ARCHITECTURE</span>
        </div>
      </div>
    </section>
  );
}
