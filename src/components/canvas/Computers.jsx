import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <directionalLight color="blue" position={[-15, 5, -5]} />
      <spotLight intensity={3}
        position={[-5, -5, 5]}
        angle={0.12}
        castShadow

      />
      <pointLight intensity={3} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.6}
        position={isMobile ? [0.8, -3, -1.5] : [1, -2.8, -2]}
        rotation={[-0.01, -0.5, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {

  const [ismobile, setIsmobile] = useState(false);


  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)')
    setIsmobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsmobile(e.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }


  }, [])


  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 4, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={ismobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
