import React, { useRef, useMemo } from "react";
import BookGroup from './BookGroup.js';
import { useSelector } from 'react-redux';

const CompleteShelf = React.memo(function CompleteShelf(props) {
  const group = useRef();
  const coversTitles = useSelector(state => state.shelves[props.genre] || {});
  const coversTitlesArray = useMemo(() => Object.values(coversTitles), [coversTitles]);

  return (
    <group position={props.position} ref={group} renderOrder={1} visible={true}>
      {coversTitlesArray.map((title, i) => {
        const titleStr = title && title["title"] ? title["title"] : "BookTitle";
        const urlStr = title && title["url"] ? title["url"] : "https://archive.org/download/napoleon00chesuoft/page/cover.jpg";
        return (
          <BookGroup
            onClick={props.onBookClick}
            key={i}
            genre={props.genre}
            rotation={[0, Math.PI / 0.66, 0]}
            title={titleStr}
            url={urlStr}
            position={[i * 0.25, 0, 1.05]}
          />
        );
      })}
    </group>
  );
});

export default CompleteShelf;
