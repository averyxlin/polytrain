import React, { useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

const ForestModel = ({ position = [0, 0, 0], rotation = [0, 0, 0]}) => { 
    const { scene } = useGLTF('/forest/scene.gltf', true, true, (error) => {
        console.error('Error loading forest model:', error);
    });

    // Clone the scene to prevent interference between multiple instances
    const clonedScene = useMemo(() => {
        return scene.clone();
    }, [scene]);

    useEffect(() => {
        console.log('ForestModel mounted at position:', position);
    }, [position]);

    return (<primitive 
        object={clonedScene} 
        position={position}
        rotation={rotation}
        scale={[0.5, 0.5, 0.5]}
        castShadow
    />);
}

export default ForestModel;
