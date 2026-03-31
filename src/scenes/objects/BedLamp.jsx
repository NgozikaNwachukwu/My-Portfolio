const BedLamp = ({ nodes, materials }) => {
  return (
    <>
      <group name="bed_lamp" position={[-399.81, 535.26, 568.06]}>
            <mesh
              name="Sphere5"
              geometry={nodes.Sphere5.geometry}
              material={materials.light}
              castShadow
              receiveShadow
              position={[40.1, 34.14, -6.2]}
              rotation={[0, 0, -1.61]}
              scale={[0.25, 0.24, 0.25]}
            />
            <mesh
              name="lamp"
              geometry={nodes.lamp.geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[48.38, 35.2, -2.07]}
              rotation={[0.06, 0, 0]}
              scale={[0.63, 0.47, 0.63]}
            />
            <group
              name="Design Lamp"
              position={[-59.35, -10.5, 2.16]}
              rotation={[-1.54, -0.03, -1.61]}
              scale={[1.03, 0.46, 1]}
            >
              <mesh
                name="base1"
                geometry={nodes.base1.geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[-4.69, 4.54, -4.71]}
                scale={0.47}
              />
              <mesh
                name="tube"
                geometry={nodes.tube.geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[-5.73, 34.73, 0.88]}
                scale={[0.33, 0.59, 0.33]}
              />
            </group>
          </group>
    </>
  );
};

export default BedLamp;