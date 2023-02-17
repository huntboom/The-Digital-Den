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
      {coversTitlesArray.map((title, i, url) => {
        const titleStr = title && title["title"] ? title["title"] : "BookTitle";
        const urlStr = title && title["url"] ? title["url"] : "https://archive.org/download/napoleon00chesuoft/page/cover.jpg";
        // const bookCovers = cover && cover["url"] ? cover["url"] : "cover";
        return <BookGroup key={i} title={titleStr} url={urlStr} position={[i * 0.05, 0, 0]} />
      })}
    </group>
  );
}

