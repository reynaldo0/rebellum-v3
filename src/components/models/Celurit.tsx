import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
  };
  materials: {
    Material: THREE.Material;
  };
};

type CeluritProps = GroupProps & {
  isHovered: boolean;
};

const Celurit: React.FC<CeluritProps> = (props: CeluritProps) => {
  const { nodes, materials } = useGLTF("/3D/celurit.glb") as unknown as GLTFResult;
  const meshRef = useRef<THREE.Mesh>(null);

  // State untuk melacak rotasi
  const [rotatedOnce, setRotatedOnce] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      if (!rotatedOnce) {
        meshRef.current.rotation.y += 0.01; 
        if (meshRef.current.rotation.y >= Math.PI * 2) {
          meshRef.current.rotation.y = 0; 
          setRotatedOnce(true);
        }
      }
    }
  });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          ref={meshRef}
          position={[0, 0, 0]}
          geometry={nodes.Object_4.geometry}
          material={materials.Material}
          scale={0.053} // Skala tetap
        />
      </group>
    </group>
  );
};

useGLTF.preload("/3D/celurit.glb");

export default Celurit;
