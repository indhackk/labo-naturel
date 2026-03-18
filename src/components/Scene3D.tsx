"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

/* ── Luxury Serum Bottle ── */
function SerumBottle() {
  const groupRef = useRef<THREE.Group>(null);
  const liquidRef = useRef<THREE.Mesh>(null);
  const dropletRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      // Smooth continuous rotation
      groupRef.current.rotation.y = t * 0.4;
      // Gentle tilt oscillation
      groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.05;
      groupRef.current.rotation.x = Math.cos(t * 0.3) * 0.03;
    }
    if (liquidRef.current) {
      // Liquid shimmer
      (liquidRef.current.material as THREE.MeshPhysicalMaterial).emissiveIntensity =
        0.15 + Math.sin(t * 2) * 0.08;
    }
    if (dropletRef.current) {
      // Pulsing droplet
      const s = 1 + Math.sin(t * 3) * 0.15;
      dropletRef.current.scale.set(s, s, s);
    }
  });

  // Create bottle profile using LatheGeometry for organic curves
  const bottleProfile = useMemo(() => {
    const points: THREE.Vector2[] = [];
    // Bottom rounded
    points.push(new THREE.Vector2(0, -1.2));
    points.push(new THREE.Vector2(0.2, -1.18));
    points.push(new THREE.Vector2(0.42, -1.1));
    points.push(new THREE.Vector2(0.5, -0.95));
    // Body - gentle organic curve
    points.push(new THREE.Vector2(0.52, -0.7));
    points.push(new THREE.Vector2(0.53, -0.3));
    points.push(new THREE.Vector2(0.52, 0.1));
    points.push(new THREE.Vector2(0.5, 0.4));
    points.push(new THREE.Vector2(0.46, 0.6));
    // Shoulder
    points.push(new THREE.Vector2(0.38, 0.75));
    points.push(new THREE.Vector2(0.28, 0.85));
    // Neck
    points.push(new THREE.Vector2(0.22, 0.9));
    points.push(new THREE.Vector2(0.2, 1.0));
    points.push(new THREE.Vector2(0.2, 1.05));
    points.push(new THREE.Vector2(0, 1.05));
    return points;
  }, []);

  const liquidProfile = useMemo(() => {
    const points: THREE.Vector2[] = [];
    points.push(new THREE.Vector2(0, -1.05));
    points.push(new THREE.Vector2(0.15, -1.03));
    points.push(new THREE.Vector2(0.35, -0.95));
    points.push(new THREE.Vector2(0.42, -0.8));
    points.push(new THREE.Vector2(0.44, -0.4));
    points.push(new THREE.Vector2(0.44, 0.0));
    points.push(new THREE.Vector2(0.42, 0.3));
    points.push(new THREE.Vector2(0.38, 0.5));
    points.push(new THREE.Vector2(0.3, 0.6));
    points.push(new THREE.Vector2(0.18, 0.65));
    points.push(new THREE.Vector2(0, 0.65));
    return points;
  }, []);

  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={1.2}>
      <group ref={groupRef} position={[0, 0, 0]} scale={1.1}>
        {/* ─── Glass Bottle Body ─── */}
        <mesh>
          <latheGeometry args={[bottleProfile, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={8}
            resolution={512}
            transmission={0.92}
            roughness={0.03}
            thickness={0.6}
            ior={1.52}
            chromaticAberration={0.08}
            anisotropy={0.15}
            distortion={0.08}
            distortionScale={0.15}
            color="#dcedc8"
            attenuationColor="#4a7c4a"
            attenuationDistance={2}
          />
        </mesh>

        {/* ─── Liquid Inside ─── */}
        <mesh ref={liquidRef}>
          <latheGeometry args={[liquidProfile, 64]} />
          <meshPhysicalMaterial
            color="#2d5a2d"
            transmission={0.55}
            roughness={0.05}
            metalness={0.02}
            ior={1.35}
            thickness={1.5}
            emissive="#4a7c4a"
            emissiveIntensity={0.15}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* ─── Gold Cap - Luxe Design ─── */}
        <group position={[0, 1.3, 0]}>
          {/* Main cap body */}
          <mesh>
            <cylinderGeometry args={[0.26, 0.28, 0.55, 32]} />
            <meshStandardMaterial
              color="#d4a843"
              metalness={0.95}
              roughness={0.08}
              envMapIntensity={1.5}
            />
          </mesh>
          {/* Cap top dome */}
          <mesh position={[0, 0.3, 0]}>
            <sphereGeometry args={[0.26, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial
              color="#e8c547"
              metalness={0.92}
              roughness={0.1}
              envMapIntensity={1.8}
            />
          </mesh>
          {/* Cap accent ring bottom */}
          <mesh position={[0, -0.22, 0]}>
            <torusGeometry args={[0.29, 0.02, 16, 48]} />
            <meshStandardMaterial color="#b8960a" metalness={0.98} roughness={0.05} />
          </mesh>
          {/* Cap accent ring top */}
          <mesh position={[0, 0.02, 0]}>
            <torusGeometry args={[0.27, 0.015, 16, 48]} />
            <meshStandardMaterial color="#b8960a" metalness={0.98} roughness={0.05} />
          </mesh>
        </group>

        {/* ─── Dropper Rod ─── */}
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.022, 0.018, 1.4, 12]} />
          <meshStandardMaterial
            color="#d4a843"
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>

        {/* ─── Droplet at tip ─── */}
        <mesh ref={dropletRef} position={[0, -0.2, 0]}>
          <sphereGeometry args={[0.07, 24, 24]} />
          <meshPhysicalMaterial
            color="#6b9a6b"
            transmission={0.9}
            roughness={0}
            ior={1.45}
            thickness={0.3}
            emissive="#4a7c4a"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* ─── Label / Embossed Text Area ─── */}
        <mesh position={[0, -0.1, 0.52]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.5, 0.7]} />
          <meshPhysicalMaterial
            color="#f5f0e8"
            transparent
            opacity={0.25}
            roughness={0.95}
            metalness={0}
            clearcoat={0.3}
          />
        </mesh>

        {/* ─── "V" Emboss on label ─── */}
        <mesh position={[0, -0.1, 0.525]}>
          <torusGeometry args={[0.12, 0.008, 8, 3]} />
          <meshStandardMaterial color="#d4a843" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* ─── Bottom accent ring ─── */}
        <mesh position={[0, -1.18, 0]}>
          <torusGeometry args={[0.3, 0.015, 16, 48]} />
          <meshStandardMaterial color="#d4a843" metalness={0.95} roughness={0.08} />
        </mesh>
      </group>
    </Float>
  );
}

/* ── Orbital Golden Particles ── */
function GoldenParticles({ count = 250 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, velocities, opacities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const opa = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Distribute in a sphere around the product
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 4;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6; // squish vertically
      pos[i * 3 + 2] = r * Math.cos(phi);
      vel[i * 3] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 1] = Math.random() * 0.003 + 0.001;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
      opa[i] = Math.random();
    }
    return [pos, vel, opa];
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    const posArr = meshRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      posArr[i * 3] += velocities[i * 3] + Math.sin(t * 0.5 + i) * 0.001;
      posArr[i * 3 + 1] += velocities[i * 3 + 1];
      posArr[i * 3 + 2] += velocities[i * 3 + 2] + Math.cos(t * 0.3 + i) * 0.001;

      // Reset particles that float too high
      if (posArr[i * 3 + 1] > 5) {
        posArr[i * 3 + 1] = -3;
        posArr[i * 3] = (Math.random() - 0.5) * 6;
        posArr[i * 3 + 2] = (Math.random() - 0.5) * 6;
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = t * 0.03;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#e8c547"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ── Energy Rings ── */
function EnergyRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.x = Math.PI / 2.5 + Math.sin(t * 0.4) * 0.2;
      ring1.current.rotation.z = t * 0.2;
      (ring1.current.material as THREE.MeshBasicMaterial).opacity =
        0.15 + Math.sin(t * 1.5) * 0.08;
    }
    if (ring2.current) {
      ring2.current.rotation.x = Math.PI / 2 + Math.cos(t * 0.3) * 0.3;
      ring2.current.rotation.z = -t * 0.15;
      ring2.current.rotation.y = t * 0.1;
    }
    if (ring3.current) {
      ring3.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.5 + 1) * 0.15;
      ring3.current.rotation.z = t * 0.12;
      ring3.current.rotation.y = -t * 0.08;
    }
  });

  return (
    <>
      <mesh ref={ring1}>
        <torusGeometry args={[2.5, 0.006, 16, 128]} />
        <meshBasicMaterial color="#e8c547" transparent opacity={0.2} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[3.2, 0.004, 16, 128]} />
        <meshBasicMaterial color="#6b9a6b" transparent opacity={0.12} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[1.8, 0.005, 16, 128]} />
        <meshBasicMaterial color="#d4a843" transparent opacity={0.15} />
      </mesh>
    </>
  );
}

/* ── Floating Droplets ── */
function FloatingDroplets() {
  const dropletsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!dropletsRef.current) return;
    const t = state.clock.elapsedTime;
    dropletsRef.current.children.forEach((child, i) => {
      child.position.y = Math.sin(t * (0.5 + i * 0.15) + i * 1.5) * 0.8 + (i % 2 === 0 ? 0.5 : -0.3);
      child.position.x = Math.cos(t * (0.3 + i * 0.1) + i * 2) * (1.5 + i * 0.4);
      child.position.z = Math.sin(t * (0.2 + i * 0.12) + i) * (1 + i * 0.3);
      const s = 0.8 + Math.sin(t * 2 + i) * 0.2;
      child.scale.set(s, s, s);
    });
  });

  return (
    <group ref={dropletsRef}>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.06 + i * 0.01, 16, 16]} />
          <meshPhysicalMaterial
            color={i % 2 === 0 ? "#6b9a6b" : "#d4a843"}
            transmission={0.85}
            roughness={0}
            ior={1.4}
            thickness={0.2}
            emissive={i % 2 === 0 ? "#4a7c4a" : "#b8960a"}
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Mouse-tracking Camera ── */
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Smooth mouse follow
    mouse.current.x += (state.pointer.x * 0.3 - mouse.current.x) * 0.05;
    mouse.current.y += (state.pointer.y * 0.15 - mouse.current.y) * 0.05;

    camera.position.x = mouse.current.x * 1.5;
    camera.position.y = mouse.current.y * 0.8 + 0.3;
    camera.position.z = 5.5 + Math.sin(t * 0.15) * 0.3;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ── Main Scene Export ── */
export function Scene3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0.3, 5.5], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        {/* Dramatic 3-point lighting */}
        <ambientLight intensity={0.25} />

        {/* Key light - warm gold */}
        <spotLight
          position={[4, 5, 4]}
          intensity={1.5}
          penumbra={0.8}
          castShadow
          color="#fff5e0"
          shadow-mapSize={[1024, 1024]}
        />

        {/* Fill light - sage green */}
        <spotLight
          position={[-4, 2, 3]}
          intensity={0.6}
          color="#8fb08f"
          penumbra={1}
        />

        {/* Rim light - gold accent from behind */}
        <pointLight
          position={[0, 2, -4]}
          intensity={1.2}
          color="#e8c547"
          distance={10}
        />

        {/* Bottom uplighting */}
        <pointLight
          position={[0, -3, 2]}
          intensity={0.3}
          color="#4a7c4a"
        />

        <CameraRig />
        <SerumBottle />
        <GoldenParticles />
        <EnergyRings />
        <FloatingDroplets />

        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.35}
          scale={10}
          blur={2.5}
          far={5}
          color="#0F3A0F"
        />

        <Environment preset="studio" environmentIntensity={0.6} />
      </Canvas>
    </div>
  );
}
