/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
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
  tapeleft: 0.05,
  tapecenter: 0.125,
  tapescaleup: 0.15,
  PartnerTextin: 1,
};

export const Tape = React.forwardRef((props, Tref) => {
  const { nodes, materials } = useGLTF("./cinta.glb");

  const Taperef = useRef();
  // useFrame((state, delta) => {
  //   const time = state.clock.elapsedTime;
  //   Tref.current.rotation.x = time ;
  // });

  const { scrollYProgress } = useScroll();

  const Ypos = useTransform(
    scrollYProgress,
    [order.init, order.tapeup],
    [0, 0.5]
  );
  // const scalee = useTransform(scrollYProgress, [order.init, order.tapeup], [0.25, 1]);
  const scaleeX = useTransform(
    scrollYProgress,
    [order.init, order.tapeup],
    [0.3, 0.4]
  );
  const scaleeY = useTransform(
    scrollYProgress,
    [order.init, order.tapeup],
    [0.3, 0.4]
  );

  useFrame((state, delta) => {
    if (Tref && Tref.current) {
      // Tref.current.scale.set(scalee.get());
      Tref.current.scale.x= THREE.MathUtils.damp(Tref.current.scale.x, scaleeX.get(), 2, delta);
      Tref.current.scale.y= THREE.MathUtils.damp(Tref.current.scale.y, scaleeY.get(), 2, delta);
      Tref.current.scale.z= THREE.MathUtils.damp(Tref.current.scale.z, scaleeY.get(), 2, delta);

      Tref.current.position.y = THREE.MathUtils.damp(Tref.current.position.y, Ypos.get(), 2, delta);
      console.log(Tref.current.scale);
      console.log(scrollYProgress);
    }
  });

  return (
    <group
      ref={Tref}
      rotation={[Math.PI / 2, 0, -Math.PI / 4]}
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
