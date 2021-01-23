import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Color } from 'three';
import { Controls } from '../controls/Controls';
import { Effects } from '../effects/Effects';
import { Hand } from '../hand/Hand';
import { Lighting } from '../lighting/Lighting';

export const World = () => {
  return (
    <div className="world">
      <Canvas className="canvas" style={{ position: 'fixed' }}>
        <Controls />
        <Lighting />
        <Suspense fallback={null}>{/* <Hand /> */}</Suspense>
        <Effects />
      </Canvas>
    </div>
  );
};
