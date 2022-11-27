import { useGLTF } from '@react-three/drei';

const useLoadModel = (model) => {
  const { nodes, materials } = useGLTF(model);

  return {
    nodes,
    materials,
  };
};

export { useLoadModel };
