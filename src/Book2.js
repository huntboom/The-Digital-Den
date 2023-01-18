import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
//    <mesh ref={ref} onClick={() => (ref.current.position.x = 0)}>

export default function Book2(props) {
  const ref = useRef();
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/simple_animated_book.glb");
  const { actions } = useAnimations(animations, group);
  useFrame(() => {
    if (ref.current.position.z < 1) {
      ref.current.position.z += 0.01;
    }
  });
  return (
    <group ref={ref} onPointerOver={() => (ref.current.position.z = 3.8)} position={[0, 0.7, 3.4]} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root" rotation={[4.7, 0, 0]}>
            <group name="Armature" scale={[0.85, 0.6, 0.51]}>
              <group name="Book" scale={[0.12, 0.92, 0.13]} />
              <primitive object={nodes.Armature_rootJoint} />
              <skinnedMesh
                name="Book_0"
                geometry={nodes.Book_0.geometry}
                material={materials.Base}
                skeleton={nodes.Book_0.skeleton}
              />
            </group>
            <group
              name="Lamp"
              position={[4.08, 1.01, 5.9]}
              rotation={[-0.27, 0.6, 1.93]}
            >
              <group name="Lamp_1" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/simple_animated_book.glb");
