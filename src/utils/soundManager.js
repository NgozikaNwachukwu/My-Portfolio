import popupSoundFile from "../assets/pop-up_message.mp3";
import startSoundFile from "../assets/start.mp3";
import hoverOverSoundFile from "../assets/hover_over_object.mp3";
import swooshInSoundFile from "../assets/zoom_in.mp3";
import swooshOutSoundFile from "../assets/zoom_out.mp3";
import roomPopSoundFile from "../assets/room_pop.mp3";
import lightsToggleSoundFile from "../assets/lights_on_or_off.mp3";

// Shared singleton audio instances for the whole app.
// We'll keep adding more sounds here as we refactor other files.
const sounds = {
  popup: createManagedAudio(popupSoundFile, 0.35),
  start: createManagedAudio(startSoundFile, 0.4),
  hover: createManagedAudio(hoverOverSoundFile, 0.35),
  swooshIn: createManagedAudio(swooshInSoundFile, 0.35),
  swooshOut: createManagedAudio(swooshOutSoundFile, 0.35),
  roomPop: createManagedAudio(roomPopSoundFile, 0.45),
  lightsToggle: createManagedAudio(lightsToggleSoundFile, 0.5),
};

function createManagedAudio(src, volume = 1) {
  const audio = new Audio(src);
  audio.preload = "auto";
  audio.volume = volume;

  return {
    audio,
    play() {
      try {
        audio.pause();
        audio.currentTime = 0;

        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch((error) => {
            console.warn(`Audio play failed for ${src}:`, error);
          });
        }
      } catch (error) {
        console.warn(`Audio play failed for ${src}:`, error);
      }
    },
    stop() {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (error) {
        console.warn(`Audio stop failed for ${src}:`, error);
      }
    },
    setVolume(newVolume) {
      audio.volume = newVolume;
    },
  };
}

export function playPopupSound() {
  sounds.popup.play();
}

export function stopPopupSound() {
  sounds.popup.stop();
}

export function playStartSound() {
  sounds.start.play();
}

export function stopStartSound() {
  sounds.start.stop();
}

export function playHoverSound() {
  sounds.hover.play();
}

export function stopHoverSound() {
  sounds.hover.stop();
}

export function playSwooshInSound() {
  sounds.swooshIn.play();
}

export function stopSwooshInSound() {
  sounds.swooshIn.stop();
}

export function playSwooshOutSound() {
  sounds.swooshOut.play();
}

export function stopSwooshOutSound() {
  sounds.swooshOut.stop();
}

export function playRoomPopSound() {
  sounds.roomPop.play();
}

export function stopRoomPopSound() {
  sounds.roomPop.stop();
}

export function playLightsToggleSound() {
  sounds.lightsToggle.play();
}

export function stopLightsToggleSound() {
  sounds.lightsToggle.stop();
}