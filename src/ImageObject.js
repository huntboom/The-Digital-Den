import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import image from './bookcover.jpg';
import * as THREE from 'three';
import { useSelector } from 'react-redux';

export default function ImageObject(props) {
  const texture = new THREE.TextureLoader().load(image);
  const materialWithTexture = new THREE.MeshBasicMaterial({ map: texture });
  const ref = useRef();
  const geometry = new THREE.PlaneGeometry(2.5, 5.2, 1, 1);

  return (
    <mesh ref={ref} rotation={[0, Math.PI / 2, 0]} {...props} geometry={geometry} material={materialWithTexture} />
  );
}
