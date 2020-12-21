import { Box, Text } from "drei";
import React from "react";
import { useFrame, useThree } from "react-three-fiber";

export const Homepage = () => {
  const { camera } = useThree();

  return (
    <>
      <Box>
        <meshBasicMaterial color="hotpink" attach="material" />
      </Box>
    </>
  );
};
