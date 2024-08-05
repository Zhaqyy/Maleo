/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React, { Suspense, lazy, useRef, useState } from "react";
import { Canvas
} from "@react-three/fiber";
import {
  Environment,
  PerformanceMonitor,
  Preload,

} from "@react-three/drei";
// import { Perf } from "r3f-perf";
const TapeScroll = lazy(() => import("./Tape"));

// function FrameLimiter({ fps = 60 }) {
//   const { advance, set, frameloop: initFrameloop } = useThree()
//   useLayoutEffect(() => {
//     let elapsed = 0
//     let then = 0
//     let raf = null
//     const interval = 1000 / fps
//     function tick(t) {
//       raf = requestAnimationFrame(tick)
//       elapsed = t - then
//       if (elapsed > interval) {
//         advance()
//         then = t - (elapsed % interval)
//       }
//     }
//     // Set frameloop to never, it will shut down the default render loop
//     set({ frameloop: 'never' })
//     // Kick off custom render loop
//     raf = requestAnimationFrame(tick)
//     // Restore initial setting
//     return () => {
//       cancelAnimationFrame(raf)
//       set({ frameloop: initFrameloop })
//     }
//   }, [fps])
// }
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
      {/* <Perf position="top-left" /> */}

      <Suspense fallback={null}>
        <TapeScroll TRef={ref} />
      </Suspense>
      <ambientLight intensity={1} />
      <Environment files={"./city.hdr"} background={null} />
      <Preload />
      {/* <FrameLimiter fps={60} /> */}
    </Canvas>
  );
}
