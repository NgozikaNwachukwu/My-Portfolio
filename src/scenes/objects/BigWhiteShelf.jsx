const BigWhiteShelf = ({ nodes, materials }) => {
  return (
    <>
     <group name="Big_white_shelf" position={[-389.27, 276.96, -454.4]}>
            <group
              name="Rubik's cube"
              position={[28.2, 121.78, -27.66]}
              rotation={[-0.21, 0.25, 0]}
              scale={[0.11, 0.13, 0.16]}
            >
              <mesh
                name="Cube 5"
                geometry={nodes['Cube 5'].geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[36.6, 36.18, -37.14]}
                scale={1.22}
              />
              <mesh
                name="Cube 4"
                geometry={nodes['Cube 4'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[36.6, 109.56, -37.14]}
                scale={1.22}
              />
              <mesh
                name="Cube 51"
                geometry={nodes['Cube 51'].geometry}
                material={materials.blue}
                castShadow
                receiveShadow
                position={[-36.6, 36.18, -37.14]}
                scale={1.22}
              />
              <mesh
                name="Cube 41"
                geometry={nodes['Cube 41'].geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[-36.6, 109.56, -37.14]}
                scale={1.22}
              />
              <mesh
                name="Cube 52"
                geometry={nodes['Cube 52'].geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[36.6, 36.18, 37.14]}
                scale={1.22}
              />
              <mesh
                name="Cube 53"
                geometry={nodes['Cube 53'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-36.6, 36.18, 37.14]}
                scale={1.22}
              />
              <mesh
                name="Cube 42"
                geometry={nodes['Cube 42'].geometry}
                material={materials.blue}
                castShadow
                receiveShadow
                position={[-36.6, 109.56, 37.14]}
                scale={1.22}
              />
              <mesh
                name="Cube 43"
                geometry={nodes['Cube 43'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[36.6, 109.56, 37.14]}
                scale={1.22}
              />
            </group>
            <group
              name="Cactus Flower"
              position={[46.32, 15.59, 85.91]}
              rotation={[0, -0.03, 0]}
              scale={[0.27, 0.34, 0.31]}
            >
              <mesh
                name="flower"
                geometry={nodes.flower.geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[1.83, 179.13, 4.21]}
                scale={0.65}
              />
              <mesh
                name="cactus"
                geometry={nodes.cactus.geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[1.49, 120.1, 1.74]}
                scale={1.01}
              />
              <group name="pot" position={[1.49, 49.77, 1.74]} scale={1.01}>
                <mesh
                  name="Cylinder 2"
                  geometry={nodes['Cylinder 2'].geometry}
                  material={materials.brown}
                  castShadow
                  receiveShadow
                  position={[0, 34.16, 0]}
                  scale={[0.92, 0.21, 0.92]}
                />
                <mesh
                  name="Cylinder"
                  geometry={nodes.Cylinder.geometry}
                  material={materials.brown}
                  castShadow
                  receiveShadow
                  position={[0, -1.84, 0]}
                  rotation={[0, 0, -Math.PI]}
                />
              </group>
            </group>
            <group name="Book Old" position={[30.7, -173.79, 13.76]} rotation={[-1.58, 0, 0]} scale={[0.63, 0.8, 0.63]}>
              <mesh
                name="centerpart"
                geometry={nodes.centerpart.geometry}
                material={materials.darkblue}
                castShadow
                receiveShadow
                position={[-64.9, 94.13, 0.38]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.24, 0.99, 0.04]}
              />
              <mesh
                name="paper"
                geometry={nodes.paper.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-4.53, 94.83, 1.21]}
                scale={[0.99, 0.99, 0.24]}
              />
              <mesh
                name="coverback"
                geometry={nodes.coverback.geometry}
                material={materials.blue}
                castShadow
                receiveShadow
                position={[-2, 94.13, -33.17]}
                scale={[0.99, 0.99, 0.04]}
              />
              <mesh
                name="coverfront"
                geometry={nodes.coverfront.geometry}
                material={materials.blue}
                castShadow
                receiveShadow
                position={[-2, 94.13, 35.59]}
                scale={[0.99, 0.99, 0.04]}
              />
            </group>
            <group
              name="book_mid"
              position={[36.47, -195.44, 87.71]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1.34]}
            >
              <mesh
                name="Cube 21"
                geometry={nodes['Cube 21'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0.7, 6.37, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[0.87, 0.87, 8.01]}
              />
              <mesh
                name="Cube1"
                geometry={nodes.Cube1.geometry}
                material={materials.gold}
                castShadow
                receiveShadow
                position={[0.77, 5.12, 0]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
                scale={[0.93, 1.3, 0.18]}
              />
            </group>
            <group name="book_2" position={[36.05, 41.47, -34.97]} rotation={[0.37, 0, 0]} scale={[0.24, 0.28, 0.24]}>
              <mesh
                name="Rectangle 2"
                geometry={nodes['Rectangle 2'].geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[4.06, 47.93, 21.14]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
              <mesh
                name="Rectangle"
                geometry={nodes.Rectangle.geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[-46.77, -98.71, 2.3]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.46}
              />
              <mesh
                name="Cube2"
                geometry={nodes.Cube2.geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[1.61, -6.91, 0.94]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
              <mesh
                name="coverback 3"
                geometry={nodes['coverback 3'].geometry}
                material={materials.Cover}
                castShadow
                receiveShadow
                position={[-63.85, -6.45, 1.32]}
                rotation={[-Math.PI, Math.PI / 2, 0]}
                scale={0.46}
              />
              <mesh
                name="coverback 2"
                geometry={nodes['coverback 2'].geometry}
                material={materials.Cover}
                castShadow
                receiveShadow
                position={[2.4, -6.45, 18.29]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
              <mesh
                name="coverback1"
                geometry={nodes.coverback1.geometry}
                material={materials.Cover}
                castShadow
                receiveShadow
                position={[2.4, -6.45, -16.17]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
            </group>
            <group name="Book 7" position={[36.05, 41.47, -14.44]} rotation={[0.37, 0, 0]} scale={[0.24, 0.28, 0.24]}>
              <mesh
                name="Rectangle 21"
                geometry={nodes['Rectangle 21'].geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[4.06, 47.93, 21.14]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
              <mesh
                name="Rectangle1"
                geometry={nodes.Rectangle1.geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[-46.77, -98.71, 2.3]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.46}
              />
              <mesh
                name="Cube3"
                geometry={nodes.Cube3.geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[1.61, -6.91, 0.94]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
              <mesh
                name="coverback 31"
                geometry={nodes['coverback 31'].geometry}
                material={materials.Cover}
                castShadow
                receiveShadow
                position={[-63.85, -6.45, 1.32]}
                rotation={[-Math.PI, Math.PI / 2, 0]}
                scale={0.46}
              />
              <mesh
                name="coverback 21"
                geometry={nodes['coverback 21'].geometry}
                material={materials.Cover}
                castShadow
                receiveShadow
                position={[2.4, -6.45, 18.29]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
              <mesh
                name="coverback2"
                geometry={nodes.coverback2.geometry}
                material={materials.Cover}
                castShadow
                receiveShadow
                position={[2.4, -6.45, -16.17]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
            </group>
            <group name="Book 6" position={[36.05, 41.47, 4]} rotation={[0.37, 0, 0]} scale={[0.24, 0.28, 0.24]}>
              <mesh
                name="Rectangle 22"
                geometry={nodes['Rectangle 22'].geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[4.06, 47.93, 21.14]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
              <mesh
                name="Rectangle2"
                geometry={nodes.Rectangle2.geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[-46.77, -98.71, 2.3]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.46}
              />
              <mesh
                name="Cube4"
                geometry={nodes.Cube4.geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[1.61, -6.91, 0.94]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
              <mesh
                name="coverback 32"
                geometry={nodes['coverback 32'].geometry}
                material={materials.Cover}
                castShadow
                receiveShadow
                position={[-63.85, -6.45, 1.32]}
                rotation={[-Math.PI, Math.PI / 2, 0]}
                scale={0.46}
              />
              <mesh
                name="coverback 22"
                geometry={nodes['coverback 22'].geometry}
                material={materials.Cover}
                castShadow
                receiveShadow
                position={[2.4, -6.45, 18.29]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
              <mesh
                name="coverback3"
                geometry={nodes.coverback3.geometry}
                material={materials.Cover}
                castShadow
                receiveShadow
                position={[2.4, -6.45, -16.17]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
            </group>
            <group name="Book" position={[36.05, 41.47, 22.93]} rotation={[0.37, 0, 0]} scale={[0.24, 0.28, 0.24]}>
              <mesh
                name="Rectangle 23"
                geometry={nodes['Rectangle 23'].geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[4.06, 47.93, 21.14]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
              <mesh
                name="Rectangle3"
                geometry={nodes.Rectangle3.geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[-46.77, -98.71, 2.3]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.46}
              />
              <mesh
                name="Cube5"
                geometry={nodes.Cube5.geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[1.61, -6.91, 0.94]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
              <mesh
                name="coverback 33"
                geometry={nodes['coverback 33'].geometry}
                material={materials.Cover}
                castShadow
                receiveShadow
                position={[-63.85, -6.45, 1.32]}
                rotation={[-Math.PI, Math.PI / 2, 0]}
                scale={0.46}
              />
              <mesh
                name="coverback 23"
                geometry={nodes['coverback 23'].geometry}
                material={materials.Cover}
                castShadow
                receiveShadow
                position={[2.4, -6.45, 18.29]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
              <mesh
                name="coverback4"
                geometry={nodes.coverback4.geometry}
                material={materials.Cover}
                castShadow
                receiveShadow
                position={[2.4, -6.45, -16.17]}
                rotation={[0, 0, -Math.PI]}
                scale={0.46}
              />
            </group>
            <group name="book_big 2" position={[6.19, -96.66, -108.79]} scale={[1.04, 1, 1.03]}>
              <mesh
                name="Cube 22"
                geometry={nodes['Cube 22'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[2.39, 13.84, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[1.15, 1.05, 10.57]}
              />
              <mesh
                name="Cube6"
                geometry={nodes.Cube6.geometry}
                material={materials.red}
                castShadow
                receiveShadow
                position={[2.47, 11.64, 0]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
                scale={[1.23, 1.71, 0.22]}
              />
            </group>
            <group name="book 5" position={[22.1, 151.49, 26.37]} rotation={[0.24, 0, 0]} scale={[0.16, 0.15, 0.16]}>
              <mesh
                name="paper1"
                geometry={nodes.paper1.geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[39.79, 38.2, -9.98]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.81, 2.91, 1.67]}
              />
              <mesh
                name="coverback5"
                geometry={nodes.coverback5.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[2.4, 0, -36.42]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.76, 2.91, 2.79]}
              />
              <mesh
                name="darkpart"
                geometry={nodes.darkpart.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[-141.29, 0, -1.26]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[3.66, 2.91, 5.27]}
              />
              <mesh
                name="coverfront1"
                geometry={nodes.coverfront1.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[1.72, 0, 36.01]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.76, 2.91, 3.2]}
              />
            </group>
            <group name="book 4" position={[22.1, 151.49, 53.8]} rotation={[0.24, 0, 0]} scale={[0.16, 0.15, 0.16]}>
              <mesh
                name="paper2"
                geometry={nodes.paper2.geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[39.79, 38.2, -9.98]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.81, 2.91, 1.67]}
              />
              <mesh
                name="coverback6"
                geometry={nodes.coverback6.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[2.4, 0, -36.42]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.76, 2.91, 2.79]}
              />
              <mesh
                name="darkpart1"
                geometry={nodes.darkpart1.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[-141.29, 0, -1.26]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[3.66, 2.91, 5.27]}
              />
              <mesh
                name="coverfront2"
                geometry={nodes.coverfront2.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[1.72, 0, 36.01]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.76, 2.91, 3.2]}
              />
            </group>
            <group name="book 3" position={[22.1, 151.49, 73.25]} rotation={[0.24, 0, 0]} scale={[0.16, 0.15, 0.16]}>
              <mesh
                name="paper3"
                geometry={nodes.paper3.geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[39.79, 38.2, -9.98]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.81, 2.91, 1.67]}
              />
              <mesh
                name="coverback7"
                geometry={nodes.coverback7.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[2.4, 0, -36.42]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.76, 2.91, 2.79]}
              />
              <mesh
                name="darkpart2"
                geometry={nodes.darkpart2.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[-141.29, 0, -1.26]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[3.66, 2.91, 5.27]}
              />
              <mesh
                name="coverfront3"
                geometry={nodes.coverfront3.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[1.72, 0, 36.01]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.76, 2.91, 3.2]}
              />
            </group>
            <group name="book 2" position={[22.1, 151.49, 96.5]} rotation={[0.24, 0, 0]} scale={[0.16, 0.15, 0.16]}>
              <mesh
                name="paper4"
                geometry={nodes.paper4.geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[39.79, 38.2, -9.98]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.81, 2.91, 1.67]}
              />
              <mesh
                name="coverback8"
                geometry={nodes.coverback8.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[2.4, 0, -36.42]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.76, 2.91, 2.79]}
              />
              <mesh
                name="darkpart3"
                geometry={nodes.darkpart3.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[-141.29, 0, -1.26]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[3.66, 2.91, 5.27]}
              />
              <mesh
                name="coverfront4"
                geometry={nodes.coverfront4.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[1.72, 0, 36.01]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.76, 2.91, 3.2]}
              />
            </group>
            <group name="book" position={[22.1, 151.49, 121.42]} rotation={[0.24, 0, 0]} scale={[0.16, 0.15, 0.16]}>
              <mesh
                name="paper5"
                geometry={nodes.paper5.geometry}
                material={materials.paper}
                castShadow
                receiveShadow
                position={[39.79, 38.2, -9.98]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.81, 2.91, 1.67]}
              />
              <mesh
                name="coverback9"
                geometry={nodes.coverback9.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[2.4, 0, -36.42]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.76, 2.91, 2.79]}
              />
              <mesh
                name="darkpart4"
                geometry={nodes.darkpart4.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[-141.29, 0, -1.26]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[3.66, 2.91, 5.27]}
              />
              <mesh
                name="coverfront5"
                geometry={nodes.coverfront5.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[1.72, 0, 36.01]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.76, 2.91, 3.2]}
              />
            </group>
            <group name="Books 3" position={[11.79, -89.59, 1.07]} rotation={[0, 1.48, 0]} scale={0.36}>
              <mesh
                name="Cube 3"
                geometry={nodes['Cube 3'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-5.53, 82.11, -2.25]}
                rotation={[0, 0.1, 0]}
                scale={[0.83, 1.68, 1.24]}
              />
              <mesh
                name="Cube 23"
                geometry={nodes['Cube 23'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-54.54, 73.07, -2.24]}
                scale={[1.4, 1.49, 1.25]}
              />
              <mesh
                name="Cube 44"
                geometry={nodes['Cube 44'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[45.08, 77.65, -2.25]}
                rotation={[-0.03, 0.1, 0.26]}
                scale={[0.83, 1.49, 1.24]}
              />
              <mesh
                name="Cube 45"
                geometry={nodes['Cube 45'].geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[32.61, 73.38, 10.9]}
                rotation={[-0.03, 0.1, 0.26]}
                scale={[0.83, 1.49, 1.24]}
              />
              <mesh
                name="Cube 31"
                geometry={nodes['Cube 31'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-18.75, 81.1, 10.9]}
                rotation={[0, 0.1, 0]}
                scale={[0.83, 1.68, 1.24]}
              />
              <mesh
                name="Cube7"
                geometry={nodes.Cube7.geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[-77.92, 72.18, 8.91]}
                scale={[1.4, 1.49, 1.25]}
              />
            </group>
            <group name="Books 2" position={[10.44, -89.59, 83.77]} rotation={[0, 1.48, 0]} scale={0.36}>
              <mesh
                name="Cube 32"
                geometry={nodes['Cube 32'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-5.53, 82.11, -2.25]}
                rotation={[0, 0.1, 0]}
                scale={[0.83, 1.68, 1.24]}
              />
              <mesh
                name="Cube 28"
                geometry={nodes['Cube 28'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-54.54, 73.07, -2.24]}
                scale={[1.4, 1.49, 1.25]}
              />
              <mesh
                name="Cube 46"
                geometry={nodes['Cube 46'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[45.08, 77.65, -2.25]}
                rotation={[-0.03, 0.1, 0.26]}
                scale={[0.83, 1.49, 1.24]}
              />
              <mesh
                name="Cube 47"
                geometry={nodes['Cube 47'].geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[32.61, 73.38, 10.9]}
                rotation={[-0.03, 0.1, 0.26]}
                scale={[0.83, 1.49, 1.24]}
              />
              <mesh
                name="Cube 33"
                geometry={nodes['Cube 33'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-18.75, 81.1, 10.9]}
                rotation={[0, 0.1, 0]}
                scale={[0.83, 1.68, 1.24]}
              />
              <mesh
                name="Cube8"
                geometry={nodes.Cube8.geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[-77.92, 72.18, 8.91]}
                scale={[1.4, 1.49, 1.25]}
              />
            </group>
            <group name="bookshelf" position={[0, 0, 0]} rotation={[0, 1.56, 0]} scale={[0.83, 0.49, 0.77]}>
              <mesh
                name="plank_back"
                geometry={nodes.plank_back.geometry}
                material={materials['plank_back Material']}
                castShadow
                receiveShadow
                position={[0.24, 24.51, -92.16]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[2.31, 2.68, 0.04]}
              />
              <mesh
                name="base"
                geometry={nodes.base.geometry}
                material={materials['base Material']}
                castShadow
                receiveShadow
                position={[0.45, -435.69, -4.76]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.17, 1.38, 0.64]}
              />
              <mesh
                name="shelf_3"
                geometry={nodes.shelf_3.geometry}
                material={materials['shelf_3 Material']}
                castShadow
                receiveShadow
                position={[0.45, 237.45, -0.92]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.05, 1.38, 0.64]}
              />
              <mesh
                name="shelf_2"
                geometry={nodes.shelf_2.geometry}
                material={materials['shelf_2 Material']}
                castShadow
                receiveShadow
                position={[0.45, 21.92, -0.92]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.05, 1.38, 0.64]}
              />
              <mesh
                name="shelf_1"
                geometry={nodes.shelf_1.geometry}
                material={materials['shelf_1 Material']}
                castShadow
                receiveShadow
                position={[0.45, -193.67, -0.92]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.05, 1.38, 0.64]}
              />
              <mesh
                name="plank_down"
                geometry={nodes.plank_down.geometry}
                material={materials['plank_down Material']}
                castShadow
                receiveShadow
                position={[0.45, -409.57, -1.56]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.05, 1.38, 0.64]}
              />
              <mesh
                name="cover"
                geometry={nodes.cover.geometry}
                material={materials['cover Material']}
                castShadow
                receiveShadow
                position={[0.45, 454.24, 0.03]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.05, 1.38, 0.64]}
              />
              <mesh
                name="plank_right"
                geometry={nodes.plank_right.geometry}
                material={materials['plank_right Material']}
                castShadow
                receiveShadow
                position={[-207.2, 0.04, 0]}
                scale={[0.04, 3.11, 0.64]}
              />
              <mesh
                name="plank_left"
                geometry={nodes.plank_left.geometry}
                material={materials['plank_left Material']}
                castShadow
                receiveShadow
                position={[207.2, 0.04, 0]}
                scale={[0.04, 3.11, 0.64]}
              />
            </group>
          </group>
    </>
  );
};

export default BigWhiteShelf;