import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Cylinder, Box, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useSmoothMousePosition } from "../../hooks/useMousePosition";

function FloatingShapes({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const contractRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (groupRef.current) {
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

    if (contractRef.current) {
      contractRef.current.rotation.y += 0.002;
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
  const sealGold = "#b5943f";
  const darkGold = "#a89060";

  return (
    <group ref={groupRef}>
      {/* Central contract stack */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group ref={contractRef} rotation={[0.15, -0.3, 0.05]}>

          {/* Back document (stacked effect) */}
          <RoundedBox
            args={[1.6, 2.2, 0.03]}
            radius={0.03}
            smoothness={4}
            position={[0.08, -0.08, -0.05]}
          >
            <meshStandardMaterial
              color={darkGold}
              roughness={0.4}
              metalness={0.5}
            />
          </RoundedBox>

          {/* Main document body */}
          <RoundedBox
            args={[1.6, 2.2, 0.04]}
            radius={0.03}
            smoothness={4}
            position={[0, 0, 0]}
          >
            <meshStandardMaterial
              color={lightGold}
              roughness={0.35}
              metalness={0.6}
            />
          </RoundedBox>

          {/* === FRONT FACE (z=0.025) === */}
          {/* Title line */}
          <Box args={[0.8, 0.035, 0.005]} position={[0, 0.8, 0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          {/* Divider under title */}
          <Box args={[1.2, 0.008, 0.005]} position={[0, 0.7, 0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          {/* Body text lines */}
          <Box args={[1.0, 0.025, 0.005]} position={[0, 0.55, 0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[1.1, 0.025, 0.005]} position={[-0.05, 0.4, 0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[0.9, 0.025, 0.005]} position={[0.05, 0.25, 0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[1.05, 0.025, 0.005]} position={[0, 0.1, 0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[0.6, 0.025, 0.005]} position={[-0.25, -0.05, 0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          {/* Clause divider */}
          <Box args={[1.2, 0.008, 0.005]} position={[0, -0.2, 0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          {/* Second paragraph */}
          <Box args={[1.0, 0.025, 0.005]} position={[0.02, -0.35, 0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[0.85, 0.025, 0.005]} position={[-0.1, -0.5, 0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>

          {/* Signature line */}
          <Box args={[0.7, 0.015, 0.005]} position={[-0.2, -0.85, 0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>

          {/* Wax seal - bottom right (front) */}
          <group position={[0.45, -0.75, 0.04]}>
            <Cylinder args={[0.2, 0.2, 0.06, 32]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial
                color={sealGold}
                roughness={0.15}
                metalness={0.95}
              />
            </Cylinder>
            <Torus args={[0.18, 0.025, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial
                color={goldColor}
                roughness={0.2}
                metalness={0.9}
              />
            </Torus>
            <Sphere args={[0.06, 16, 16]} position={[0, 0, 0.04]}>
              <meshStandardMaterial
                color={goldColor}
                roughness={0.1}
                metalness={1}
              />
            </Sphere>
          </group>

          {/* === BACK FACE (z=-0.025) === */}
          {/* Back title */}
          <Box args={[0.7, 0.03, 0.005]} position={[0, 0.8, -0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          {/* Back divider */}
          <Box args={[1.1, 0.008, 0.005]} position={[0, 0.7, -0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          {/* Back text lines */}
          <Box args={[1.0, 0.025, 0.005]} position={[0.03, 0.55, -0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[0.95, 0.025, 0.005]} position={[-0.05, 0.4, -0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[1.1, 0.025, 0.005]} position={[0, 0.25, -0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[0.7, 0.025, 0.005]} position={[-0.2, 0.1, -0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          {/* Back clause divider */}
          <Box args={[1.1, 0.008, 0.005]} position={[0, -0.05, -0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[1.0, 0.025, 0.005]} position={[0, -0.2, -0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[0.9, 0.025, 0.005]} position={[0.05, -0.35, -0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[1.05, 0.025, 0.005]} position={[-0.02, -0.5, -0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          {/* Back signature line */}
          <Box args={[0.6, 0.015, 0.005]} position={[0.2, -0.85, -0.025]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>

          {/* Notary stamp on back - top left */}
          <group position={[-0.5, 0.75, -0.035]}>
            <Torus args={[0.12, 0.015, 12, 24]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial
                color={sealGold}
                roughness={0.2}
                metalness={0.9}
              />
            </Torus>
            <Sphere args={[0.03, 12, 12]} position={[0, 0, -0.02]}>
              <meshStandardMaterial color={sealGold} roughness={0.1} metalness={1} />
            </Sphere>
          </group>
        </group>
      </Float>

      {/* Orbital ring - subtle */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <Torus
          ref={torusRef}
          args={[2.2, 0.03, 16, 100]}
          position={[0, 0, 0]}
          rotation={[Math.PI / 2.5, 0.2, 0]}
        >
          <meshStandardMaterial
            color={goldColor}
            roughness={0.3}
            metalness={0.9}
            transparent
            opacity={0.4}
          />
        </Torus>
      </Float>

      {/* Floating page 1 - top right (double-sided) */}
      <Float speed={3} rotationIntensity={0.2} floatIntensity={1.5}>
        <group position={[2, 1, -1]} rotation={[0.3, -0.5, 0.15]}>
          <RoundedBox args={[0.5, 0.7, 0.015]} radius={0.01} smoothness={4}>
            <meshStandardMaterial
              color={lightGold}
              roughness={0.35}
              metalness={0.6}
            />
          </RoundedBox>
          {/* Front lines */}
          <Box args={[0.3, 0.01, 0.003]} position={[0, 0.2, 0.01]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[0.35, 0.01, 0.003]} position={[-0.02, 0.1, 0.01]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[0.25, 0.01, 0.003]} position={[0.03, 0.0, 0.01]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          {/* Back lines */}
          <Box args={[0.32, 0.01, 0.003]} position={[0.02, 0.2, -0.01]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[0.28, 0.01, 0.003]} position={[0, 0.1, -0.01]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
        </group>
      </Float>

      {/* Floating page 2 - bottom left (double-sided) */}
      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={1.2}>
        <group position={[-2, -0.5, 0.5]} rotation={[-0.2, 0.4, -0.1]}>
          <RoundedBox args={[0.4, 0.55, 0.015]} radius={0.01} smoothness={4}>
            <meshStandardMaterial
              color={lightGold}
              roughness={0.35}
              metalness={0.6}
            />
          </RoundedBox>
          {/* Front lines */}
          <Box args={[0.25, 0.01, 0.003]} position={[0, 0.15, 0.01]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[0.28, 0.01, 0.003]} position={[-0.02, 0.05, 0.01]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          {/* Back lines */}
          <Box args={[0.22, 0.01, 0.003]} position={[0.02, 0.15, -0.01]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
          <Box args={[0.26, 0.01, 0.003]} position={[0, 0.05, -0.01]}>
            <meshStandardMaterial color={goldColor} roughness={0.3} metalness={0.8} />
          </Box>
        </group>
      </Float>

      {/* Scales of Justice (replaces accent sphere) */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
        <group position={[1.5, -1, 1]} rotation={[0, 0, 0.1]}>
          {/* Pillar */}
          <Box args={[0.02, 0.25, 0.02]} position={[0, 0, 0]}>
            <meshStandardMaterial color={goldColor} roughness={0.15} metalness={0.95} />
          </Box>
          {/* Beam */}
          <Box args={[0.25, 0.015, 0.015]} position={[0, 0.12, 0]}>
            <meshStandardMaterial color={goldColor} roughness={0.15} metalness={0.95} />
          </Box>
          {/* Left pan */}
          <Torus args={[0.04, 0.008, 8, 16]} position={[-0.11, 0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color={lightGold} roughness={0.2} metalness={0.9} />
          </Torus>
          {/* Left chain */}
          <Box args={[0.005, 0.07, 0.005]} position={[-0.11, 0.08, 0]}>
            <meshStandardMaterial color={goldColor} roughness={0.2} metalness={0.9} />
          </Box>
          {/* Right pan */}
          <Torus args={[0.04, 0.008, 8, 16]} position={[0.11, 0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color={lightGold} roughness={0.2} metalness={0.9} />
          </Torus>
          {/* Right chain */}
          <Box args={[0.005, 0.07, 0.005]} position={[0.11, 0.08, 0]}>
            <meshStandardMaterial color={goldColor} roughness={0.2} metalness={0.9} />
          </Box>
          {/* Base */}
          <Box args={[0.08, 0.015, 0.04]} position={[0, -0.12, 0]}>
            <meshStandardMaterial color={goldColor} roughness={0.15} metalness={0.95} />
          </Box>
        </group>
      </Float>

      {/* Floating quill pen (replaces wireframe doc 1) */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.8}>
        <group position={[-1.8, 0.8, -0.5]} rotation={[0.2, 0.3, -0.7]}>
          {/* Pen body */}
          <Cylinder ref={boxRef} args={[0.015, 0.008, 0.5, 8]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color={lightGold} roughness={0.2} metalness={0.85} />
          </Cylinder>
          {/* Nib */}
          <Sphere args={[0.012, 8, 8]} position={[0, -0.26, 0]}>
            <meshStandardMaterial color={sealGold} roughness={0.1} metalness={1} />
          </Sphere>
          {/* Feather detail (flat box along pen) */}
          <Box args={[0.12, 0.22, 0.003]} position={[0.04, 0.08, 0]}>
            <meshStandardMaterial
              color={lightGold}
              roughness={0.3}
              metalness={0.7}
              transparent
              opacity={0.6}
            />
          </Box>
        </group>
      </Float>

      {/* Wireframe document outline */}
      <Float speed={2.2} rotationIntensity={0.3} floatIntensity={1}>
        <Box args={[0.4, 0.55, 0.02]} position={[2.2, 1.5, 0.5]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial
            color={goldColor}
            roughness={0.2}
            metalness={0.9}
            wireframe
          />
        </Box>
      </Float>

      {/* Wireframe document outline 2 */}
      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.9}>
        <Box args={[0.3, 0.4, 0.015]} position={[0.8, -1.5, -0.3]} rotation={[0.3, 0.8, 0.2]}>
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
      <pointLight position={[0, 2, -3]} intensity={0.3} color="#d6c6a7" />

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
