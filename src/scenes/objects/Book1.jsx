import { Html } from "@react-three/drei";
import { useRef, useState, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as TWEEN from "@tweenjs/tween.js";
import useSound from "use-sound";

import hoverOverSoundFile from "../../assets/hover_over_object.mp3";
import swooshInSoundFile from "../../assets/zoom_in.mp3";
import swooshOutSoundFile from "../../assets/zoom_out.mp3";

const Book1 = ({
  nodes,
  materials,
  cameraMode,
  setCameraMode,
  isBookOverlayOpen,
  setIsBookOverlayOpen,
  isMobile = false,
}) => {
  const visualRef = useRef();
  const labelRef = useRef();
  const hoverTweenGroup = useRef(new TWEEN.Group());
  const hoveredRef = useRef(false);

  const [hovered, setHovered] = useState(false);

  const [playHover] = useSound(hoverOverSoundFile, { volume: 0.35 });
  const [playSwooshIn] = useSound(swooshInSoundFile, { volume: 0.35 });
  const [playSwooshOut] = useSound(swooshOutSoundFile, { volume: 0.35 });

  useLayoutEffect(() => {
  if (!visualRef.current) return;

  if (labelRef.current) {
    if (!isMobile && cameraMode === "default" && hovered) {
      labelRef.current.classList.add("active");
    } else {
      labelRef.current.classList.remove("active");
    }
  }

  hoverTweenGroup.current.removeAll();

  let targetScale;

  if (isMobile && cameraMode === "default") {
    targetScale = { x: 1, y: 1, z: 1.03 };
  } else {
    targetScale =
      cameraMode === "default" && hovered
        ? { x: 1.2, y: 1.2, z: 1.2 }
        : { x: 1, y: 1, z: 1.03 };
  }

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
}, [hovered, cameraMode, isMobile]);

useLayoutEffect(() => {
  if (cameraMode !== "default") {
    hoveredRef.current = false;
    setHovered(false);
  }
}, [cameraMode]);

useFrame(({ clock }) => {
  hoverTweenGroup.current.update();

  if (visualRef.current && isMobile && cameraMode === "default") {
    const t = clock.getElapsedTime();
    const bounce = 1 + Math.sin(t * 2.5) * 0.3;

    visualRef.current.scale.set(
      1 * bounce,
      1 * bounce,
      1.03 * bounce
    );
  }
});

const handlePointerEnter = (e) => {
  e.stopPropagation();

  if (isMobile) return;
  if (cameraMode !== "default") return;
  if (hoveredRef.current) return;

  hoveredRef.current = true;
  setHovered(true);
  playHover();
};

const handlePointerLeave = (e) => {
  e.stopPropagation();

  if (isMobile) return;
  if (cameraMode !== "default") return;
  if (!hoveredRef.current) return;

  hoveredRef.current = false;
  setHovered(false);
};

  const handleClick = (e) => {
    e.stopPropagation();
    if (cameraMode !== "default") return;

    hoveredRef.current = false;
    setHovered(false);
    setCameraMode("favoriteBook");
    playSwooshIn();
  };

  const handlePointerMissed = () => {
    if (cameraMode === "favoriteBook" && !isBookOverlayOpen) {
      setCameraMode("default");
      setIsBookOverlayOpen(false);
      playSwooshOut();
    }
  };

  return (
    <group
      name="book_1_wrapper"
      position={[-377.3, 400.11, -563.2]}
      onPointerMissed={handlePointerMissed}
    >
      <Html position={[100, 110, 0]} distanceFactor={3} center>
        <div ref={labelRef} className="label label--secondary">
          Book Favorites 📚
        </div>
      </Html>

      <mesh
        name="book_1_hitbox"
        position={[2.4, 13, 0]}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
      >
        <boxGeometry args={[100, 105, 100]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

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
  );
};

export default Book1;