const Rug = ({ nodes, materials }) => {
  return (
    <>
      <group name="rug" position={[78.42, 43.8, 46.58]} scale={[4.62, 1.52, 2.76]}>
            <mesh
              name="Rectangle 25"
              geometry={nodes['Rectangle 25'].geometry}
              material={materials.light_gold}
              castShadow
              receiveShadow
              position={[0, 1.91, -53.98]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[0.67, 0.66, 0.7]}
            />
            <mesh
              name="Rectangle4"
              geometry={nodes.Rectangle4.geometry}
              material={materials.gold}
              castShadow
              receiveShadow
              position={[0, 0, -70.08]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[0.87, 0.89, 0.91]}
            />
          </group>
    </>
  );
};

export default Rug;