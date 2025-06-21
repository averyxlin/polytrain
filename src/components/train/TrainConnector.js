import React from 'react';

const TrainConnector = ({ position, rotation }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Main coupling bar */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.8, 8]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Coupling hooks - left side */}
      <mesh position={[-0.4, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.1, 8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Coupling hooks - right side */}
      <mesh position={[0.4, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.1, 8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Support brackets */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[0.9, 0.1, 0.3]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>
      
      {/* Chain links */}
      <mesh position={[0, 0.7, 0]} castShadow>
        <torusGeometry args={[0.15, 0.03, 8, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
  );
};

export default TrainConnector; 