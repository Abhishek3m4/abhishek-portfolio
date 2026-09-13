"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { HERO_WAYPOINTS, CameraProxyState } from "./HeroCamera";
import { VehicleProxyState } from "./HeroVehicle";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Global Lenis singleton to guarantee only ONE instance exists across the portfolio
let globalLenisInstance: Lenis | null = null;

export function getOrCreateLenis(): Lenis | null {
  if (typeof window === "undefined") return null;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return null;

  if (!globalLenisInstance) {
    globalLenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Synchronize Lenis with GSAP ScrollTrigger (pappukr-codes pattern)
    globalLenisInstance.on("scroll", ScrollTrigger.update);

    const tickerCb = (time: number) => {
      globalLenisInstance?.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);
  }

  return globalLenisInstance;
}

interface UseHeroScrollReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  pinTargetRef: React.RefObject<HTMLDivElement | null>;
  stage1TextRef: React.RefObject<HTMLDivElement | null>;
  stage2TextRef: React.RefObject<HTMLDivElement | null>;
  stage3TextRef: React.RefObject<HTMLDivElement | null>;
  cameraStateRef: React.MutableRefObject<CameraProxyState>;
  vehicleStateRef: React.MutableRefObject<VehicleProxyState>;
  scrollProgress: number;
  isReducedMotion: boolean;
  isMobile: boolean;
}

export function useHeroScroll(): UseHeroScrollReturn {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinTargetRef = useRef<HTMLDivElement | null>(null);

  const stage1TextRef = useRef<HTMLDivElement | null>(null);
  const stage2TextRef = useRef<HTMLDivElement | null>(null);
  const stage3TextRef = useRef<HTMLDivElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Camera Mutable State Ref (Directly consumed by HeroCamera inside R3F useFrame)
  const cameraStateRef = useRef<CameraProxyState>({
    x: HERO_WAYPOINTS[0].camera[0],
    y: HERO_WAYPOINTS[0].camera[1],
    z: HERO_WAYPOINTS[0].camera[2],
    lx: HERO_WAYPOINTS[0].look[0],
    ly: HERO_WAYPOINTS[0].look[1],
    lz: HERO_WAYPOINTS[0].look[2],
  });

  // Vehicle Mutable State Ref (Directly consumed by HeroVehicle inside R3F useFrame)
  const vehicleStateRef = useRef<VehicleProxyState>({
    posX: -5.0,
    posY: 0,
    posZ: 2.0,
    rotX: 0,
    rotY: 0.25,
    rotZ: 0,
    scale: 1,
  });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;
    setIsReducedMotion(reduced);
    setIsMobile(mobile);

    // Initialize smooth scrolling if not reduced motion
    if (!reduced) {
      getOrCreateLenis();
    }

    // If reduced motion is requested, set vehicle and camera to elegant resting positions
    if (reduced) {
      cameraStateRef.current = {
        x: 1.8,
        y: 1.4,
        z: 6.2,
        lx: 0,
        ly: 0.1,
        lz: 0,
      };
      vehicleStateRef.current = {
        posX: 0,
        posY: 0,
        posZ: 0,
        rotX: 0,
        rotY: 0.65,
        rotZ: 0,
        scale: 1,
      };
      return;
    }

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const pinTarget = pinTargetRef.current;
      if (!container || !pinTarget) return;

      // Master Timeline Proxy (Dieg0arc & Grantmantek proxy pattern)
      const proxy = {
        progress: 0,
        // Camera coordinates
        camX: HERO_WAYPOINTS[0].camera[0],
        camY: HERO_WAYPOINTS[0].camera[1],
        camZ: HERO_WAYPOINTS[0].camera[2],
        lookX: HERO_WAYPOINTS[0].look[0],
        lookY: HERO_WAYPOINTS[0].look[1],
        lookZ: HERO_WAYPOINTS[0].look[2],
        // Vehicle coordinates
        vPosX: mobile ? -3.5 : -5.2,
        vPosY: 0,
        vPosZ: 1.8,
        vRotX: 0,
        vRotY: 0.2,
        vRotZ: 0,
        vScale: mobile ? 0.75 : 1.0,
      };

      // Set initial states of typography overlays
      if (stage1TextRef.current) {
        gsap.set(stage1TextRef.current, { opacity: 1, y: 0 });
      }
      if (stage2TextRef.current) {
        gsap.set(stage2TextRef.current, { opacity: 0, y: 40 });
      }
      if (stage3TextRef.current) {
        gsap.set(stage3TextRef.current, { opacity: 0, y: 30 });
      }

      const totalScroll = mobile ? 1800 : 2600;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: pinTarget,
          scrub: 1.0,
          anticipatePin: 1,
          onUpdate: (self) => {
            setScrollProgress(self.progress);

            // Sync camera and vehicle ref objects with proxy on each scrub update
            cameraStateRef.current.x = proxy.camX;
            cameraStateRef.current.y = proxy.camY;
            cameraStateRef.current.z = proxy.camZ;
            cameraStateRef.current.lx = proxy.lookX;
            cameraStateRef.current.ly = proxy.lookY;
            cameraStateRef.current.lz = proxy.lookZ;

            vehicleStateRef.current.posX = proxy.vPosX;
            vehicleStateRef.current.posY = proxy.vPosY;
            vehicleStateRef.current.posZ = proxy.vPosZ;
            vehicleStateRef.current.rotX = proxy.vRotX;
            vehicleStateRef.current.rotY = proxy.vRotY;
            vehicleStateRef.current.rotZ = proxy.vRotZ;
            vehicleStateRef.current.scale = proxy.vScale;
          },
        },
      });

      // ─────────────────────────────────────────────────────────────
      // STAGE 1 (0% -> 25%): Vehicle enters frame, camera moves closer
      // ─────────────────────────────────────────────────────────────
      tl.to(
        proxy,
        {
          vPosX: mobile ? 0 : 0.4,
          vPosZ: 0,
          vRotY: 0.5,
          camX: HERO_WAYPOINTS[1].camera[0],
          camY: HERO_WAYPOINTS[1].camera[1],
          camZ: HERO_WAYPOINTS[1].camera[2],
          lookX: HERO_WAYPOINTS[1].look[0],
          lookY: HERO_WAYPOINTS[1].look[1],
          lookZ: HERO_WAYPOINTS[1].look[2],
          ease: "power2.out",
          duration: 2.5,
        },
        0
      );

      // ─────────────────────────────────────────────────────────────
      // STAGE 2 (25% -> 55%): Full vehicle rotation, Stage 1 text exits, Stage 2 reveals
      // ─────────────────────────────────────────────────────────────
      // Fade out Stage 1
      if (stage1TextRef.current) {
        tl.to(
          stage1TextRef.current,
          {
            opacity: 0,
            y: -50,
            ease: "power1.inOut",
            duration: 1.2,
          },
          1.8
        );
      }

      // Fade in Stage 2 Engineering telemetry
      if (stage2TextRef.current) {
        tl.to(
          stage2TextRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 1.2,
          },
          2.6
        );
      }

      tl.to(
        proxy,
        {
          vPosX: mobile ? 0.2 : -0.8,
          vPosZ: -0.3,
          vRotY: 2.2,
          vRotZ: -0.04,
          camX: HERO_WAYPOINTS[2].camera[0],
          camY: HERO_WAYPOINTS[2].camera[1],
          camZ: HERO_WAYPOINTS[2].camera[2],
          lookX: HERO_WAYPOINTS[2].look[0],
          lookY: HERO_WAYPOINTS[2].look[1],
          lookZ: HERO_WAYPOINTS[2].look[2],
          ease: "none",
          duration: 3.0,
        },
        2.5
      );

      // ─────────────────────────────────────────────────────────────
      // STAGE 3 (55% -> 80%): Vehicle moves laterally, Stage 2 text exits, Stage 3 reveals
      // ─────────────────────────────────────────────────────────────
      if (stage2TextRef.current) {
        tl.to(
          stage2TextRef.current,
          {
            opacity: 0,
            y: -40,
            ease: "power1.inOut",
            duration: 1.2,
          },
          5.0
        );
      }

      if (stage3TextRef.current) {
        tl.to(
          stage3TextRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 1.2,
          },
          5.8
        );
      }

      tl.to(
        proxy,
        {
          vPosX: mobile ? 1.5 : 2.6,
          vPosZ: -1.0,
          vRotY: 3.8,
          vRotZ: 0.05,
          camX: HERO_WAYPOINTS[3].camera[0],
          camY: HERO_WAYPOINTS[3].camera[1],
          camZ: HERO_WAYPOINTS[3].camera[2],
          lookX: HERO_WAYPOINTS[3].look[0],
          lookY: HERO_WAYPOINTS[3].look[1],
          lookZ: HERO_WAYPOINTS[3].look[2],
          ease: "power1.inOut",
          duration: 2.8,
        },
        5.5
      );

      // ─────────────────────────────────────────────────────────────
      // STAGE 4 (80% -> 100%): Vehicle accelerates out toward Projects, Camera looks downward
      // ─────────────────────────────────────────────────────────────
      if (stage3TextRef.current) {
        tl.to(
          stage3TextRef.current,
          {
            opacity: 0,
            y: -30,
            ease: "power1.in",
            duration: 1.0,
          },
          7.6
        );
      }

      tl.to(
        proxy,
        {
          vPosX: mobile ? 4.0 : 6.5,
          vPosZ: -3.5,
          vRotY: 4.8,
          vScale: mobile ? 0.5 : 0.7,
          camX: HERO_WAYPOINTS[4].camera[0],
          camY: HERO_WAYPOINTS[4].camera[1],
          camZ: HERO_WAYPOINTS[4].camera[2],
          lookX: HERO_WAYPOINTS[4].look[0],
          lookY: HERO_WAYPOINTS[4].look[1],
          lookZ: HERO_WAYPOINTS[4].look[2],
          ease: "power2.in",
          duration: 2.2,
        },
        8.0
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return {
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
  };
}
