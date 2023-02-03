import React, { useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei'
export default function TextObject(props) {
  return (
    <Text fontSize={0.02} rotation={[0,0,Math.PI / 2]} position={props.position} color="white" anchorX="center" anchorY="middle">
    Book Title Goes Here
</Text>
  );
}


