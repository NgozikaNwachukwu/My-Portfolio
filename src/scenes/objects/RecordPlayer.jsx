import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { useLayoutEffect, useState } from "react";
import { Html } from "@react-three/drei";
import * as TWEEN from "@tweenjs/tween.js";
import useSound from "use-sound";
import hoverOverSoundFile from "../../assets/hover_over_object.mp3";
import swooshInSoundFile from "../../assets/zoom_in.mp3";
import swooshOutSoundFile from "../../assets/zoom_out.mp3";


const RecordPlayer = ({ nodes, materials, cameraMode, setCameraMode, setIsRecordOverlayOpen }) => {
  const recordRef = useRef();
  const playerRef = useRef();
const playerHtmlRef = useRef();
const hoverTweenGroup = useRef(new TWEEN.Group());

const [hovered, setHovered] = useState(false);

const [playHover] = useSound(hoverOverSoundFile, { volume: 0.35 });
const [playSwooshIn] = useSound(swooshInSoundFile, { volume: 0.35 });
const [playSwooshOut] = useSound(swooshOutSoundFile, { volume: 0.35 });

  const needleMotion = useSpring({
    from: {
      position: [107.01, 51.81, -53.02],
      rotation: [-1.57, 0, -0.17],
    },
    to: [
      {
        position: [107.01, 54.2, -53.02],
        rotation: [-1.53, 0, -0.14],
      },
      {
        position: [107.01, 51.81, -53.02],
        rotation: [-1.57, 0, -0.17],
      },
    ],
    config: {
      duration: 900,
      mass: 5,
      tension: 400,
      friction: 50,
      precision: 0.0001,
    },
    loop: true,
  });

  useLayoutEffect(() => {
  if (!playerRef.current) return;

  if (playerHtmlRef.current) {
    if (cameraMode === "default" && hovered) {
      playerHtmlRef.current.classList.add("active");
    } else {
      playerHtmlRef.current.classList.remove("active");
    }
  }

  hoverTweenGroup.current.removeAll();

  const targetScale =
    cameraMode === "default" && hovered
      ? { x: 0.37, y: 0.68, z: 0.37 }
      : { x: 0.29, y: 0.58, z: 0.29 };

  const tween = new TWEEN.Tween(
    {
      x: playerRef.current.scale.x,
      y: playerRef.current.scale.y,
      z: playerRef.current.scale.z,
    },
    hoverTweenGroup.current
  )
    .to(targetScale, 250)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate((obj) => {
      playerRef.current.scale.set(obj.x, obj.y, obj.z);
    });

  tween.start();

  return () => {
    tween.stop();
  };
}, [hovered, cameraMode]);

  useFrame(() => {
    hoverTweenGroup.current.update();
    if (recordRef.current) {
      recordRef.current.rotation.y -= 0.05;
    }
  });

  return (
    <>
      <group
  ref={playerRef}
  name="record_player"
  position={[-400.71, 217.91, 344.62]}
  rotation={[0, 0, 0]}
  scale={[0.29, 0.58, 0.29]}
  onPointerMissed={() => {
    if (cameraMode === "recordPlayer") {
      setCameraMode("default");
      setIsRecordOverlayOpen(false);
      playSwooshOut();
    }
  }}
  onPointerEnter={(e) => {
    e.stopPropagation();
    if (cameraMode === "default") {
      setHovered(true);
      playHover();
    }
  }}
  onPointerLeave={(e) => {
    e.stopPropagation();
    if (cameraMode === "default") {
      setHovered(false);
    }
  }}
  onClick={(e) => {
  e.stopPropagation();
  console.log("RECORD CLICKED", cameraMode);

  if (cameraMode === "default") {
    console.log("SETTING CAMERA MODE TO recordPlayer");
    setCameraMode("recordPlayer");
    playSwooshIn();
    setHovered(false);
  }
}}
>

  <Html position={[0, 190, 10]} distanceFactor={0.8} center>
  <div ref={playerHtmlRef} className="label label--primary">
    Record Player 🎧
  </div>
</Html>

        <animated.mesh
          name="Cube10"
          geometry={nodes.Cube10.geometry}
          material={materials.main}
          castShadow
          receiveShadow
          position={needleMotion.position}
          rotation={needleMotion.rotation}
          scale={1.28}
        />

        <mesh
          name="Cylinder 21"
          geometry={nodes["Cylinder 21"].geometry}
          material={materials.main}
          castShadow
          receiveShadow
          position={[137.56, 49.81, 82.54]}
          rotation={[0, 0, 0]}
          scale={1.28}
        />

        <mesh
          name="Cylinder1"
          geometry={nodes.Cylinder1.geometry}
          material={materials.main}
          castShadow
          receiveShadow
          position={[109.87, 51.63, -93.44]}
          rotation={[0, 0, 0]}
          scale={1.28}
        />

        <mesh
          name="Rectangle 24"
          geometry={nodes["Rectangle 24"].geometry}
          material={materials.blue}
          castShadow
          receiveShadow
          position={[4.53, 2.16, -11.28]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.28}
        />

        <group ref={recordRef} position={[-17.6, 45.93, -6.74]}>
          <mesh
            name="red"
            geometry={nodes.red.geometry}
            material={materials.red}
            castShadow
            receiveShadow
            position={[0.06, -0.02, 0.03]}
            rotation={[0, 0, 0]}
            scale={[0.72, 0.09, 0.72]}
          />

          <mesh
            name="Cylinder2"
            geometry={nodes.Cylinder2.geometry}
            material={materials.main}
            castShadow
            receiveShadow
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[0.72, 1, 0.72]}
          />
        </group>
      </group>
    </>
  );
};

export default RecordPlayer;