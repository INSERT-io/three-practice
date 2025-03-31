import * as THREE from "three";
import { Canvas, useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";

const Page = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={0} size={[0.1, 0.1, 0.1]} />
      <Box position={1} size={[1, 1, 1]} />
      <Box position={2} size={[0.5, 1, 1]} />
      <OrbitControls />
      <directionalLight position={[1, 1, 1]} intensity={0.5} />
    </Canvas>
  );
};

// Props にnumberの配列を受け取る
type BoxProps = {
  position: Vector3;
  size: [number, number, number];
};

const Box = ({ position, size }: BoxProps) => {
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
      position={position}
    >
      <boxGeometry args={size} />
      <meshPhongMaterial color={`rgb(0,${count},255)`} />
    </mesh>
  );
};

export default Page;
