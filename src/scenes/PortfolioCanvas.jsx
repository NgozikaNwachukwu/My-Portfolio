import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Loader } from "@react-three/drei";
import useSound from "use-sound";
import Scene from "./Scene";
import roomPop from "../assets/room_pop.mp3";
import { useState } from "react";
import VisionBoardOverlay from "../components/VisionBoardOverlay";
import RecordPlayerOverlay from "../components/RecordPlayerOverlay";
import FavoriteBookOverlay from "../components/FavoriteBookOverlay";
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
  const [selectedVisionPhoto, setSelectedVisionPhoto] = useState(null);
  const [isRecordOverlayOpen, setIsRecordOverlayOpen] = useState(false);
  const [currentCameraMode, setCurrentCameraMode] = useState("default");
  const [isBookOverlayOpen, setIsBookOverlayOpen] = useState(false);

  const [playRoomPop] = useSound(roomPop, { volume: 0.45 });
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
              
            />
            <SceneReadySound onReady={playRoomPop} />
          </Suspense>
        </Canvas>
      </div>
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