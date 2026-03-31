import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Text,
  RoundedBox,
} from "@react-three/drei";
import { useRef } from "react";

function FaceButton({ label, position, rotation, onClick }) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox
        args={[1.05, 0.45, 0.08]}
        radius={0.18}
        smoothness={8}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      >
        <meshStandardMaterial
          color="#2a0f2f"
          transparent
          opacity={0.78}
          roughness={0.25}
          metalness={0.2}
        />
      </RoundedBox>

      <Text
        position={[0, 0, 0.06]}
        fontSize={0.18}
        color="white"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.08}
      >
        {label}
      </Text>
    </group>
  );
}

function StartCubeMesh({ phase, onStart }) {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;

    if (phase === "loading") {
      meshRef.current.position.set(0, 0, 0);

      const pulse01 = 0.5 + 0.5 * Math.sin(t * Math.PI * 1.5);
      const slow = 0.09;
      const fast = 0.2;
      const spinSpeed = slow + (fast - slow) * pulse01;

      meshRef.current.rotation.x = 0;
      meshRef.current.rotation.z = 0;
      meshRef.current.rotation.y += spinSpeed;
    } else {
      meshRef.current.position.y = Math.sin(t * 1.3) * 0.08;
      meshRef.current.rotation.y += 0.004;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.6, 1.6, 1.6]} />
      <meshStandardMaterial
        color="#ff3ecf"
        transparent
        opacity={0.45}
        roughness={0.05}
        metalness={0.7}
        emissive="#ff3ecf"
        emissiveIntensity={0.8}
      />

      {(phase === "entrance" || phase === "zoom") && (
        <>
          <FaceButton
            label="START"
            position={[0, 0, 0.83]}
            rotation={[0, 0, 0]}
            onClick={onStart}
          />
          <FaceButton
            label="START"
            position={[0, 0, -0.83]}
            rotation={[0, Math.PI, 0]}
            onClick={onStart}
          />
        </>
      )}
    </mesh>
  );
}

function CameraZoom({ phase }) {
  useFrame((state) => {
    const cam = state.camera;

    if (phase === "zoom" || phase === "loading") {
      const targetZ = 4.6;
      cam.position.z += (targetZ - cam.position.z) * 0.06;
      cam.updateProjectionMatrix();
    }
  });

  return null;
}

export default function EntranceCube({ phase, onStart, onHideHint }) {
  return (
    <Canvas
      camera={{ position: [0, 1.4, 5.6], fov: 45 }}
      onPointerDown={onHideHint}
    >
      <color attach="background" args={["#2b3a66"]} />

      <CameraZoom phase={phase} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[-5, 3, -5]} intensity={1.5} color="#ffffff" />

      <StartCubeMesh phase={phase} onStart={onStart} />

      {phase === "entrance" && (
        <group position={[0, 1.85, 0]} rotation={[0, -0.12, 0]}>
          <Text
            font="/Montserrat-Black.ttf"
            fontSize={0.35}
            color="#0e1111"
            anchorX="center"
            anchorY="middle"
            letterSpacing={-0.02}
          >
            Ngozika Nwachukwu
          </Text>
        </group>
      )}

      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.8}
        scale={10}
        blur={2.5}
        far={4}
      />

      <Environment files="/Hdr/sunset3.hdr" />
      
      <OrbitControls enableDamping onStart={onHideHint} />
    </Canvas>
  );
}