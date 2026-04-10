import { Html } from "@react-three/drei";
import { useRef, useState, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as TWEEN from "@tweenjs/tween.js";
import useSound from "use-sound";
import "../../index.css";

import hoverOverSoundFile from "../../assets/hover_over_object.mp3";

const LinkedInFrame = ({ nodes, materials, isMobile = false }) => {
  const visualRef = useRef();
  const labelRef = useRef();
  const hoverTweenGroup = useRef(new TWEEN.Group());
  const hoveredRef = useRef(false);

  const [hovered, setHovered] = useState(false);

  const [playHover] = useSound(hoverOverSoundFile, { volume: 0.35 });
useLayoutEffect(() => {
  if (!visualRef.current) return;

  if (labelRef.current) {
    if (!isMobile && hovered) {
      labelRef.current.classList.add("active");
    } else {
      labelRef.current.classList.remove("active");
    }
  }

  hoverTweenGroup.current.removeAll();

  let targetScale;

  if (isMobile) {
    targetScale = { x: 1, y: 1, z: 1 };
  } else {
    targetScale = hovered
      ? { x: 1.2, y: 1.2, z: 1.2 }
      : { x: 1, y: 1, z: 1 };
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
}, [hovered, isMobile]);

useFrame(({ clock }) => {
  hoverTweenGroup.current.update();

  if (visualRef.current && isMobile) {
    const t = clock.getElapsedTime();
    const bounce = 1 + Math.sin(t * 2.2) * 0.25;

    visualRef.current.scale.set(
      1 * bounce,
      1 * bounce,
      1 * bounce
    );
  }
});

const handlePointerEnter = (e) => {
  e.stopPropagation();

  if (isMobile) return;
  if (hoveredRef.current) return;

  hoveredRef.current = true;
  setHovered(true);
  playHover();
};

const handlePointerLeave = (e) => {
  e.stopPropagation();

  if (isMobile) return;
  if (!hoveredRef.current) return;

  hoveredRef.current = false;
  setHovered(false);
};

  const handleClick = (e) => {
    e.stopPropagation();
    window.open(
      "https://www.linkedin.com/in/ngozika-nwachukwu",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <group
      name="linkedin_frame_wrapper"
      position={[-420.61, 584.6, -374.75]}
    >
      <Html position={[0, 170, 0]} distanceFactor={3} center>
        <div ref={labelRef} className="label label--secondary">
          LinkedIn🔗 ↗
        </div>
      </Html>

      <mesh
        name="linkedin_hitbox"
        position={[0, 35, 10]}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
      >
        <boxGeometry args={[120, 180, 40]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      <group ref={visualRef}>
        <group
          name="linkedin_logo"
          position={[5.5, 56.54, 46.22]}
          rotation={[-1.37, 1.28, 1.36]}
          scale={[0.17, 0.22, 1]}
        >
          <mesh
            name="Shape 08"
            geometry={nodes["Shape 08"].geometry}
            material={materials["Shape 08 Material"]}
            castShadow
            receiveShadow
            position={[7.03, -7.03, 0]}
          />
        </group>

        <group
          name="Old Frame Picture1"
          position={[0, -78.51, 0]}
          rotation={[0, 1.56, 0]}
          scale={[0.9, 0.75, 0.9]}
        >
          <mesh
            name="supportpiece1"
            geometry={nodes.supportpiece1.geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[0.11, 43.13, -14.02]}
            rotation={[2.26, 0, -Math.PI]}
            scale={[0.56, 0.08, 1]}
          />
          <mesh
            name="background11"
            geometry={nodes.background11.geometry}
            material={materials.white}
            castShadow
            receiveShadow
            position={[0, 110.02, 22.85]}
            rotation={[-0.21, 0, 0]}
            scale={[0.63, 1, 1]}
          />
          <mesh
            name="frame11"
            geometry={nodes.frame11.geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[0, 144.99, 13.49]}
            rotation={[-0.21, 0, 0]}
            scale={[0.69, 1, 0.05]}
          />
        </group>
      </group>
    </group>
  );
};

export default LinkedInFrame;