import { MeshDistortMaterial, useGLTF } from 'drei';
import React, { useRef } from 'react';
import { Mesh, MeshStandardMaterial } from 'three';

const ASSET_PATH = '/assets/diamond.glb';

export const Hand = () => {
  const { scene } = useGLTF(ASSET_PATH);

  const diamondMesh = useRef<Mesh | null>(null);

  const material2 = useRef<MeshStandardMaterial>(
    new MeshStandardMaterial({
      wireframe: true,
      color: 'pink',
      metalness: 2,
    })
  );

  scene.traverse(object => {
    if ('isMesh' in object) {
      diamondMesh.current = object;
    }
  });

  return (
    <group>
      {/* <primitive object={scene} position={[0, 0, 0]} /> */}
      {diamondMesh.current && (
        <>
          <mesh
            geometry={diamondMesh.current.geometry}
            material={material2.current}
            ref={diamondMesh}
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
