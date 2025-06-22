import React, { useMemo } from 'react';
import Cloud from './Cloud';

const CloudLine = ({ 
  startZ = -50, 
  endZ = 50, 
  startX = -30, 
  endX = 30, 
  minY = 5, 
  maxY = 15,
  count = 15,
  minScale = 1.5,
  maxScale = 3
}) => {
  // Generate random positions for clouds - only once using useMemo
  const cloudPositions = useMemo(() => {
    const generateRandomPosition = () => {
      const x = Math.random() * (endX - startX) + startX;
      const y = Math.random() * (maxY - minY) + minY;
      const z = Math.random() * (endZ - startZ) + startZ;
      const scale = Math.random() * (maxScale - minScale) + minScale;
      return { x, y, z, scale };
    };

    // Generate array of random cloud positions
    return Array.from({ length: count }, () => generateRandomPosition());
  }, [startZ, endZ, startX, endX, minY, maxY, count, minScale, maxScale]);

  return (
    <>
      {cloudPositions.map((pos, index) => (
        <Cloud 
          key={`cloud-${index}`}
          position={[pos.x, pos.y, pos.z]} 
          scale={[pos.scale, pos.scale, pos.scale]} 
        />
      ))}
    </>
  );
};

export default CloudLine; 