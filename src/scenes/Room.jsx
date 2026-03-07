// src/scenes/Room.jsx
import { Environment, ContactShadows } from "@react-three/drei";

export default function Room() {
  return (
    <>
      {/* room lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 6, 4]} intensity={1.2} />

      {/* floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      {/* placeholder "desk block" */}
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[3.2, 0.2, 1.4]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* placeholder "monitor/laptop block" */}
      <mesh position={[0, -0.2, 0.2]}>
        <boxGeometry args={[1.2, 0.75, 0.06]} />
        <meshStandardMaterial color="#0b1220" />
      </mesh>

      <ContactShadows position={[0, -1.19, 0]} opacity={0.45} scale={12} blur={2.5} far={8} />
      <Environment preset="city" />
    </>
  );
}