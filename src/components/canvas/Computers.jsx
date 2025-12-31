import React, { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <ambientLight intensity={0.55} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={.9}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 0.60 : 0.75}
        position={isMobile ? [0, -1, -1.9] : [0, -2.35, -2.4]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
    
  }, []);

  // On small screens, skip the 3D canvas to avoid long loads/white screen and show a lightweight placeholder instead.
  if (isMobile) {
    return (
      <div className="w-full h-[300px] rounded-2xl bg-gradient-to-b from-[#1f1f3a] to-[#0f0f1f] border border-[#2a2a45]" />
    );
  }

  return (
    <Canvas 
      frameloop="demand"
      shadows
      camera={{ 
        position: [20, 3, 5], 
        fov: 25 
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

    </Canvas>
  )
}

export default ComputersCanvas;