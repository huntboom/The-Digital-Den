import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import ImageObject from './ImageObject.js';
import Book3 from './Book3.js';
import TextObject from './BookTitle.js';
//currently the objects are spaced 0.05 units apart on the x-axis
//onClick I want them to take their current position, rotate it by math.pi/2 in the y axis, ref.current.position.x = props.position+0.9
//okay so maybe I have to take the current xvalue 
//new plan, instead I have the book go to a certain position on a table and the camera also zooms in to that position, 
//a choose another book button appears, which returns the book back to it's position and the camera back to its original position.  
//okay pretty sure ia stands for internet archive and https://archive.org/download/{IA}/{IA}.pdf will give the pdf for the associated book
//OKAY so I'll then use project Gutenburg to retrieve the text!
//something like 
//fetch('https://www.gutenberg.org/files/1342/1342-0.txt')
// .then(response => response.text())
// .then(text => {
//   console.log(text); // Here you can do whatever you want with the text, such as display it on the page or save it to a file.
// })
// Okay so I HAVE to use a server side proxy. No way around it. 
export default function BookGroup(props) {
  const group = useRef();
  const ref = useRef();
  const handleClick = () => {
    ref.current.rotation.y = Math.PI / -2;
    ref.current.position.z = 1.1;
    ref.current.position.x = 1.5;
    console.log("Position:", ref.current.position);
    console.log("Rotation:", ref.current.rotation);
  };
  return (
    <group position={props.position} ref={ref} onClick={handleClick}
      onPointerOver={() => {
        ref.current.position.z = 0.0;
        console.log("Book Group Position: ", ref.current.position);
        // console.log("Book Group Rotation: ", ref.current.rotation);
      }}
      onPointerOut={() => (ref.current.position.z = -0.1)}
    >
      <ImageObject scale={0.08} url={props.url} position={[0.021, 0, 1.0001]} />
      <Book3 scale={0.02} />
      <TextObject title={props.title} position={[0, 0.05, 1.1016]} />
    </group>
  );
}
