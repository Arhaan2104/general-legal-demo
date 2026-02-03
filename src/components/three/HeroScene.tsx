import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from "@react-three/drei";
import * as THREE from "three";
import { useSmoothMousePosition } from "../../hooks/useMousePosition";

function FloatingShapes({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const sphere1Ref = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Subtle rotation based on mouse position
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.3,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.y * 0.2,
        0.05
      );
    }

    // Individual element rotations
    if (sphere1Ref.current) {
      sphere1Ref.current.rotation.y += 0.003;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.005;
      torusRef.current.rotation.y += 0.003;
    }
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.002;
      boxRef.current.rotation.z += 0.003;
    }
  });

  const goldColor = "#c4ae86";
  const lightGold = "#d6c6a7";

  return (
    <group ref={groupRef}>
      {/* Main sphere - distorted */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={sphere1Ref} args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color={goldColor}
            roughness={0.2}
            metalness={0.8}
            distort={0.3}
            speed={2}
          />
        </Sphere>
      </Float>

      {/* Torus ring */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <Torus
          ref={torusRef}
          args={[2, 0.08, 32, 100]}
          position={[0, 0, 0]}
          rotation={[Math.PI / 3, 0, 0]}
        >
          <meshStandardMaterial
            color={lightGold}
            roughness={0.3}
            metalness={0.9}
          />
        </Torus>
      </Float>

      {/* Small floating spheres */}
      <Float speed={3} rotationIntensity={0.2} floatIntensity={1.5}>
        <Sphere args={[0.15, 32, 32]} position={[2, 1, -1]}>
          <meshStandardMaterial
            color={goldColor}
            roughness={0.1}
            metalness={1}
          />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={1.2}>
        <Sphere args={[0.1, 32, 32]} position={[-2, -0.5, 0.5]}>
          <meshStandardMaterial
            color={lightGold}
            roughness={0.1}
            metalness={1}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
        <Sphere args={[0.08, 32, 32]} position={[1.5, -1, 1]}>
          <meshStandardMaterial
            color={goldColor}
            roughness={0.1}
            metalness={1}
          />
        </Sphere>
      </Float>

      {/* Subtle box element */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.8}>
        <Box ref={boxRef} args={[0.4, 0.4, 0.4]} position={[-1.8, 0.8, -0.5]}>
          <meshStandardMaterial
            color={lightGold}
            roughness={0.2}
            metalness={0.9}
            wireframe
          />
        </Box>
      </Float>

      {/* Additional floating cube - top right */}
      <Float speed={2.2} rotationIntensity={0.3} floatIntensity={1}>
        <Box args={[0.3, 0.3, 0.3]} position={[2.2, 1.5, 0.5]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial
            color={goldColor}
            roughness={0.2}
            metalness={0.9}
            wireframe
          />
        </Box>
      </Float>

      {/* Additional floating cube - bottom */}
      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.9}>
        <Box args={[0.25, 0.25, 0.25]} position={[0.8, -1.5, -0.3]} rotation={[0.3, 0.8, 0.2]}>
          <meshStandardMaterial
            color={lightGold}
            roughness={0.2}
            metalness={0.9}
            wireframe
          />
        </Box>
      </Float>
    </group>
  );
}

function Scene() {
  const mouse = useSmoothMousePosition(0.05);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#c4ae86" />

      {/* Main content */}
      <FloatingShapes mouse={mouse} />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
