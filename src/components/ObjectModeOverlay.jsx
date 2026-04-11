import clickOutGif from "../assets/click_out.gif";

export default function ObjectModeOverlay({
  mode = "visionBoardDesktop",
  isMobile = false,
}) {
  const isVisionBoardDesktop = mode === "visionBoardDesktop";
  const isVisionBoardMobile = mode === "visionBoardMobile";
  const isRecordPlayer = mode === "recordPlayer";
  const isFavoriteBook = mode === "favoriteBook";
  const isMacbook = mode === "macbook";

  const bodyLines = isRecordPlayer
  ? [
      'Once done viewing this feature, click the "X" above first.',
      "Then click anywhere outside the object to return to the full room.",
    ]
  : isFavoriteBook
  ? ['Once done viewing this feature, click on the "X" above to return to the full room.']
  : isMacbook
? [
    'Once done viewing this feature, click anywhere outside this object to return to the full room.',
  ]
  : isVisionBoardDesktop
  ? ["Click anywhere outside the vision board to return to the full room.",
     "Hover over and click on the picture frames to view them!",
  ]
  : [
      "Sorry, this feature is currently available on desktop only.",
      "For the full Vision Board experience, please open this portfolio on a computer.",
    ];
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "24px" : "40px",
        pointerEvents: "none",
        background: "rgba(10, 10, 18, 0.4)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <div
  style={{
    width: "100%",
    maxWidth:
  (isRecordPlayer || isFavoriteBook || isMacbook) && isMobile
    ? "92vw"
    : isVisionBoardDesktop || isRecordPlayer || isMacbook
    ? "1100px"
    : "760px",

display: "flex",

flexDirection:
  (isRecordPlayer || isFavoriteBook || isMacbook) && isMobile
    ? "column"
    : isVisionBoardDesktop || isRecordPlayer || isMacbook
    ? "row"
    : "column",

alignItems: "center",
justifyContent: "center",

gap:
  (isRecordPlayer || isFavoriteBook || isMacbook) && isMobile
    ? "22px"
    : isVisionBoardDesktop || isRecordPlayer || isMacbook
    ? "410px"
    : isFavoriteBook
    ? "24px"
    : "96px",
          textAlign: "center",
          color: "white",
          textShadow: "0 2px 10px rgba(0,0,0,0.45)",
          fontFamily:
            '"MontserratCustom", "Montserrat", "Avenir Next", "Segoe UI", sans-serif',
          pointerEvents: "none",
        }}
      >
       <div
  style={{
    flex: (isRecordPlayer || isFavoriteBook || isMacbook) && isMobile ? "unset" : 1,

maxWidth:
  (isRecordPlayer || isFavoriteBook || isMacbook) && isMobile
    ? "92vw"
    : isVisionBoardDesktop || isRecordPlayer || isMacbook
    ? "560px"
    : "620px",
  }}
>
          <p
            style={{
              margin: 0,
              marginBottom: "14px",
              fontSize: isRecordPlayer && isMobile ? "15px" : isMobile ? "16px" : "20px",
              fontWeight: 600,
              lineHeight: 1.4,
              letterSpacing: "0.01em",
            }}
          >
            💡 Tips
          </p>

          <div
            style={{
              display: "inline-block",
              textAlign: "left",
              maxWidth: "100%",
            }}
          >
            {bodyLines.map((line, index) => (
              <p
                key={index}
                style={{
                  margin: 0,
                  marginBottom: index === bodyLines.length - 1 ? 0 : "12px",
                  fontSize: isMobile ? "16px" : "20px",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  letterSpacing: "0.005em",
                }}
              >
                • {line}
              </p>
            ))}
          </div>
        </div>

       {(isVisionBoardDesktop || isRecordPlayer || isMacbook) && (
  <img
    src={clickOutGif}
    alt="Click outside demonstration"
    style={{
      width:
        (isRecordPlayer || isMacbook) && isMobile
          ? "150px"
          : "220px",
      height: "auto",
      flexShrink: 0,
      marginRight:
        (isRecordPlayer || isMacbook) && isMobile
          ? "0px"
          : "-200px",
    }}
  />
)}
      </div>
    </div>
  );
}