import { useEffect, useState } from "react";

export default function LoadingOverlay({ visible }) {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    if (!visible) return;

    setDots(1);
    const i = setInterval(() => setDots((d) => (d % 3) + 1), 350);
    return () => clearInterval(i);
  }, [visible]);

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