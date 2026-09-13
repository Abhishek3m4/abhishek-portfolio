"use client";

import React, { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export interface CameraWaypoint {
  camera: [number, number, number];
  look: [number, number, number];
}

/**
 * 5 Purposeful Camera States (Grantmantek architecture pattern)
 * Journey: Wide establishing shot -> Closer tracking -> Dynamic 3/4 turn -> Transition width -> Projects exit
 */
export const HERO_WAYPOINTS: CameraWaypoint[] = [
  // Waypoint 0 (0% scroll): Wide establishing shot, vehicle enters from afar
  { camera: [0, 1.8, 8.5], look: [0, 0, 0] },
  // Waypoint 1 (25% scroll): Closer lateral tracking angle, observing aerodynamic profile
  { camera: [2.8, 1.2, 5.2], look: [0, 0.1, 0] },
  // Waypoint 2 (50% scroll): Dynamic 3/4 elevated perspective during full rotation
  { camera: [-2.4, 1.7, 4.4], look: [0.2, 0.1, 0] },
  // Waypoint 3 (75% scroll): Wide cinematic path as vehicle translates toward the right
  { camera: [3.4, 2.2, 6.6], look: [0.6, 0, 0] },
  // Waypoint 4 (100% scroll): Camera pulls downward to lead directly into the Projects rail
  { camera: [0, 1.0, 8.0], look: [0, -1.2, 0] },
];

export interface CameraProxyState {
  x: number;
  y: number;
  z: number;
  lx: number;
  ly: number;
  lz: number;
}

interface HeroCameraProps {
  stateRef: React.MutableRefObject<CameraProxyState>;
}

export default function HeroCamera({ stateRef }: HeroCameraProps) {
  const { camera } = useThree();
  const lookTargetRef = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    if (!stateRef.current) return;
    const s = stateRef.current;
    camera.position.set(s.x, s.y, s.z);
    lookTargetRef.current.set(s.lx, s.ly, s.lz);
    camera.lookAt(lookTargetRef.current);
  });

  return null;
}
