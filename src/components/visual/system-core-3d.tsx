"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

function CoreGeometry({ reduceMotion }: { reduceMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const stackOffsets = useMemo(
    () => [
      [-1.4, -0.55, 0],
      [-0.45, -0.25, 0.18],
      [0.5, 0.05, -0.08],
      [1.35, 0.35, 0.08],
    ] as const,
    [],
  );

  useFrame((_, delta) => {
    if (reduceMotion || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.16;
    groupRef.current.rotation.x = Math.sin(Date.now() * 0.0004) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.28} />
      </mesh>
      <Line
        points={[
          [-1.9, -0.75, 0],
          [-0.6, -0.35, 0.2],
          [0.6, 0.05, -0.12],
          [1.9, 0.48, 0.04],
        ]}
        color="#7dd3fc"
        lineWidth={1}
        transparent
        opacity={0.55}
      />
      {stackOffsets.map(([x, y, z]) => (
        <mesh key={`${x}-${y}-${z}`} position={[x, y, z]}>
          <boxGeometry args={[0.42, 0.18, 0.42]} />
          <meshBasicMaterial color="#bae6fd" wireframe transparent opacity={0.45} />
        </mesh>
      ))}
    </group>
  );
}

export function SystemCore3D({ className = "" }: { className?: string }) {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.8} />
        <CoreGeometry reduceMotion={reduceMotion} />
      </Canvas>
      <div className="absolute inset-0 bg-radial-[circle_at_50%_45%] from-sky-300/10 via-transparent to-transparent" />
    </div>
  );
}
