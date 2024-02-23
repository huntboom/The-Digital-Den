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
    const arr1 = cameraControlRef.current._camera.position.toArray();
    const arr2 = cameraControlRef.current._target.toArray();
    const position = [...arr1,...arr2];
    console.log(position);
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
          // Extract current camera position and target as arrays
          const cameraPosition = cameraControlRef.current._camera.position.toArray();
          const targetPosition = cameraControlRef.current._target.toArray();
          // Calculate new positions by adding 0.5 to the X coordinates for moving right
          const newXCameraPosition = cameraPosition[0] + 0.5;
          const newXTargetPosition = targetPosition[0] + 0.5;
          // Update the positions directly without unnecessary array manipulations
          cameraControlRef.current?.setLookAt(
            newXCameraPosition, cameraPosition[1], cameraPosition[2], // new camera position
            newXTargetPosition, targetPosition[1], targetPosition[2], // new target position
            true
          );
          handleStartingPosition();
          }}
      >
        Move 5 Right
      </button>
      <button
        type="button"
        onClick={() => {
         // Extract current camera position and target as arrays
          const cameraPosition = cameraControlRef.current._camera.position.toArray();
          const targetPosition = cameraControlRef.current._target.toArray();
          // Calculate new positions by adding 0.5 to the X coordinates for moving right
          const newXCameraPosition = cameraPosition[0] - 0.5;
          const newXTargetPosition = targetPosition[0] - 0.5;
          // Update the positions directly without unnecessary array manipulations
          cameraControlRef.current?.setLookAt(
            newXCameraPosition, cameraPosition[1], cameraPosition[2], // new camera position
            newXTargetPosition, targetPosition[1], targetPosition[2], // new target position
            true
          );
          handleStartingPosition();
        }}
      >
        Move 5 Left 
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
        <group position={[0, -0.6, 1.2]}>
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
