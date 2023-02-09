import React from 'react';
import { Text } from '@react-three/drei';
import { useSelector } from 'react-redux';

export default function TextObject(props) {
  // const coversTitles = useSelector(state => state.coversTitles);
  // const title = coversTitles[0] && coversTitles[0]["title"] ? coversTitles[0]["title"] : "BookTitle";
  const title = props.title;
  return (
    <Text title={props.title} fontSize={0.02} rotation={[0, 0, Math.PI / 2]} position={props.position} color="white" outlineColor="black" outlineWidth={'5%'} anchorX="center" anchorY="middle">
      {title}
    </Text>
  );
}


