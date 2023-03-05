import './App.css';
import Library from './OpenLibrary.js';
import Header from './Header';
import { Canvas } from '@react-three/fiber';
import { useState, Suspense } from 'react';
import Shelf from './Shelf.js';
import About from './About.js';
import React, { useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import GenreList from './Genres.js';
import { Provider } from 'react-redux';
import CompleteShelf from './CompleteShelf.js';
import store from './store';
import SearchBooks from './SearchBooks.js';
import Book2 from './Book2.js';
import Table from './Table.js';

function App() {
  const controlsRef = useRef();
  const handleButtonClick = () => {
    console.log(controlsRef.current.object.position);
  };

  return (
    <Provider store={store}>
      <div className="bg-image">
        <Header />
        <About />
        <SearchBooks />
        <Library />
        <GenreList />
        <button onClick={handleButtonClick}>Log Camera Position</button>
        <div className="readingroom">
          <Canvas camera={[0, 0.3, 4.5]}>
            <group position={[0, -0.4, 0.5]}>
              <OrbitControls ref={controlsRef} />
              <Shelf position={[0, 0, 3.25]} scale={[5, 1, 1]} />
              <ambientLight />
              <Suspense>
                <CompleteShelf position={[-1.7, 0.7, 2.2]} />
                <Table scale={1} position={[10, -5, 5]} />
                <Book2 scale={1} rotation={[Math.PI / 2, 0, 0]} position={[10, -1.777, 5]} />
              </Suspense>
            </group>
          </Canvas>
        </div>
      </div>
    </Provider>
  );
}

export default App;
