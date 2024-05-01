/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */ 

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Tape(props) {
  const { nodes, materials } = useGLTF("./cinta3d.glb");

  const Taperef = useRef();
  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    Taperef.current.rotation.x = time ; 
  });

  return (
    <group ref={Taperef} {...props} dispose={null}>
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
}

useGLTF.preload("./cinta3d.glb");
