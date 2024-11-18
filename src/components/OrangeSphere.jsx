import React from "react";

export default function OrangeSphere() {
  return (
    <>
      <mesh position={[-2, 0, 0]} scale={0.7}>
        <sphereGeometry scale={1.5} />
        <meshBasicMaterial color={"orange"} />
      </mesh>
    </>
  );
}
