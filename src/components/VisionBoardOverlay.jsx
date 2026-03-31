import React from "react";
import "../index.css";

const VisionBoardOverlay = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div
      className="vision-overlay-backdrop"
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <button
        className="vision-overlay-close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        onMouseDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        aria-label="Close overlay"
      >
        ×
      </button>

      <div
        className="vision-overlay-content"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <img
          src={photo.image}
          alt={photo.label}
          className="vision-overlay-image"
        />

        <p className="vision-overlay-caption">{photo.caption}</p>
      </div>
    </div>
  );
};

export default VisionBoardOverlay;