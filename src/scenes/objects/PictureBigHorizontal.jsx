const PictureBigHorizontal = ({ nodes, materials }) => {
  return (
    <>
      <group name="picture_big_horizontal" position={[135.89, 316.95, -719.98]} scale={[0.45, 0.78, 0.11]}>
            <mesh
              name="Rectangle 27"
              geometry={nodes['Rectangle 27'].geometry}
              material={materials.light_gold}
              castShadow
              receiveShadow
              position={[0, 90.25, -3.1]}
              rotation={[0, 0, -Math.PI]}
              scale={[1.12, 2.38, 1.51]}
            />
            <mesh
              name="Cube17"
              geometry={nodes.Cube17.geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[0, 90.51, -118.11]}
              scale={[1.74, 1.12, 1.51]}
            />
            <mesh
              name="green"
              geometry={nodes.green.geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[-2.91, 90.58, -2.72]}
            />
            <mesh
              name="purple"
              geometry={nodes.purple.geometry}
              material={materials.red}
              castShadow
              receiveShadow
              position={[-7.21, 90.48, -2.59]}
            />
          </group>
    </>
  );
};

export default PictureBigHorizontal;