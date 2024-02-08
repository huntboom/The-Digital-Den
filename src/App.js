import './App.css';
import { Vector3 } from 'three';
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
import ReadingRoom from './ReadingRoom.js';
const DEG45 = Math.PI / 4;

//https://codesandbox.io/s/react-three-fiber-camera-controls-4jjor?file=/src/App.tsx
function App() {
  return (
    <Provider store={store}>
      <div className="bg-image">
        <Header />
        <About />
        <SearchBooks />
        <Library />
        <GenreList />
        <ReadingRoom/>
      </div>
    </Provider>
  );
}

export default App;
