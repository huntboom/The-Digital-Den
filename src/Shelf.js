import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Shelf(props) {
  const { nodes, materials } = useGLTF("/old_bookshelf.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials["1001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/old_bookshelf.glb");

