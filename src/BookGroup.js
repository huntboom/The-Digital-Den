import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import ImageObject from './ImageObject.js';
import Book3 from './Book3.js';
import TextObject from './BookTitle.js';

export default function BookGroup(props) {
  const group = useRef();
  const ref = useRef();
  const handleSearch = async () => {
    const response = await fetch(`https://gutendex.com/books/?search=${props.title}`);
    const data = await response.json();
    console.log(data)
    const firstResult = data.results[0]
    console.log(firstResult)
    const bookId = firstResult.id

    // should be the url for the plaintext version:
    const bookUrl = '/api' + '/cache/epub/' + bookId + '/pg' + bookId + '.txt';
    console.log(bookUrl)
    const bookUrlData = await fetch(bookUrl, { timeout: 600000 })
    const bookUrlResponse = await bookUrlData.text();
    console.log(bookUrlResponse)
    //https://www.gutenberg.org/files/1342/1342-0.txt
  };

  const handleClick = () => {
    // ref.current.rotation.y = Math.PI / -2;
    // ref.current.position.z = 1.1;
    // ref.current.position.x = 1.5;
    // console.log("Position:", ref.current.position);
    // console.log("Rotation:", ref.current.rotation);
    console.log(props.title)
    handleSearch()
  };

  return (
    <group position={props.position} rotation={props.rotation} ref={ref} onClick={handleClick}
      onPointerOver={() => {
        // ref.current.position.z = 0.0;
        // console.log("Book Group Position: ", ref.current.position);
        // console.log("Book Group Rotation: ", ref.current.rotation);
      }}
    // onPointerOut={() => (ref.current.position.z = -0.1)}
    >
      <ImageObject scale={0.08} url={props.url} position={[0.021, 0, 1.0001]} />
      <Book3 scale={0.02} />
      <TextObject title={props.title} position={[0, 0.05, 1.1016]} />
    </group>
  );
}
