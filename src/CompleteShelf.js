import React, { useRef } from "react";
import BookGroup from './BookGroup.js';
import { useSelector } from 'react-redux';

export default function CompleteShelf(props) {
  const group = useRef();
  const coversTitles = useSelector(state => state.coversTitles);
  const coversTitlesArray = Object.values(coversTitles);
  return (
    <group position={props.position} ref={group}>
      {coversTitlesArray.map((title, i) => {
        const titleStr = title && title["title"] ? title["title"] : "BookTitle";
        const urlStr = title && title["url"] ? title["url"] : "https://archive.org/download/napoleon00chesuoft/page/cover.jpg";
        // const bookCovers = cover && cover["url"] ? cover["url"] : "cover";
        return <BookGroup scale={0.8} key={i} rotation={[0, Math.PI / 0.66, 0]} title={titleStr} url={urlStr} position={[i * 0.25, 0, 1.05]} />
      })}
    </group>
  );
}

