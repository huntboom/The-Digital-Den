import React, { useRef } from "react";
import ImageObject from './ImageObject.js';
import Book3 from './Book3.js';
import TextObject from './BookTitle.js';
import { updateBookText } from './store.js';
import { useDispatch } from 'react-redux';

export default function BookGroup(props) {
  const ref = useRef();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    const response = await fetch(`https://gutendex.com/books/?search=${props.title}`);
    const data = await response.json();
    const firstResult = data.results[0]
    const bookId = firstResult.id

    // should be the url for the plaintext version:
    const bookUrl = '/api' + '/cache/epub/' + bookId + '/pg' + bookId + '.txt';
    const bookUrlData = await fetch(bookUrl, { timeout: 600000 })
    const bookUrlResponse = await bookUrlData.text();
    const first1000Chars = bookUrlResponse.substring(0, 1000);

    dispatch(updateBookText(first1000Chars));
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
    <group position={props.position} scale={0.8} rotation={props.rotation} ref={ref} onClick={handleClick}
      onPointerOver={() => {
        ref.current.position.z = 1.4;
        // console.log("Book Group Position: ", ref.current.position);
        // console.log("Book Group Rotation: ", ref.current.rotation);
      }}
      onPointerOut={() => (ref.current.position.z = 1.05)}
    >
      <ImageObject scale={0.08} url={props.url} position={[0.021, 0, 1.0001]} />
      <Book3 scale={0.02} />
      <TextObject title={props.title} position={[0, 0.05, 1.1016]} />
    </group>
  );
}
