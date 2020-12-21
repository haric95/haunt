import { Box, Sphere } from "drei";
import React, { useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { Color } from "three";

export const Homepage = () => {
  const { clock } = useThree();

  const ref = useRef<any>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y = Math.sin(clock.elapsedTime) * 0.05;
    }
  });

  return (
    <>
      <Sphere ref={ref} args={[1, 20, 20]}>
        <meshStandardMaterial
          color="red"
          attach="material"
          metalness={1.2}
          emissive={new Color(0.2, 0.5, 0.8)}
        />
      </Sphere>
    </>
  );
};
