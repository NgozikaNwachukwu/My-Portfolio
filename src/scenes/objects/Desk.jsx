const Desk = ({ nodes, materials }) => {
  return (
    <>
      <group name="Room_desk" position={[57.65, 197.36, -555.84]}>
            <group name="mug" position={[-100.15, 42.15, 64.18]} scale={[0.16, 0.21, 0.23]}>
              <mesh
                name="handle"
                geometry={nodes.handle.geometry}
                material={materials.purple}
                castShadow
                receiveShadow
                position={[87.82, 78.33, -8.74]}
                rotation={[0, 0, 2.45]}
                scale={[3.73, 3.73, 8.22]}
              />
              <mesh
                name="body"
                geometry={nodes.body.geometry}
                material={materials.purple}
                castShadow
                receiveShadow
                position={[16.93, 82.27, -10.59]}
                scale={1.45}
              />
            </group>
            <group
              name="Table lamp"
              position={[-131.01, 44.54, -29.47]}
              rotation={[-Math.PI, -0.02, -Math.PI]}
              scale={[0.59, 0.6, 0.59]}
            >
              <mesh
                name="Rectangle6"
                geometry={nodes.Rectangle6.geometry}
                material={materials['Rectangle6 Material']}
                castShadow
                receiveShadow
                position={[-10.81, 160.32, 2.04]}
                rotation={[Math.PI / 2, -0.28, 0]}
                scale={1}
              />
              <group name="body1" position={[0, 92.61, 1.5]} scale={1.43}>
                <mesh
                  name="Cube 213"
                  geometry={nodes['Cube 213'].geometry}
                  material={materials.black}
                  castShadow
                  receiveShadow
                  position={[-7.6, 50.12, 0]}
                  rotation={[0, 0, -0.27]}
                  scale={[0.58, 0.58, 0.25]}
                />
                <mesh
                  name="Cylinder 4"
                  geometry={nodes['Cylinder 4'].geometry}
                  material={materials.white_broken}
                  castShadow
                  receiveShadow
                  position={[25.86, 40.68, -5.3]}
                  rotation={[Math.PI / 2, -0.14, 0]}
                  scale={[0.69, 0.01, 0.69]}
                />
                <mesh
                  name="Cylinder 3"
                  geometry={nodes['Cylinder 3'].geometry}
                  material={materials.black}
                  castShadow
                  receiveShadow
                  position={[25.86, 40.68, 5.85]}
                  rotation={[Math.PI / 2, -0.14, 0]}
                  scale={[0.69, 0.01, 0.69]}
                />
                <mesh
                  name="Cylinder 22"
                  geometry={nodes['Cylinder 22'].geometry}
                  material={materials.greydarker}
                  castShadow
                  receiveShadow
                  position={[25.86, 40.68, 0.08]}
                  rotation={[Math.PI / 2, -0.14, 0]}
                  scale={[1.25, 0.04, 1.25]}
                />
                <mesh
                  name="Cylinder 6"
                  geometry={nodes['Cylinder 6'].geometry}
                  material={materials.greydarker}
                  castShadow
                  receiveShadow
                  position={[23.48, 24.09, 0.08]}
                  rotation={[0, 0, -0.14]}
                  scale={[0.55, 0.07, 0.55]}
                />
                <mesh
                  name="Cylinder 5"
                  geometry={nodes['Cylinder 5'].geometry}
                  material={materials.greydarker}
                  castShadow
                  receiveShadow
                  position={[13.71, -44.25, 0.08]}
                  rotation={[0, 0, -0.14]}
                  scale={[0.55, 0.07, 0.55]}
                />
                <mesh
                  name="Cylinder4"
                  geometry={nodes.Cylinder4.geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[18.86, -8.22, 0.08]}
                  rotation={[0, 0, -0.14]}
                  scale={0.42}
                />
              </group>
              <mesh
                name="base5"
                geometry={nodes.base5.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[1.05, 4.58, 2.77]}
                scale={[0.83, 0.83, 0.36]}
              />
            </group>
            <group name="Flowers" position={[147.85, 49.24, -20.07]} scale={0.48}>
              <group name="flowers1" position={[-4.25, 112.27, 24.49]} scale={2.1}>
                <group name="Group 31" position={[-6.09, 0, -6.77]} rotation={[-3.09, 0.99, 2.85]} scale={0.45}>
                  <mesh
                    name="Sphere 94"
                    geometry={nodes['Sphere 94'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-8.75, 52.5, 11.79]}
                    rotation={[-0.48, -0.77, 0.47]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 84"
                    geometry={nodes['Sphere 84'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-14.09, 60.35, -2.01]}
                    rotation={[-1.6, -0.87, 0.01]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 74"
                    geometry={nodes['Sphere 74'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-5.81, 52.79, -14.94]}
                    rotation={[-2.84, -0.38, -0.8]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 64"
                    geometry={nodes['Sphere 64'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[6.67, 40.84, -17.64]}
                    rotation={[2.8, 0.2, -0.69]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 54"
                    geometry={nodes['Sphere 54'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[14.77, 33.96, -9.85]}
                    rotation={[1.93, 0.66, -0.29]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 48"
                    geometry={nodes['Sphere 48'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[14.65, 32.29, 3.91]}
                    rotation={[1.21, 0.57, 0.36]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 38"
                    geometry={nodes['Sphere 38'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[8.72, 34.59, 16.01]}
                    rotation={[0.7, 0.2, 0.74]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 28"
                    geometry={nodes['Sphere 28'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-2.35, 43, 19.91]}
                    rotation={[0.31, -0.28, 0.86]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere9"
                    geometry={nodes.Sphere9.geometry}
                    material={materials.green_v2}
                    castShadow
                    receiveShadow
                    position={[3.77, 47.61, 0.13]}
                    rotation={[0, 0, 0.82]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Cube 214"
                    geometry={nodes['Cube 214'].geometry}
                    material={materials.green_v1}
                    castShadow
                    receiveShadow
                    position={[-25.1, 10.36, -3.38]}
                  />
                </group>
                <group name="Group 22" position={[-1.35, 1.49, 17.43]} rotation={[0, -1.53, -0.06]} scale={0.45}>
                  <mesh
                    name="Sphere 95"
                    geometry={nodes['Sphere 95'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-8.75, 52.5, 11.79]}
                    rotation={[-0.48, -0.77, 0.47]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 85"
                    geometry={nodes['Sphere 85'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-14.09, 60.35, -2.01]}
                    rotation={[-1.6, -0.87, 0.01]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 75"
                    geometry={nodes['Sphere 75'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-5.81, 52.79, -14.94]}
                    rotation={[-2.84, -0.38, -0.8]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 65"
                    geometry={nodes['Sphere 65'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[6.67, 40.84, -17.64]}
                    rotation={[2.8, 0.2, -0.69]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 55"
                    geometry={nodes['Sphere 55'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[14.77, 33.96, -9.85]}
                    rotation={[1.93, 0.66, -0.29]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 49"
                    geometry={nodes['Sphere 49'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[14.65, 32.29, 3.91]}
                    rotation={[1.21, 0.57, 0.36]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 39"
                    geometry={nodes['Sphere 39'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[8.72, 34.59, 16.01]}
                    rotation={[0.7, 0.2, 0.74]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 29"
                    geometry={nodes['Sphere 29'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-2.35, 43, 19.91]}
                    rotation={[0.31, -0.28, 0.86]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere10"
                    geometry={nodes.Sphere10.geometry}
                    material={materials.green_v2}
                    castShadow
                    receiveShadow
                    position={[3.77, 47.61, 0.13]}
                    rotation={[0, 0, 0.82]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Cube 215"
                    geometry={nodes['Cube 215'].geometry}
                    material={materials.green_v1}
                    castShadow
                    receiveShadow
                    position={[-25.1, 10.36, -3.38]}
                  />
                </group>
                <group name="Group2" position={[19.32, 1.86, 8.59]} scale={0.45}>
                  <mesh
                    name="Sphere 96"
                    geometry={nodes['Sphere 96'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-8.75, 52.5, 11.79]}
                    rotation={[-0.48, -0.77, 0.47]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 86"
                    geometry={nodes['Sphere 86'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-14.09, 60.35, -2.01]}
                    rotation={[-1.6, -0.87, 0.01]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 76"
                    geometry={nodes['Sphere 76'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-5.81, 52.79, -14.94]}
                    rotation={[-2.84, -0.38, -0.8]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 66"
                    geometry={nodes['Sphere 66'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[6.67, 40.84, -17.64]}
                    rotation={[2.8, 0.2, -0.69]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 56"
                    geometry={nodes['Sphere 56'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[14.77, 33.96, -9.85]}
                    rotation={[1.93, 0.66, -0.29]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 410"
                    geometry={nodes['Sphere 410'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[14.65, 32.29, 3.91]}
                    rotation={[1.21, 0.57, 0.36]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 310"
                    geometry={nodes['Sphere 310'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[8.72, 34.59, 16.01]}
                    rotation={[0.7, 0.2, 0.74]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere 210"
                    geometry={nodes['Sphere 210'].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-2.35, 43, 19.91]}
                    rotation={[0.31, -0.28, 0.86]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Sphere11"
                    geometry={nodes.Sphere11.geometry}
                    material={materials.green_v2}
                    castShadow
                    receiveShadow
                    position={[3.77, 47.61, 0.13]}
                    rotation={[0, 0, 0.82]}
                    scale={[0.13, 0.36, 0.36]}
                  />
                  <mesh
                    name="Cube 216"
                    geometry={nodes['Cube 216'].geometry}
                    material={materials.green_v1}
                    castShadow
                    receiveShadow
                    position={[-25.1, 10.36, -3.38]}
                  />
                </group>
              </group>
              <mesh
                name="jar1"
                geometry={nodes.jar1.geometry}
                material={materials.blue}
                castShadow
                receiveShadow
                position={[2.28, 54.86, 33.67]}
                scale={0.51}
              />
            </group>
            <group name="trash can" position={[137.78, -118, 89.9]} scale={[0.16, 0.14, 0.16]}>
              <mesh
                name="base6"
                geometry={nodes.base6.geometry}
                material={materials['base6 Material']}
                castShadow
                receiveShadow
                position={[0, -173.9, 0]}
                scale={[0.33, 0.77, 0.33]}
              />
              <mesh
                name="trash"
                geometry={nodes.trash.geometry}
                material={materials.metal}
                castShadow
                receiveShadow
                position={[0, 2.65, 0]}
                scale={0.49}
              />
            </group>
            <group name="desktop" position={[-2.85, -52.81, 30.58]} scale={[0.65, 0.7, 0.85]}>
              <group name="handles" position={[-199.42, 29.39, 99.09]} scale={0.09}>
                <mesh
                  name="handle1"
                  geometry={nodes.handle1.geometry}
                  material={materials['handle1 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 739.68, 0]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[-1, 1, 1]}
                />
                <mesh
                  name="handle2"
                  geometry={nodes.handle2.geometry}
                  material={materials['handle2 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 109.54, 0]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[-1, 1, 1]}
                />
                <mesh
                  name="handle3"
                  geometry={nodes.handle3.geometry}
                  material={materials['handle3 Material']}
                  castShadow
                  receiveShadow
                  position={[0, -739.68, 0]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[-1, 1, 1]}
                />
              </group>
              <mesh
                name="board_top"
                geometry={nodes.board_top.geometry}
                material={materials['board_top Material']}
                castShadow
                receiveShadow
                position={[0, 132.24, -38.74]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.09}
              />
              <mesh
                name="board_down_left"
                geometry={nodes.board_down_left.geometry}
                material={materials['board_down_left Material']}
                castShadow
                receiveShadow
                position={[-198.16, -134.9, -38.31]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={0.09}
              />
              <mesh
                name="board_down_right"
                geometry={nodes.board_down_right.geometry}
                material={materials['board_down_right Material']}
                castShadow
                receiveShadow
                position={[209.1, -134.9, -38.31]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={0.09}
              />
              <mesh
                name="board_up_right"
                geometry={nodes.board_up_right.geometry}
                material={materials.table}
                castShadow
                receiveShadow
                position={[209.1, 80, -38.31]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={0.09}
              />
              <mesh
                name="board_side_1"
                geometry={nodes.board_side_1.geometry}
                material={materials['board_side_1 Material']}
                castShadow
                receiveShadow
                position={[262.24, -5.03, -41.2]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={0.09}
              />
              <mesh
                name="board_side_2"
                geometry={nodes.board_side_2.geometry}
                material={materials['board_side_2 Material']}
                castShadow
                receiveShadow
                position={[155.8, -5.03, -38.27]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={0.09}
              />
              <mesh
                name="board_side_3"
                geometry={nodes.board_side_3.geometry}
                material={materials['board_side_3 Material']}
                castShadow
                receiveShadow
                position={[-133.13, -5.03, -37.79]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={0.09}
              />
              <mesh
                name="board_side_4"
                geometry={nodes.board_side_4.geometry}
                material={materials['board_side_4 Material']}
                castShadow
                receiveShadow
                position={[-263.13, -5.03, -41.2]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={0.09}
              />
              <mesh
                name="board_back"
                geometry={nodes.board_back.geometry}
                material={materials['board_back Material']}
                castShadow
                receiveShadow
                position={[10.81, 46.09, -167.16]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.09}
              />
              <mesh
                name="board_back_left"
                geometry={nodes.board_back_left.geometry}
                material={materials['board_back_left Material']}
                castShadow
                receiveShadow
                position={[-194.98, -5.03, -167.16]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.09}
              />
              <mesh
                name="board_back_right"
                geometry={nodes.board_back_right.geometry}
                material={materials['board_back_right Material']}
                castShadow
                receiveShadow
                position={[205.6, -5.03, -167.16]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.09}
              />
              <mesh
                name="drawer"
                geometry={nodes.drawer.geometry}
                material={materials.table}
                castShadow
                receiveShadow
                position={[-198.11, 98.57, 91.72]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.09}
              />
              <mesh
                name="drawer1"
                geometry={nodes.drawer1.geometry}
                material={materials.table}
                castShadow
                receiveShadow
                position={[-198.11, 37.59, 91.72]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.09}
              />
              <mesh
                name="drawer2"
                geometry={nodes.drawer2.geometry}
                material={materials.table}
                castShadow
                receiveShadow
                position={[-198.11, -65.82, 91.72]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.09}
              />
            </group>
          </group>
    </>
  );
};

export default Desk;