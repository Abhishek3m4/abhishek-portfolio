"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { engineeringExperiences } from "@/data/portfolioData";
import TechnicalImage from "@/components/TechnicalImage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

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
              Math.floor(self.progress * engineeringExperiences.length),
              engineeringExperiences.length - 1
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

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, engineeringExperiences.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative bg-[#0a0d12] border-b border-[#242e3d] overflow-hidden"
    >
      <div className="w-full min-h-screen flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-6 lg:px-12">
        {/* Top Header & Navigation Controls */}
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#242e3d] z-20">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs text-cyan-400 tracking-widest uppercase mb-1">
              <span>CAREER // AEROSPACE & FIRMWARE ROLES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              Engineering Experience
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="w-8 h-8 rounded-lg bg-[#171d27] border border-[#242e3d] text-slate-300 hover:text-white hover:border-cyan-400 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous experience"
              >
                ←
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={activeIndex === engineeringExperiences.length - 1}
                className="w-8 h-8 rounded-lg bg-[#171d27] border border-[#242e3d] text-slate-300 hover:text-white hover:border-cyan-400 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next experience"
              >
                →
              </button>
            </div>

            <div className="font-tech text-xs text-slate-400">
              0{activeIndex + 1} / 0{engineeringExperiences.length} // 2025 ➔ PRESENT
            </div>
          </div>
        </div>

        {/* Physical Hanging Rail System */}
        <div className="flex-1 flex flex-col justify-center w-full py-6 sm:py-10 relative">
          {/* Continuous Horizontal Hanging Rail (Desktop) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 z-10 pointer-events-none">
            <div className="w-full h-[2px] bg-[#242e3d] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            </div>
          </div>

          {/* Moving Track */}
          <div className="w-full overflow-x-auto md:overflow-visible no-scrollbar">
            <div
              ref={trackRef}
              className="flex gap-8 lg:gap-12 md:pl-6 md:pr-24 will-change-transform items-start"
            >
              {engineeringExperiences.map((exp, idx) => {
                const isCurrent = idx === activeIndex;
                const offsetClass = idx % 2 === 0 ? "md:pt-14" : "md:pt-20";

                return (
                  <div
                    key={exp.organization}
                    className={`shrink-0 w-[90vw] sm:w-[78vw] md:w-[62vw] lg:w-[50vw] xl:w-[44vw] flex flex-col items-center ${offsetClass}`}
                  >
                    {/* Hanging Node, Year Chip & Stem (Desktop) */}
                    <div className="hidden md:flex flex-col items-center mb-0 relative z-20">
                      {/* Node connected to top rail */}
                      <div
                        className="w-4 h-4 rounded-full border-2 transition-colors flex items-center justify-center bg-[#0a0d12]"
                        style={{
                          borderColor: isCurrent ? "#00f0ff" : "#3b495e",
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: isCurrent ? "#00f0ff" : "#3b495e",
                          }}
                        />
                      </div>

                      {/* Hanging Stem with Year Marker */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-[2px] h-3 transition-colors"
                          style={{ backgroundColor: isCurrent ? "#00f0ff" : "#242e3d" }}
                        />
                        <span
                          className="font-tech text-xs font-bold px-2.5 py-0.5 rounded border bg-[#171d27] my-0.5"
                          style={{
                            color: isCurrent ? "#00f0ff" : "#cbd5e1",
                            borderColor: isCurrent ? "#00f0ff" : "#242e3d",
                          }}
                        >
                          {exp.year}
                        </span>
                        <div
                          className="w-[2px] h-4 transition-colors"
                          style={{ backgroundColor: isCurrent ? "#00f0ff" : "#242e3d" }}
                        />
                      </div>
                    </div>

                    {/* Suspended Hanging Experience Card */}
                    <div
                      className="w-full rounded-2xl bg-[#171d27] border p-6 sm:p-8 shadow-2xl transition-all duration-300 relative group"
                      style={{
                        borderColor: isCurrent ? "#00f0ff80" : "#242e3d",
                      }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between border-b border-[#242e3d] pb-4 mb-5">
                        <div>
                          <span className="font-tech text-xs text-cyan-400 block font-semibold mb-1">
                            {exp.period}
                          </span>
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                            {exp.organization}
                          </h3>
                        </div>

                        <span className="font-tech text-xs px-2.5 py-1 rounded bg-[#10151d] text-cyan-300 border border-cyan-500/30 shrink-0 font-semibold">
                          {exp.role}
                        </span>
                      </div>

                      {/* Concise Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body mb-5">
                        {exp.description}
                      </p>

                      {/* Facility / Artifact Image (if present) */}
                      {exp.image && (
                        <div className="mb-5 rounded-xl overflow-hidden border border-[#242e3d] bg-[#0a0d12] p-1.5 shadow-inner">
                          <TechnicalImage
                            src={exp.image}
                            alt={exp.organization}
                            aspectRatio="aspect-16/9"
                            label={`EXPERIENCE // ${exp.year}`}
                            tag="AVIONICS / AEROSPACE"
                          />
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-[#242e3d]/80">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#10151d] border border-[#242e3d] font-tech text-xs text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
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
          <span>VERTICAL SCROLL CONTROLS HORIZONTAL TIMELINE</span>
          <span>AEROSPACE & FIRMWARE MILESTONES</span>
        </div>
      </div>
    </section>
  );
}
