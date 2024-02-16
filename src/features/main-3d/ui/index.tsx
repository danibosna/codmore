"use client";
import React, { type ReactNode, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stats } from "@react-three/drei";
import { Lights } from "./lights";
import { Spinner3D } from "./spinner-3d";
import Model from "./studio-model-3d";

interface Props {
  children: ReactNode;
}

export const Main3D = ({ children }: Props) => {
  return (
    <div className={"relative h-screen w-full"}>
      <Canvas
        className="h-screen w-full bg-transparent"
        camera={{
          near: 1,
          far: 1000,
          position: [10, 10, 10],
        }}
      >
        {/* <Environment files={"/backgrounds/studio_small_05_2k.exr"} far={1000} background /> */}
        <Suspense fallback={<Spinner3D />}>
          <Lights />
          <OrbitControls autoRotate />
          <Model />
          <Stats />
        </Suspense>
      </Canvas>
      <main className="absolute bottom-0 z-30 w-full">{children}</main>
    </div>
  );
};
