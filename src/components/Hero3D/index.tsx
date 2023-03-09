import React, { ReactNode, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loading from './Loading';
import CameraControls from './CameraControls';
import Model from './Studio-setup-minimal';

interface Props {
  children: ReactNode;
}

const Hero3D = ({ children }: Props) => {
  return (
    <>
      <Canvas style={{ height: '100vh' }} camera={{ position: [10, 10, 10] }}>
        <ambientLight />
        <pointLight position={[0.5, 0.5, 0.5]} />
        <CameraControls />
        <directionalLight intensity={0.5} />
        <Suspense fallback={<Loading />}>
          <Model />
        </Suspense>
      </Canvas>
      {children}
    </>
  );
};

export default Hero3D;
