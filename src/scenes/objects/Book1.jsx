import { useRef, useState, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as TWEEN from "@tweenjs/tween.js";
import useSound from "use-sound";

import hoverOverSoundFile from "../../assets/hover_over_object.mp3";
import swooshInSoundFile from "../../assets/zoom_in.mp3";
import swooshOutSoundFile from "../../assets/zoom_out.mp3";

const Book1 = ({ nodes, materials, cameraMode, setCameraMode, setIsBookOverlayOpen }) => {
  const visualRef = useRef();
  const hoverTweenGroup = useRef(new TWEEN.Group());
  const [hovered, setHovered] = useState(false);

  const [playHover] = useSound(hoverOverSoundFile, { volume: 0.35 });
  const [playSwooshIn] = useSound(swooshInSoundFile, { volume: 0.35 });
  const [playSwooshOut] = useSound(swooshOutSoundFile, { volume: 0.35 });

  useLayoutEffect(() => {
    if (!visualRef.current) return;

    hoverTweenGroup.current.removeAll();

    const targetScale =
      hovered && cameraMode === "default"
        ? { x: 1.2, y: 1.2, z: 1.2 }
        : { x: 1, y: 1, z: 1 };

    const tween = new TWEEN.Tween(
      {
        x: visualRef.current.scale.x,
        y: visualRef.current.scale.y,
        z: visualRef.current.scale.z,
      },
      hoverTweenGroup.current
    )
      .to(targetScale, 220)
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate((obj) => {
        visualRef.current.scale.set(obj.x, obj.y, obj.z);
      });

    tween.start();

    return () => {
      tween.stop();
    };
  }, [hovered, cameraMode]);

  useFrame(() => {
    hoverTweenGroup.current.update();
  });

  return (
    <>
      <group
        name="book_1"
        position={[-377.3, 400.11, -563.2]}
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
          console.log("book 1 clicked");
          if (cameraMode === "default") {
            setCameraMode("favoriteBook");
            setHovered(false);
            playSwooshIn();
          }
        }}
        onPointerMissed={() => {
          if (cameraMode === "favoriteBook") {
            setCameraMode("default");
            setIsBookOverlayOpen(false);
            playSwooshOut();
          }
        }}
      >
        {hovered && cameraMode === "default" && (
          <Html position={[100, 110, 0]} distanceFactor={3} center>
            <div className="label label--secondary active">
              Book Favorites 📚
            </div>
          </Html>
        )}

        <group ref={visualRef} scale={[1, 1, 1.03]}>
          <mesh
            name="Cube 29"
            geometry={nodes["Cube 29"].geometry}
            material={materials.white}
            castShadow
            receiveShadow
            position={[2.39, 13.84, 0]}
            rotation={[0, 0, -Math.PI]}
            scale={[1.15, 1.05, 10.57]}
          />
          <mesh
            name="Cube9"
            geometry={nodes.Cube9.geometry}
            material={materials.red}
            castShadow
            receiveShadow
            position={[2.47, 11.64, 0]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={[1.23, 1.71, 0.22]}
          />
        </group>
      </group>
    </>
  );
};

export default Book1;