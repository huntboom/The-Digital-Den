import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Book3(props) {
  const { nodes, materials, animations } = useGLTF("/simple_animated_book.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={[0.85, 1, 0.81]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book_0.geometry}
            material={materials.Base}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/simple_animated_book.glb");
