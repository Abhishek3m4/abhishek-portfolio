"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import HeroCamera, { CameraProxyState } from "./HeroCamera";
import HeroVehicle, { VehicleProxyState } from "./HeroVehicle";

interface Hero3DSceneProps {
  cameraStateRef: React.MutableRefObject<CameraProxyState>;
  vehicleStateRef: React.MutableRefObject<VehicleProxyState>;
  modelPath?: string;
  isMobile?: boolean;
}

export default function Hero3DScene({
  cameraStateRef,
  vehicleStateRef,
  modelPath = "/models/hero-vehicle.glb",
  isMobile = false,
}: Hero3DSceneProps) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.6,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        camera={{
          fov: isMobile ? 55 : 48,
          near: 0.1,
          far: 100,
          position: [0, 2.0, 8.5],
        }}
        className="w-full h-full"
      >
        {/* Scene Ambient & Depth Fog */}
        <color attach="background" args={["#0a0d12"]} />
        <fog attach="fog" args={["#0a0d12", 6, 22]} />

        {/* Cinematic Multi-Point Lighting */}
        {/* 1. Ambient baseline */}
        <ambientLight color="#ffffff" intensity={0.9} />

        {/* 2. Key directional light with subtle cool specular */}
        <directionalLight
          position={[6, 9, 6]}
          intensity={2.8}
          color="#f1f5f9"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={25}
          shadow-bias={-0.0001}
        />

        {/* 3. Soft fill from opposite side */}
        <directionalLight position={[-6, 3, -3]} intensity={1.2} color="#94a3b8" />

        {/* 4. Cyan Rim light from behind (Dieg0arc edge silhouette pattern) */}
        <directionalLight position={[0, 4, -8]} intensity={3.6} color="#00f0ff" />

        {/* 5. Subtle amber warm bounce light for engineering warmth */}
        <directionalLight position={[3, -2, 2]} intensity={0.8} color="#f59e0b" />

        {/* Technical CAD Ground Floor Grid */}
        <group position={[0, -0.01, 0]}>
          <gridHelper args={[40, 40, "#242e3d", "#10151d"]} />
          {/* Subtle ground reflection receiver */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial
              color="#0a0d12"
              roughness={0.8}
              metalness={0.2}
              transparent
              opacity={0.9}
            />
          </mesh>
        </group>

        {/* Camera and Vehicle */}
        <Suspense fallback={null}>
          <HeroCamera stateRef={cameraStateRef} />
          <HeroVehicle
            stateRef={vehicleStateRef}
            modelPath={modelPath}
            isMobile={isMobile}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
