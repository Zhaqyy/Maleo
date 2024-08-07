/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import React, { useRef, useMemo, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useScroll, useTransform } from "framer-motion";
import { useFrame } from "@react-three/fiber";

const order = {
  init: 0,
  tapeup: 0.02,
  tapeleft: 0.08,
  tapeleftend: 0.15,
  tapecenter: 0.2,
  tapecenterend: 0.27,
  tapescaleup: 0.3,
  tapescaleupend: 0.5,
  end: 1,
};

export const TapeScroll = (props) => {
  const Tref = useRef();
  return <Tape ref={Tref} />;
};

export default TapeScroll;

export const Tape = React.forwardRef((props, Tref) => {
  const { nodes, materials } = useGLTF("./cinta.glb");
  const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;

  const isRotating = useRef(true);
  const capturedRotation = useRef([0, 0]);
  const interpolationFactor = useRef(1);
  const { scrollYProgress } = useScroll();

  const isMobile = useMemo(() => window.innerWidth < 770, []);
  const scaleValues = useMemo(
    () =>
      isMobile ? [0.2, 0.25, 0.2, 0.2, 0.8, 5] : [0.3, 0.4, 0.3, 0.3, 0.9, 5.5],
    [isMobile]
  );
  const XposValues = useMemo(
    () => (isMobile ? [0, 0, 0, 0, 0] : [0, 0, -0.75, -0.75, 0]),
    [isMobile]
  );

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

  let rotlerp = 0.05;

    // Log for timeline Sequence

    // useEffect(() => {
    //   // Function to log the rounded scroll progress
    //   const unsubscribe = scrollYProgress.on("change", (latest) => {
    //     const rounded = Math.round(latest * 1000) / 1000; // Round to three decimal places
    //     console.log(rounded,rotlerp);
    //   });
  
    //   // Clean up the subscription on unmount
    //   return () => unsubscribe();
    // }, [scrollYProgress,rotlerp]);
  
  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    if (scrollYProgress.get() >= order.tapecenter) {
      rotlerp = 2;
    }
    if (Tref.current) {
      if (scrollYProgress.get() > order.tapecenter) {
        isRotating.current = true;

        

        Tref.current.rotation.x = THREE.MathUtils.damp(
          Tref.current.rotation.x,
          capturedRotation.current[0],
          rotlerp,
          delta
        );
        Tref.current.rotation.y = THREE.MathUtils.damp(
          Tref.current.rotation.y,
          capturedRotation.current[1],
          rotlerp,
          delta
        );
      } else {
        if (isRotating.current) {
          isRotating.current = false;
          capturedRotation.current = [
            Tref.current.rotation.x,
            Tref.current.rotation.y,
          ];
          interpolationFactor.current = 0;
        } else {
          if (interpolationFactor.current < 1) {
            interpolationFactor.current += delta * 0.5;

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
            Tref.current.rotation.x = Math.sin(time);
            Tref.current.rotation.y = Math.cos(time);
          }
        }
      }

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
        rotlerp,
        delta
      );
      Tref.current.rotation.x = THREE.MathUtils.damp(
        Tref.current.rotation.x,
        rotx.get(),
        rotlerp,
        delta
      );
      Tref.current.rotation.y = THREE.MathUtils.damp(
        Tref.current.rotation.y,
        roty.get(),
        rotlerp,
        delta
      );
    }
  });

  return (
    <group
      ref={Tref}
      rotation={[degreesToRadians(90), 0, degreesToRadians(45)]}
      position={[0, -0.25, 0]}
      {...props}
      dispose={null}
    >
      <mesh geometry={nodes.Cylinder.geometry} material={materials.Cinta01} />
      <mesh geometry={nodes.Cylinder_1.geometry} material={materials.cinta02} />
      <mesh geometry={nodes.Cylinder_2.geometry} material={materials.Cinta03} />
    </group>
  );
});
Tape.displayName = "Tape";

useGLTF.preload("./cinta.glb");
