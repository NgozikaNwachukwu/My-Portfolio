const ObjectCamera = ({ nodes, materials }) => {
  return (
    <>
      <group
            name="object_camera"
            position={[-340.24, 311.69, -581.98]}
            rotation={[-2.03, 1.07, 1.94]}
            scale={[0.18, 0.16, 0.18]}
          >
            <mesh
              name="buttonback2"
              geometry={nodes.buttonback2.geometry}
              material={materials.button}
              castShadow
              receiveShadow
              position={[-130.69, -4.92, -175.66]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="buttonback1"
              geometry={nodes.buttonback1.geometry}
              material={materials.button}
              castShadow
              receiveShadow
              position={[-130.69, 45.92, -175.66]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
              scale={1}
            />
            <mesh
              name="contornscreen"
              geometry={nodes.contornscreen.geometry}
              material={materials.screen}
              castShadow
              receiveShadow
              position={[27.92, -2.77, -179.48]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1.02}
            />
            <mesh
              name="screen2"
              geometry={nodes.screen2.geometry}
              material={materials.button}
              castShadow
              receiveShadow
              position={[27.92, -2.77, -183.19]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.91}
            />
            <mesh
              name="camera2"
              geometry={nodes.camera2.geometry}
              material={materials.camera}
              castShadow
              receiveShadow
              position={[0, -10.58, -73.48]}
              scale={[1.08, 1, 1]}
            />
            <mesh
              name="lens"
              geometry={nodes.lens.geometry}
              material={materials.cameralens}
              castShadow
              receiveShadow
              position={[17.91, -8.88, 18.94]}
              rotation={[1.59, 0, 0]}
            />
            <mesh
              name="focus"
              geometry={nodes.focus.geometry}
              material={materials.focus}
              castShadow
              receiveShadow
              position={[17.91, -5.78, 60.23]}
              rotation={[1.59, 0, 0]}
            />
            <mesh
              name="glass"
              geometry={nodes.glass.geometry}
              material={materials.button}
              castShadow
              receiveShadow
              position={[19.41, -10.58, 124.88]}
            />
            <mesh
              name="baseflash"
              geometry={nodes.baseflash.geometry}
              material={materials.pieceflashbase}
              castShadow
              receiveShadow
              position={[-135.77, 85.27, 36.73]}
              scale={[0.68, 0.68, 0.37]}
            />
            <mesh
              name="light"
              geometry={nodes.light.geometry}
              material={materials.focus}
              castShadow
              receiveShadow
              position={[155.65, 85.46, 28.83]}
              scale={0.68}
            />
            <mesh
              name="flash"
              geometry={nodes.flash.geometry}
              material={materials.flash}
              castShadow
              receiveShadow
              position={[-135.77, 85.46, 44.88]}
              scale={[0.68, 0.68, 0.37]}
            />
            <mesh
              name="button"
              geometry={nodes.button.geometry}
              material={materials.button}
              castShadow
              receiveShadow
              position={[-115.73, 118.91, -73.48]}
              scale={1}
            />
          </group>
    </>
  );
};

export default ObjectCamera;