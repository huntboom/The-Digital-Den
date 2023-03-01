import './App.css';
import BookFinder from './BookFinder';
import Library from './OpenLibrary.js';
import Header from './Header';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import Shelf from './Shelf.js';
import Book3 from './Book3.js';
import About from './About.js';
import React, { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import GenreList from './Genres.js';
import BookGroup from './BookGroup.js';
import { Provider } from 'react-redux';
import CompleteShelf from './CompleteShelf.js';
import store from './store';
import SearchBooks from './SearchBooks.js';
import Book2 from './Book2.js';
import Table from './Table.js';
function App() {
  return (
    <Provider store={store}>
      <div className="bg-image">
        <Header />
        <About />
        <SearchBooks />
        <Library />
        <GenreList />
        <div className="readingroom">
          <Canvas camera={{ position: [0, 0.3, 4.5] }}>
            <group position={[0, -0.4, 0.5]}>
              <OrbitControls />
              <Shelf position={[0, 0, 3.25]} scale={[5, 1, 1]} />
              <ambientLight />
              <Suspense>
                <CompleteShelf position={[-0.5, 0.7, 2.4]} />
                <Table scale={1} position={[10, -5, 5]} />
                <Book2 scale={1} rotation={[Math.PI / 2, Math.PI / 2, 0]} position={[10, -1, 5]} />
                {/* <Book3 scale={0.02} position={[0, 0.7, 3.4]} /> */}
                {/* <Book3 scale={0.02} position={[0.04, 0.7, 3.4]} /> */}
                {/* <Book3 scale={0.02} position={[0.08, 0.7, 3.4]} /> */}
                {/* <Book3 scale={0.02} position={[0.12, 0.7, 3.4]} /> */}
              </Suspense>
            </group>
          </Canvas>
        </div>
      </div>
    </Provider>
  );
}

export default App;
