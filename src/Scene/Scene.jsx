/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React, { Suspense, lazy, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerformanceMonitor,
  Preload,

} from "@react-three/drei";
import { Perf } from "r3f-perf";
const TapeScroll = lazy(() => import("./Tape"));

export default function Scene() {
  const ref = useRef();
  const [dpr, setDpr] = useState(1.5)
  return (
    <Canvas
      shadows
      dpr={dpr}
      camera={{ near: 0.1, far: 50, position: [0, 0, 5], fov: 30 }}
    >
      <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} flipflops={3} onFallback={() => setDpr(1)} />
      <Perf position="top-left" />

      <Suspense fallback={null}>
        <TapeScroll TRef={ref} />
      </Suspense>
      <ambientLight intensity={1} />
      <Environment files={"./city.hdr"} background={null} />
      <Preload />
    </Canvas>
  );
}
