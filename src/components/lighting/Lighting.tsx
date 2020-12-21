import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Color, Group, Vector3 } from "three";

export const Lighting = () => {
  const groupRef = useRef<Group | null>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotateOnAxis(new Vector3(0.06, 1, 0.2), 0.1);
      groupRef.current.rotateOnAxis(new Vector3(0, 0, 1), 0.07);
    }
  });

  return (
    <group ref={groupRef}>
      <directionalLight
        color={new Color("pink")}
        position={new Vector3(0.5, 8, 3)}
        intensity={0.7}
      />
      <directionalLight
        color={new Color("yellow")}
        position={new Vector3(1, 8, 9)}
        intensity={1}
      />
      <directionalLight
        color={new Color("white")}
        position={new Vector3(0, -7, 0)}
      />
    </group>
  );
};
