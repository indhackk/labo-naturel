"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function SerumBottle() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={groupRef} position={[0, -0.2, 0]}>
        {/* Bottle body - glass */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.45, 0.5, 2.2, 32, 1, false]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            resolution={512}
            transmission={0.95}
            roughness={0.05}
            thickness={0.5}
            ior={1.5}
            chromaticAberration={0.06}
            anisotropy={0.2}
            distortion={0.1}
            distortionScale={0.2}
            color="#e8f5e9"
          />
        </mesh>

        {/* Liquid inside */}
        <mesh position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.38, 0.43, 1.6, 32]} />
          <meshPhysicalMaterial
            color="#4a7c4a"
            transmission={0.6}
            roughness={0.1}
            metalness={0.05}
            ior={1.33}
            thickness={1}
          />
        </mesh>

        {/* Gold cap */}
        <mesh position={[0, 1.35, 0]}>
          <cylinderGeometry args={[0.28, 0.3, 0.5, 32]} />
          <meshStandardMaterial color="#ccad33" metalness={0.9} roughness={0.15} />
        </mesh>

        {/* Cap ring */}
        <mesh position={[0, 1.05, 0]}>
          <torusGeometry args={[0.35, 0.04, 16, 32]} />
          <meshStandardMaterial color="#b8960a" metalness={0.95} roughness={0.1} />
        </mesh>

        {/* Dropper stick */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 1.2, 8]} />
          <meshStandardMaterial color="#ccad33" metalness={0.7} roughness={0.2} />
        </mesh>

        {/* Droplet at the tip */}
        <mesh position={[0, -0.05, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshPhysicalMaterial
            color="#6b9a6b"
            transmission={0.8}
            roughness={0}
            ior={1.4}
            thickness={0.5}
          />
        </mesh>

        {/* Label area (subtle) */}
        <mesh position={[0, 0.1, 0.46]}>
          <planeGeometry args={[0.6, 0.8]} />
          <meshStandardMaterial
            color="#fffdf7"
            transparent
            opacity={0.35}
            roughness={0.9}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Particles({ count = 150 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      sz[i] = Math.random() * 0.03 + 0.01;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#ccad33"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function GlowRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.5) * 0.2;
      ring1.current.rotation.z = t * 0.15;
    }
    if (ring2.current) {
      ring2.current.rotation.x = Math.PI / 2 + Math.cos(t * 0.3) * 0.3;
      ring2.current.rotation.z = -t * 0.1;
    }
  });

  return (
    <>
      <mesh ref={ring1} position={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.008, 16, 100]} />
        <meshBasicMaterial color="#ccad33" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring2} position={[0, 0, 0]}>
        <torusGeometry args={[2.8, 0.005, 16, 100]} />
        <meshBasicMaterial color="#6b9a6b" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

export function Scene3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <spotLight position={[5, 5, 5]} intensity={1} penumbra={1} castShadow />
        <spotLight position={[-5, 3, 5]} intensity={0.5} color="#ccad33" penumbra={1} />
        <pointLight position={[0, -3, 3]} intensity={0.3} color="#4a7c4a" />

        <SerumBottle />
        <Particles />
        <GlowRings />

        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.4}
          scale={8}
          blur={2.5}
          far={4}
          color="#1E4A1E"
        />

        <Environment preset="studio" environmentIntensity={0.5} />
      </Canvas>
    </div>
  );
}
