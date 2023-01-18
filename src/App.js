import './App.css';
import BookFinder from './BookFinder';
import Header from './Header';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import Shelf from './Shelf.js';
import Book2 from './Book2.js';
import About from './About.js';
import React, { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

function App() {

  return (
    <div className="bg-image">
      <Header />
      <About />
      <Canvas>
        <group>
          <OrbitControls />
          <Shelf position={[0, 0, 3.25]} />
          <ambientLight />
          <Book2 scale={0.2} />
        </group>
      </Canvas>
      <BookFinder />
    </div>
  );
}

export default App;
