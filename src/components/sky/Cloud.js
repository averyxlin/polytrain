import React from 'react';
import { Icosahedron } from '@react-three/drei';

function Cloud(props) {
  return (
    <group {...props}>
      <mesh>
        <Icosahedron args={[1, 0]} castShadow>
          <meshStandardMaterial color="white" flatShading />
        </Icosahedron>
      </mesh>
      <mesh position={[1.2, 0.3, -0.5]}>
        <Icosahedron args={[0.7, 0]} castShadow>
          <meshStandardMaterial color="white" flatShading />
        </Icosahedron>
      </mesh>
      <mesh position={[-1, 0.5, -0.8]}>
        <Icosahedron args={[0.8, 0]} castShadow>
          <meshStandardMaterial color="white" flatShading />
        </Icosahedron>
      </mesh>
      <mesh position={[0.5, 0.8, -1]}>
        <Icosahedron args={[0.6, 0]} castShadow>
          <meshStandardMaterial color="white" flatShading />
        </Icosahedron>
      </mesh>
    </group>
  );
}

export default Cloud; 