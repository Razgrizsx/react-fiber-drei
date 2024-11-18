import { Canvas } from "@react-three/fiber";
import "./app.css";
import Experience from "./components/Experience";
import Floor from "./components/Floor";
import { OrbitControls, TransformControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas camera={{ fov: 45, near: 0.1, far: 200, position: [0, 1, 10] }}>
        <directionalLight position={[1, 2, 3]} />
        <ambientLight intensity={0.2} />
        <Experience />
        <Floor />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}

export default App;
