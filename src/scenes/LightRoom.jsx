import Spline from '@splinetool/react-spline';

export default function LightRoom({
  onLoad,
  zoomLevel = 1,
  visible = false,
  onHoverObject,
  onClickObject,
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#2A2438",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          opacity: visible ? 1 : 0,
          transform: visible ? `scale(${zoomLevel})` : `scale(${zoomLevel * 0.94})`,
          transformOrigin: "center center",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <Spline
          scene="https://prod.spline.design/kpR4uM8fzmnT5jFU/scene.splinecode"
          onLoad={onLoad}
          onSplineMouseHover={(e) => {
            const objectName =
              e?.target?.parent?.name ||
              e?.target?.name ||
              null;

            onHoverObject?.(objectName);
          }}
          onSplineMouseDown={(e) => {
            const objectName =
              e?.target?.parent?.name ||
              e?.target?.name ||
              null;

            onClickObject?.(objectName);
          }}
        />
      </div>
    </div>
  );
}