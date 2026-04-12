import { useEffect, useRef, useState } from "react";
import "../index.css";

const formatTime = (time) => {
  if (!Number.isFinite(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const RecordPlayerOverlay = ({ isOpen, onClose, albumImage, audioSrc }) => {
  const audioRef = useRef(null);
  const rafRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(195); // 3:15 fallback

  useEffect(() => {
    if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      if (audio.duration && Number.isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      audio.currentTime = 0;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current && isPlaying) {
        setCurrentTime(audioRef.current.currentTime || 0);
        rafRef.current = requestAnimationFrame(updateProgress);
      }
    };

    if (isPlaying) {
      rafRef.current = requestAnimationFrame(updateProgress);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying]);

  if (!isOpen) return null;

  const togglePlay = async (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio play failed:", error);
      }
    }
  };

  const progressPercent =
    duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;

  return (
    <div
      className="record-overlay-backdrop"
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <button
        className="record-overlay-close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        ×
      </button>

      <div
        className="record-overlay-content"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <p className="record-overlay-heading">Favourite song currently</p>

        <img
          src={albumImage}
          alt="Album cover"
          className="record-overlay-image"
        />

        <button className="record-overlay-play" onClick={togglePlay}>
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <div className="record-overlay-progress-wrap">
          <div className="record-overlay-progress-bar">
            <div
  className="record-overlay-progress-fill"
  style={{
    width: "100%",
    transform: `scaleX(${progressPercent / 100})`,
    transformOrigin: "left center",
  }}
/>
          </div>

          <div className="record-overlay-time">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <audio ref={audioRef} src={audioSrc} preload="metadata" />
      </div>
    </div>
  );
};

export default RecordPlayerOverlay;