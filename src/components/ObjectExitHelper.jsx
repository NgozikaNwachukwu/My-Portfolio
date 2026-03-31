import "../index.css";

export default function ObjectExitHelper({ cameraMode }) {
  const activeModes = [
    "visionBoard",
    "recordPlayer",
    "favoriteBook",
    "macbook",
  ];

  if (!activeModes.includes(cameraMode)) return null;

  return (
    <div className="object-exit-helper">
      Click outside of the current object to get back to the full room.
    </div>
  );
}