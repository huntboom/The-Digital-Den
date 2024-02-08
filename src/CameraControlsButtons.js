import React from 'react';
import  { useRef, useEffect } from 'react';
import { useState, Suspense } from 'react';

const CameraControlsButtons = ({ onLogCameraPosition, onReturnToStartingPosition, onGoToTablePosition }) => {
 const controlsRef = useRef();
  // const cameraControlRef = useRef < CameraControls | null > (null);
  const cameraControlRef = useRef(null);
  const [isTablePosition, setIsTablePosition] = useState(false);
  const handleTablePosition = () => {
    setIsTablePosition(true);
  };
  const handleStartingPosition = () => {
    setIsTablePosition(false);
  };
  const handleButtonClick = () => {
    console.log(controlsRef.current.object.position);
    console.log(controlsRef.current.target.toArray());
  };


  return (
    <div>
        <button onClick={() => {
          // cameraControlRef.current?.rotate(DEG45, 0, true);
          // cameraControlRef.current?.lookInDirectionOf(0, 0, 0, true);
          console.log("Camera Position: ", cameraControlRef.current._camera.position);
          const positionsArray = Object.values(cameraControlRef.current._camera.position);
          const targetsArray = Object.values(cameraControlRef.current._target);
          console.log("Camera Direction: ", cameraControlRef.current._target);
          const totalArray = positionsArray.concat(targetsArray)
          console.log(totalArray)
          console.log(cameraControlRef.current)
          // console.log(cameraControlRef.current);
          // cameraControlRef.current?.truck(1, 0, true);
          // cameraControlRef.current?.setPosition(10.39068940540094, 2.7940987949977103, 6.896609012413881);
          // const newPosition = new Vector3(10.39068940540094, 2.7940987949977103, 6.896609012413881);
          // const newLookAt = new Vector3(0, 0, 0); // Change this to the point you want the camera to look at
          // cameraControlRef.current?.setPosition(newPosition);
          // cameraControlRef.current?.setTarget(5, 5, 5);
        }}
        >Log Camera Position</button>
        <button
          type="button"
          onClick={() => {
            const startingPosition = [0, 3.061616997868383e-16, 5, 0, 0, 0]
            const tablePosition = [9.907485701063523, 2.401641595604553, 6.682113081311899, 9.906062023266644, -5.667110874530187, 6.530531933354925];
            cameraControlRef.current?.setLookAt(...startingPosition, true);
            console.log(cameraControlRef.current);
            handleStartingPosition();
          }}
        >
          Return to Starting Position
        </button>
        <button
          type="button"
          onClick={() => {
            // const tablePosition = [9.907485701063523, 2.401641595604553, 6.682113081311899, 9.906062023266644, -5.667110874530187, 6.530531933354925];
            const tablePosition = [10.065679205124855, 0.2355104039775453, 6.013026193563245, 10.064639804059142, -5.6553378868500745, 5.902359575685355];
            cameraControlRef.current?.setLookAt(...tablePosition, true);
            console.log(cameraControlRef.current);
            handleTablePosition();
            console.log("handleTablePosition: " + isTablePosition)
          }}
        >
          Go to Table Position
        </button>
    </div>
  );
};

export default CameraControlsButtons;
