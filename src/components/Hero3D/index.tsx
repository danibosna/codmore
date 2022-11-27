import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loading from './Loading';
import CameraControls from './CameraControls';
import Model from './Studio-setup-minimal';

const Hero3D = () => {
  return (
    <Canvas style={{ height: '100vh' }} camera={{ position: [10, 10, 10] }}>
      <ambientLight />
      <pointLight position={[0.5, 0.5, 0.5]} />
      <CameraControls />
      <directionalLight intensity={0.5} />
      <Suspense fallback={<Loading />}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Hero3D;
