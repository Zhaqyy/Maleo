/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Preload,

} from "@react-three/drei";
// import { Perf } from "r3f-perf";
import { TapeScroll } from "./Tape";
// import { useScroll, useTransform } from "framer-motion";

export default function Scene() {
  const ref = useRef();
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ near: 0.1, far: 50, position: [0, 0, 5], fov: 30 }}
    >
      {/* <Perf position="top-left" /> */}

      <Suspense fallback={null}>
        <TapeScroll TRef={ref} />
      </Suspense>
      <ambientLight intensity={1} />
      <Environment files={"./city.hdr"} background={null} />
      <Preload />
    </Canvas>
  );
}
