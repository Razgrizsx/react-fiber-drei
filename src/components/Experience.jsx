import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  Html,
  TransformControls,
  PivotControls,
  Text,
  Float,
  useHelper,
  SoftShadows,
  Sky,
  Enviroment
} from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

/* SoftShadows({
  frustrum: 3.75,
  size: 0.005,
  near: 9.5,
  samples: 17,
  rings: 11
}); */

export default function Experience() {
  const cube = useRef();
  const sphere = useRef();
  const groupRef = useRef();
  const { position } = useControls({
    position: { value: { x: -2, y: 0 } }
  });
  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] }
  });

  useFrame((state, delta) => {
    /*  const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle);
    state.camera.position.z = Math.cos(angle); */
    //cube.current.rotation.y += delta;
  });

  const directionalRef = useRef();

  useHelper(directionalRef, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <directionalLight position={[1, 2, 3]} ref={directionalRef} castShadow />
      <Sky sunPosition={sunPosition} />
      {/* <Enviroment
        files={[
          "./enviromenMaps/2/px.jpg",
          "./enviromenMaps/2/nx.jpg",
          "./enviromenMaps/2/py.jpg",
          "./enviromenMaps/2/ny.jpg",
          "./enviromenMaps/2/pz.jpg",
          "./enviromenMaps/2/nz.jpg"
        ]}
      /> */}
      {/* EnvMapIntensity on every material */}
      <group ref={groupRef}>
        <TransformControls position={[3, -0.1, 0]} mode='scale'>
          <mesh castShadow ref={cube} rotation-y={Math.PI * 0.23} scale={1}>
            <boxGeometry scale={1.5} />
            <meshStandardMaterial color={"blue"} />
          </mesh>
        </TransformControls>

        <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={1}>
          <mesh
            castShadow
            position={[position.x, position.y, 0]}
            scale={0.7}
            ref={sphere}
          >
            <sphereGeometry scale={1.5} />
            <meshStandardMaterial color={"orange"} />
          </mesh>
        </PivotControls>
        {/*  <Html
          wrapperClass='label'
          distanceFactor={10}
          occlude={[sphere, cube]}
          center
        >
          Making this longer 👍
        </Html> */}
        <Float speed={5} floatIntensity={2}>
          <Text scale={0.2} color={"red"}>
            Making this longer 👍
          </Text>
        </Float>
      </group>
    </>
  );
}
