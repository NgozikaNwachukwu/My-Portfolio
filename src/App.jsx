import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Text, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function FaceButton({ label, position, rotation, onClick }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Rounded plate */}
      <RoundedBox
        args={[1.05, 0.45, 0.08]} // width, height, thickness
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

      {/* Text slightly in front so it doesn't z-fight */}
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


function StartCube({ onStart }) {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;

    // subtle floating
    meshRef.current.position.y = Math.sin(t * 1.3) * 0.08;

    // slow rotation
    meshRef.current.rotation.y += 0.004;
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

      {/* FRONT face button (centered) */}
      <FaceButton
        label="START"
        position={[0, 0, 0.83]}
        rotation={[0, 0, 0]}
        onClick={onStart}
      />

      {/* BACK face button (centered, flipped) */}
      <FaceButton
        label="START"
        position={[0, 0, -0.83]}
        rotation={[0, Math.PI, 0]}
        onClick={onStart}
      />
    </mesh>
  );
}


export default function App() {
  const [showHint, setShowHint] = useState(true);

  const handleStart = () => {
    alert("Start clicked ✅ (next: Entrance → Room transition)");
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>

     {/* Rotate hint overlay */}
{showHint && (
  <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 20,
      background: "rgba(0,0,0,0.5)", // darker overlay
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start", // ⬅ move upward
      paddingTop: "38vh",       // ⬅ place above cube
      pointerEvents: "none",
    }}
  >
    <div
      style={{
        color: "white",
        fontSize: 13,          // smaller text
        letterSpacing: "0.08em",
        opacity: 0.9,
        fontWeight: 500,
      }}
    >
      Hold and drag to rotate
    </div>
  </div>
)}



  <Canvas
  camera={{ position: [0, 1.4, 5.6], fov: 45 }}
  onPointerDown={() => setShowHint(false)}
>
  <color attach="background" args={["#2b3a66"]} />

  <ambientLight intensity={0.7} />
  <directionalLight position={[-5, 3, -5]} intensity={1.5} color="#ffffff" />

  <StartCube onStart={handleStart} />

  <group position={[0, 1.85, 0]} rotation={[0, -0.12, 0]}>
  <Text
    font="/Montserrat-Black.ttf"
    fontSize={0.35}
    color="#ffffff"
    anchorX="center"
    anchorY="middle"
    letterSpacing={-0.02}
  >
    Ngozika Nwachukwu
  </Text>
{/*}
  <Text
    font="/Montserrat-SemiBold.ttf"
    position={[0, -0.65, 0]}
    fontSize={0.28}
    color="#f8f7ff"
    anchorX="center"
    anchorY="middle"
    letterSpacing={0.04}
  >
    Software Engineering Student
  </Text>
  */}
</group>

  <ContactShadows position={[0, -1.2, 0]} opacity={0.8} scale={10} blur={2.5} far={4} />

  <Environment preset="sunset" />
  <OrbitControls enableDamping onStart={() => setShowHint(false)} />
</Canvas>

    </div>
  );
}
