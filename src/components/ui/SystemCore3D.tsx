"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

function CoreMesh({ reduceMotion }: { reduceMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const positions = new Float32Array(240 * 3);

    for (let index = 0; index < positions.length; index += 3) {
      const radius = 1.35 + Math.random() * 1.65;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[index] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[index + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame((_, delta) => {
    if (reduceMotion || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.045;
    groupRef.current.rotation.x += delta * 0.015;
  });

  return (
    <group ref={groupRef}>
      <Float speed={0.45} rotationIntensity={0.14} floatIntensity={0.22}>
        <mesh>
          <icosahedronGeometry args={[1.8, 2]} />
          <meshBasicMaterial
            color="#64748b"
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>
      </Float>
      <Points positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#7dd3fc"
          size={0.018}
          sizeAttenuation
          depthWrite={false}
          opacity={0.38}
        />
      </Points>
    </group>
  );
}

export function SystemCore3D({ className = "" }: { className?: string }) {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-30 ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
      >
        <CoreMesh reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}
