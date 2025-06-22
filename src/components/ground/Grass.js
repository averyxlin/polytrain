import React from 'react';

const Grass = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[25, -0.5, 0]} receiveShadow>
      <planeGeometry args={[80, 1000]} />
      <meshStandardMaterial color="#84A98C" />
    </mesh>
  );
};

export default Grass; 