import './App.css';
import Library from './OpenLibrary.js';
import Header from './Header';
import { Canvas } from '@react-three/fiber';
import { useState, Suspense } from 'react';
import Shelf from './Shelf.js';
import About from './About.js';
import React, { useRef, useEffect } from 'react';
import { OrbitControls, CameraControls } from '@react-three/drei';
import GenreList from './Genres.js';
import { Provider } from 'react-redux';
import CompleteShelf from './CompleteShelf.js';
import store from './store';
import SearchBooks from './SearchBooks.js';
import Book2 from './Book2.js';
import Table from './Table.js';
const DEG45 = Math.PI / 4;
//https://codesandbox.io/s/react-three-fiber-camera-controls-4jjor?file=/src/App.tsx
function App() {
  const controlsRef = useRef();
  // const cameraControlRef = useRef < CameraControls | null > (null);
  const cameraControlRef = useRef(null);
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
        <button
          type="button"
          onClick={() => {
            cameraControlRef.current?.rotate(DEG45, 0, true);
            console.log("rotation attempted")
          }}
        >
          rotate theta 45deg
        </button>
        <div className="readingroom">
          <Canvas /* camera={[0, 0.3, 4.5]} */>
            <CameraControls ref={cameraControlRef} />
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
