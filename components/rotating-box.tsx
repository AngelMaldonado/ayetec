// components/RotatingBox.jsx
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function Box() {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function RotatingBox() {
  return (
    <Canvas style={{ height: "100%", width: "100%", position: "absolute", zIndex: 0, top: 0, left: 0 }}>
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
}
