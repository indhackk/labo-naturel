"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

/* ── Luxury Serum Bottle ── */
function SerumBottle() {
  const groupRef = useRef<THREE.Group>(null);
  const liquidRef = useRef<THREE.Mesh>(null);
  const dropletRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.35;
      groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.04;
      groupRef.current.rotation.x = Math.cos(t * 0.3) * 0.02;
    }
    if (liquidRef.current) {
      const mat = liquidRef.current.material as THREE.MeshPhysicalMaterial;
      mat.emissiveIntensity = 0.2 + Math.sin(t * 2) * 0.1;
    }
    if (dropletRef.current) {
      const s = 1 + Math.sin(t * 3) * 0.15;
      dropletRef.current.scale.set(s, s, s);
    }
  });

  const bottleProfile = useMemo(() => {
    const pts: THREE.Vector2[] = [];
    pts.push(new THREE.Vector2(0, -1.2));
    pts.push(new THREE.Vector2(0.2, -1.18));
    pts.push(new THREE.Vector2(0.42, -1.1));
    pts.push(new THREE.Vector2(0.5, -0.95));
    pts.push(new THREE.Vector2(0.52, -0.7));
    pts.push(new THREE.Vector2(0.53, -0.3));
    pts.push(new THREE.Vector2(0.52, 0.1));
    pts.push(new THREE.Vector2(0.5, 0.4));
    pts.push(new THREE.Vector2(0.46, 0.6));
    pts.push(new THREE.Vector2(0.38, 0.75));
    pts.push(new THREE.Vector2(0.28, 0.85));
    pts.push(new THREE.Vector2(0.22, 0.9));
    pts.push(new THREE.Vector2(0.2, 1.0));
    pts.push(new THREE.Vector2(0.2, 1.05));
    pts.push(new THREE.Vector2(0, 1.05));
    return pts;
  }, []);

  const liquidProfile = useMemo(() => {
    const pts: THREE.Vector2[] = [];
    pts.push(new THREE.Vector2(0, -1.05));
    pts.push(new THREE.Vector2(0.15, -1.03));
    pts.push(new THREE.Vector2(0.35, -0.95));
    pts.push(new THREE.Vector2(0.42, -0.8));
    pts.push(new THREE.Vector2(0.44, -0.4));
    pts.push(new THREE.Vector2(0.44, 0.0));
    pts.push(new THREE.Vector2(0.42, 0.3));
    pts.push(new THREE.Vector2(0.38, 0.5));
    pts.push(new THREE.Vector2(0.3, 0.6));
    pts.push(new THREE.Vector2(0.18, 0.65));
    pts.push(new THREE.Vector2(0, 0.65));
    return pts;
  }, []);

  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={1.0}>
      <group ref={groupRef} position={[0, 0, 0]} scale={1.15}>
        {/* Glass Bottle — using MeshPhysicalMaterial (lighter than Transmission) */}
        <mesh>
          <latheGeometry args={[bottleProfile, 48]} />
          <meshPhysicalMaterial
            color="#c8e6c9"
            transmission={0.85}
            roughness={0.05}
            thickness={1.2}
            ior={1.5}
            transparent
            opacity={0.6}
            envMapIntensity={1.5}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Liquid */}
        <mesh ref={liquidRef}>
          <latheGeometry args={[liquidProfile, 48]} />
          <meshPhysicalMaterial
            color="#2d5a2d"
            roughness={0.1}
            metalness={0.05}
            transparent
            opacity={0.8}
            emissive="#3d7a3d"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Gold Cap */}
        <group position={[0, 1.3, 0]}>
          <mesh>
            <cylinderGeometry args={[0.26, 0.28, 0.55, 32]} />
            <meshStandardMaterial color="#d4a843" metalness={0.95} roughness={0.08} envMapIntensity={2} />
          </mesh>
          <mesh position={[0, 0.3, 0]}>
            <sphereGeometry args={[0.26, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#e8c547" metalness={0.92} roughness={0.1} envMapIntensity={2} />
          </mesh>
          <mesh position={[0, -0.22, 0]}>
            <torusGeometry args={[0.29, 0.02, 16, 48]} />
            <meshStandardMaterial color="#b8960a" metalness={0.98} roughness={0.05} />
          </mesh>
          <mesh position={[0, 0.02, 0]}>
            <torusGeometry args={[0.27, 0.015, 16, 48]} />
            <meshStandardMaterial color="#b8960a" metalness={0.98} roughness={0.05} />
          </mesh>
        </group>

        {/* Dropper */}
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.022, 0.018, 1.4, 12]} />
          <meshStandardMaterial color="#d4a843" metalness={0.85} roughness={0.15} />
        </mesh>

        {/* Droplet */}
        <mesh ref={dropletRef} position={[0, -0.2, 0]}>
          <sphereGeometry args={[0.07, 24, 24]} />
          <meshPhysicalMaterial
            color="#6b9a6b"
            transmission={0.8}
            roughness={0}
            ior={1.45}
            thickness={0.3}
            emissive="#4a7c4a"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Label */}
        <mesh position={[0, -0.1, 0.52]}>
          <planeGeometry args={[0.5, 0.7]} />
          <meshPhysicalMaterial color="#f5f0e8" transparent opacity={0.2} roughness={0.95} />
        </mesh>

        {/* Bottom ring */}
        <mesh position={[0, -1.18, 0]}>
          <torusGeometry args={[0.3, 0.015, 16, 48]} />
          <meshStandardMaterial color="#d4a843" metalness={0.95} roughness={0.08} />
        </mesh>
      </group>
    </Float>
  );
}

/* ── Particles ── */
function GoldenParticles({ count = 200 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 3.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = (r * Math.sin(phi) * Math.sin(theta)) * 0.6;
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#e8c547"
        transparent
        opacity={0.6}
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

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.x = Math.PI / 2.5 + Math.sin(t * 0.4) * 0.2;
      ring1.current.rotation.z = t * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.x = Math.PI / 2 + Math.cos(t * 0.3) * 0.3;
      ring2.current.rotation.z = -t * 0.15;
    }
  });

  return (
    <>
      <mesh ref={ring1}>
        <torusGeometry args={[2.5, 0.005, 16, 100]} />
        <meshBasicMaterial color="#e8c547" transparent opacity={0.18} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[3.0, 0.004, 16, 100]} />
        <meshBasicMaterial color="#6b9a6b" transparent opacity={0.1} />
      </mesh>
    </>
  );
}

/* ── Floating Droplets ── */
function FloatingDroplets() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.children.forEach((child, i) => {
      child.position.y = Math.sin(t * (0.5 + i * 0.15) + i * 1.5) * 0.8;
      child.position.x = Math.cos(t * (0.3 + i * 0.1) + i * 2) * (1.5 + i * 0.3);
      child.position.z = Math.sin(t * (0.2 + i * 0.12) + i) * (1 + i * 0.25);
    });
  });

  return (
    <group ref={ref}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.05 + i * 0.008, 16, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#6b9a6b" : "#d4a843"}
            emissive={i % 2 === 0 ? "#4a7c4a" : "#b8960a"}
            emissiveIntensity={0.6}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Camera Rig ── */
function CameraRig() {
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    mouse.current.x += (state.pointer.x * 0.3 - mouse.current.x) * 0.05;
    mouse.current.y += (state.pointer.y * 0.15 - mouse.current.y) * 0.05;
    state.camera.position.x = mouse.current.x * 1.2;
    state.camera.position.y = mouse.current.y * 0.6 + 0.3;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ── Main Export ── */
export function Scene3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0.3, 5.5], fov: 38 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "default",
          failIfMajorPerformanceCaveat: false,
        }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
        frameloop="always"
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.2;
        }}
      >
        <color attach="background" args={["#0d1f0d"]} />
        <fog attach="fog" args={["#0d1f0d", 8, 18]} />

        <ambientLight intensity={0.4} />
        <spotLight position={[4, 5, 4]} intensity={1.8} penumbra={0.8} color="#fff5e0" />
        <spotLight position={[-4, 2, 3]} intensity={0.7} color="#8fb08f" penumbra={1} />
        <pointLight position={[0, 2, -4]} intensity={1.5} color="#e8c547" distance={10} />
        <pointLight position={[0, -3, 2]} intensity={0.4} color="#4a7c4a" />

        <CameraRig />
        <SerumBottle />
        <GoldenParticles />
        <EnergyRings />
        <FloatingDroplets />

        <ContactShadows position={[0, -2, 0]} opacity={0.3} scale={8} blur={2.5} far={5} color="#0a150a" />
        <Environment preset="studio" environmentIntensity={0.7} />
      </Canvas>
    </div>
  );
}
