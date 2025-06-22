import React from 'react';

const GrassField = () => {
  const planeWidth = 80;
  const planeLength = 1000;

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[25, -0.5, 0]} receiveShadow>
        <planeGeometry args={[planeWidth, planeLength]} />
        <meshStandardMaterial color="#84A98C" />
      </mesh>
    </group>
  );
};

export default GrassField;