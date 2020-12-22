import { useGLTF } from "drei";

const ASSET_PATH = "/assets/urkt.glb";

export const Urkt = () => {
  const { scene } = useGLTF(ASSET_PATH);

  return <primitive object={scene} position={[0, 0, 0]} />;
};
