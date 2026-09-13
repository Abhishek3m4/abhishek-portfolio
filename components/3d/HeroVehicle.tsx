"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export interface VehicleProxyState {
  posX: number;
  posY: number;
  posZ: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  scale: number;
}

interface HeroVehicleProps {
  stateRef: React.MutableRefObject<VehicleProxyState>;
  modelPath?: string;
  isMobile?: boolean;
}

/**
 * Procedural Cyber-Physical Autonomous Vehicle Model
 * Used as high-performance, precision placeholder matching Abhishek's
 * V2V Autonomous Vehicle Control and Embedded Systems engineering focus.
 */
function ProceduralVehicle({ scaleMultiplier = 1 }: { scaleMultiplier?: number }) {
  // Chassis & Aerodynamics
  const chassisMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x111620,
        metalness: 0.85,
        roughness: 0.22,
      }),
    []
  );

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: 0x050810,
        metalness: 0.9,
        roughness: 0.1,
        transmission: 0.6,
        transparent: true,
        opacity: 0.85,
      }),
    []
  );

  const accentCyanMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x00f0ff,
        emissive: 0x00e1ff,
        emissiveIntensity: 2.2,
        roughness: 0.2,
      }),
    []
  );

  const accentEmeraldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x10b981,
        emissive: 0x10b981,
        emissiveIntensity: 1.8,
        roughness: 0.2,
      }),
    []
  );

  const wheelMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x1e2430,
        metalness: 0.6,
        roughness: 0.4,
      }),
    []
  );

  const rimMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        metalness: 0.9,
        roughness: 0.15,
      }),
    []
  );

  return (
    <group scale={scaleMultiplier}>
      {/* Lower Main Chassis */}
      <mesh material={chassisMaterial} position={[0, 0.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.45, 4.2]} />
      </mesh>

      {/* Aerodynamic Tapered Upper Cabin */}
      <mesh material={glassMaterial} position={[0, 0.72, -0.1]} castShadow>
        <boxGeometry args={[1.35, 0.42, 2.2]} />
      </mesh>

      {/* Front Nose Wedge */}
      <mesh material={chassisMaterial} position={[0, 0.3, 2.2]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[1.65, 0.32, 0.7]} />
      </mesh>

      {/* Cyber Headlight Strips */}
      <mesh material={accentCyanMaterial} position={[0.65, 0.35, 2.48]}>
        <boxGeometry args={[0.35, 0.08, 0.05]} />
      </mesh>
      <mesh material={accentCyanMaterial} position={[-0.65, 0.35, 2.48]}>
        <boxGeometry args={[0.35, 0.08, 0.05]} />
      </mesh>

      {/* V2V Sensor Pod / LiDAR Dome */}
      <group position={[0, 1.0, 0.1]}>
        <mesh material={chassisMaterial}>
          <cylinderGeometry args={[0.22, 0.26, 0.12, 24]} />
        </mesh>
        <mesh material={accentEmeraldMaterial} position={[0, 0.07, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.06, 24]} />
        </mesh>
      </group>

      {/* Rear Brake / Telemetry Light Bar */}
      <mesh material={accentEmeraldMaterial} position={[0, 0.42, -2.12]}>
        <boxGeometry args={[1.6, 0.08, 0.05]} />
      </mesh>

      {/* Side Underglow Aero Slits */}
      <mesh material={accentCyanMaterial} position={[0.92, 0.22, 0]}>
        <boxGeometry args={[0.04, 0.04, 2.6]} />
      </mesh>
      <mesh material={accentCyanMaterial} position={[-0.92, 0.22, 0]}>
        <boxGeometry args={[0.04, 0.04, 2.6]} />
      </mesh>

      {/* 4 Wheels */}
      {/* Front Left */}
      <group position={[1.02, 0.28, 1.35]}>
        <mesh material={wheelMaterial} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.34, 0.34, 0.24, 28]} />
        </mesh>
        <mesh material={rimMaterial} position={[0.04, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
        </mesh>
      </group>

      {/* Front Right */}
      <group position={[-1.02, 0.28, 1.35]}>
        <mesh material={wheelMaterial} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.34, 0.34, 0.24, 28]} />
        </mesh>
        <mesh material={rimMaterial} position={[-0.04, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
        </mesh>
      </group>

      {/* Rear Left */}
      <group position={[1.02, 0.28, -1.35]}>
        <mesh material={wheelMaterial} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.26, 28]} />
        </mesh>
        <mesh material={rimMaterial} position={[0.04, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
        </mesh>
      </group>

      {/* Rear Right */}
      <group position={[-1.02, 0.28, -1.35]}>
        <mesh material={wheelMaterial} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.26, 28]} />
        </mesh>
        <mesh material={rimMaterial} position={[-0.04, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
        </mesh>
      </group>
    </group>
  );
}

export default function HeroVehicle({
  stateRef,
  modelPath = "/models/hero-vehicle.glb",
  isMobile = false,
}: HeroVehicleProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [loadedScene, setLoadedScene] = useState<THREE.Group | null>(null);
  const [modelNormalizedScale, setModelNormalizedScale] = useState<number>(1);

  // Attempt to load user-supplied GLTF/GLB if present
  useEffect(() => {
    let active = true;
    const loader = new GLTFLoader();

    loader.load(
      modelPath,
      (gltf) => {
        if (!active) return;
        const root = gltf.scene;

        // Box3 Centering and Size Calculation (Dieg0arc reference pattern)
        const box = new THREE.Box3().setFromObject(root);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        // Center the geometry origin
        root.position.sub(center);

        // Normalize target size to ~3.8 units
        const scaleFactor = maxDim > 0 ? 3.8 / maxDim : 1;
        setModelNormalizedScale(scaleFactor);

        // Enhance materials (pappukr-codes reference pattern)
        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const m = child as THREE.Mesh;
            m.castShadow = true;
            m.receiveShadow = true;
            if (m.material) {
              const mat = m.material as THREE.MeshStandardMaterial;
              if (mat.metalness !== undefined) mat.metalness = Math.min(mat.metalness + 0.1, 0.95);
              if (mat.roughness !== undefined) mat.roughness = Math.max(mat.roughness - 0.05, 0.2);
            }
          }
        });

        setLoadedScene(root);
      },
      undefined,
      () => {
        // Fallback gracefully to procedural vehicle without console errors
        if (active) {
          setLoadedScene(null);
        }
      }
    );

    return () => {
      active = false;
    };
  }, [modelPath]);

  // Frame tick: update translation, rotation, and responsive scale without React re-render
  useFrame(() => {
    if (!groupRef.current || !stateRef.current) return;
    const s = stateRef.current;

    const baseScale = isMobile ? 0.72 : 1.0;
    const targetScale = s.scale * baseScale;

    groupRef.current.position.set(s.posX, s.posY, s.posZ);
    groupRef.current.rotation.set(s.rotX, s.rotY, s.rotZ);
    groupRef.current.scale.set(targetScale, targetScale, targetScale);
  });

  return (
    <group ref={groupRef}>
      {loadedScene ? (
        <primitive object={loadedScene} scale={modelNormalizedScale} />
      ) : (
        <ProceduralVehicle scaleMultiplier={0.9} />
      )}
    </group>
  );
}
