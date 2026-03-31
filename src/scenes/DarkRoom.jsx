import Spline from '@splinetool/react-spline';

export default function DarkRoom({
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
        background: "#070707",
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
          scene="https://prod.spline.design/G6BsFKKrJJ1FHv48/scene.splinecode?v=4"
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