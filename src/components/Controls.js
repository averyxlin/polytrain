import React from 'react';
import { OrbitControls } from '@react-three/drei';

const Controls = ({ enabled }) => {
  return (
    <OrbitControls 
      enabled={enabled}
      minPolarAngle={0} 
      maxPolarAngle={Math.PI / 2} 
      maxDistance={50}
    />
  );
};

export default Controls; 