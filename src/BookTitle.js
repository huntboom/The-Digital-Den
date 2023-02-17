import React from 'react';
import { Text } from '@react-three/drei';
import { useSelector } from 'react-redux';
import { useThree } from '@react-three/fiber';

export default function TextObject(props) {
  // const coversTitles = useSelector(state => state.coversTitles);
  // const title = coversTitles[0] && coversTitles[0]["title"] ? coversTitles[0]["title"] : "BookTitle";
  const title = props.title;
  const { size } = useThree();
  const scaleFactor = size.width / window.innerWidth;
  return (
    <group /* position={props.position} */ scale={[scaleFactor, 1, 1]}>
      <Text title={props.title} fontSize={0.02} rotation={[0, 0, Math.PI / 2]} position={props.position} color="white" outlineColor="black" outlineWidth={'5%'} anchorX="center" anchorY="middle" maxWidth={'0.35'}>
        {title}
      </Text>
    </group>
  );
}


