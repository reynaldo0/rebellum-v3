import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Mesh, Material, BufferGeometry } from "three"; // Pastikan untuk mengimpor tipe dari 'three'

// Definisikan tipe untuk hasil GLTF
type GLTFResult = {
  nodes: {
    Curve: Mesh<BufferGeometry>;
    Curve001: Mesh<BufferGeometry>;
  };
  materials: {
    ["SVGMat.817"]: Material;
  };
};

export function Sex(props: GroupProps) {
  // Casting hasil dari useGLTF ke tipe yang sesuai
  const { nodes, materials } = useGLTF("/3D/segs.glb") as unknown as GLTFResult;

  return (
    <group position={[0, -2.0, 0]} scale={1.3} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["SVGMat.817"]}
        position={[0.194, 0.728, -0.102]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={44.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.817"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={26.0}
      />
    </group>
  );
}

// Preload GLTF model untuk mempercepat loading
useGLTF.preload("/3D/segs.glb");
