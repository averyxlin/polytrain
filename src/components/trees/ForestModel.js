import React from 'react';
import { useGLTF } from '@react-three/drei';

const ForestModel = ({ position = [0, 0, 0], rotation = [0, 0, 0]}) => { 
    const { scene } = useGLTF('/forest/scene.gltf');

    return (<primitive 
        object={scene} 
        position={position}
        rotation={rotation}
        scale={[0.5, 0.5, 0.5]}
        castShadow
    />);
}

export default ForestModel;
