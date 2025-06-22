import React, { useState } from 'react';
import Cloud from './sky/Cloud';
import GrassField from './ground/GrassField';
import Railroad from './ground/Railroad';
import Train from './train/Train';
import Camera from './camera/Camera';
import Controls from './camera/Controls';

const Scene = () => {
  const [trainPosition, setTrainPosition] = useState(0);
  const [controlsEnabled, setControlsEnabled] = useState(false);

  const handleTrainPositionChange = (position) => {
    setTrainPosition(position);
  };

  const handleZoomComplete = () => {
    setControlsEnabled(true);
  };

  return (
    <>
      <Cloud position={[-15, 8, -25]} scale={[2, 2, 2]} />
      <Cloud position={[15, 10, -35]} scale={[2.5, 2.5, 2.5]} />
      <Cloud position={[-25, 6, -15]} scale={[1.8, 1.8, 1.8]} />
      <Cloud position={[20, 12, -10]} scale={[2.2, 2.2, 2.2]} />
      <Cloud position={[-5, 9, -20]} scale={[1.5, 1.5, 1.5]} />
      <Cloud position={[5, 11, -30]} scale={[2, 2, 2]} />

      <GrassField />
      <Railroad />
      <Train onPositionChange={handleTrainPositionChange} />
      <Camera 
        trainPosition={trainPosition} 
        onZoomComplete={handleZoomComplete} 
      />
      <Controls enabled={controlsEnabled} />
    </>
  );
};

export default Scene; 