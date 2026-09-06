"use client";

import React, { useState, useEffect, useMemo } from "react";
import { CpuIcon, FpgaIcon, CircuitIcon, WaveformIcon, GraduationCapIcon } from "@/components/icons";

export interface TechnicalImageProps {
  src?: string;
  alt: string;
  category?: string;
  title?: string;
  className?: string;
  aspectRatio?: string;
  label?: string;
  tag?: string;
  slotHint?: string;
  objectFit?: "cover" | "contain";
  imgClassName?: string;
}

export default function TechnicalImage({
  src,
  alt,
  category = "HARDWARE",
  title = "System Blueprint",
  className = "",
  aspectRatio = "aspect-video",
  label,
  tag,
  slotHint,
  objectFit = "cover",
  imgClassName = "",
}: TechnicalImageProps) {
  // Generate candidate fallback paths for common extensions
  const candidates = useMemo(() => {
    if (!src) return [];
    const base = src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, "");
    const ext = (src.match(/\.(jpg|jpeg|png|webp|avif)$/i)?.[1] || "").toLowerCase();
    const commonExts = ["jpg", "jpeg", "png", "webp", "avif"];
    const ordered = [
      src,
      ...commonExts
        .filter((e) => e !== ext)
        .map((e) => `${base}.${e}`),
    ];
    return Array.from(new Set(ordered));
  }, [src]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentIdx(0);
    setHasError(false);
  }, [src]);

  const handleImageError = () => {
    if (currentIdx < candidates.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const currentSrc = candidates[currentIdx] || src;
  const displayCategory = tag || category;
  const displayTitle = label || title;

  const getSchematicIcon = () => {
    const c = `${category} ${tag || ""} ${title} ${label || ""}`.toLowerCase();
    if (c.includes("fpga") || c.includes("rtl") || c.includes("vlsi") || c.includes("verilog")) {
      return <FpgaIcon size={36} className="text-indigo-400/80" />;
    }
    if (
      c.includes("simul") ||
      c.includes("trajectory") ||
      c.includes("rocket") ||
      c.includes("weather") ||
      c.includes("matlab")
    ) {
      return <WaveformIcon size={36} className="text-cyan-400/80" />;
    }
    if (
      c.includes("education") ||
      c.includes("degree") ||
      c.includes("college") ||
      c.includes("school") ||
      c.includes("institute")
    ) {
      return <GraduationCapIcon size={36} className="text-emerald-400/80" />;
    }
    if (c.includes("relay") || c.includes("iot") || c.includes("home") || c.includes("automation")) {
      return <CircuitIcon size={36} className="text-amber-400/80" />;
    }
    return <CpuIcon size={36} className="text-cyan-400/80" />;
  };

  const fitClass = objectFit === "contain" ? "object-contain" : "object-cover";

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[#0d1527] border border-[#243552] group ${aspectRatio} ${className}`}
    >
      {/* 1. Real Image Render (Immediately visible when src is provided) */}
      {currentSrc && !hasError ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={currentSrc}
            src={currentSrc}
            alt={alt}
            onError={handleImageError}
            className={`w-full h-full ${fitClass} ${imgClassName} transition-transform duration-500 group-hover:scale-105 block`}
          />

          {/* Top HUD strip */}
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#0b1120]/85 backdrop-blur-md border border-[#243552] text-[10px] font-mono text-cyan-300 font-semibold flex items-center gap-1.5 z-10 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 led-pulse" />
            <span>ASSET // {displayCategory.toUpperCase()}</span>
          </div>
        </>
      ) : (
        /* 2. Technical Blueprint Placeholder (Active ONLY when image is missing or errored out) */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-[#0d1527] bg-circuit-grid z-0">
          {/* HUD Corner Brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-500/50 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-500/50 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-500/50 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-500/50 pointer-events-none" />

          {/* Central CAD crosshair & domain icon */}
          <div className="relative mb-3 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-[#142038] border border-[#2e4366] flex items-center justify-center shadow-lg group-hover:border-cyan-400/50 transition-colors">
              {getSchematicIcon()}
            </div>
            {/* Crosshair ring */}
            <div
              className="absolute -inset-2 border border-cyan-500/20 rounded-full animate-ping pointer-events-none"
              style={{ animationDuration: "4s" }}
            />
          </div>

          <div className="space-y-1 z-10 max-w-xs">
            <div className="text-xs font-bold text-white tracking-wide truncate">
              {displayTitle}
            </div>
            <div className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase">
              TECHNICAL SCHEMATIC // {displayCategory}
            </div>
            {(slotHint || src) && (
              <div className="text-[9px] font-mono text-slate-400 pt-1 border-t border-[#1e293b] mt-2 truncate">
                {slotHint || `DROP FILE: ${src}`}
              </div>
            )}
          </div>

          {/* Telemetry line trace */}
          <div className="absolute bottom-2.5 right-3 text-[9px] font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-cyan-400" />
            <span>CAD_DRAFT // VERIFIED</span>
          </div>
        </div>
      )}
    </div>
  );
}
