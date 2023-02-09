import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import BookGroup from './BookGroup.js';
import { useSelector } from 'react-redux';

export default function CompleteShelf(props) {
  const group = useRef();
  const coversTitles = useSelector(state => state.coversTitles);
  const title = coversTitles[0] && coversTitles[0]["title"] ? coversTitles[0]["title"] : "BookTitle";
  return (
    <group position={props.position} ref={group}>
      <BookGroup title={title} />
    </group>
  );
}
