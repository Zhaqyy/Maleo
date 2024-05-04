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

  return (
    // <ScrollControls pages={4} damping={0.1}>
    //   <Scroll>
    <Tape ref={Tref} />
    //   </Scroll>
    // </ScrollControls>
  );
};

// TapeScroll.displayName = 'TapeScroll'; // Add a display name to your component

export default TapeScroll;

const order = {
  init: 0,
  tapeup: 0.02,
  tapeleft: 0.1,
  tapeleftend: 0.25,
  tapecenter: 0.3,
  tapecenterend: 0.4,
  tapescaleup: 0.525,
  tapescaleupend: 0.625,
  PartnerTextin: 1,
};

export const Tape = React.forwardRef((props, Tref) => {
  const { nodes, materials } = useGLTF("./cinta.glb");
  const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;

  const targetRotation = useRef([degreesToRadians(90), 0, degreesToRadians(0)]);
  const isRotating = useRef(true);
  
  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    if (scrollYProgress.get() < order.tapecenter) {
      isRotating.current = true; // Reset isRotating when scrolling back up
      Tref.current.rotation.x = time;
    } else {
      if (isRotating.current) {
        isRotating.current = false;
      }
      Tref.current.rotation.x = targetRotation.current[0];
      Tref.current.rotation.y = targetRotation.current[1];
      Tref.current.rotation.z = targetRotation.current[2];
    }
  });
  
  const { scrollYProgress } = useScroll();

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
    [0, 0, -0.35, -0.35, 0]
  );
  const rot = useTransform(
    scrollYProgress,
    [order.tapecenter, order.tapecenterend],
    [degreesToRadians(45), 0]
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
    [0.3, 0.4, 0.3, 0.3, 0.9, 3.5]
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
    [0.3, 0.4, 0.3, 0.3, 0.9, 3.5]
  );

  useFrame((state, delta) => {
    if (Tref && Tref.current) {
      // Tref.current.scale.set(scalee.get());
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

      console.log(scrollYProgress);
    }
  });

  return (
    <group
      ref={Tref}
      rotation={[degreesToRadians(90), 0, degreesToRadians(45)]}
      scale={[0.25, 0.25, 0.25]}
      // scale={[1, 1, 1]}
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
