import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Page = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

const Box = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const [count, setCount] = useState(0);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
  });
  return (
    <mesh
      ref={ref}
      onClick={() => {
        setCount(() => (count + 32) % 255);
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={`rgb(0,${count},255)`} />
    </mesh>
  );
};

export default Page;
