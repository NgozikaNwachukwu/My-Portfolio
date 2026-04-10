import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import popupSound from "../assets/pop-up_message.mp3";

const messages = [
  {
    id: 1,
    content: (
      <>
        Interested in a collab? Reach out to me at{" "}
        <a
          href="mailto:ngozikanwachukwu9@gmail.com"
          style={{
            color: "inherit",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            fontWeight: 600,
          }}
        >
          my email 💌
        </a>
        .
      </>
    ),
  },
  {
    id: 2,
    content: <>Did you find all the easter eggs? 👀</>,
  },
  {
    id: 3,
    content: (
      <>
        Hovers or sound not working properly? That’s okay! copy and paste the
        URL above ⬆️ into a new browser tab and it will continue to work.
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        Want a closer view? Click on the “+” button on the top left corner of
        the screen ↖️ to zoom in, and the “-” button ↙️ to zoom back out.
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        Click on the sun button on the bottom right of the screen ↘️ to enter dark
        mode.
      </>
    ),
  },
  {
    id: 6,
    content: <>View my projects and resume on the MacBook 👩🏽‍💻</>,
  },
];

export default function PopupMessages({ currentCameraMode }) {
  const [currentMessage, setCurrentMessage] = useState(null);
  const [isRendered, setIsRendered] = useState(false);
  const [animationStage, setAnimationStage] = useState("hidden"); // hidden | entering | visible | exiting

  const timersRef = useRef([]);
  const shownMessageIdsRef = useRef([]);

  const [playPopupSound] = useSound(popupSound, { volume: 0.45 });

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const getNextMessage = () => {
    let unseenMessages = messages.filter(
      (message) => !shownMessageIdsRef.current.includes(message.id)
    );

    // if all messages have already shown, reset and start fresh
    if (unseenMessages.length === 0) {
      shownMessageIdsRef.current = [];
      unseenMessages = [...messages];
    }

    const randomIndex = Math.floor(Math.random() * unseenMessages.length);
    const chosenMessage = unseenMessages[randomIndex];

    shownMessageIdsRef.current.push(chosenMessage.id);

    return chosenMessage;
  };

  const runPopupCycle = (delayBeforeShow = 9000) => {
    clearAllTimers();

    const showTimer = setTimeout(() => {
      if (currentCameraMode !== "default") return;

      const nextMessage = getNextMessage();

      setCurrentMessage(nextMessage);
      setIsRendered(true);
      setAnimationStage("entering");
      playPopupSound();

      const enterTimer = setTimeout(() => {
        setAnimationStage("visible");
      }, 40);

      const exitTimer = setTimeout(() => {
        setAnimationStage("exiting");
        playPopupSound();
      }, 9800);

      const removeTimer = setTimeout(() => {
        setAnimationStage("hidden");
        setIsRendered(false);
        setCurrentMessage(null);
      }, 10150);

      const nextCycleTimer = setTimeout(() => {
        if (currentCameraMode === "default") {
          runPopupCycle(15000);
        }
      }, 20000);

      timersRef.current.push(enterTimer, exitTimer, removeTimer, nextCycleTimer);
    }, delayBeforeShow);

    timersRef.current.push(showTimer);
  };

  useEffect(() => {
    if (currentCameraMode === "default") {
      runPopupCycle(7000);
    } else {
      clearAllTimers();
      setAnimationStage("hidden");
      setIsRendered(false);
      setCurrentMessage(null);
    }

    return () => {
      clearAllTimers();
    };
  }, [currentCameraMode]);

  if (!isRendered || !currentMessage) return null;

  let bubbleTransform = "translateX(-50%) translateY(0px) scale(1)";
  let bubbleOpacity = 1;

  if (animationStage === "entering") {
    bubbleTransform = "translateX(-50%) translateY(-10px) scale(0.72)";
    bubbleOpacity = 0;
  } else if (animationStage === "visible") {
    bubbleTransform = "translateX(-50%) translateY(0px) scale(1)";
    bubbleOpacity = 1;
  } else if (animationStage === "exiting") {
    bubbleTransform = "translateX(-50%) translateY(-14px) scale(1.08)";
    bubbleOpacity = 0;
  }

  return (
    <>
      <style>
        {`
          @keyframes popupBubbleFloat {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: bubbleTransform,
          opacity: bubbleOpacity,
          transition:
            animationStage === "exiting"
              ? "transform 0.24s ease-out, opacity 0.2s ease-out"
              : "transform 0.32s cubic-bezier(0.22, 1.15, 0.36, 1), opacity 0.18s ease-out",
          zIndex: 45,
          pointerEvents: "auto",
          maxWidth: "min(520px, calc(100vw - 32px))",
          width: "max-content",
        }}
      >
        <div
          style={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.14)",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            color: "white",
            borderRadius: "26px",
            padding: "12px 18px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.18)",
            fontFamily: "MontserratCustom, sans-serif",
            fontSize: "12.5px",
            fontWeight: 500,
            lineHeight: 1.45,
            letterSpacing: "0.01em",
            textAlign: "center",
            animation:
              animationStage === "visible"
                ? "popupBubbleFloat 3.6s ease-in-out infinite"
                : "none",
          }}
        >
          {currentMessage.content}
        </div>
      </div>
    </>
  );
}