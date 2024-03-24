import React, { useRef } from "react";
import ImageObject from './ImageObject.js';
import Book3 from './Book3.js';
import TextObject from './BookTitle.js';
import { updateBookText } from './store.js';
import { useDispatch } from 'react-redux';
import { Html } from '@react-three/drei';

export default function BookGroup(props) {
  const ref = useRef();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    const response = await fetch(`https://gutendex.com/books/?search=${props.title}`);
    const data = await response.json();
    const firstResult = data.results[0];
    const bookId = firstResult.id;
    console.log("this is the id: " + bookId);
    //txt version:
    const bookUrltxt = '/api' + '/cache/epub/' + bookId + '/pg' + bookId + '.txt';
    //html version:
    const bookUrl = '/api' + '/cache/epub/' + bookId + '/pg' + bookId + '-images.html';
    // example url for the html file "https://www.gutenberg.org/ebooks/1523.html.images"
    const bookUrlData = await fetch(bookUrl, { timeout: 600000 });
    const bookUrlResponse = await bookUrlData.text();
    const first1000Chars = bookUrlResponse;

    dispatch(updateBookText({ genre: props.genre, text: first1000Chars }));
  };

  // Function to linearly interpolate between two values
  function lerp(start, end, alpha) {
    return start + (end - start) * alpha;
  }

  // Smooth transition function
  function smoothTransition(ref, targetZ, duration) {
    const startTime = performance.now();
    const startZ = ref.current.position.z;

    function animate(now) {
      const timeElapsed = now - startTime;
      const alpha = Math.min(timeElapsed / duration, 1); // Ensure alpha is in the range [0, 1]

      ref.current.position.z = lerp(startZ, targetZ, alpha);

      if (alpha < 1) {
        // Continue the animation as long as alpha is less than 1
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  const handleClick = () => {
    console.log(props.title);
    handleSearch();
    props.onClick(); 
  };

  return (
    <group position={props.position} scale={0.8} rotation={props.rotation} ref={ref} onClick={handleClick}
      onPointerOver={() => {
        smoothTransition(ref, 1.2, 500); // Transition to z=1.2 over 500 milliseconds
      }}
      onPointerOut={() => {
        smoothTransition(ref, 1.05, 500); // Transition back to z=1.05 over 500 milliseconds
      }}>
      <ImageObject scale={0.08} url={props.url} position={[0.021, 0, 1.0001]} />
      <Book3 scale={0.02} />
      <TextObject title={props.title} position={[0, 0.05, 1.1016]} />
    </group>
  );
}
