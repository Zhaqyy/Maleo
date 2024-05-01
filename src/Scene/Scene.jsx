/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import Tape from "./Tape";

export default function Scene() {

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ near: 0.1, far: 50, position: [0, 0, 5], fov: 30 }}
    >
      <Suspense fallback={null}>
    
          <Tape rotation={[Math.PI / 2, 0, -Math.PI / 4]} position={[0.5,-1,-15]} />
      </Suspense>
      <ambientLight intensity={1} />
      <Environment files={"./city.hdr"} background={null} />
      {/* <OrbitControls ref={ref} autoRotate /> */}
    </Canvas>
  );
}
