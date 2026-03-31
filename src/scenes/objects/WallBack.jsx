const WallBack = ({ nodes, materials }) => {
  return (
    <>
      <mesh
            name="Wall_Back"
            geometry={nodes.Wall_Back.geometry}
            material={materials['Wall_Back Material']}
            castShadow
            receiveShadow
            position={[-16.32, 331.65, -730.64]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-10, 6, 0.17]}
          />
    </>
  );
};

export default WallBack;