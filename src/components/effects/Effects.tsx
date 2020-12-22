import React from "react";
import { EffectComposer, Noise } from "react-postprocessing";

export const Effects = () => {
  return (
    <EffectComposer>
      {/* <Scanline density={1} opacity={0.05} /> */}
      {/* <DotScreen /> */}
      {/* <DepthOfField
        focalLength={0.01}
        focusDistance={100}
        blur={700}
        height={720}
        width={720}
      /> */}
      <Noise opacity={0.02} />
    </EffectComposer>
  );
};
