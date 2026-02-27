import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";

function StartCube({ onStart }) {
  return (
    <mesh>
      <boxGeometry args={[1.6, 1.6, 1.6]} />
      <meshStandardMaterial color="#ff4fd8" />

      {/* START button: pinned to the front face, BUT correctly scaled */}
      <Html
  transform
  occlude
  position={[-0.25, 0, 0.81]}
  distanceFactor={7}   // 🔥 was 8 → bigger number = smaller button
  center
  style={{ pointerEvents: "auto" }}
>
  <button
    onClick={onStart}
    style={{
      padding: "6px 14px",   // smaller padding
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.25)",
      background: "rgba(0,0,0,0.55)",
      color: "white",
      fontWeight: 800,
      letterSpacing: "0.15em",
      fontSize: 14,          // smaller text
      cursor: "pointer",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    }}
  >
    START
  </button>
</Html>
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
      {/* Centered intro text (much cleaner than top-left) */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: 0,
          right: 0,
          zIndex: 30,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
            textShadow: "0 12px 40px rgba(0,0,0,0.7)",
          }}
        >
          <div style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.05 }}>
            Ngozika Nwachukwu
          </div>
          <div style={{ marginTop: 10, fontSize: 16, opacity: 0.85 }}>
            Welcome to my portfolio
          </div>
        </div>
      </div>

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
        camera={{ position: [0, 1.4, 4.2], fov: 45 }}
        onPointerDown={() => setShowHint(false)}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <StartCube onStart={handleStart} />

        <Environment preset="city" />
        <OrbitControls enableDamping onStart={() => setShowHint(false)} />
      </Canvas>
    </div>
  );
}
