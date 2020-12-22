import React from "react";
import { Canvas } from "react-three-fiber";
import { Color } from "three";
import { Controls } from "../controls/Controls";
import { Effects } from "../effects/Effects";
import { Homepage } from "../homepage/Homepage";
import { Lighting } from "../lighting/Lighting";
import { Urkt } from "../urkt/Urkt";

export const World = () => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <Controls />
      <color attach="background" args={[0.01, 0.01, 0.01]} />
      <fog color={new Color(0.1, 0.1, 0.1)} attach="fog" near={8} far={30} />
      <Lighting />
      {/* <Homepage /> */}
      <Urkt />
      <Effects />
    </Canvas>
  );
};
