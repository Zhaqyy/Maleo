/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useScroll, useTransform } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
  Stage,
} from "@react-three/drei";

export const TapeScroll = (props) => {
  const Tref = useRef();

  return <Tape ref={Tref} />;
};

export default TapeScroll;

const order = {
  init: 0,
  tapeup: 0.02,
  tapeleft: 0.08,
  tapeleftend: 0.25,
  tapecenter: 0.3,
  tapecenterend: 0.36,
  tapescaleup: 0.38,
  tapescaleupend: 0.45,
  end: 1,
};

export const Tape = React.forwardRef((props, Tref) => {
  const { nodes, materials } = useGLTF("./cinta.glb");
  const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;

  const targetRotation = useRef([
    degreesToRadians(75),
    degreesToRadians(0),
    degreesToRadians(0),
  ]);
  const isRotating = useRef(true);

  // useFrame((state, delta) => {
  //   const time = state.clock.elapsedTime;
  //   if (scrollYProgress.get() < order.tapecenter) {
  //     isRotating.current = true; // Reset isRotating when scrolling back up
  //     // Tref.current.rotation.x = time;
  //     Tref.current.rotation.x = Math.sin(time);
  //     Tref.current.rotation.y = Math.cos(time);
  //   } else {
  //     if (isRotating.current) {
  //       isRotating.current = false;
  //     }
  //     Tref.current.rotation.x = targetRotation.current[0];
  //     Tref.current.rotation.y = targetRotation.current[1];
  //     Tref.current.rotation.z = targetRotation.current[2];
  //   }
  // });

  //   const shortestAngle = (from, to) => {
  //     const delta = (to - from) % (2 * Math.PI);
  //     return delta - Math.floor(delta / Math.PI + 0.5) * 2 * Math.PI;
  //   };

  //   useFrame((state, delta) => {
  //     const time = state.clock.elapsedTime;
  //     console.log(Tref.current.rotation);
  //     if (scrollYProgress.get() < order.tapecenter) {
  //       isRotating.current = true; // Reset isRotating when scrolling back up
  //       // Tref.current.rotation.x = time;
  //       Tref.current.rotation.x = Math.sin(time);
  // Tref.current.rotation.y = Math.cos(time);
  //     } else {
  //       if (isRotating.current) {
  //         isRotating.current = false;
  //       }
  //       // Smoothly interpolate to the nearest equivalent target rotation
  //       Tref.current.rotation.x = THREE.MathUtils.lerp(
  //         Tref.current.rotation.x,
  //         Tref.current.rotation.x +
  //           shortestAngle(Tref.current.rotation.x, targetRotation.current[0]),
  //         0.08
  //       );
  //       Tref.current.rotation.y = THREE.MathUtils.lerp(
  //         Tref.current.rotation.y,
  //         Tref.current.rotation.y +
  //           shortestAngle(Tref.current.rotation.y, targetRotation.current[1]),
  //         0.08
  //       );
  //       Tref.current.rotation.z = THREE.MathUtils.lerp(
  //         Tref.current.rotation.z,
  //         Tref.current.rotation.z +
  //           shortestAngle(Tref.current.rotation.z, targetRotation.current[2]),
  //         0.08
  //       );
  //     }
  //   });

  const capturedRotation = useRef([0, 0]);

  // useFrame((state, delta) => {
  //   const time = state.clock.elapsedTime;
  //   if (scrollYProgress.get() < order.tapecenter) {
  //     if (isRotating.current) {
  //       // Continue the time-based rotation before reaching tapecenter
  //       Tref.current.rotation.x = Math.sin(time);
  //       Tref.current.rotation.y = Math.cos(time);
  //     } else {
  //       // Damp the rotation back to captured values when scrolling back up
  //       Tref.current.rotation.x = THREE.MathUtils.damp(
  //         Tref.current.rotation.x,
  //         capturedRotation.current[0],
  //         2,
  //         delta
  //       );
  //       Tref.current.rotation.y = THREE.MathUtils.damp(
  //         Tref.current.rotation.y,
  //         capturedRotation.current[1],
  //         2,
  //         delta
  //       );
  //     }
  //     // console.log('rotation:', Tref.current.rotation);
  //     console.log("curent stop 1:", capturedRotation.current);
  //   } else {
  //     if (isRotating.current) {
  //       isRotating.current = false;
  //       // Capture the current rotation values
  //       capturedRotation.current = [
  //         Tref.current.rotation.x,
  //         Tref.current.rotation.y,
  //         // Tref.current.rotation.z,
  //       ];
  //       console.log("curent stop:", capturedRotation.current);
  //     }
  //   }
  // });

const interpolationFactor = useRef(1);

useFrame((state, delta) => {
  const time = state.clock.elapsedTime;

  if (scrollYProgress.get() > order.tapecenter) {
    isRotating.current = true; // Reset isRotating when scrolling back up

    Tref.current.rotation.x = THREE.MathUtils.damp(
      Tref.current.rotation.x,
      capturedRotation.current[0],
      2,
      delta
    );
    Tref.current.rotation.y = THREE.MathUtils.damp(
      Tref.current.rotation.y,
      capturedRotation.current[1],
      2,
      delta
    );

    // console.log('rotation:', Tref.current.rotation);
    console.log("curent stop 1:", capturedRotation.current);
  } else {
    if (isRotating.current) {
      isRotating.current = false;
      // Capture the current rotation values
      capturedRotation.current = [
        Tref.current.rotation.x,
        Tref.current.rotation.y,
      ];
      interpolationFactor.current = 0; // Reset interpolation factor
      console.log("curent stop:", capturedRotation.current);
    } else {
      if (interpolationFactor.current < 1) {
        // Smoothly transition from captured rotation to new time-based rotation
        interpolationFactor.current += delta * 0.5; // Adjust the speed of interpolation

        Tref.current.rotation.x = THREE.MathUtils.lerp(
          capturedRotation.current[0],
          Math.sin(time),
          interpolationFactor.current
        );
        Tref.current.rotation.y = THREE.MathUtils.lerp(
          capturedRotation.current[1],
          Math.cos(time),
          interpolationFactor.current
        );
      } else {
        // Continue normal time-based rotation
        Tref.current.rotation.x = Math.sin(time);
        Tref.current.rotation.y = Math.cos(time);
      }
    }
  }
});
  const { scrollYProgress } = useScroll();

  const isMobile = window.innerWidth < 770;

  const scaleValues = isMobile
    ? [0.2, 0.3, 0.2, 0.2, 0.8, 2.5] // Mobile scale values
    : [0.3, 0.4, 0.3, 0.3, 0.9, 5.5];

  const XposValues = isMobile
    ? [0, 0, 0, 0, 0] // Mobile scale values
    : [0, 0, -0.75, -0.75, 0];

  const Ypos = useTransform(
    scrollYProgress,
    [
      order.init,
      order.tapeup,
      order.tapeleft,
      order.tapeleftend,
      order.tapecenter,
      order.tapecenterend,
    ],
    [0, 0.5, 0, 0, -0.75, -0.85]
  );
  const Xpos = useTransform(
    scrollYProgress,
    [
      order.init,
      order.tapeup,
      order.tapeleft,
      order.tapeleftend,
      order.tapecenter,
    ],
    XposValues
  );
  const rot = useTransform(
    scrollYProgress,
    [order.tapecenter, order.tapecenterend],
    [degreesToRadians(45), degreesToRadians(0)]
  );
  const rotx = useTransform(
    scrollYProgress,
    [order.tapecenter, order.tapecenterend],
    [capturedRotation.current[0], degreesToRadians(90)]
  );
  const roty = useTransform(
    scrollYProgress,
    [order.tapecenter, order.tapecenterend],
    [capturedRotation.current[1], degreesToRadians(0)]
  );

  const scaleeX = useTransform(
    scrollYProgress,
    [
      order.init,
      order.tapeup,
      order.tapeleft,
      order.tapecenterend,
      order.tapescaleup,
      order.tapescaleupend,
    ],
    scaleValues
  );
  const scaleeY = useTransform(
    scrollYProgress,
    [
      order.init,
      order.tapeup,
      order.tapeleft,
      order.tapecenterend,
      order.tapescaleup,
      order.tapescaleupend,
    ],
    scaleValues
  );

  useFrame((state, delta) => {
    if (Tref && Tref.current) {
      Tref.current.scale.x = THREE.MathUtils.damp(
        Tref.current.scale.x,
        scaleeX.get(),
        2,
        delta
      );
      Tref.current.scale.y = THREE.MathUtils.damp(
        Tref.current.scale.y,
        scaleeY.get(),
        2,
        delta
      );
      Tref.current.scale.z = THREE.MathUtils.damp(
        Tref.current.scale.z,
        scaleeY.get(),
        2,
        delta
      );
      Tref.current.position.y = THREE.MathUtils.damp(
        Tref.current.position.y,
        Ypos.get(),
        2,
        delta
      );
      Tref.current.position.x = THREE.MathUtils.damp(
        Tref.current.position.x,
        Xpos.get(),
        2,
        delta
      );
      Tref.current.rotation.z = THREE.MathUtils.damp(
        Tref.current.rotation.z,
        rot.get(),
        2,
        delta
      );
      Tref.current.rotation.x = THREE.MathUtils.damp(
        Tref.current.rotation.x,
        rotx.get(),
        2,
        delta
      );
      Tref.current.rotation.y = THREE.MathUtils.damp(
        Tref.current.rotation.y,
        roty.get(),
        2,
        delta
      );

      // console.log(scrollYProgress);
    }
  });

  return (
    <group
      ref={Tref}
      rotation={[degreesToRadians(90), 0, degreesToRadians(45)]}
      // scale={[0.25, 0.25, 0.25]}
      //  scale={[isMobile ? 1 : 0.25]}
      position={[0, -0.25, 0]}
      {...props}
      dispose={null}
    >
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.cinta.geometry}
        material={materials.Cinta01}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.cinta3.geometry}
        material={materials.Cinta03}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.cinta4.geometry}
        material={materials.Cinta03}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.cinta02}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Cylinder001_1.geometry}
        material={materials.Cinta03}
      />
    </group>
  );
});
Tape.displayName = "Tape"; // Add a display name to your component

useGLTF.preload("./cinta.glb");
