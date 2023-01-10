import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/antique_leather_book_big.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[2.18, 0, -0.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Book_closed_Big_Books_Material_0.geometry}
              material={materials.Books_Material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/antique_leather_book_big.glb");
