import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Book2(props) {
  const ref = useRef();
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/simple_animated_book.glb");
  const { actions } = useAnimations(animations, group);
  const clip = animations[0]
  const duration = clip.duration
  console.log(clip)
  function handleClick(actions) {
    actions.Demo.setDuration(3.33 / 2);
    actions.Demo.setLoop('LoopOnce');
    actions.Demo.setLoop(THREE.LoopOnce, 1);
    console.log(actions.Demo);
    actions.Demo.clampWhenFinished = true;
    actions.Demo.play();
    actions.Demo.halt(3.33);
  }
  useFrame(() => {
    if (ref.current.position.z < 1) {
      ref.current.position.z += 0.1;
    }
  });

  return (
    <group ref={ref} onClick={() => handleClick(actions)} {...props} position={props.position} dispose={null}>
      {console.log(animations)}
      {console.log(clip)}
      <group ref={group} name="Sketchfab_Scene">
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
