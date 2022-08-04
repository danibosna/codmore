import { useGLTF } from '@react-three/drei';

const useLoadModel = async (model) => {
  const { nodes, materials } = await useGLTF(model);

  return {
    nodes,
    materials,
  };
};

export { useLoadModel };
