import React from 'react';

const Road = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.49, 0]} receiveShadow>
      <planeGeometry args={[4, 1000]} />
      <meshStandardMaterial color="#52525B" />
    </mesh>
  );
};

export default Road; 