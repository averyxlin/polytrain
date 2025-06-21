import React from 'react';
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

export default TrainSmoke; 