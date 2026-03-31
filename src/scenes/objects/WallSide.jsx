const WallSide = ({ nodes, materials }) => {
  return (
    <>
      <mesh
            name="Wall_Side"
            geometry={nodes.Wall_Side.geometry}
            material={materials['Wall_Side Material']}
            castShadow
            receiveShadow
            position={[-475.91, 342.53, 17.08]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[10, 6, 0.2]}
          />
    </>
  );
};

export default WallSide;