import { Html } from "@react-three/drei";
import { useRef, useState, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as TWEEN from "@tweenjs/tween.js";
import useSound from "use-sound";
import "../../index.css";

import hoverOverSoundFile from "../../assets/hover_over_object.mp3";

const GitHubFrame = ({ nodes, materials }) => {
  const visualRef = useRef();
  const labelRef = useRef();
  const hoverTweenGroup = useRef(new TWEEN.Group());
  const hoveredRef = useRef(false);

  const [hovered, setHovered] = useState(false);

  const [playHover] = useSound(hoverOverSoundFile, { volume: 0.35 });

  useLayoutEffect(() => {
    if (!visualRef.current) return;

    if (labelRef.current) {
      if (hovered) {
        labelRef.current.classList.add("active");
      } else {
        labelRef.current.classList.remove("active");
      }
    }

    hoverTweenGroup.current.removeAll();

    const targetScale = hovered
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

    return () => tween.stop();
  }, [hovered]);

  useFrame(() => {
    hoverTweenGroup.current.update();
  });

  const handlePointerEnter = (e) => {
    e.stopPropagation();
    if (hoveredRef.current) return;

    hoveredRef.current = true;
    setHovered(true);
    playHover();
  };

  const handlePointerLeave = (e) => {
    e.stopPropagation();
    if (!hoveredRef.current) return;

    hoveredRef.current = false;
    setHovered(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    window.open(
      "https://github.com/NgozikaNwachukwu",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <group
      name="github_frame_wrapper"
      position={[-416, 581.6, -544.11]}
    >
      <Html position={[0, 170, 0]} distanceFactor={3} center>
        <div ref={labelRef} className="label label--secondary">
          GitHub👩🏽‍💻 ↗
        </div>
      </Html>

      <mesh
        name="github_hitbox"
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
          name="gitHub_logo"
          position={[4.09, 53.87, 49.97]}
          rotation={[-1.69, 1.33, 1.69]}
          scale={[0.19, 0.22, 204.08]}
        >
          <mesh
            name="Shape 0"
            geometry={nodes["Shape 0"].geometry}
            material={materials["Shape 0 Material"]}
            castShadow
            receiveShadow
            position={[155.1, -385.8, 0]}
          />
          <mesh
            name="Shape 01"
            geometry={nodes["Shape 01"].geometry}
            material={materials["Shape 01 Material"]}
            castShadow
            receiveShadow
            position={[134.8, -382.6, 0.01]}
          />
          <mesh
            name="Shape 02"
            geometry={nodes["Shape 02"].geometry}
            material={materials["Shape 02 Material"]}
            castShadow
            receiveShadow
            position={[174.4, -383.2, 0.02]}
          />
          <mesh
            name="Shape 03"
            geometry={nodes["Shape 03"].geometry}
            material={materials["Shape 03 Material"]}
            castShadow
            receiveShadow
            position={[0, 0, 0.03]}
          />
          <mesh
            name="Shape 04"
            geometry={nodes["Shape 04"].geometry}
            material={materials["Shape 04 Material"]}
            castShadow
            receiveShadow
            position={[97.2, -344.9, 0.04]}
          />
          <mesh
            name="Shape 05"
            geometry={nodes["Shape 05"].geometry}
            material={materials["Shape 05 Material"]}
            castShadow
            receiveShadow
            position={[86.4, -336.1, 0.05]}
          />
          <mesh
            name="Shape 06"
            geometry={nodes["Shape 06"].geometry}
            material={materials["Shape 06 Material"]}
            castShadow
            receiveShadow
            position={[118.8, -372.4, 0.06]}
          />
          <mesh
            name="Shape 07"
            geometry={nodes["Shape 07"].geometry}
            material={materials["Shape 07 Material"]}
            castShadow
            receiveShadow
            position={[107.4, -357.7, 0.07]}
          />
        </group>

        <group
          name="Old Frame Picture 2"
          position={[-0.16, -79.6, 0]}
          rotation={[0, 1.56, 0]}
          scale={[0.85, 0.76, 0.85]}
        >
          <mesh
            name="supportpiece"
            geometry={nodes.supportpiece.geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[0.11, 43.13, -14.02]}
            rotation={[2.26, 0, -Math.PI]}
            scale={[0.56, 0.08, 1]}
          />
          <mesh
            name="background10"
            geometry={nodes.background10.geometry}
            material={materials.white}
            castShadow
            receiveShadow
            position={[0, 110.02, 22.85]}
            rotation={[-0.21, 0, 0]}
            scale={[0.63, 1, 1]}
          />
          <mesh
            name="frame10"
            geometry={nodes.frame10.geometry}
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

export default GitHubFrame;