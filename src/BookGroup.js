import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import ImageObject from './ImageObject.js';
import Book3 from './Book3.js';
import TextObject from './BookTitle.js';

export default function BookGroup(props) {
  const group = useRef();

  return (
    <group position={props.position} ref={group}>
      <ImageObject scale={0.08} position={[0.021,0,1.0001]}/>
      <Book3 scale={0.02}/>
      <TextObject position={[0,0.05,1.1016]}/>
    </group>
  );
}
