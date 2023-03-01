import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Table(props) {
  const { nodes, materials } = useGLTF("/table.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder6_blinn1_0.geometry}
            material={materials.blinn1}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/table.glb");
