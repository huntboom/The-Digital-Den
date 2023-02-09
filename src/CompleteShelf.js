import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import BookGroup from './BookGroup.js';
import { useSelector } from 'react-redux';

export default function CompleteShelf(props) {
  const group = useRef();
  const coversTitles = useSelector(state => state.coversTitles);
  const coversTitlesArray = Object.values(coversTitles);

  return (
    <group position={props.position} ref={group}>
      <BookGroup />
      {console.log(coversTitlesArray)}
      {coversTitlesArray.map((title, i) => {
        const titleStr = title && title["title"] ? title["title"] : "BookTitle";
        return <BookGroup key={i} title={titleStr} position={[i * 0.05, 0, 0]} />
      })}
    </group>
  );
}
