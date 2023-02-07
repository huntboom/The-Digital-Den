import React from 'react';
import { Text } from '@react-three/drei';
import { useSelector } from 'react-redux';

export default function TextObject(props) {
  const coverTitles = useSelector(state => state.coverTitles);
  return (
    <Text fontSize={0.02} rotation={[0, 0, Math.PI / 2]} position={props.position} color="white" outlineColor="black" outlineWidth={'5%'} anchorX="center" anchorY="middle">
      {coverTitles[2]["title"]}
    </Text>
  );
}


