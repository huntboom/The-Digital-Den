import './App.css';
import BookFinder from './BookFinder';
import Library from './OpenLibrary.js';
import Header from './Header';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import Shelf from './Shelf.js';
import Book2 from './Book2.js';
import Book3 from './Book3.js';
import About from './About.js';
import React, { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import GenreList from './Genres.js';
function App() {

  return (
    <div className="bg-image">
      <Header />
      <About />
      <Library />
      <GenreList />
      <div className="readingroom">
        <BookFinder />
        <Canvas>
          <group position={[0, -0.4, 0.5]}>
            <OrbitControls />
            <Shelf position={[0, 0, 3.25]} />
            <ambientLight />
            <Suspense>
              <Book2 scale={0.2} key={1} position={[0, 0.7, 3.4]} />
              <Book3 scale={0.02} key={1} position={[0, 0.7, 3.4]} />
              <Book3 scale={0.02} key={1} position={[0.1, 0.7, 3.4]} />
            </Suspense>
          </group>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
