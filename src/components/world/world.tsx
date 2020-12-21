import React from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { Controls } from "../controls/Controls";
import { Homepage } from "../homepage/Homepage";

export const World = () => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <Controls />
      <Homepage />
    </Canvas>
  );
};
