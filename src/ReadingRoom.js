// ReadingRoom.js
import React, { useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import Shelf from './Shelf.js';
import CompleteShelf from './CompleteShelf.js';
import Table from './Table.js';
import Book2 from './Book2.js';
import { Html } from '@react-three/drei';

const DEG45 = Math.PI / 4;

const ReadingRoom = () => {
  const controlsRef = useRef();
  const cameraControlRef = useRef(null);
  const [isTablePosition, setIsTablePosition] = useState(false);
  const [moveIntervalId, setMoveIntervalId] = useState(null); // State for interval tracking

  const handleTablePosition = () => {
    setIsTablePosition(true);
  };

  const handleStartingPosition = () => {
    setIsTablePosition(false);
  };

  const handleButtonClick = () => {
    const arr1 = cameraControlRef.current._camera.position.toArray();
    const arr2 = cameraControlRef.current._target.toArray();
    const position = [...arr1, ...arr2];
    console.log(position);
  };

  const dollyCameraStop = () => {
    if (moveIntervalId) {
      clearInterval(moveIntervalId);
      setMoveIntervalId(null);
    }
  };

  const dollyCameraLeft = () => {
    const moveAmount = 0.5;

    const moveCamera = () => {
      const cameraPosition = cameraControlRef.current._camera.position.toArray();
      const targetPosition = cameraControlRef.current._target.toArray();
      const newXCameraPosition = cameraPosition[0] - moveAmount;
      const newXTargetPosition = targetPosition[0] - moveAmount;
      cameraControlRef.current?.setLookAt(
        newXCameraPosition, cameraPosition[1], cameraPosition[2], // new camera position
        newXTargetPosition, targetPosition[1], targetPosition[2], // new target position
        true
      );
    };

    dollyCameraStop(); // Clear any existing interval 
    const intervalId = setInterval(moveCamera, 50);
    setMoveIntervalId(intervalId);
  };

  const dollyCameraRight = () => {
    const moveAmount = 0.5;

    const moveCamera = () => {
      const cameraPosition = cameraControlRef.current._camera.position.toArray();
      const targetPosition = cameraControlRef.current._target.toArray();
      const newXCameraPosition = cameraPosition[0] + moveAmount;
      const newXTargetPosition = targetPosition[0] + moveAmount;
      cameraControlRef.current?.setLookAt(
        newXCameraPosition, cameraPosition[1], cameraPosition[2], 
        newXTargetPosition, targetPosition[1], targetPosition[2], 
        true
      );
    };
    
    dollyCameraStop(); 
    const intervalId = setInterval(moveCamera, 50);
    setMoveIntervalId(intervalId);
  };
  const dollyCameraDown = () => {
  const moveAmount = 0.5;

  const moveCamera = () => {
    const cameraPosition = cameraControlRef.current._camera.position.toArray();
    const targetPosition = cameraControlRef.current._target.toArray();

    const newYCameraPosition = cameraPosition[1] - moveAmount;
    const newYTargetPosition = targetPosition[1] - moveAmount;

    cameraControlRef.current?.setLookAt(
      cameraPosition[0], newYCameraPosition, cameraPosition[2], // new camera position
      targetPosition[0], newYTargetPosition, targetPosition[2], // new target position
      true
    );
  };

  dollyCameraStop();
  const intervalId = setInterval(moveCamera, 50);
  setMoveIntervalId(intervalId);
};
  const goToTablePosition = () => {
  const tablePosition = [
    10.065679205124855,
    0.2355104039775453,
    6.013026193563245,
    10.064639804059142,
    -5.6553378868500745,
    5.902359575685355
  ];

  cameraControlRef.current?.setLookAt(...tablePosition, true);
  handleTablePosition();
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
      <button onClick={handleButtonClick}>Log Camera Position</button>
      <div className="homepage">
        <div 
          className="leftSection" 
          onPointerOver={() => dollyCameraLeft()} 
          onPointerOut={() => dollyCameraStop()}
        ></div>
        <div 
          className="rightSection" 
          onPointerOver={() => dollyCameraRight()} 
          onPointerOut={() => dollyCameraStop()}
        ></div>
        <div 
          className="bottomSection" 
          onPointerOver={() => dollyCameraDown()} 
          onPointerOut={() => dollyCameraStop()}
        ></div>

        <div className="readingroom">
          <Canvas>
            <CameraControls ref={cameraControlRef} smoothTime={0.8} />
            <group position={[0, -0.6, 1.2]}>
              <Shelf position={[0, 0, 3.25]} scale={[5, 1, 1]} />
              <ambientLight />
              <Suspense>
                <CompleteShelf onBookClick={goToTablePosition} genre="Mystery" position={[-1.7, 0.7, 2.2]} />
                <CompleteShelf genre="Fantasy" position={[-1.7, 0.2, 2.2]} />
                <CompleteShelf genre="Crime" position={[-1.7, -0.3, 2.2]} />
                <CompleteShelf genre="Religion" position={[-1.7, -0.8, 2.2]} />
                
                {/* Add more CompleteShelf components with different genres */}
                <Table scale={1} position={[10, -5, 5]} />
                <Book2 isTablePosition={isTablePosition} genre={isTablePosition ? 'Mystery' : null} scale={1} rotation={[Math.PI / 2, 0, 0]} position={[10, -1.777, 5]} />
              </Suspense>
            </group>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default ReadingRoom;
