import React from 'react';

const GrassField = () => {
  const planeWidth = 25;
  const planeLength = 1000;

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[10, -0.5, 0]} receiveShadow>
        <planeGeometry args={[planeWidth, planeLength]} />
        <meshStandardMaterial color="#7cca92" />
      </mesh>
    </group>
  );
};

export default GrassField;
