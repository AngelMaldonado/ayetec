// components/ModelViewer.jsx
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function Model({ url }: { url: string }) {
  const ref = useRef<Mesh>(null);
  const { scene } = useGLTF(url);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  // center the model and prevent clipping
  return <primitive object={scene} ref={ref} scale={1.4} position={[0, -4.3, -1]} />;
}

export default function ModelViewer() {
  return (
    // prevent clipping
    <Canvas
      style={{ height: "100%", width: "100%", position: "absolute", zIndex: 0, top: 0, left: 0 }}
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      <Model url="/coffee_cup.glb" />
    </Canvas>
  );
}
