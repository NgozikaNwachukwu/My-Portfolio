import { useEffect, useState } from "react";
import MacAboutPage from "./MacAboutPage";
import MacSkillsPage from "./MacSkillsPage";
import MacExperiencePage from "./MacExperiencePage";
import MacExperiencePage2 from "./MacExperiencePage2";
import MacProjectsPage from "./MacProjectsPage";
import MacTestimonialsPage from "./MacTestimonialsPage";

const MacPortfolioScreen = () => {
  const [phase, setPhase] = useState("boot");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
  if (phase === "boot") {
    const advancePhase = setTimeout(() => {
      setPhase("screensaver");
    }, 3000);

    return () => {
      clearTimeout(advancePhase);
    };
  }
}, [phase]);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => clearInterval(interval);
}, []);

const formattedDayDate = currentTime.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

const formattedTime = currentTime.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
});

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >

        <button
  onClick={() => {
    window.parent.postMessage("HIDE_SCREEN", "*");
  }}
  style={{
    position: "absolute",
    top: "14px",
    left: "18px",
    border: "none",
    background: "transparent",
    color: "white",
    fontSize: "28px",
    fontWeight: "300",
    lineHeight: "1",
    cursor: "pointer",
    zIndex: 9999,
    padding: 0,
  }}
>
  ×
</button>

      {phase === "boot" && (
  <div style={{ textAlign: "center" }}>
    <img
      src="/images/apple-logo.png"
      alt="Apple logo"
      style={{ width: "80px", marginBottom: "24px" }}
    />

    <div
      style={{
        width: "220px",
        height: "8px",
        background: "#2a2a2a",
        borderRadius: "999px",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          transformOrigin: "left center",
          animation: "macBootFill 3s linear forwards",
        }}
      />
    </div>
  </div>
)}

{phase === "screensaver" && (
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage: 'url("/images/screensaver.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "34px",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        color: "white",
        textShadow: "0 2px 10px rgba(0,0,0,0.35)",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          fontWeight: "500",
          marginBottom: "6px",
        }}
      >
        {formattedDayDate}
      </div>

      <div
        style={{
          fontSize: "64px",
          fontWeight: "600",
          lineHeight: "1",
        }}
      >
        {formattedTime}
      </div>
    </div>

    <button
  onClick={() => setPhase("about")}
  style={{
    position: "absolute",
    bottom: "22px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "5px 20px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.8)",
    background: "rgba(255, 255, 255, 0.06)",
    color: "white",
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "1",
    cursor: "pointer",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
  }}
>
  Enter
</button>
  </div>
)}

      {phase === "about" && (
  <MacAboutPage goNext={() => setPhase("skills")} />
)}

{phase === "skills" && (
  <MacSkillsPage
    goBack={() => setPhase("about")}
    goNext={() => setPhase("experience")}
  />
)}

{phase === "experience" && (
  <MacExperiencePage
    goBack={() => setPhase("skills")}
    goNext={() => setPhase("experience2")}
  />
)}

{phase === "experience2" && (
  <MacExperiencePage2
    goBack={() => setPhase("experience")}
    goNext={() => setPhase("projects")}
  />
)}
{phase === "projects" && (
  <MacProjectsPage
    goBack={() => setPhase("experience2")}
    goNext={() => setPhase("testimonials")}
  />
)}

{phase === "testimonials" && (
  <MacTestimonialsPage
    goBack={() => setPhase("projects")}
  />
)}

    </div>
  );
};

export default MacPortfolioScreen;