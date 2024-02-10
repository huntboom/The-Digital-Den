// ReadingRoom.js
import React, { useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import Shelf from './Shelf.js';
import CompleteShelf from './CompleteShelf.js';
import Table from './Table.js';
import Book2 from './Book2.js';

const DEG45 = Math.PI / 4;

const ReadingRoom = () => {
  const controlsRef = useRef();
  const cameraControlRef = useRef(null);
  const [isTablePosition, setIsTablePosition] = useState(false);

  const handleTablePosition = () => {
    setIsTablePosition(true);
  };

  const handleStartingPosition = () => {
    setIsTablePosition(false);
  };

  const handleButtonClick = () => {
    console.log(cameraControlRef.current._camera.position);
    console.log(cameraControlRef.current._target.toArray());
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          const startingPosition = [0, 3.061616997868383e-16, 5, 0, 0, 0];
          cameraControlRef.current?.setLookAt(...startingPosition, true);
          handleStartingPosition();
        }}
      >
        Return to Starting Position
      </button>
      <button
        type="button"
        onClick={() => {
          const tablePosition = [10.065679205124855, 0.2355104039775453, 6.013026193563245, 10.064639804059142, -5.6553378868500745, 5.902359575685355];
          cameraControlRef.current?.setLookAt(...tablePosition, true);
          handleTablePosition();
        }}
      >
        Go to Table Position
      </button>
      <button onClick={handleButtonClick}>Log Camera Position</button>
    <div className="readingroom">
      <Canvas>
        <CameraControls ref={cameraControlRef} smoothTime={0.8} />
        <group position={[0, -0.4, 0.8]}>
          <Shelf position={[0, 0, 3.25]} scale={[5, 1, 1]} />
          <ambientLight />
          <Suspense>
            <CompleteShelf position={[-1.7, 0.7, 2.2]} />
            <Table scale={1} position={[10, -5, 5]} />
            <Book2 isTablePosition={isTablePosition} scale={1} rotation={[Math.PI / 2, 0, 0]} position={[10, -1.777, 5]} />
          </Suspense>
        </group>
      </Canvas>
    </div>
    </div>
  );
};

export default ReadingRoom;
