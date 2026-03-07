import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Text, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import Room from "./scenes/Room";

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


function StartCube({ phase, onStart }) {
  const meshRef = useRef();

  useFrame((state) => {
  const t = state.clock.getElapsedTime();
  if (!meshRef.current) return;

  if (phase === "loading") {
  // Lock position so it doesn't feel like it's drifting
  meshRef.current.position.set(0, 0, 0);

  // Pulse between slow and fast, but NEVER near-zero (so no "stopping")
  // 2 pulses per second ≈ fast/slow every ~0.5s
  const pulse01 = 0.5 + 0.5 * Math.sin(t * Math.PI * 1.5); // 0..1..0..1

  const slow = 0.09;  // minimum spin speed (raise if it still feels too slow)
  const fast = 0.35;  // maximum spin speed (raise if you want more hype)
  const spinSpeed = slow + (fast - slow) * pulse01;

  // Spin ONLY around Y axis (in place)
  meshRef.current.rotation.x = 0;
  meshRef.current.rotation.z = 0;
  meshRef.current.rotation.y += spinSpeed;
} else {
    // entrance/zoom idle motion
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
  </>
)}
    </mesh>
  );
}

function LoadingOverlay({ visible }) {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    if (!visible) return;

    setDots(1);
    const i = setInterval(() => setDots((d) => (d % 3) + 1), 350);
    return () => clearInterval(i);
  }, [visible]);

  // keep this AFTER the state/effect
  if (!visible) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.22)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      <div style={{ color: "white", letterSpacing: "0.2em", fontSize: 14 }}>
        LOADING{".".repeat(dots)}
      </div>
    </div>
  );
}

function CameraZoom({ phase }) {
  useFrame((state) => {
  const cam = state.camera;

  // Only move the camera during zoom + loading
  if (phase === "zoom" || phase === "loading") {
    const targetZ = 4.6;

    // smooth interpolation
    cam.position.z += (targetZ - cam.position.z) * 0.06;

    cam.updateProjectionMatrix();
  }
});

  return null;
}

export default function App() {
  const [showHint, setShowHint] = useState(true);
  const [phase, setPhase] = useState("entrance");

  const handleStart = () => {
  setPhase("zoom");
  };

    useEffect(() => {
  if (phase === "zoom") {
    const t = setTimeout(() => setPhase("loading"), 650); // zoom duration
    return () => clearTimeout(t);
  }

  if (phase === "loading") {
    const t = setTimeout(() => setPhase("room"), 3600); // loading duration
    return () => clearTimeout(t);
  }
}, [phase]);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>

      <LoadingOverlay visible={phase === "loading"} />

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

  <CameraZoom phase={phase} />
  <ambientLight intensity={0.7} />
  <directionalLight position={[-5, 3, -5]} intensity={1.5} color="#ffffff" />

  {phase !== "room" && (
  <StartCube phase={phase} onStart={handleStart} />
)}

{phase === "room" && <Room />}

  {phase === "entrance" && (
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
  )}

  <ContactShadows position={[0, -1.2, 0]} opacity={0.8} scale={10} blur={2.5} far={4} />

  <Environment preset="sunset" />
  <OrbitControls enableDamping onStart={() => setShowHint(false)} />
</Canvas>

    </div>
  );
}
