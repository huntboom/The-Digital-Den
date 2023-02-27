import React from 'react';
import { Text } from '@react-three/drei';
import { useSelector } from 'react-redux';
import { useThree } from '@react-three/fiber';

export default function TextObject(props) {
  const title = props.title;
  const { size } = useThree();
  const scaleFactor = size.width / window.innerWidth;
  const handleSearch = async () => {
    const response = await fetch(`https://gutendex.com/books/?search=${title}`);
    const data = await response.json();
    console.log(data)
    const firstResult = data.results[0]
    console.log(firstResult)
    const bookId = firstResult.id
    console.log(bookId)
    const bookUrl = 'https://www.gutenberg.org/files/' + bookId + "/" + bookId + "-0.txt"
    console.log(bookUrl)

    //https://www.gutenberg.org/files/1342/1342-0.txt
  };
  return (
    <group /* position={props.position} */ scale={[scaleFactor, 1, 1]}>
      <Text test={handleSearch} title={props.title} fontSize={0.02} rotation={[0, 0, Math.PI / 2]} position={props.position} color="white" outlineColor="black" outlineWidth={'5%'} anchorX="center" anchorY="middle" maxWidth={'0.35'}>
        {console.log(title)}
        {title}
      </Text>
    </group>
  );
}


