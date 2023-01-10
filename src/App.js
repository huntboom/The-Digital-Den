import './App.css';
import BookFinder from './BookFinder';
import Header from './Header';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Book.jsx';
import { Environment } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import Shelf from './Shelf.js';
function App() {
  return (
    <div className="bg-image">
      <Header />
      <Suspense>
        <Canvas>
          <Shelf position={[0, 0, 3.25]} />
          <ambientLight />
          <OrbitControls />
        </Canvas>
      </Suspense>
      <BookFinder />
    </div>
  );
}

export default App;
