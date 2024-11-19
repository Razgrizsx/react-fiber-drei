import { Canvas } from "@react-three/fiber";
import "./app.css";
import Experience from "./components/Experience";
import Floor from "./components/Floor";
import { OrbitControls, TransformControls, useHelper } from "@react-three/drei";
import * as THREE from "three";

function App() {
  const created = ({ gl, scene }) => {
    //gl.setClearColor("#ff0000", 1);
    //scene.background = new THREE.Color("blue");
  };

  return (
    <>
      <Canvas
        camera={{ fov: 45, near: 0.1, far: 200, position: [0, 1, 10] }}
        shadows
        /* onCreated={created} */
      >
        <color args={["blue"]} attach={"background"} />
        <ambientLight intensity={0.2} />
        <Experience />
        <Floor />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}

export default App;
