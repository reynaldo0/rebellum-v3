import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Curve018: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
  };
};

export function Sign(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/3D/sign-compressed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve018.geometry}
        material={materials.PaletteMaterial001}
        position={[0.194, -1.028, -0.102]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={13.619}
      />
    </group>
  );
}

useGLTF.preload("/3D/sign-compressed.glb");
