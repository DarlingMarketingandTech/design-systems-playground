"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Points, PointMaterial } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import {
  type RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type * as THREE from "three";

function useFinePointer() {
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = () => setIsFine(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return isFine;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function CoreMesh({
  reduceMotion,
  targetRef,
  cursorActive,
}: {
  reduceMotion: boolean;
  targetRef?: RefObject<HTMLElement | null>;
  cursorActive: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const pulseARef = useRef<THREE.Mesh>(null);
  const pulseBRef = useRef<THREE.Mesh>(null);
  const cursorTargetRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const scrollTargetRef = useRef(0);
  const scrollRef = useRef(0);

  const orbitRings = useMemo(() => {
    const makeRing = (radius: number, segments: number) => {
      const points: Array<[number, number, number]> = [];
      for (let index = 0; index <= segments; index += 1) {
        const t = (index / segments) * Math.PI * 2;
        points.push([Math.cos(t) * radius, Math.sin(t) * radius, 0]);
      }
      return points;
    };

    return [
      makeRing(2.22, 180),
      makeRing(1.82, 150),
      makeRing(1.45, 120),
    ] as const;
  }, []);

  const points = useMemo(() => {
    const positions = new Float32Array(280 * 3);

    for (let index = 0; index < positions.length; index += 3) {
      const radius = 1.25 + Math.random() * 1.95;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[index] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[index + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const target = targetRef?.current;
      const rect = target?.getBoundingClientRect();
      const bounds = rect ?? {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      cursorTargetRef.current.x = clamp(x * 2 - 1, -1, 1);
      cursorTargetRef.current.y = clamp(y * 2 - 1, -1, 1);
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollTargetRef.current = max > 0 ? clamp(window.scrollY / max, 0, 1) : 0;
    };

    if (cursorActive) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (cursorActive) {
        window.removeEventListener("pointermove", onPointerMove);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, [cursorActive, targetRef]);

  useFrame((_, delta) => {
    if (reduceMotion || !groupRef.current) return;

    const cursorTarget = cursorTargetRef.current;
    cursorRef.current.x += (cursorTarget.x - cursorRef.current.x) * 0.085;
    cursorRef.current.y += (cursorTarget.y - cursorRef.current.y) * 0.085;

    scrollRef.current +=
      (scrollTargetRef.current - scrollRef.current) * 0.06;

    const cursorX = cursorRef.current.x;
    const cursorY = cursorRef.current.y;
    const scroll = scrollRef.current;

    groupRef.current.rotation.y += delta * 0.07 + cursorX * 0.12;
    groupRef.current.rotation.x += delta * 0.03 + -cursorY * 0.08;
    groupRef.current.rotation.z = Math.sin(scroll * Math.PI * 2) * 0.06;

    const t = performance.now() * 0.00055 + scroll * 2.4;
    if (pulseARef.current) {
      pulseARef.current.position.set(
        Math.cos(t) * 2.22,
        Math.sin(t) * 2.22,
        Math.sin(t * 0.8) * 0.18,
      );
    }
    if (pulseBRef.current) {
      const t2 = t * 0.9 + 2.2;
      pulseBRef.current.position.set(
        Math.cos(t2) * 1.82,
        Math.sin(t2) * 1.82,
        Math.cos(t2 * 0.7) * 0.16,
      );
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.7, 2]} />
        <meshBasicMaterial
          color="#94a3b8"
          wireframe
          transparent
          opacity={0.24}
        />
      </mesh>

      <group rotation={[Math.PI / 4.2, 0, 0]}>
        <Line
          points={orbitRings[0]}
          color="#7dd3fc"
          lineWidth={1}
          transparent
          opacity={0.34}
        />
      </group>
      <group rotation={[0, Math.PI / 3.1, Math.PI / 2.8]}>
        <Line
          points={orbitRings[1]}
          color="#bae6fd"
          lineWidth={1}
          transparent
          opacity={0.22}
        />
      </group>
      <group rotation={[Math.PI / 1.9, Math.PI / 6.2, 0]}>
        <Line
          points={orbitRings[2]}
          color="#38bdf8"
          lineWidth={1}
          transparent
          opacity={0.18}
        />
      </group>

      <mesh ref={pulseARef}>
        <sphereGeometry args={[0.045, 14, 14]} />
        <meshBasicMaterial color="#e0f2fe" transparent opacity={0.78} />
      </mesh>
      <mesh ref={pulseBRef}>
        <sphereGeometry args={[0.038, 14, 14]} />
        <meshBasicMaterial color="#7dd3fc" transparent opacity={0.62} />
      </mesh>

      <Points positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#7dd3fc"
          size={0.018}
          sizeAttenuation
          depthWrite={false}
          opacity={0.42}
        />
      </Points>
    </group>
  );
}

export function SystemCore3D({
  className = "",
  targetRef,
}: {
  className?: string;
  targetRef?: RefObject<HTMLElement | null>;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const finePointer = useFinePointer();
  const cursorActive = finePointer && !reduceMotion;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-30 ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        dpr={[1, 1.5]}
        frameloop={reduceMotion ? "demand" : "always"}
        gl={{ antialias: true, alpha: true }}
      >
        <CoreMesh
          reduceMotion={reduceMotion}
          targetRef={targetRef}
          cursorActive={cursorActive}
        />
      </Canvas>
      <div className="absolute inset-0 bg-radial-[circle_at_54%_46%] from-sky-300/10 via-transparent to-transparent" />
    </div>
  );
}
