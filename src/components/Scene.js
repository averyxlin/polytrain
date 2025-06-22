import React, { useState } from 'react';
import CloudLine from './sky/CloudLine';
import GrassField from './ground/GrassField';
import Railroad from './ground/Railroad';
import Train from './train/Train';
import Camera from './camera/Camera';
import Controls from './camera/Controls';
import ForestLine from './trees/ForestLine';

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
      <CloudLine 
        startZ={-500} 
        endZ={500} 
        startX={-30} 
        endX={30} 
        minY={8} 
        maxY={12}
        count={15}
        minScale={1.5}
        maxScale={3}
      />

      <ForestLine startZ={-500} endZ={500} x={-8.2} y={-3.2} interval={10} />
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