export default function PortfolioOverlay({ type = "welcome", isMobile = false }) {
  const isDarkModeOverlay = type === "darkMode";

  const welcomeIntro = [
    "Welcome to my interactive portfolio!",
    "I hope you enjoy this experience as much as I loved creating it 😊",
  ];

  const mobileTips = [
    "⚠️You are currently in mobile mode📱 this portfolio is best experienced on a desktop or computer⚠️",
    "Please use Chrome browser for the best experience.",
    "Objects that are moving in the room can be tapped on.",
    "Short on time? Tap straight on the MacBook! 💻  it has everything you need to know.",
    "Look out for popup messages that give you more tips on different features about the room 💬",
    "Once you're done reading this, tap the screen and enjoy!",
  ];

  const desktopTips = [
    "Please use Chrome browser for the best experience.",
    "Hover over objects in the room to see which ones you can click on.",
    "Short on time? Hover straight over the MacBook! 💻 and click on it! it has everything you need to know.",
    "Look out for popup messages that give you more tips on different features about the room 💬",
    "Once you're done reading this, click the screen and enjoy!",
  ];

  const darkModeIntro = ["You are now in dark mode 🌙"];

  const darkModeTips = [
    "Turn your brightness up to better enjoy your experience.",
    "Click on the moon button on the bottom right side of the screen ↘️ to move back into light mode.",
    "Once you're done reading this, click the screen and enjoy!",
  ];

  const introLines = isDarkModeOverlay
    ? darkModeIntro
    : welcomeIntro;

  const tipLines = isDarkModeOverlay
    ? darkModeTips
    : isMobile
    ? mobileTips
    : desktopTips;

  return (
    <div
      style={{
  position: "fixed",
  inset: 0,
  zIndex: 45,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: isMobile ? "24px" : "40px",
  pointerEvents: "none",
  background: "rgba(8, 8, 16, 0.32)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
}}
    >
      <div
        style={{
          maxWidth: isMobile ? "92vw" : "860px",
          textAlign: "center",
          color: "white",
          textShadow: "0 2px 10px rgba(0,0,0,0.45)",
          fontFamily:
            '"MontserratCustom", "Montserrat", "Avenir Next", "Segoe UI", sans-serif',
          pointerEvents: "none",
        }}
      >
        {introLines.map((line, index) => (
          <p
            key={index}
            style={{
              margin: 0,
              marginBottom: index === introLines.length - 1 ? "20px" : "10px",
              fontSize: isMobile ? "20px" : "28px",
              fontWeight: 600,
              lineHeight: 1.4,
              letterSpacing: "0.01em",
            }}
          >
            {line}
          </p>
        ))}

        <p
          style={{
            margin: 0,
            marginBottom: "14px",
            fontSize: isMobile ? "19px" : "24px",
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: "0.01em",
          }}
        >
          💡 Tips:
        </p>

        <div
          style={{
            display: "inline-block",
            textAlign: "left",
            maxWidth: isMobile ? "92vw" : "820px",
          }}
        >
          {tipLines.map((line, index) => (
            <p
              key={index}
              style={{
                margin: 0,
                marginBottom: index === tipLines.length - 1 ? 0 : "12px",
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
    </div>
  );
}