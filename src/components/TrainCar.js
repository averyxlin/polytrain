import React from 'react';
import TrainWheels from './TrainWheels';

const TrainCar = ({position, rotation}) => {
  return (
    <group position={position} rotation={rotation}>
      <TrainWheels positionZ={0.45} />

      {/* chassis */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[4.4, 0.2, 1.4]} />
        <meshStandardMaterial color="#4d4d4d" />
      </mesh>

      {/* passenger car body */}
      <mesh position={[0, 1.65, 0]} castShadow>
        <boxGeometry args={[4.4, 1.5, 1.3]} />
        <meshStandardMaterial color="#f7d08b" />
      </mesh>
      
      {/* roof */}
      <mesh position={[0, 2.45, 0]} castShadow>
        <boxGeometry args={[4.6, 0.1, 1.5]} />
        <meshStandardMaterial color="#e07b7b" />
      </mesh>
      
      {/* windows - left side */}
      <mesh position={[-1.8, 1.8, 0.65]} castShadow>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[-0.6, 1.8, 0.65]} castShadow>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[0.6, 1.8, 0.65]} castShadow>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[1.8, 1.8, 0.65]} castShadow>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      
      {/* windows - right side */}
      <mesh position={[-1.8, 1.8, -0.65]} castShadow>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[-0.6, 1.8, -0.65]} castShadow>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[0.6, 1.8, -0.65]} castShadow>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[1.8, 1.8, -0.65]} castShadow>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  );
};

export default TrainCar; 