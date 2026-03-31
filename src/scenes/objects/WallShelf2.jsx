const WallShelf2 = ({ nodes, materials }) => {
  return (
    <>
      <group name="wall_shelf_2" position={[-154.2, 395.26, -681.98]}>
            <group
              name="Design Plant"
              position={[-112.77, -40.67, 6.42]}
              rotation={[0, -1.55, 0]}
              scale={[0.16, 0.38, 0.24]}
            >
              <mesh
                name="branches"
                geometry={nodes.branches.geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[2.22, 127.99, -48.1]}
              />
              <mesh
                name="leaves"
                geometry={nodes.leaves.geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[3.32, 155.34, -57.55]}
              />
              <mesh
                name="land"
                geometry={nodes.land.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[1.48, 79.68, -56.72]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.24}
              />
              <mesh
                name="pot1"
                geometry={nodes.pot1.geometry}
                material={materials.lines}
                castShadow
                receiveShadow
                position={[1.48, 38.72, -56.72]}
                scale={1.24}
              />
            </group>
            <group name="mirror" position={[-8.4, -37.68, 14.39]} rotation={[-0.45, 0, 0]} scale={[0.22, 0.19, 0.31]}>
              <mesh
                name="Merged Geometry"
                geometry={nodes['Merged Geometry'].geometry}
                material={materials.grey}
                castShadow
                receiveShadow
                position={[-0.24, 171.14, 0.48]}
              />
              <mesh
                name="Rectangle 26"
                geometry={nodes['Rectangle 26'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, 169.54, 4.41]}
                scale={[0.74, 0.86, 0.79]}
              />
              <mesh
                name="Rectangle7"
                geometry={nodes.Rectangle7.geometry}
                material={materials.glass_blue}
                castShadow
                receiveShadow
                position={[0, 169.8, -5.33]}
                scale={[0.74, 0.86, 0.79]}
              />
            </group>
            <group name="plant" position={[103.01, -38.23, 14.12]} scale={[0.29, 0.33, 0.29]}>
              <mesh
                name="Cube 131"
                geometry={nodes['Cube 131'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-17.3, 193.92, -13.58]}
                rotation={[0.36, 0.84, -0.31]}
                scale={[0.67, 0.06, 0.7]}
              />
              <mesh
                name="Cube 61"
                geometry={nodes['Cube 61'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-11.3, 148.55, -17.42]}
                rotation={[-0.39, 0.34, 0.23]}
                scale={[1.13, 0.07, 0.68]}
              />
              <mesh
                name="Cube 81"
                geometry={nodes['Cube 81'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[11.52, 202.41, -6.34]}
                rotation={[0.72, -0.64, 0.65]}
                scale={[1.48, 0.17, 1.07]}
              />
              <mesh
                name="Cube 101"
                geometry={nodes['Cube 101'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-4.7, 195.16, 15.38]}
                rotation={[-2.88, -0.03, 3.03]}
                scale={[1.23, 0.15, 1.1]}
              />
              <mesh
                name="Cube 71"
                geometry={nodes['Cube 71'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-7.09, 208.14, 11.81]}
                rotation={[2.67, 0.5, -2.93]}
                scale={[1.29, 0.16, 1.08]}
              />
              <mesh
                name="Cube 91"
                geometry={nodes['Cube 91'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-17.6, 182.95, -9.49]}
                rotation={[-0.43, 0.77, 0.36]}
                scale={[1.63, 0.18, 1.47]}
              />
              <mesh
                name="Cube 112"
                geometry={nodes['Cube 112'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[16.99, 177.59, 9.21]}
                rotation={[-2.47, -1, -2.63]}
                scale={[1.36, 0.16, 1.47]}
              />
              <mesh
                name="Cube 14"
                geometry={nodes['Cube 14'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[8.37, 162.66, -20.33]}
                rotation={[-0.37, -0.33, -0.2]}
                scale={[1.6, 0.16, 1.42]}
              />
              <mesh
                name="Cube 151"
                geometry={nodes['Cube 151'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-14.57, 158.01, -1.75]}
                rotation={[-0.97, 1.3, 0.97]}
                scale={[1.46, 0.16, 1.47]}
              />
              <mesh
                name="Cube 54"
                geometry={nodes['Cube 54'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-12.76, 168.86, 15.83]}
                rotation={[-2.88, 0.53, 2.98]}
                scale={[1.51, 0.16, 1.42]}
              />
              <mesh
                name="Cube 122"
                geometry={nodes['Cube 122'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[1.88, 153.96, 20.54]}
                rotation={[-2.9, -0.09, -3.09]}
                scale={[1.35, 0.13, 1.58]}
              />
              <mesh
                name="Cube 48"
                geometry={nodes['Cube 48'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[13.98, 142.8, 17.31]}
                rotation={[-2.66, -0.63, -2.82]}
                scale={[1.17, 0.13, 1.39]}
              />
              <mesh
                name="Cube 36"
                geometry={nodes['Cube 36'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-21.4, 137.8, 9.31]}
                rotation={[-2.8, 1.01, 2.87]}
                scale={[1.3, 0.13, 1.27]}
              />
              <mesh
                name="Cube13"
                geometry={nodes.Cube13.geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[17.6, 135.63, -10.42]}
                rotation={[-0.57, -0.95, -0.49]}
                scale={[1.3, 0.13, 1.26]}
              />
              <mesh
                name="Cylinder5"
                geometry={nodes.Cylinder5.geometry}
                material={materials.glass_blue}
                castShadow
                receiveShadow
                position={[0.02, 14.44, -0.67]}
                scale={1.38}
              />
            </group>
            <group name="object_office_shelfwall 2" position={[-0.69, -47.58, -7.04]}>
              <mesh
                name="table1"
                geometry={nodes.table1.geometry}
                material={materials.brown_v2}
                castShadow
                receiveShadow
                position={[0.69, 4.79, 1.12]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1.07, 0.75, 0.24]}
              />
            </group>
          </group>
    </>
  );
};

export default WallShelf2;