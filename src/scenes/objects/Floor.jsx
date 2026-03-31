const Floor = ({ nodes, materials }) => {
  return (
    <>
      <mesh
            name="floor"
            geometry={nodes.floor.geometry}
            material={materials['floor Material']}
            castShadow
            receiveShadow
            position={[-2.72, 35.7, 9.25]}
            scale={[10, 0.2, 15]}
          />
    </>
  );
};

export default Floor;