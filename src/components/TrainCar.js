import React from 'react';
import TrainWheels from './TrainWheels';
import { Icosahedron } from '@react-three/drei';

const TrainSmoke = () => (
    <group>
        <Icosahedron args={[0.1, 0]} position={[1.6, 2.5, 0.2]}>
            <meshStandardMaterial color="#222222" />
        </Icosahedron>
        <Icosahedron args={[0.2, 0]} position={[1.8, 2.7, 0.1]}>
            <meshStandardMaterial color="#111111" />
        </Icosahedron>
        <Icosahedron args={[0.15, 0]} position={[1.5, 2.8, -0.2]}>
            <meshStandardMaterial color="#333333" />
        </Icosahedron>
    </group>
);

const PassengerCar = ({position, rotation}) => {
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
      <mesh position={[-1.8, 1.8, 0.65]}>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[-0.6, 1.8, 0.65]}>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[0.6, 1.8, 0.65]}>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[1.8, 1.8, 0.65]}>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      
      {/* windows - right side */}
      <mesh position={[-1.8, 1.8, -0.65]}>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[-0.6, 1.8, -0.65]}>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[0.6, 1.8, -0.65]}>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[1.8, 1.8, -0.65]}>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  );
};

const TrainCar = ({position, rotation}) => {
  return (
    <group position={position} rotation={rotation}>
      <TrainWheels positionZ={0.45} />

      {/* chassis */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[4.8, 0.2, 1.4]} />
        <meshStandardMaterial color="#4d4d4d" />
      </mesh>

      {/* cabin */}
      <mesh position={[-1.5, 1.65, 0]} castShadow>
        <boxGeometry args={[1.8, 1.5, 1.3]} />
        <meshStandardMaterial color="#f7d08b" />
      </mesh>
      {/* cabin roof */}
      <mesh position={[-1.5, 2.45, 0]} castShadow>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="#e07b7b" />
      </mesh>
      {/* cabin windows */}
      <mesh position={[-1, 1.8, 0.65]}>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[-2, 1.8, 0.65]}>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
       <mesh position={[-1, 1.8, -0.65]}>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[-2, 1.8, -0.65]}>
        <boxGeometry args={[0.4, 0.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* boiler */}
      <mesh position={[0.9, 1.6, 0]} rotation-z={Math.PI / 2} castShadow>
        <cylinderGeometry args={[0.7, 0.7, 2.5, 12]} />
        <meshStandardMaterial color="#e07b7b" />
      </mesh>

      {/* chimney */}
      <mesh position={[1.8, 2.2, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.15, 0.5]} />
        <meshStandardMaterial color="#e07b7b" />
      </mesh>
      
      <TrainSmoke />
    </group>
  );
};

export default TrainCar;
export { PassengerCar };
