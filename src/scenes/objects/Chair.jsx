const Chair = ({ nodes, materials }) => {
  return (
    <>
      <group
            name="Design Chair Living Room"
            position={[81.89, 47.85, -327.47]}
            rotation={[-Math.PI, 0.08, -Math.PI]}
            scale={[0.59, 0.5, 0.73]}
          >
            <mesh
              name="legs"
              geometry={nodes.legs.geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[-1.66, 70.2, -0.96]}
              scale={0.84}
            />
            <mesh
              name="cushion4"
              geometry={nodes.cushion4.geometry}
              material={materials.lines}
              castShadow
              receiveShadow
              position={[-0.2, 164.83, 65.99]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={2.17}
            />
            <mesh
              name="seat"
              geometry={nodes.seat.geometry}
              material={materials.lines}
              castShadow
              receiveShadow
              position={[0.11, 143.04, 0.27]}
              rotation={[0, 0, -Math.PI]}
              scale={[1.54, 0.31, 1.53]}
            />
          </group>
    </>
  );
};

export default Chair;