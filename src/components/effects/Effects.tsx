import React, { useEffect, useRef } from "react";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  // DotScreen,
  Scanline,
  Vignette
} from "react-postprocessing";

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
      <Noise opacity={0.08} />
      <Bloom
        luminanceThreshold={50}
        luminanceSmoothing={100}
        height={300}
        intensity={10}
      />
    </EffectComposer>
  );
};
