const WallShelf1 = ({ nodes, materials }) => {
  return (
    <>
      <group name="wall_shelf_1" position={[-103.23, 532.86, -684.68]}>
            <group
              name="Books"
              position={[-13.88, -7.8, 27.97]}
              rotation={[-Math.PI, -1.51, -1.72]}
              scale={[0.33, 0.27, 0.41]}
            >
              <mesh
                name="Cube 34"
                geometry={nodes['Cube 34'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-5.53, 82.11, -2.25]}
                rotation={[0, 0.1, 0]}
                scale={[0.83, 1.68, 1.24]}
              />
              <mesh
                name="Cube 217"
                geometry={nodes['Cube 217'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-54.54, 73.07, -2.24]}
                scale={[1.4, 1.49, 1.25]}
              />
              <mesh
                name="Cube 35"
                geometry={nodes['Cube 35'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-18.75, 81.1, 10.9]}
                rotation={[0, 0.1, 0]}
                scale={[0.83, 1.68, 1.24]}
              />
              <mesh
                name="Cube12"
                geometry={nodes.Cube12.geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[-77.92, 72.18, 8.91]}
                scale={[1.4, 1.49, 1.25]}
              />
            </group>
            <group name="Plant_07" position={[99.53, -33.93, 16.07]} scale={[0.34, 0.33, 0.26]}>
              <mesh
                name="Cube 39"
                geometry={nodes['Cube 39'].geometry}
                material={materials['green-dark']}
                castShadow
                receiveShadow
                position={[58.48, 92.88, -0.93]}
                rotation={[-2.48, 0.95, -3]}
                scale={0.54}
              />
              <mesh
                name="Cube 391"
                geometry={nodes['Cube 391'].geometry}
                material={materials['green-dark']}
                castShadow
                receiveShadow
                position={[-25.93, 93.41, -13.83]}
                rotation={[0, 0.64, 0.87]}
                scale={0.54}
              />
              <mesh
                name="Cube 38"
                geometry={nodes['Cube 38'].geometry}
                material={materials['green-dark']}
                castShadow
                receiveShadow
                position={[17.34, 116.05, -18.78]}
                scale={0.54}
              />
              <mesh
                name="Cube 40"
                geometry={nodes['Cube 40'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-98.87, 148.3, -27.09]}
                rotation={[-1.03, 0.91, 1.21]}
                scale={[1.63, 1.72, 1.85]}
              />
              <mesh
                name="Cube 37"
                geometry={nodes['Cube 37'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-43.26, 112, -73.1]}
                rotation={[-1.05, 0.15, 0.27]}
                scale={[1.4, 1.48, 1.45]}
              />
              <mesh
                name="Cube 371"
                geometry={nodes['Cube 371'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[83.04, 120.48, -50.83]}
                rotation={[-0.82, -0.25, -0.86]}
                scale={1.45}
              />
              <group
                name="flower Instance 2"
                position={[-3.64, 185.24, -26.5]}
                rotation={[-0.37, 0.31, 1.03]}
                scale={0.54}
              >
                <mesh
                  name="Ellipse 2"
                  geometry={nodes['Ellipse 2'].geometry}
                  material={materials.red}
                  castShadow
                  receiveShadow
                  position={[-4.19, 9.62, 5.05]}
                  rotation={[-0.98, -0.23, -1.7]}
                  scale={1}
                />
                <mesh
                  name="Cylinder 23"
                  geometry={nodes['Cylinder 23'].geometry}
                  material={materials.yellow}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0]}
                  rotation={[2.71, -1.31, 2.09]}
                  scale={1}
                />
              </group>
              <group name="flower Instance" position={[63.36, 130.81, 42]} rotation={[0.31, 0.38, -0.21]} scale={0.54}>
                <mesh
                  name="Ellipse 21"
                  geometry={nodes['Ellipse 21'].geometry}
                  material={materials.red}
                  castShadow
                  receiveShadow
                  position={[-4.19, 9.62, 5.05]}
                  rotation={[-0.98, -0.23, -1.7]}
                  scale={1}
                />
                <mesh
                  name="Cylinder 24"
                  geometry={nodes['Cylinder 24'].geometry}
                  material={materials.yellow}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0]}
                  rotation={[2.71, -1.31, 2.09]}
                  scale={1}
                />
              </group>
              <group name="flower1" position={[-51.88, 115.65, 12.97]} scale={0.54}>
                <mesh
                  name="Ellipse 22"
                  geometry={nodes['Ellipse 22'].geometry}
                  material={materials.red}
                  castShadow
                  receiveShadow
                  position={[-4.19, 9.62, 5.05]}
                  rotation={[-0.98, -0.23, -1.7]}
                  scale={1}
                />
                <mesh
                  name="Cylinder 25"
                  geometry={nodes['Cylinder 25'].geometry}
                  material={materials.yellow}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0]}
                  rotation={[2.71, -1.31, 2.09]}
                  scale={1}
                />
              </group>
              <mesh
                name="Rectangle 32"
                geometry={nodes['Rectangle 32'].geometry}
                material={materials.earth}
                castShadow
                receiveShadow
                position={[-3.39, 80.4, -51.29]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.54, 0.48, 0.54]}
              />
              <mesh
                name="Cube 15"
                geometry={nodes['Cube 15'].geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[-46.98, 48.01, 21.14]}
                rotation={[0, 0, 0]}
                scale={1.29}
              />
            </group>
            <group name="Plant_09" position={[-105.64, -35.24, 11.62]} scale={[0.25, 0.31, 0.25]}>
              <mesh
                name="Cube 121"
                geometry={nodes['Cube 121'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[1.92, 121.89, -6.08]}
                rotation={[2.94, 1.13, -2.96]}
                scale={0.71}
              />
              <mesh
                name="Cylinder 26"
                geometry={nodes['Cylinder 26'].geometry}
                material={materials.soil}
                castShadow
                receiveShadow
                position={[-4.29, 65.12, -1.46]}
                scale={0.71}
              />
              <mesh
                name="Cube 9"
                geometry={nodes['Cube 9'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-6.94, 204.06, -5.1]}
                rotation={[0, 0.99, 0]}
                scale={0.71}
              />
              <mesh
                name="Cube 8"
                geometry={nodes['Cube 8'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[14, 181.93, -9.4]}
                rotation={[-0.33, -1.3, -0.3]}
                scale={0.71}
              />
              <mesh
                name="Cube 10"
                geometry={nodes['Cube 10'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[8.79, 210.17, 7.13]}
                rotation={[-3.01, -0.73, -3.03]}
                scale={0.71}
              />
              <mesh
                name="Cube 111"
                geometry={nodes['Cube 111'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-19.7, 122.06, 6.76]}
                rotation={[-2.72, 1.12, 2.73]}
                scale={0.71}
              />
              <mesh
                name="Cube 7"
                geometry={nodes['Cube 7'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[1.97, 162.61, -17.45]}
                rotation={[0, 0.26, 0]}
                scale={0.71}
              />
              <mesh
                name="Cube 6"
                geometry={nodes['Cube 6'].geometry}
                material={materials.blue}
                castShadow
                receiveShadow
                position={[-3.75, 27.83, -1.88]}
                scale={0.71}
              />
            </group>
            <group name="object_office_shelfwall" position={[-0.69, -43.29, -2.68]}>
              <mesh
                name="table"
                geometry={nodes.table.geometry}
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

export default WallShelf1;