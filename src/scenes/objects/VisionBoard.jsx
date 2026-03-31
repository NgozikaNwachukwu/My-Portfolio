import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as TWEEN from "@tweenjs/tween.js";
import useSound from "use-sound";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { useSpring, animated } from "@react-spring/three";
import "../../index.css";

import hoverOverSoundFile from "../../assets/hover_over_object.mp3";
import swooshInSoundFile from "../../assets/zoom_in.mp3";
import swooshOutSoundFile from "../../assets/zoom_out.mp3";


const milestoneData = {
  vision_board_photo_1: {
    label: "First Day at RBCCM",
    image: "/images/rbccm.JPG",
    caption: "My first day at RBC Capital Markets Fall 2025.",
  },
  vision_board_photo_2: {
    label: "First Day @ RBC",
    image: "/images/first-day-selfies.JPG",
    caption: "My first day at RBC Winter 2026.",
  },
  vision_board_photo_3: {
    label: "RBCCM pictures",
    image: "/images/first-day-RBC.JPG",
    caption: "First day at RBC Capital Markets selfie.",
  },
  vision_board_photo_4: {
    label: "UofT Hackathon",
    image: "/images/UofT-hackathon.JPG",
    caption: "UofT Anthropic AI Hackathon.",
  },
  vision_board_photo_5: {
    label: "RBC Quest Lead",
    image: "/images/comm-lead-event.JPG",
    caption: "Community lead event @ Wards Island, Fall 2025.",
  },
  vision_board_photo_6: {
    label: "UOIT comp sci club",
    image: "/images/comp-sci-club.JPG",
    caption: "Invited to speak at UOIT Computer Science Club.",
  },
  vision_board_photo_7: {
    label: "My Uni",
    image: "/images/university.JPG",
    caption: "My first day at UOIT Winter 2023.",
  },
  vision_board_photo_8: {
    label: "First Career Fair",
    image: "/images/my-first-career-fair.JPG",
    caption: "My first ever career fair at UOIT.",
  },
  vision_board_photo_9: {
    label: "Painting club",
    image: "/images/painting-class.JPG",
    caption: "Joined a painting club at RBC.",
  },
  vision_board_photo_10: {
    label: "ASU Club",
    image: "/images/ASU-Event.JPG",
    caption: "Invited to speak at African Student Union UOIT.",
  },
};

const VisionBoard = ({ nodes, materials, cameraMode, setCameraMode, setSelectedVisionPhoto, }) => {
  const hoverTweenGroup = useRef(new TWEEN.Group());
  const wallRef = useRef();
  const wallHtmlRef = useRef();

  const photo1Ref = useRef();
  const photo2Ref = useRef();
  const photo3Ref = useRef();
  const photo4Ref = useRef();
  const photo5Ref = useRef();
  const photo6Ref = useRef();
  const photo7Ref = useRef();
  const photo8Ref = useRef();
  const photo9Ref = useRef();
  const photo10Ref = useRef();

  const photo1HtmlRef = useRef();
  const photo2HtmlRef = useRef();
  const photo3HtmlRef = useRef();
  const photo4HtmlRef = useRef();
  const photo5HtmlRef = useRef();
  const photo6HtmlRef = useRef();
  const photo7HtmlRef = useRef();
  const photo8HtmlRef = useRef();
  const photo9HtmlRef = useRef();
  const photo10HtmlRef = useRef();

  const [hovered, setHovered] = useState(false);
  const [hoveredPhoto, setHoveredPhoto] = useState(null);

  const [playHover] = useSound(hoverOverSoundFile, { volume: 0.35 });
  const [playSwooshIn] = useSound(swooshInSoundFile, { volume: 0.35 });
  const [playSwooshOut] = useSound(swooshOutSoundFile, { volume: 0.35 });

  const photoRefs = {
    vision_board_photo_1: photo1Ref,
    vision_board_photo_2: photo2Ref,
    vision_board_photo_3: photo3Ref,
    vision_board_photo_4: photo4Ref,
    vision_board_photo_5: photo5Ref,
    vision_board_photo_6: photo6Ref,
    vision_board_photo_7: photo7Ref,
    vision_board_photo_8: photo8Ref,
    vision_board_photo_9: photo9Ref,
    vision_board_photo_10: photo10Ref,
  };

  const photoHtmlRefs = {
    vision_board_photo_1: photo1HtmlRef,
    vision_board_photo_2: photo2HtmlRef,
    vision_board_photo_3: photo3HtmlRef,
    vision_board_photo_4: photo4HtmlRef,
    vision_board_photo_5: photo5HtmlRef,
    vision_board_photo_6: photo6HtmlRef,
    vision_board_photo_7: photo7HtmlRef,
    vision_board_photo_8: photo8HtmlRef,
    vision_board_photo_9: photo9HtmlRef,
    vision_board_photo_10: photo10HtmlRef,
  };

  const butterflyRotation = useSpring({
  from: { rotation: [0, 0, 0] },
  to: [
    { rotation: [0, 0, -0.14] },
    { rotation: [0, 0, 0] },
  ],
  config: {
    duration: 270,
    mass: 5,
    tension: 400,
    friction: 50,
    precision: 0.0001,
  },
  loop: true,
});

const butterfly2Rotation = useSpring({
  from: { rotation: [0, 0, 0] },
  to: [
    { rotation: [0, 0, -0.14] },
    { rotation: [0, 0, 0] },
  ],
  config: {
    duration: 240,
    mass: 5,
    tension: 400,
    friction: 50,
    precision: 0.0001,
  },
  loop: true,
});

const butterfly3Rotation = useSpring({
  from: { rotation: [0, 0, 0] },
  to: [
    { rotation: [0, 0, -0.14] },
    { rotation: [0, 0, 0] },
  ],
  config: {
    duration: 300,
    mass: 5,
    tension: 400,
    friction: 50,
    precision: 0.0001,
  },
  loop: true,
});

const butterfly4Rotation = useSpring({
  from: { rotation: [0, 0, 0] },
  to: [
    { rotation: [0, 0, -0.14] },
    { rotation: [0, 0, 0] },
  ],
  config: {
    duration: 260,
    mass: 5,
    tension: 400,
    friction: 50,
    precision: 0.0001,
  },
  loop: true,
});

const handlePhotoHoverEnter = (photoId) => {
  if (cameraMode !== "visionBoard") return;
  if (hoveredPhoto === photoId) return;

  setHoveredPhoto(photoId);
  playHover();
};

const handlePhotoHoverLeave = (photoId) => {
  if (cameraMode !== "visionBoard") return;
  setHoveredPhoto((current) => (current === photoId ? null : current));
};

 useLayoutEffect(() => {
  if (!wallRef.current) return;

  if (wallHtmlRef.current) {
    if (cameraMode === "default" && hovered) {
      wallHtmlRef.current.classList.add("active");
    } else {
      wallHtmlRef.current.classList.remove("active");
    }
  }

  hoverTweenGroup.current.removeAll();

  const targetScale =
    cameraMode === "default" && hovered
      ? { x: 1.2, y: 1.2, z: 1.2 }
      : { x: 1, y: 1, z: 1 };

  const wallTween = new TWEEN.Tween(
    {
      x: wallRef.current.scale.x,
      y: wallRef.current.scale.y,
      z: wallRef.current.scale.z,
    },
    hoverTweenGroup.current
  )
    .to(targetScale, 250)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate((obj) => {
      wallRef.current.scale.set(obj.x, obj.y, obj.z);
    });

  wallTween.start();

  return () => {
    wallTween.stop();
  };
}, [hovered, cameraMode]);

 useLayoutEffect(() => {
  Object.entries(photoRefs).forEach(([photoKey, ref]) => {
    if (!ref.current) return;

    const htmlRef = photoHtmlRefs[photoKey];
    const isActive =
      cameraMode === "visionBoard" && hoveredPhoto === photoKey;

    if (htmlRef.current) {
      if (isActive) {
        htmlRef.current.classList.add("active");
      } else {
        htmlRef.current.classList.remove("active");
      }
    }

    const targetScale = isActive
      ? { x: 1.15, y: 1.15, z: 1.15 }
      : { x: 1, y: 1, z: 1 };

    const tween = new TWEEN.Tween(
      {
        x: ref.current.scale.x,
        y: ref.current.scale.y,
        z: ref.current.scale.z,
      },
      hoverTweenGroup.current
    )
      .to(targetScale, 250)
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate((obj) => {
        ref.current.scale.set(obj.x, obj.y, obj.z);
      });

    tween.start();
  });
}, [hoveredPhoto, cameraMode]);

  useFrame(() => {
  hoverTweenGroup.current.update();
});

  return (
    <>
      
      <group
  ref={wallRef}
  name="vision_board"
  position={[-463.99, 416.66, 18.63]}
  onPointerMissed={() => {
  if (cameraMode === "visionBoard") {
    setHoveredPhoto(null);
    setCameraMode("default");
    playSwooshOut();
  }
}}
  onPointerEnter={() => {
    if (cameraMode === "default") {
      setHovered(true);
      playHover();
    }
  }}
  onPointerLeave={() => {
    if (cameraMode === "default") {
      setHovered(false);
    }
  }}
  onClick={() => {
    if (cameraMode === "default") {
      setCameraMode("visionBoard");
      playSwooshIn();
      setHovered(false);
      setHoveredPhoto(null);
    }
  }}
>
  <Html position={[0, 190, 10]} distanceFactor={0.8} center>
  <div ref={wallHtmlRef} className="label label--primary">
    Milestones ✨
  </div>
</Html>
        {/* PHOTO 1 */}
        <group
  ref={photo1Ref}
  name="vision_board_photo_1"
  position={[0.34, -44.56, -128.23]}
  onPointerEnter={(e) => {
    e.stopPropagation();
    if (cameraMode === "visionBoard") {
      setHoveredPhoto("vision_board_photo_1");
      playHover();
    }
  }}
  onPointerLeave={(e) => {
    e.stopPropagation();
    if (cameraMode === "visionBoard") {
      setHoveredPhoto((current) =>
        current === "vision_board_photo_1" ? null : current
      );
    }
  }}
  onClick={(e) => {
  e.stopPropagation();
  if (cameraMode === "visionBoard") {
    console.log("PHOTO 1 CLICKED");
    console.log(milestoneData.vision_board_photo_1);
    setSelectedVisionPhoto(milestoneData.vision_board_photo_1);
  }
}}
>
 <Html position={[0, 40, 0]} distanceFactor={0.8} center>
  <div ref={photo1HtmlRef} className="label label--secondary">
    {milestoneData.vision_board_photo_1.label}
  </div>
</Html>

          <mesh
            name="photo_1.JPG"
            geometry={nodes["photo_1.JPG"].geometry}
            material={materials["photo_1.JPG Material"]}
            castShadow
            receiveShadow
            position={[1.19, -0.1, 0.68]}
            rotation={[-1.51, 1.43, 1.51]}
            scale={[0.15, 0.17, 0.1]}
          />
          <group
            name="Old Frame Picture 8"
            position={[-2.72, -18.11, 0]}
            rotation={[0, 1.57, 0]}
            scale={[0.15, 0.17, 0.1]}
          >
            <mesh
              name="background"
              geometry={nodes.background.geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 110.02, 22.85]}
              rotation={[-0.21, 0, 0]}
              scale={[0.63, 1, 1]}
            />
            <mesh
              name="frame"
              geometry={nodes.frame.geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[0, 144.99, 13.49]}
              rotation={[-0.21, 0, 0]}
              scale={[0.69, 1, 0.05]}
            />
          </group>
        </group>

               {/* PHOTO 9 */}
        <group
          ref={photo9Ref}
          name="vision_board_photo_9"
          position={[0.17, -21.12, -70.76]}
          onPointerEnter={(e) => {
            e.stopPropagation();
            if (cameraMode === "visionBoard") {
              setHoveredPhoto("vision_board_photo_9");
              playHover();
            }
          }}
          onPointerLeave={(e) => {
            e.stopPropagation();
            if (cameraMode === "visionBoard") {
              setHoveredPhoto((current) =>
                current === "vision_board_photo_9" ? null : current
              );
            }
          }}
          onClick={(e) => {
            e.stopPropagation();
            if (cameraMode === "visionBoard") {
              setSelectedVisionPhoto(milestoneData.vision_board_photo_9);
            }
          }}
        >
          <Html position={[0, 40, 0]} distanceFactor={0.8} center>
            <div ref={photo9HtmlRef} className="label label--secondary">
              {milestoneData.vision_board_photo_9.label}
              </div>
          </Html>

          <mesh
            name="photo_9.JPG"
            geometry={nodes["photo_9.JPG"].geometry}
            material={materials["photo_9.JPG Material"]}
            castShadow
            receiveShadow
            position={[1.27, 0.62, 0.74]}
            rotation={[-1.5, 1.46, 1.5]}
            scale={[0.15, 0.17, 0.1]}
          />
          <group
            name="Old Frame Picture 11"
            position={[-2.24, -18.11, 0]}
            rotation={[0, 1.57, 0]}
            scale={[0.15, 0.17, 0.1]}
          >
            <mesh
              name="background1"
              geometry={nodes.background1.geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 110.02, 22.85]}
              rotation={[-0.21, 0, 0]}
              scale={[0.63, 1, 1]}
            />
            <mesh
              name="frame1"
              geometry={nodes.frame1.geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[0, 144.99, 13.49]}
              rotation={[-0.21, 0, 0]}
              scale={[0.69, 1, 0.05]}
            />
          </group>
        </group>

        <group name="vision_board_8_pics">
          {/* PHOTO 2 */}
          <group
            ref={photo2Ref}
            name="vision_board_photo_2"
            position={[0.21, 32.53, 8.48]}
            onPointerEnter={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto("vision_board_photo_2");
                playHover();
              }
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto((current) =>
                  current === "vision_board_photo_2" ? null : current
                );
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
               setSelectedVisionPhoto(milestoneData.vision_board_photo_2);
              }
            }}
          >
            <Html position={[0, 40, 0]} distanceFactor={0.8} center>
              <div ref={photo2HtmlRef} className="label label--secondary">
                {milestoneData.vision_board_photo_2.label}
                </div>
            </Html>

            <mesh
              name="photo 2.JPG"
              geometry={nodes["photo 2.JPG"].geometry}
              material={materials["photo 2.JPG Material"]}
              castShadow
              receiveShadow
              position={[1.38, 0.49, 0.91]}
              rotation={[-1.58, 1.46, 1.58]}
              scale={[0.15, 0.17, 0.1]}
            />
            <group
              name="Old Frame Picture 3"
              position={[-2.37, -18.11, 0]}
              rotation={[0, 1.57, 0]}
              scale={[0.15, 0.17, 0.1]}
            >
              <mesh
                name="background2"
                geometry={nodes.background2.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, 110.02, 22.85]}
                rotation={[-0.21, 0, 0]}
                scale={[0.63, 1, 1]}
              />
              <mesh
                name="frame2"
                geometry={nodes.frame2.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, 144.99, 13.49]}
                rotation={[-0.21, 0, 0]}
                scale={[0.69, 1, 0.05]}
              />
            </group>
          </group>

          {/* PHOTO 3 */}
          <group
            ref={photo3Ref}
            name="vision_board_photo_3"
            position={[0.68, -40.78, 156.66]}
            onPointerEnter={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto("vision_board_photo_3");
                playHover();
              }
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto((current) =>
                  current === "vision_board_photo_3" ? null : current
                );
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setSelectedVisionPhoto(milestoneData.vision_board_photo_3);
              }
            }}
          >
            <Html position={[0, 40, 0]} distanceFactor={0.8} center>
              <div ref={photo3HtmlRef} className="label label--secondary">
                {milestoneData.vision_board_photo_3.label}
                </div>
            </Html>

            <mesh
              name="photo 3.JPG"
              geometry={nodes["photo 3.JPG"].geometry}
              material={materials["photo 3.JPG Material"]}
              castShadow
              receiveShadow
              position={[1, 0.51, 0.64]}
              rotation={[-1.61, 1.44, 1.61]}
              scale={[0.15, 0.17, 0.1]}
            />
            <group
              name="Old Frame Picture 6"
              position={[-2.33, -18.11, 0]}
              rotation={[0, 1.57, 0]}
              scale={[0.15, 0.17, 0.1]}
            >
              <mesh
                name="background3"
                geometry={nodes.background3.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, 110.02, 22.85]}
                rotation={[-0.21, 0, 0]}
                scale={[0.63, 1, 1]}
              />
              <mesh
                name="frame3"
                geometry={nodes.frame3.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, 144.99, 13.49]}
                rotation={[-0.21, 0, 0]}
                scale={[0.69, 1, 0.05]}
              />
            </group>
          </group>

          {/* PHOTO 4 */}
          <group
            ref={photo4Ref}
            name="vision_board_photo_4"
            position={[0.39, -40.78, 100.17]}
            onPointerEnter={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto("vision_board_photo_4");
                playHover();
              }
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto((current) =>
                  current === "vision_board_photo_4" ? null : current
                );
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setSelectedVisionPhoto(milestoneData.vision_board_photo_4);
              }
            }}
          >
            <Html position={[0, 40, 0]} distanceFactor={0.8} center>
              <div ref={photo4HtmlRef} className="label label--secondary">
                {milestoneData.vision_board_photo_4.label}
                </div>
            </Html>

            <mesh
              name="photo 4.JPG"
              geometry={nodes["photo 4.JPG"].geometry}
              material={materials["photo 4.JPG Material"]}
              castShadow
              receiveShadow
              position={[0.97, 0.55, 0.45]}
              rotation={[-1.5, 1.42, 1.5]}
              scale={[0.15, 0.17, 0.1]}
            />
            <group
              name="Old Frame Picture 5"
              position={[-2.49, -18.11, 0]}
              rotation={[0, 1.57, 0]}
              scale={[0.15, 0.17, 0.1]}
            >
              <mesh
                name="background4"
                geometry={nodes.background4.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, 110.02, 22.85]}
                rotation={[-0.21, 0, 0]}
                scale={[0.63, 1, 1]}
              />
              <mesh
                name="frame4"
                geometry={nodes.frame4.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, 144.99, 13.49]}
                rotation={[-0.21, 0, 0]}
                scale={[0.69, 1, 0.05]}
              />
            </group>
          </group>

          {/* PHOTO 5 */}
          <group
            ref={photo5Ref}
            name="vision_board_photo_5"
            position={[1.52, -17.07, 64.41]}
            onPointerEnter={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto("vision_board_photo_5");
                playHover();
              }
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto((current) =>
                  current === "vision_board_photo_5" ? null : current
                );
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setSelectedVisionPhoto(milestoneData.vision_board_photo_5);
              }
            }}
          >
            <Html position={[0, 40, 0]} distanceFactor={0.8} center>
              <div ref={photo5HtmlRef}className="label label--secondary">
                {milestoneData.vision_board_photo_5.label}
                </div>
            </Html>

            <mesh
              name="photo 5.JPG"
              geometry={nodes["photo 5.JPG"].geometry}
              material={materials["photo 5.JPG Material"]}
              castShadow
              receiveShadow
              position={[1.05, 1.45, 0.84]}
              rotation={[-0.88, 1.4, 0.9]}
              scale={[0.15, 0.17, 0.1]}
            />
            <group
              name="Old Frame Picture 4"
              position={[-3.44, -18.11, 0]}
              rotation={[0, 1.57, 0]}
              scale={[0.15, 0.17, 0.1]}
            >
              <mesh
                name="background5"
                geometry={nodes.background5.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, 110.02, 22.85]}
                rotation={[-0.21, 0, 0]}
                scale={[0.63, 1, 1]}
              />
              <mesh
                name="frame5"
                geometry={nodes.frame5.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, 144.99, 13.49]}
                rotation={[-0.21, 0, 0]}
                scale={[0.69, 1, 0.05]}
              />
            </group>
          </group>

          {/* PHOTO 6 */}
          <group
            ref={photo6Ref}
            name="vision_board_photo_6"
            position={[0.81, 89.51, -145.36]}
            onPointerEnter={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto("vision_board_photo_6");
                playHover();
              }
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto((current) =>
                  current === "vision_board_photo_6" ? null : current
                );
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setSelectedVisionPhoto(milestoneData.vision_board_photo_6);
              }
            }}
          >
            <Html position={[0, 40, 0]} distanceFactor={0.8} center>
              <div ref={photo6HtmlRef} className="label label--secondary">
                {milestoneData.vision_board_photo_6.label}
                </div>
            </Html>

            <mesh
              name="photo 6.JPG"
              geometry={nodes["photo 6.JPG"].geometry}
              material={materials["photo 6.JPG Material"]}
              castShadow
              receiveShadow
              position={[0.8, 0.17, 0.94]}
              rotation={[-1.31, 1.38, 1.3]}
              scale={[0.15, 0.17, 0.1]}
            />
            <group
              name="Old Frame Picture 10"
              position={[-3.15, -18.11, 0]}
              rotation={[0, 1.57, 0]}
              scale={[0.15, 0.17, 0.1]}
            >
              <mesh
                name="background6"
                geometry={nodes.background6.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, 110.02, 22.85]}
                rotation={[-0.21, 0, 0]}
                scale={[0.63, 1, 1]}
              />
              <mesh
                name="frame6"
                geometry={nodes.frame6.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, 144.99, 13.49]}
                rotation={[-0.21, 0, 0]}
                scale={[0.69, 1, 0.05]}
              />
            </group>
          </group>

          {/* PHOTO 7 */}
          <group
            ref={photo7Ref}
            name="vision_board_photo_7"
            position={[0.46, -40.62, -18.31]}
            onPointerEnter={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto("vision_board_photo_7");
                playHover();
              }
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto((current) =>
                  current === "vision_board_photo_7" ? null : current
                );
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setSelectedVisionPhoto(milestoneData.vision_board_photo_7);
              }
            }}
          >
            <Html position={[0, 40, 0]} distanceFactor={0.8} center>
              <div ref={photo7HtmlRef} className="label label--secondary">
                {milestoneData.vision_board_photo_7.label}
                </div>
            </Html>

            <mesh
              name="photo 7.JPG"
              geometry={nodes["photo 7.JPG"].geometry}
              material={materials["photo 7.JPG Material"]}
              castShadow
              receiveShadow
              position={[0.72, 0.62, 1.19]}
              rotation={[-1.73, 1.44, 1.73]}
              scale={[0.15, 0.17, 0.1]}
            />
            <group
              name="Old Frame Picture 7"
              position={[-2.29, -18.11, 0]}
              rotation={[0, 1.57, 0]}
              scale={[0.15, 0.17, 0.1]}
            >
              <mesh
                name="background7"
                geometry={nodes.background7.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, 110.02, 22.85]}
                rotation={[-0.21, 0, 0]}
                scale={[0.63, 1, 1]}
              />
              <mesh
                name="frame7"
                geometry={nodes.frame7.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, 144.99, 13.49]}
                rotation={[-0.21, 0, 0]}
                scale={[0.69, 1, 0.05]}
              />
            </group>
          </group>

          {/* PHOTO 8 */}
          <group
            ref={photo8Ref}
            name="vision_board_photo_8"
            position={[1.01, 77.81, 102.41]}
            onPointerEnter={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto("vision_board_photo_8");
                playHover();
              }
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto((current) =>
                  current === "vision_board_photo_8" ? null : current
                );
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setSelectedVisionPhoto(milestoneData.vision_board_photo_8);
              }
            }}
          >
            <Html position={[0, 40, 0]} distanceFactor={0.8} center>
              <div ref={photo8HtmlRef} className="label label--secondary">
                {milestoneData.vision_board_photo_8.label}
                </div>
            </Html>

            <mesh
              name="photo 8.JPG"
              geometry={nodes["photo 8.JPG"].geometry}
              material={materials["photo 8.JPG Material"]}
              castShadow
              receiveShadow
              position={[0.81, 0.74, 0.68]}
              rotation={[-1.32, 1.4, 1.32]}
              scale={[0.15, 0.17, 0.1]}
            />
            <group
              name="Old Frame Picture"
              position={[-2.67, -18.11, -0.03]}
              rotation={[0, 1.56, 0]}
              scale={[0.15, 0.17, 0.1]}
            >
              <mesh
                name="background8"
                geometry={nodes.background8.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, 110.02, 22.85]}
                rotation={[-0.21, 0, 0]}
                scale={[0.63, 1, 1]}
              />
              <mesh
                name="frame8"
                geometry={nodes.frame8.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, 144.99, 13.49]}
                rotation={[-0.21, 0, 0]}
                scale={[0.69, 1, 0.05]}
              />
            </group>
          </group>

          {/* PHOTO 10 */}
          <group
            ref={photo10Ref}
            name="vision_board_photo_10"
            position={[1.77, 63.39, -71.76]}
            onPointerEnter={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto("vision_board_photo_10");
                playHover();
              }
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setHoveredPhoto((current) =>
                  current === "vision_board_photo_10" ? null : current
                );
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (cameraMode === "visionBoard") {
                setSelectedVisionPhoto(milestoneData.vision_board_photo_10);
              }
            }}
          >
            <Html position={[0, 40, 0]} distanceFactor={0.8} center>
              <div ref={photo10HtmlRef} className="label label--secondary">
                {milestoneData.vision_board_photo_10.label}
                </div>
            </Html>

            <mesh
              name="photo 10.JPG"
              geometry={nodes["photo 10.JPG"].geometry}
              material={materials["photo 10.JPG Material"]}
              castShadow
              receiveShadow
              position={[0.89, 0.86, 0.42]}
              rotation={[-1.56, 1.4, 1.56]}
              scale={[0.15, 0.17, 0.1]}
            />
            <group
              name="Old Frame Picture 9"
              position={[-2.53, -18.11, 0]}
              rotation={[0, 1.57, 0]}
              scale={[0.15, 0.17, 0.1]}
            >
              <mesh
                name="background9"
                geometry={nodes.background9.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, 110.02, 22.85]}
                rotation={[-0.21, 0, 0]}
                scale={[0.63, 1, 1]}
              />
              <mesh
                name="frame9"
                geometry={nodes.frame9.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, 144.99, 13.49]}
                rotation={[-0.21, 0, 0]}
                scale={[0.69, 1, 0.05]}
              />
            </group>
          </group>
          {/* KEEP ALL OF YOUR vision_board_wall MESHES EXACTLY AS THEY ALREADY ARE BELOW */}
          <group name="vision_board_wall" position={[-2.82, 0.28, 0.17]}>
                <group
                  name="butterfly 2"
                  position={[7.14, 131.08, -195.18]}
                  rotation={[1.64, -0.01, -1.52]}
                  scale={[0.03, 0.01, 0.03]}
                >
                  <mesh
                    name="Cube 27"
                    geometry={nodes['Cube 27'].geometry}
                    material={materials['Cube 27 Material']}
                    castShadow
                    receiveShadow
                    position={[-1.34, -89.18, 183.67]}
                    rotation={[-1.27, 0.1, -0.03]}
                    scale={0.61}
                  />
                  <group name="gradient 2" position={[1.94, -67.91, 58.56]} scale={0.61}>
                    <mesh
                      name="Torus 4"
                      geometry={nodes['Torus 4'].geometry}
                      material={materials['gradient 2']}
                      castShadow
                      receiveShadow
                      position={[-6.09, -31.97, 147.68]}
                      rotation={[1.1, 0, -Math.PI]}
                      scale={1}
                    />
                    <mesh
                      name="Cube 1"
                      geometry={nodes['Cube 1'].geometry}
                      material={materials['gradient 2']}
                      castShadow
                      receiveShadow
                      position={[0, 6, 49]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                    />
                    <mesh
                      name="Cube 17"
                      geometry={nodes['Cube 17'].geometry}
                      material={materials['gradient 2']}
                      castShadow
                      receiveShadow
                      position={[0.83, -0.83, 142.83]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                    />
                  </group>
                  <animated.group
                    name="gradient"
                    position={[0, 8.22, 0]}
                    scale={0.61}
                    rotation={butterfly2Rotation.rotation}
                  >
                    <mesh
                      name="Cube 26"
                      geometry={nodes['Cube 26'].geometry}
                      material={materials.gradient}
                      castShadow
                      receiveShadow
                      position={[278.58, -120.25, -105.23]}
                      rotation={[1.69, -0.04, 0.03]}
                      scale={[-1.3, 1.3, 0.17]}
                    />
                    <mesh
                      name="Cube 25"
                      geometry={nodes['Cube 25'].geometry}
                      material={materials['Cube 25 Material']}
                      castShadow
                      receiveShadow
                      position={[-220.76, -64.09, 216.7]}
                      rotation={[0.98, 0.04, -3.11]}
                      scale={[-1, 1, 0.13]}
                    />
                    <mesh
                      name="Cube 261"
                      geometry={nodes['Cube 261'].geometry}
                      material={materials.gradient}
                      castShadow
                      receiveShadow
                      position={[-287.26, -93.52, -118.08]}
                      rotation={[1.69, -0.04, 0.03]}
                      scale={[1.3, 1.3, 0.16]}
                    />
                    <mesh
                      name="Cube 24"
                      geometry={nodes['Cube 24'].geometry}
                      material={materials['Cube 24 Material']}
                      castShadow
                      receiveShadow
                      position={[215.4, -41.23, 216.3]}
                      rotation={[0.98, 0.04, -3.11]}
                      scale={[1, 1, 0.13]}
                    />
                  </animated.group>
                  <group name="yellow" position={[2.04, -52.84, 201.59]} scale={0.61}>
                    <mesh
                      name="Torus 3"
                      geometry={nodes['Torus 3'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[0.18, -21.92, -261.51]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[1, 1, 1.04]}
                    />
                    <mesh
                      name="Torus 2"
                      geometry={nodes['Torus 2'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[0.18, -21.92, -246.44]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[1, 1, 1.04]}
                    />
                    <mesh
                      name="Torus"
                      geometry={nodes.Torus.geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[0.18, -21.92, -230.16]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[1, 1, 1.04]}
                    />
                    <mesh
                      name="Cube 20"
                      geometry={nodes['Cube 20'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[-22.44, -18.79, -76.12]}
                      rotation={[Math.PI / 2, -0.08, 0]}
                      scale={1.75}
                    />
                    <mesh
                      name="Cube 19"
                      geometry={nodes['Cube 19'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[18.65, -22.02, -76.12]}
                      rotation={[-Math.PI / 2, 0.08, -Math.PI]}
                      scale={1.75}
                    />
                  </group>
                  <group name="black" position={[-2.92, -50.86, 151.34]} scale={0.61}>
                    <mesh
                      name="Sphere 4"
                      geometry={nodes['Sphere 4'].geometry}
                      material={materials['Sphere 4 Material']}
                      castShadow
                      receiveShadow
                      position={[-26.42, -2, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={0.55}
                    />
                    <mesh
                      name="Sphere 3"
                      geometry={nodes['Sphere 3'].geometry}
                      material={materials['Sphere 3 Material']}
                      castShadow
                      receiveShadow
                      position={[26.42, 2, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={0.55}
                    />
                  </group>
                  <group name="white" position={[2.27, -56.46, 143.86]} scale={0.61}>
                    <mesh
                      name="Sphere 2"
                      geometry={nodes['Sphere 2'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-22.82, 0, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={1.22}
                    />
                    <mesh
                      name="Sphere"
                      geometry={nodes.Sphere.geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[22.82, 0, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={1.22}
                    />
                  </group>
                  <mesh
                    name="Cube 16"
                    geometry={nodes['Cube 16'].geometry}
                    material={materials.pink}
                    castShadow
                    receiveShadow
                    position={[1.94, -64.22, 88.69]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={0.61}
                  />
                </group>
                <group
                  name="butterfly 4"
                  position={[7.15, -128.4, -194.42]}
                  rotation={[1.64, -0.01, -1.52]}
                  scale={[0.03, 0.01, 0.03]}
                >
                  <mesh
                    name="Cube 271"
                    geometry={nodes['Cube 271'].geometry}
                    material={materials['Cube 271 Material']}
                    castShadow
                    receiveShadow
                    position={[-1.34, -89.18, 183.67]}
                    rotation={[-1.27, 0.1, -0.03]}
                    scale={0.61}
                  />
                  <group name="gradient 21" position={[1.94, -67.91, 58.56]} scale={0.61}>
                    <mesh
                      name="Torus 41"
                      geometry={nodes['Torus 41'].geometry}
                      material={materials['gradient 2']}
                      castShadow
                      receiveShadow
                      position={[-6.09, -31.97, 147.68]}
                      rotation={[1.1, 0, -Math.PI]}
                      scale={1}
                    />
                    <mesh
                      name="Cube 11"
                      geometry={nodes['Cube 11'].geometry}
                      material={materials['gradient 2']}
                      castShadow
                      receiveShadow
                      position={[0, 6, 49]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                    />
                    <mesh
                      name="Cube 171"
                      geometry={nodes['Cube 171'].geometry}
                      material={materials['gradient 2']}
                      castShadow
                      receiveShadow
                      position={[0.83, -0.83, 142.83]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                    />
                  </group>
                  <animated.group
                    name="gradient1"
                    position={[0, 8.22, 0]}
                    scale={0.61}
                    rotation={butterfly4Rotation.rotation}
                  >
                    <mesh
                      name="Cube 262"
                      geometry={nodes['Cube 262'].geometry}
                      material={materials.gradient}
                      castShadow
                      receiveShadow
                      position={[278.58, -120.25, -105.23]}
                      rotation={[1.69, -0.04, 0.03]}
                      scale={[-1.3, 1.3, 0.17]}
                    />
                    <mesh
                      name="Cube 251"
                      geometry={nodes['Cube 251'].geometry}
                      material={materials['Cube 251 Material']}
                      castShadow
                      receiveShadow
                      position={[-220.76, -64.09, 216.7]}
                      rotation={[0.98, 0.04, -3.11]}
                      scale={[-1, 1, 0.13]}
                    />
                    <mesh
                      name="Cube 263"
                      geometry={nodes['Cube 263'].geometry}
                      material={materials.gradient}
                      castShadow
                      receiveShadow
                      position={[-287.26, -93.52, -118.08]}
                      rotation={[1.69, -0.04, 0.03]}
                      scale={[1.3, 1.3, 0.16]}
                    />
                    <mesh
                      name="Cube 241"
                      geometry={nodes['Cube 241'].geometry}
                      material={materials['Cube 241 Material']}
                      castShadow
                      receiveShadow
                      position={[215.4, -41.23, 216.3]}
                      rotation={[0.98, 0.04, -3.11]}
                      scale={[1, 1, 0.13]}
                    />
                  </animated.group>
                  <group name="yellow1" position={[2.04, -52.84, 201.59]} scale={0.61}>
                    <mesh
                      name="Torus 31"
                      geometry={nodes['Torus 31'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[0.18, -21.92, -261.51]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[1, 1, 1.04]}
                    />
                    <mesh
                      name="Torus 21"
                      geometry={nodes['Torus 21'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[0.18, -21.92, -246.44]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[1, 1, 1.04]}
                    />
                    <mesh
                      name="Torus1"
                      geometry={nodes.Torus1.geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[0.18, -21.92, -230.16]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[1, 1, 1.04]}
                    />
                    <mesh
                      name="Cube 201"
                      geometry={nodes['Cube 201'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[-22.44, -18.79, -76.12]}
                      rotation={[Math.PI / 2, -0.08, 0]}
                      scale={1.75}
                    />
                    <mesh
                      name="Cube 191"
                      geometry={nodes['Cube 191'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[18.65, -22.02, -76.12]}
                      rotation={[-Math.PI / 2, 0.08, -Math.PI]}
                      scale={1.75}
                    />
                  </group>
                  <group name="black1" position={[-2.92, -50.86, 151.34]} scale={0.61}>
                    <mesh
                      name="Sphere 41"
                      geometry={nodes['Sphere 41'].geometry}
                      material={materials['Sphere 41 Material']}
                      castShadow
                      receiveShadow
                      position={[-26.42, -2, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={0.55}
                    />
                    <mesh
                      name="Sphere 31"
                      geometry={nodes['Sphere 31'].geometry}
                      material={materials['Sphere 31 Material']}
                      castShadow
                      receiveShadow
                      position={[26.42, 2, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={0.55}
                    />
                  </group>
                  <group name="white1" position={[2.27, -56.46, 143.86]} scale={0.61}>
                    <mesh
                      name="Sphere 21"
                      geometry={nodes['Sphere 21'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-22.82, 0, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={1.22}
                    />
                    <mesh
                      name="Sphere1"
                      geometry={nodes.Sphere1.geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[22.82, 0, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={1.22}
                    />
                  </group>
                  <mesh
                    name="Cube 161"
                    geometry={nodes['Cube 161'].geometry}
                    material={materials.pink}
                    castShadow
                    receiveShadow
                    position={[1.94, -64.22, 88.69]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={0.61}
                  />
                </group>
                <group
                  name="butterfly 3"
                  position={[7.71, -130.06, 195.6]}
                  rotation={[1.64, -0.01, -1.52]}
                  scale={[0.03, 0.01, 0.03]}
                >
                  <mesh
                    name="Cube 272"
                    geometry={nodes['Cube 272'].geometry}
                    material={materials['Cube 272 Material']}
                    castShadow
                    receiveShadow
                    position={[-1.34, -89.18, 183.67]}
                    rotation={[-1.27, 0.1, -0.03]}
                    scale={0.61}
                  />
                  <group name="gradient 22" position={[1.94, -67.91, 58.56]} scale={0.61}>
                    <mesh
                      name="Torus 42"
                      geometry={nodes['Torus 42'].geometry}
                      material={materials['gradient 2']}
                      castShadow
                      receiveShadow
                      position={[-6.09, -31.97, 147.68]}
                      rotation={[1.1, 0, -Math.PI]}
                      scale={1}
                    />
                    <mesh
                      name="Cube 12"
                      geometry={nodes['Cube 12'].geometry}
                      material={materials['gradient 2']}
                      castShadow
                      receiveShadow
                      position={[0, 6, 49]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                    />
                    <mesh
                      name="Cube 172"
                      geometry={nodes['Cube 172'].geometry}
                      material={materials['gradient 2']}
                      castShadow
                      receiveShadow
                      position={[0.83, -0.83, 142.83]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                    />
                  </group>
                  <animated.group
                    name="gradient2"
                    position={[0, 8.22, 0]}
                    scale={0.61}
                    rotation={butterfly3Rotation.rotation}
                  >
                    <mesh
                      name="Cube 264"
                      geometry={nodes['Cube 264'].geometry}
                      material={materials.gradient}
                      castShadow
                      receiveShadow
                      position={[278.58, -120.25, -105.23]}
                      rotation={[1.69, -0.04, 0.03]}
                      scale={[-1.3, 1.3, 0.17]}
                    />
                    <mesh
                      name="Cube 252"
                      geometry={nodes['Cube 252'].geometry}
                      material={materials['Cube 252 Material']}
                      castShadow
                      receiveShadow
                      position={[-220.76, -64.09, 216.7]}
                      rotation={[0.98, 0.04, -3.11]}
                      scale={[-1, 1, 0.13]}
                    />
                    <mesh
                      name="Cube 265"
                      geometry={nodes['Cube 265'].geometry}
                      material={materials.gradient}
                      castShadow
                      receiveShadow
                      position={[-287.26, -93.52, -118.08]}
                      rotation={[1.69, -0.04, 0.03]}
                      scale={[1.3, 1.3, 0.16]}
                    />
                    <mesh
                      name="Cube 242"
                      geometry={nodes['Cube 242'].geometry}
                      material={materials['Cube 242 Material']}
                      castShadow
                      receiveShadow
                      position={[215.4, -41.23, 216.3]}
                      rotation={[0.98, 0.04, -3.11]}
                      scale={[1, 1, 0.13]}
                    />
                  </animated.group>
                  <group name="yellow2" position={[2.04, -52.84, 201.59]} scale={0.61}>
                    <mesh
                      name="Torus 32"
                      geometry={nodes['Torus 32'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[0.18, -21.92, -261.51]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[1, 1, 1.04]}
                    />
                    <mesh
                      name="Torus 22"
                      geometry={nodes['Torus 22'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[0.18, -21.92, -246.44]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[1, 1, 1.04]}
                    />
                    <mesh
                      name="Torus2"
                      geometry={nodes.Torus2.geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[0.18, -21.92, -230.16]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[1, 1, 1.04]}
                    />
                    <mesh
                      name="Cube 202"
                      geometry={nodes['Cube 202'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[-22.44, -18.79, -76.12]}
                      rotation={[Math.PI / 2, -0.08, 0]}
                      scale={1.75}
                    />
                    <mesh
                      name="Cube 192"
                      geometry={nodes['Cube 192'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[18.65, -22.02, -76.12]}
                      rotation={[-Math.PI / 2, 0.08, -Math.PI]}
                      scale={1.75}
                    />
                  </group>
                  <group name="black2" position={[-2.92, -50.86, 151.34]} scale={0.61}>
                    <mesh
                      name="Sphere 42"
                      geometry={nodes['Sphere 42'].geometry}
                      material={materials['Sphere 42 Material']}
                      castShadow
                      receiveShadow
                      position={[-26.42, -2, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={0.55}
                    />
                    <mesh
                      name="Sphere 32"
                      geometry={nodes['Sphere 32'].geometry}
                      material={materials['Sphere 32 Material']}
                      castShadow
                      receiveShadow
                      position={[26.42, 2, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={0.55}
                    />
                  </group>
                  <group name="white2" position={[2.27, -56.46, 143.86]} scale={0.61}>
                    <mesh
                      name="Sphere 22"
                      geometry={nodes['Sphere 22'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-22.82, 0, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={1.22}
                    />
                    <mesh
                      name="Sphere2"
                      geometry={nodes.Sphere2.geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[22.82, 0, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={1.22}
                    />
                  </group>
                  <mesh
                    name="Cube 162"
                    geometry={nodes['Cube 162'].geometry}
                    material={materials.pink}
                    castShadow
                    receiveShadow
                    position={[1.94, -64.22, 88.69]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={0.61}
                  />
                </group>
                <group
                  name="butterfly"
                  position={[7.42, 131.34, 193.89]}
                  rotation={[1.64, -0.01, -1.52]}
                  scale={[0.03, 0.01, 0.03]}
                >
                  <mesh
                    name="Cube 273"
                    geometry={nodes['Cube 273'].geometry}
                    material={materials['Cube 273 Material']}
                    castShadow
                    receiveShadow
                    position={[-1.34, -89.18, 183.67]}
                    rotation={[-1.27, 0.1, -0.03]}
                    scale={0.61}
                  />
                  <group name="gradient 23" position={[1.94, -67.91, 58.56]} scale={0.61}>
                    <mesh
                      name="Torus 43"
                      geometry={nodes['Torus 43'].geometry}
                      material={materials['gradient 2']}
                      castShadow
                      receiveShadow
                      position={[-6.09, -31.97, 147.68]}
                      rotation={[1.1, 0, -Math.PI]}
                      scale={1}
                    />
                    <mesh
                      name="Cube 13"
                      geometry={nodes['Cube 13'].geometry}
                      material={materials['gradient 2']}
                      castShadow
                      receiveShadow
                      position={[0, 6, 49]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                    />
                    <mesh
                      name="Cube 173"
                      geometry={nodes['Cube 173'].geometry}
                      material={materials['gradient 2']}
                      castShadow
                      receiveShadow
                      position={[0.83, -0.83, 142.83]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                    />
                  </group>
                  <animated.group
                    name="gradient3"
                    position={[0, 8.22, 0]}
                    scale={0.61}
                    rotation={butterflyRotation.rotation}
                  >
                    <mesh
                      name="Cube 266"
                      geometry={nodes['Cube 266'].geometry}
                      material={materials.gradient}
                      castShadow
                      receiveShadow
                      position={[278.58, -120.25, -105.23]}
                      rotation={[1.69, -0.04, 0.03]}
                      scale={[-1.3, 1.3, 0.17]}
                    />
                    <mesh
                      name="Cube 253"
                      geometry={nodes['Cube 253'].geometry}
                      material={materials['Cube 253 Material']}
                      castShadow
                      receiveShadow
                      position={[-220.76, -64.09, 216.7]}
                      rotation={[0.98, 0.04, -3.11]}
                      scale={[-1, 1, 0.13]}
                    />
                    <mesh
                      name="Cube 267"
                      geometry={nodes['Cube 267'].geometry}
                      material={materials.gradient}
                      castShadow
                      receiveShadow
                      position={[-287.26, -93.52, -118.08]}
                      rotation={[1.69, -0.04, 0.03]}
                      scale={[1.3, 1.3, 0.16]}
                    />
                    <mesh
                      name="Cube 243"
                      geometry={nodes['Cube 243'].geometry}
                      material={materials['Cube 243 Material']}
                      castShadow
                      receiveShadow
                      position={[215.4, -41.23, 216.3]}
                      rotation={[0.98, 0.04, -3.11]}
                      scale={[1, 1, 0.13]}
                    />
                  </animated.group>
                  <group name="yellow3" position={[2.04, -52.84, 201.59]} scale={0.61}>
                    <mesh
                      name="Torus 33"
                      geometry={nodes['Torus 33'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[0.18, -21.92, -261.51]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[1, 1, 1.04]}
                    />
                    <mesh
                      name="Torus 23"
                      geometry={nodes['Torus 23'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[0.18, -21.92, -246.44]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[1, 1, 1.04]}
                    />
                    <mesh
                      name="Torus3"
                      geometry={nodes.Torus3.geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[0.18, -21.92, -230.16]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[1, 1, 1.04]}
                    />
                    <mesh
                      name="Cube 203"
                      geometry={nodes['Cube 203'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[-22.44, -18.79, -76.12]}
                      rotation={[Math.PI / 2, -0.08, 0]}
                      scale={1.75}
                    />
                    <mesh
                      name="Cube 193"
                      geometry={nodes['Cube 193'].geometry}
                      material={materials.yellow}
                      castShadow
                      receiveShadow
                      position={[18.65, -22.02, -76.12]}
                      rotation={[-Math.PI / 2, 0.08, -Math.PI]}
                      scale={1.75}
                    />
                  </group>
                  <group name="black3" position={[-2.92, -50.86, 151.34]} scale={0.61}>
                    <mesh
                      name="Sphere 43"
                      geometry={nodes['Sphere 43'].geometry}
                      material={materials['Sphere 43 Material']}
                      castShadow
                      receiveShadow
                      position={[-26.42, -2, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={0.55}
                    />
                    <mesh
                      name="Sphere 33"
                      geometry={nodes['Sphere 33'].geometry}
                      material={materials['Sphere 33 Material']}
                      castShadow
                      receiveShadow
                      position={[26.42, 2, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={0.55}
                    />
                  </group>
                  <group name="white3" position={[2.27, -56.46, 143.86]} scale={0.61}>
                    <mesh
                      name="Sphere 23"
                      geometry={nodes['Sphere 23'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-22.82, 0, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={1.22}
                    />
                    <mesh
                      name="Sphere3"
                      geometry={nodes.Sphere3.geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[22.82, 0, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI]}
                      scale={1.22}
                    />
                  </group>
                  <mesh
                    name="Cube 163"
                    geometry={nodes['Cube 163'].geometry}
                    material={materials.pink}
                    castShadow
                    receiveShadow
                    position={[1.94, -64.22, 88.69]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={0.61}
                  />
                </group>
                <group
                  name="board"
                  position={[-9.09, -140.85, -1.62]}
                  rotation={[Math.PI, 1.57, -Math.PI]}
                  scale={[1.19, 1.36, 1.07]}
                >
                  <group name="papers" position={[0, 103.39, 10.23]} scale={2.02}>
                    <mesh
                      name="Cube 2"
                      geometry={nodes['Cube 2'].geometry}
                      material={materials.brown_v1}
                      castShadow
                      receiveShadow
                      position={[0, 0, 4.14]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[0.88, 0.88, 0.02]}
                    />
                    <mesh
                      name="Cube"
                      geometry={nodes.Cube.geometry}
                      material={materials.brown_v2}
                      castShadow
                      receiveShadow
                      position={[0, 0, -0.05]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[0.88, 0.88, 0.02]}
                    />
                  </group>
                  <group name="pines" position={[-3.54, 116.34, 8.85]} scale={2.02}>
                    <mesh
                      name="Sphere 34"
                      geometry={nodes['Sphere 34'].geometry}
                      material={materials.brown_v2}
                      castShadow
                      receiveShadow
                      position={[59.16, -24.97, 0]}
                      scale={0.88}
                    />
                    <mesh
                      name="Sphere 24"
                      geometry={nodes['Sphere 24'].geometry}
                      material={materials.brown_v2}
                      castShadow
                      receiveShadow
                      position={[61.32, 26.47, 0]}
                      scale={0.88}
                    />
                    <mesh
                      name="Sphere 9"
                      geometry={nodes['Sphere 9'].geometry}
                      material={materials.brown_v2}
                      castShadow
                      receiveShadow
                      position={[-61.32, -26.47, 0]}
                      scale={0.88}
                    />
                    <mesh
                      name="Sphere 8"
                      geometry={nodes['Sphere 8'].geometry}
                      material={materials.brown_v2}
                      castShadow
                      receiveShadow
                      position={[-26.86, -12.93, 0]}
                      scale={0.88}
                    />
                    <mesh
                      name="Sphere 7"
                      geometry={nodes['Sphere 7'].geometry}
                      material={materials.brown_v2}
                      castShadow
                      receiveShadow
                      position={[-36.5, -17.64, 0]}
                      scale={0.88}
                    />
                    <mesh
                      name="Sphere 6"
                      geometry={nodes['Sphere 6'].geometry}
                      material={materials.brown_v2}
                      castShadow
                      receiveShadow
                      position={[-40.15, 22, 0]}
                      scale={0.88}
                    />
                    <mesh
                      name="Sphere 5"
                      geometry={nodes['Sphere 5'].geometry}
                      material={materials.brown_v2}
                      castShadow
                      receiveShadow
                      position={[1.25, 6.56, 0]}
                      scale={0.88}
                    />
                    <mesh
                      name="Sphere 44"
                      geometry={nodes['Sphere 44'].geometry}
                      material={materials.brown_v2}
                      castShadow
                      receiveShadow
                      position={[10.31, -18.29, 0]}
                      scale={0.88}
                    />
                    <mesh
                      name="Sphere4"
                      geometry={nodes.Sphere4.geometry}
                      material={materials.brown_v2}
                      castShadow
                      receiveShadow
                      position={[29.6, 20.3, 0]}
                      scale={0.88}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
           </>
  );
};

export default VisionBoard;
