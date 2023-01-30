import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import image from './bookcover.jpg';
import * as THREE from 'three';




export default function Book3(props) {
  const { nodes, materials, animations } = useGLTF("/simple_animated_book.glb");
  const texture = new THREE.TextureLoader().load(image);
  const materialWithTexture = new THREE.MeshBasicMaterial({ map: texture });
  const ref = useRef();
  useFrame(() => {
    if (ref.current.position.z < 1) {
      ref.current.position.z += 0.1;
    }
  });
  return (
    <group ref={ref} onPointerOver={() => (ref.current.position.z = 3.8)} onPointerOut={() => (ref.current.position.z = 3.4)}  {...props} dispose={null}>
      <group rotation={[-Math.PI / 1, 0, 0]}>
        <group scale={[0.85, 1, 0.81]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book_0.geometry}
            material={materialWithTexture}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/simple_animated_book.glb");
