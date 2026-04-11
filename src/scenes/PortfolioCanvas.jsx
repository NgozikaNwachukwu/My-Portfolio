import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState, useCallback } from "react";
import { Loader } from "@react-three/drei";
import { Howler } from "howler";
import useSound from "use-sound";
import Scene from "./Scene";
import roomPop from "../assets/room_pop.mp3";
import lightsOnOrOff from "../assets/lights_on_or_off.mp3";
import VisionBoardOverlay from "../components/VisionBoardOverlay";
import RecordPlayerOverlay from "../components/RecordPlayerOverlay";
import FavoriteBookOverlay from "../components/FavoriteBookOverlay";
import PopupMessages from "../components/PopupMessages";
import PortfolioOverlay from "../components/PortfolioOverlay";
import ObjectModeOverlay from "../components/ObjectModeOverlay";
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
  const welcomeOverlayTimeoutRef = useRef(null);
  const visionBoardMobileOverlayTimerRef = useRef(null);
  const visionBoardDesktopOverlayTimerRef = useRef(null);
  const recordPlayerOverlayTimerRef = useRef(null);
  const recordPlayerOpenTimerRef = useRef(null);
  const favoriteBookHintTimerRef = useRef(null);
  const favoriteBookOpenTimerRef = useRef(null);

  const [selectedVisionPhoto, setSelectedVisionPhoto] = useState(null);
  const [isRecordOverlayOpen, setIsRecordOverlayOpen] = useState(false);
  const [currentCameraMode, setCurrentCameraMode] = useState("default");
  const [isBookOverlayOpen, setIsBookOverlayOpen] = useState(false);
  const [colorMode, setColorMode] = useState("light");
  const [showWelcomeOverlay, setShowWelcomeOverlay] = useState(false);
  const [showDarkModeOverlay, setShowDarkModeOverlay] = useState(false);
  const [showVisionBoardDesktopOverlay, setShowVisionBoardDesktopOverlay] = useState(false);
  const [showVisionBoardMobileOverlay, setShowVisionBoardMobileOverlay] = useState(false);
  const [showRecordPlayerOverlayHint, setShowRecordPlayerOverlayHint] = useState(false);
  const [showFavoriteBookOverlayHint, setShowFavoriteBookOverlayHint] = useState(false);
  const [hasShownWelcomeOverlay, setHasShownWelcomeOverlay] = useState(false);
  const [hasShownDarkModeOverlay, setHasShownDarkModeOverlay] = useState(false);

  const [playRoomPop] = useSound(roomPop, { volume: 0.45 });
  const [playLightsToggle] = useSound(lightsOnOrOff, { volume: 0.5 });
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
  if (recordPlayerOverlayTimerRef.current) {
    clearTimeout(recordPlayerOverlayTimerRef.current);
    recordPlayerOverlayTimerRef.current = null;
  }

  if (recordPlayerOpenTimerRef.current) {
    clearTimeout(recordPlayerOpenTimerRef.current);
    recordPlayerOpenTimerRef.current = null;
  }

  if (currentCameraMode === "recordPlayer") {
    setIsRecordOverlayOpen(false);
    setShowRecordPlayerOverlayHint(false);

    const showHintTimer = setTimeout(() => {
      setShowRecordPlayerOverlayHint(true);

      recordPlayerOverlayTimerRef.current = setTimeout(() => {
        setShowRecordPlayerOverlayHint(false);

        recordPlayerOpenTimerRef.current = setTimeout(() => {
          setIsRecordOverlayOpen(true);
        }, 120);
      }, 8500);
    }, 1400);

    return () => {
      clearTimeout(showHintTimer);

      if (recordPlayerOverlayTimerRef.current) {
        clearTimeout(recordPlayerOverlayTimerRef.current);
        recordPlayerOverlayTimerRef.current = null;
      }

      if (recordPlayerOpenTimerRef.current) {
        clearTimeout(recordPlayerOpenTimerRef.current);
        recordPlayerOpenTimerRef.current = null;
      }
    };
  } else {
    setShowRecordPlayerOverlayHint(false);
    setIsRecordOverlayOpen(false);
  }
}, [currentCameraMode]);

useEffect(() => {
  if (favoriteBookHintTimerRef.current) {
    clearTimeout(favoriteBookHintTimerRef.current);
    favoriteBookHintTimerRef.current = null;
  }

  if (favoriteBookOpenTimerRef.current) {
    clearTimeout(favoriteBookOpenTimerRef.current);
    favoriteBookOpenTimerRef.current = null;
  }

  if (currentCameraMode === "favoriteBook") {
    setIsBookOverlayOpen(false);
    setShowFavoriteBookOverlayHint(false);

    const showHintTimer = setTimeout(() => {
      setShowFavoriteBookOverlayHint(true);

      favoriteBookHintTimerRef.current = setTimeout(() => {
        setShowFavoriteBookOverlayHint(false);

        favoriteBookOpenTimerRef.current = setTimeout(() => {
          setIsBookOverlayOpen(true);
        }, 120);
      }, 6000);
    }, 1400);

    return () => {
      clearTimeout(showHintTimer);

      if (favoriteBookHintTimerRef.current) {
        clearTimeout(favoriteBookHintTimerRef.current);
        favoriteBookHintTimerRef.current = null;
      }

      if (favoriteBookOpenTimerRef.current) {
        clearTimeout(favoriteBookOpenTimerRef.current);
        favoriteBookOpenTimerRef.current = null;
      }
    };
  } else {
    setShowFavoriteBookOverlayHint(false);
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

  const dismissTransientOverlays = useCallback(() => {
  setShowWelcomeOverlay(false);
  setShowDarkModeOverlay(false);
}, []);

  useEffect(() => {
  if (!showWelcomeOverlay && !showDarkModeOverlay) {
    return;
  }

    const handleDismiss = () => {
      dismissTransientOverlays();
    };

    window.addEventListener("pointerdown", handleDismiss);
    window.addEventListener("touchstart", handleDismiss);
    window.addEventListener("wheel", handleDismiss, { passive: true });
    window.addEventListener("keydown", handleDismiss);

    return () => {
      window.removeEventListener("pointerdown", handleDismiss);
      window.removeEventListener("touchstart", handleDismiss);
      window.removeEventListener("wheel", handleDismiss);
      window.removeEventListener("keydown", handleDismiss);
    };
  }, [
    showWelcomeOverlay,
    showDarkModeOverlay,
    dismissTransientOverlays,
  ]);

  const triggerVisionBoardMobileOverlay = useCallback(() => {
  setShowVisionBoardMobileOverlay(true);

  if (visionBoardMobileOverlayTimerRef.current) {
    clearTimeout(visionBoardMobileOverlayTimerRef.current);
  }

  visionBoardMobileOverlayTimerRef.current = setTimeout(() => {
    setShowVisionBoardMobileOverlay(false);
  }, 5200);
}, []);

  useEffect(() => {
  return () => {
    if (welcomeOverlayTimeoutRef.current) {
      clearTimeout(welcomeOverlayTimeoutRef.current);
    }

    if (visionBoardMobileOverlayTimerRef.current) {
      clearTimeout(visionBoardMobileOverlayTimerRef.current);
    }

    if (visionBoardDesktopOverlayTimerRef.current) {
      clearTimeout(visionBoardDesktopOverlayTimerRef.current);
    }

    if (recordPlayerOverlayTimerRef.current) {
      clearTimeout(recordPlayerOverlayTimerRef.current);
    }

    if (recordPlayerOpenTimerRef.current) {
      clearTimeout(recordPlayerOpenTimerRef.current);
    }

    if (favoriteBookHintTimerRef.current) {
      clearTimeout(favoriteBookHintTimerRef.current);
    }

    if (favoriteBookOpenTimerRef.current) {
      clearTimeout(favoriteBookOpenTimerRef.current);
    }
  };
}, []);

  const handleSceneReady = useCallback(() => {
    playRoomPop();

    if (hasShownWelcomeOverlay) return;

    if (welcomeOverlayTimeoutRef.current) {
      clearTimeout(welcomeOverlayTimeoutRef.current);
    }

    welcomeOverlayTimeoutRef.current = setTimeout(() => {
      setShowWelcomeOverlay(true);
      setHasShownWelcomeOverlay(true);
    }, 650);
  }, [playRoomPop, hasShownWelcomeOverlay]);

 useEffect(() => {
  if (visionBoardDesktopOverlayTimerRef.current) {
    clearTimeout(visionBoardDesktopOverlayTimerRef.current);
    visionBoardDesktopOverlayTimerRef.current = null;
  }

  if (currentCameraMode !== "visionBoard") {
    setShowVisionBoardDesktopOverlay(false);
    return;
  }

  if (isMobile) return;

  const showTimer = setTimeout(() => {
    setShowVisionBoardDesktopOverlay(true);

    visionBoardDesktopOverlayTimerRef.current = setTimeout(() => {
      setShowVisionBoardDesktopOverlay(false);
    }, 3600);
  }, 1450);

  return () => {
    clearTimeout(showTimer);

    if (visionBoardDesktopOverlayTimerRef.current) {
      clearTimeout(visionBoardDesktopOverlayTimerRef.current);
      visionBoardDesktopOverlayTimerRef.current = null;
    }
  };
}, [currentCameraMode, isMobile]);


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
    const nextMode = colorMode === "light" ? "dark" : "light";

    setColorMode(nextMode);
    playLightsToggle();

    if (nextMode === "dark" && !hasShownDarkModeOverlay) {
      setShowWelcomeOverlay(false);
      setShowDarkModeOverlay(true);
      setHasShownDarkModeOverlay(true);
    } else {
      setShowDarkModeOverlay(false);
    }
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

  const overlaysBlocked =
  showWelcomeOverlay ||
  showDarkModeOverlay;

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
              isMobile={isMobile}
              triggerVisionBoardMobileOverlay={triggerVisionBoardMobileOverlay}
            />
            <SceneReadySound onReady={handleSceneReady} />
          </Suspense>
        </Canvas>
      </div>

      {showWelcomeOverlay && (
        <PortfolioOverlay type="welcome" isMobile={isMobile} />
      )}

      {showDarkModeOverlay && (
        <PortfolioOverlay type="darkMode" isMobile={isMobile} />
      )}

      {showVisionBoardDesktopOverlay && (
        <ObjectModeOverlay
          mode="visionBoardDesktop"
          isMobile={isMobile}
        />
      )}

      {showVisionBoardMobileOverlay && (
        <ObjectModeOverlay
          mode="visionBoardMobile"
          isMobile={isMobile}
        />
      )}

      {showFavoriteBookOverlayHint && (
  <ObjectModeOverlay
    mode="favoriteBook"
    isMobile={isMobile}
  />
)}

      <PopupMessages
        currentCameraMode={currentCameraMode}
        overlaysBlocked={overlaysBlocked}
      />

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
      {showRecordPlayerOverlayHint && (
        <ObjectModeOverlay
        mode="recordPlayer"
        isMobile={isMobile}
        />
      )}

      <FavoriteBookOverlay
        isOpen={isBookOverlayOpen}
        onClose={() => setIsBookOverlayOpen(false)}
        bookImage="/images/americanah.jpg"
      />

      <Loader />
    </>
  );
}