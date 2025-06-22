import React, { useMemo } from 'react';
import ForestModel from './ForestModel';

const ForestLine = ({ 
  startZ = -50, 
  endZ = 50, 
  interval = 10, 
  x = -8.2, 
  y = -3.2
}) => {

  const count = Math.floor((endZ - startZ) / interval) + 1;
  const positions = Array.from({ length: count }, (_, i) => startZ + i * interval);
  const rotations = useMemo(() => {
    return Array.from({ length: count }, () => [0, Math.random() * Math.PI * 2, 0]);
  }, [count]);

  return (
    <>
      {positions.map((z, index) => {
        return (
          <ForestModel 
            key={`forest-${x}-${z}-${index}`} 
            position={[x, y, z]} 
            rotation={rotations[index]}
          />
        );
      })}
    </>
  );
};

export default ForestLine; 