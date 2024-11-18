import React from "react";
import * as THREE from "three";
import { MeshReflectorMaterial } from "@react-three/drei";

export default function Floor() {
  return (
    <>
      <mesh position={[0, -1, 0]} scale={10} rotation={[-Math.PI * 0.5, 0, 0]}>
        <planeGeometry />
        <MeshReflectorMaterial
          color={"green"}
          blur={[1000, 1000]}
          mixBlur={1}
          resolution={512}
          mirror={0.5}
        />
      </mesh>
    </>
  );
}
