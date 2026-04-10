import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Loader } from "@react-three/drei";
import { Howler } from "howler";
import useSound from "use-sound";
import Scene from "./Scene";
import roomPop from "../assets/room_pop.mp3";
import lightsOnOrOff from "../assets/lights_on_or_off.mp3";
import { useState } from "react";
import VisionBoardOverlay from "../components/VisionBoardOverlay";
import RecordPlayerOverlay from "../components/RecordPlayerOverlay";
import FavoriteBookOverlay from "../components/FavoriteBookOverlay";
import PopupMessages from "../components/PopupMessages";
import song from "../assets/song.mp3";

function SceneReadySound({ onReady }) {
  const firedRef = useRef(false);

  useEffect(() => {
    let raf1;
    let raf2;

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (!firedRef.current) {
          firedRef.current = true;
          onReady?.();
        }
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [onReady]);

  return null;
}

export default function PortfolioCanvas({ onBackToStart }) {
  const sceneCameraRef = useRef(null);
  const isMobile = window.innerWidth < 768;
  const [selectedVisionPhoto, setSelectedVisionPhoto] = useState(null);
  const [isRecordOverlayOpen, setIsRecordOverlayOpen] = useState(false);
  const [currentCameraMode, setCurrentCameraMode] = useState("default");
  const [isBookOverlayOpen, setIsBookOverlayOpen] = useState(false);
  const [colorMode, setColorMode] = useState("light");

  const [playRoomPop] = useSound(roomPop, { volume: 0.45 });
  const [playLightsToggle] = useSound(lightsOnOrOff, { volume: 0.5 });

  useEffect(() => {
  if (currentCameraMode === "recordPlayer") {
    const timer = setTimeout(() => {
      setIsRecordOverlayOpen(true);
    }, 1400);

    return () => clearTimeout(timer);
  } else {
    setIsRecordOverlayOpen(false);
  }
}, [currentCameraMode]);

useEffect(() => {
  if (currentCameraMode === "favoriteBook") {
    const timer = setTimeout(() => {
      setIsBookOverlayOpen(true);
    }, 1400);

    return () => clearTimeout(timer);
  } else {
    setIsBookOverlayOpen(false);
  }
}, [currentCameraMode]);

useEffect(() => {
  const unlockAudio = async () => {
    try {
      if (Howler.ctx && Howler.ctx.state === "suspended") {
        await Howler.ctx.resume();
      }
    } catch (error) {
      console.log("Audio unlock failed:", error);
    }
  };

  unlockAudio();

  window.addEventListener("pointerdown", unlockAudio, { once: true });
  window.addEventListener("touchstart", unlockAudio, { once: true });
  window.addEventListener("keydown", unlockAudio, { once: true });

  return () => {
    window.removeEventListener("pointerdown", unlockAudio);
    window.removeEventListener("touchstart", unlockAudio);
    window.removeEventListener("keydown", unlockAudio);
  };
}, []);

  const handleZoomIn = () => {
    const cam = sceneCameraRef.current;
    if (!cam) return;

    cam.zoom = Math.min(cam.zoom + 0.15, 4);
    cam.updateProjectionMatrix();
  };

  const handleZoomOut = () => {
    const cam = sceneCameraRef.current;
    if (!cam) return;

    cam.zoom = Math.max(cam.zoom - 0.15, 0.2);
    cam.updateProjectionMatrix();
  };

  const handleColorModeToggle = () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
    playLightsToggle();
  };


  const sharedButtonStyle = {
    position: "absolute",
    zIndex: 20,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(16,16,24,0.58)",
    color: "white",
    fontSize: "18px",
    fontWeight: 500,
    letterSpacing: "0.08em",
    cursor: "pointer",
    width: "52px",
    height: "52px",
    borderRadius: "999px",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  console.log("selectedVisionPhoto:", selectedVisionPhoto);

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <button
          onClick={handleZoomIn}
          style={{
            ...sharedButtonStyle,
            left: "24px",
            top: "22px",
          }}
        >
          +
        </button>

        <button
          onClick={handleZoomOut}
          style={{
            ...sharedButtonStyle,
            left: "24px",
            bottom: "22px",
          }}
        >
          -
        </button>

        <button
          onClick={onBackToStart}
          style={{
            position: "absolute",
            right: "24px",
            top: "22px",
            zIndex: 20,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(16,16,24,0.58)",
            color: "white",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            cursor: "pointer",
            padding: "12px 18px",
            borderRadius: "999px",
            textTransform: "uppercase",
          }}
        >
          Back to Start
        </button>

        <button
          onClick={handleColorModeToggle}
          style={{
            ...sharedButtonStyle,
            right: "24px",
            bottom: "22px",
            fontSize: "20px",
          }}
          aria-label={
            colorMode === "light" ? "Activate dark mode" : "Activate light mode"
          }
          title={
            colorMode === "light" ? "Activate dark mode" : "Activate light mode"
          }
        >
          {colorMode === "light" ? "☀️" : "🌙"}
        </button>

        <Canvas
          className="r3f"
          gl={{ antialias: true }}
          shadows="soft"
          flat
          linear
        >
          <Suspense fallback={null}>
            <Scene
              externalCameraRef={sceneCameraRef}
              setSelectedVisionPhoto={setSelectedVisionPhoto}
               setIsRecordOverlayOpen={setIsRecordOverlayOpen}
               setIsBookOverlayOpen={setIsBookOverlayOpen}
               setCurrentCameraMode={setCurrentCameraMode}
               colorMode={colorMode}
              
            />
            <SceneReadySound onReady={playRoomPop} />
          </Suspense>
        </Canvas>
      </div>

      <PopupMessages currentCameraMode={currentCameraMode} />

       <VisionBoardOverlay
        photo={selectedVisionPhoto}
        onClose={() => setSelectedVisionPhoto(null)}
      />

      <RecordPlayerOverlay
        isOpen={isRecordOverlayOpen}
        onClose={() => setIsRecordOverlayOpen(false)}
        albumImage="/images/harry-styles.png"
        audioSrc={song}
      />
      <FavoriteBookOverlay
        isOpen={isBookOverlayOpen}
        onClose={() => setIsBookOverlayOpen(false)}
       bookImage="/images/americanah.jpg"
      />
      <Loader />
    </>
  );
}