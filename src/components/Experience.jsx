import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  Html,
  TransformControls,
  PivotControls,
  Text,
  Float
} from "@react-three/drei";
import { useControls } from "leva";

export default function Experience() {
  const cube = useRef();
  const sphere = useRef();
  const groupRef = useRef();
  const { position } = useControls({
    position: { value: { x: -2, y: 0 } }
  });

  useFrame((state, delta) => {
    /*  const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle);
    state.camera.position.z = Math.cos(angle); */
    //cube.current.rotation.y += delta;
  });

  return (
    <>
      <group ref={groupRef}>
        <TransformControls position={[3, -0.1, 0]} mode='scale'>
          <mesh ref={cube} rotation-y={Math.PI * 0.23} scale={1}>
            <boxGeometry scale={1.5} />
            <meshStandardMaterial color={"blue"} />
          </mesh>
        </TransformControls>

        <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={1}>
          <mesh position={[position.x, position.y, 0]} scale={0.7} ref={sphere}>
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
