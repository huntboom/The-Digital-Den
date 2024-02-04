import React from 'react';
import Library from './OpenLibrary.js';
import { Canvas } from '@react-three/fiber';
import { useState, Suspense } from 'react';
import Shelf from './Shelf.js';
import GenreList from './Genres.js';
import { Provider } from 'react-redux';
import CompleteShelf from './CompleteShelf.js';
import store from './store';
import SearchBooks from './SearchBooks.js';
import Book2 from './Book2.js';
import Table from './Table.js';
import { useRef } from 'react';
import { CameraControls } from '@react-three/drei';

const Home = () => {
  // ... (the rest of the code from the App component)
  return (
    <Provider store={store}>
      <Header />
      <SearchBooks />
      <Library />
      <GenreList />
      <button>...</button> {/* The rest of the buttons */}
      <div className="readingroom">
        <Canvas /* camera={[0, 0.3, 4.5]} */>
          <CameraControls ref={cameraControlRef} smoothTime={0.8} />
          {/* ... (the rest of the canvas elements) */}
        </Canvas>
      </div>
    </Provider>
  );
}

export default Home;

