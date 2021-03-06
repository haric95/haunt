import { Html, MeshDistortMaterial, useGLTF } from 'drei';
import React, { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { Mesh, MeshStandardMaterial } from 'three';

const ASSET_PATH = '/assets/hand.glb';

export const Hand = () => {
  const { scene } = useGLTF(ASSET_PATH);

  const { clock } = useThree();

  const handMesh = useRef<Mesh | null>(null);

  const handMeshs = {
    '1': useRef<Mesh | null>(null),
    '2': useRef<Mesh | null>(null),
    '3': useRef<Mesh | null>(null),
  };

  const material2 = useRef<MeshStandardMaterial>(
    new MeshStandardMaterial({
      wireframe: true,
      color: 'pink',
      metalness: 2,
    })
  );

  scene.traverse(object => {
    if ('isMesh' in object) {
      handMesh.current = object;
    }
  });

  // useFrame(() => {
  //   if (handMesh.current) {
  //     handMesh.current.position.y = Math.sin(clock.elapsedTime) / 20;
  //   }
  // });

  return (
    <group>
      {/* <primitive object={scene} position={[0, 0, 0]} /> */}
      {handMesh.current && (
        <>
          <mesh
            geometry={handMesh.current.geometry}
            material={material2.current}
            ref={handMeshs['1']}
          >
            <MeshDistortMaterial
              attach="material"
              factor={1} // Strength, 0 disables the effect (default=1)
              speed={0.33} // Speed (default=1)
              distort={1}
              radius={1.3}
              color="black"
              wireframe={true}
              metalness={3}
            />
          </mesh>
        </>
      )}
    </group>
  );
};
