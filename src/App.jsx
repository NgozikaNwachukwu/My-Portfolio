import { useState, useEffect } from "react";
import EntranceCube from "./components/entrance/EntranceCube";
import LoadingOverlay from "./components/entrance/LoadingOverlay";
import PortfolioCanvas from "./scenes/PortfolioCanvas";

export default function App() {
  const [showHint, setShowHint] = useState(true);
  const [phase, setPhase] = useState("entrance");

  const handleStart = () => {
    setPhase("zoom");
  };

  const handleBackToStart = () => {
    setPhase("entrance");
    setShowHint(true);
  };

  useEffect(() => {
    if (phase === "zoom") {
      const t = setTimeout(() => setPhase("loading"), 650);
      return () => clearTimeout(t);
    }

    if (phase === "loading") {
      const t = setTimeout(() => {
        setPhase("room");
      }, 3600);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#2A2438",
      }}
    >
      <LoadingOverlay visible={phase === "loading"} />

      {showHint && phase !== "room" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 20,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "38vh",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 13,
              letterSpacing: "0.08em",
              opacity: 0.9,
              fontWeight: 500,
            }}
          >
            Hold and drag to rotate
          </div>
        </div>
      )}

      {phase !== "room" && (
        <EntranceCube
          phase={phase}
          onStart={handleStart}
          onHideHint={() => setShowHint(false)}
        />
      )}

      {phase === "room" && (
        <PortfolioCanvas onBackToStart={handleBackToStart} />
      )}
    </div>
  );
}