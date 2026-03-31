const Bed = ({ nodes, materials }) => {
  return (
    <>
      <group name="bed" position={[-265.01, 38.36, 623.54]} rotation={[0, 1.57, 0]}>
            <mesh
              name="cushion"
              geometry={nodes.cushion.geometry}
              material={materials.lines}
              castShadow
              receiveShadow
              position={[75.8, 146.7, -115.63]}
              rotation={[-0.89, 0, 0]}
              scale={[0.3, 0.3, 0.12]}
            />
            <mesh
              name="cushion1"
              geometry={nodes.cushion1.geometry}
              material={materials.purple}
              castShadow
              receiveShadow
              position={[75.41, 148.66, -72.91]}
              rotation={[-0.54, 0, 0]}
              scale={[0.23, 0.23, 0.09]}
            />
            <mesh
              name="cushion2"
              geometry={nodes.cushion2.geometry}
              material={materials.purple}
              castShadow
              receiveShadow
              position={[-64.72, 148.66, -72.91]}
              rotation={[-0.54, 0, 0]}
              scale={[0.23, 0.23, 0.09]}
            />
            <mesh
              name="cushion3"
              geometry={nodes.cushion3.geometry}
              material={materials.lines}
              castShadow
              receiveShadow
              position={[-64.6, 146.7, -115.63]}
              rotation={[-0.89, 0, 0]}
              scale={[0.3, 0.3, 0.12]}
            />
            <mesh
              name="bigwoodback"
              geometry={nodes.bigwoodback.geometry}
              material={materials.brown}
              castShadow
              receiveShadow
              position={[0, 111.03, -186.48]}
              rotation={[Math.PI, 0, -Math.PI]}
              scale={[0.73, 1, 0.02]}
            />
            <mesh
              name="longcushion"
              geometry={nodes.longcushion.geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[3, 118, -143.71]}
              scale={[1.09, 1, 0.45]}
            />
            <mesh
              name="cover1"
              geometry={nodes.cover1.geometry}
              material={materials.purple}
              castShadow
              receiveShadow
              position={[3, 85.85, 96.97]}
              scale={[1.43, 1, 1]}
            />
            <mesh
              name="base2"
              geometry={nodes.base2.geometry}
              material={materials.brown}
              castShadow
              receiveShadow
              position={[3, 36.99, 5.87]}
              scale={[1.5, 1.05, 1.05]}
            />
            <mesh
              name="bed1"
              geometry={nodes.bed1.geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[3, 85.57, 5.87]}
              scale={[1.42, 1, 1]}
            />
          </group>
    </>
  );
};

export default Bed;