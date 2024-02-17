import React from "react";

export const Lights = () => {
  return (
    <>
      <spotLight />
      <ambientLight />
      <pointLight position={[0.5, 0.5, 0.5]} />
      <directionalLight intensity={0.5} />
      <hemisphereLight />
    </>
  );
};
