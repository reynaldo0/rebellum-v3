import * as THREE from "three";
// import React, { useRef } from 'react'
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshPhysicalMaterial;
  };
};

const Botol = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/3D/botol.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.002"]}
        scale={-0.175}
      />
    </group>
  );
};

useGLTF.preload("/botol.glb");

export default Botol;
