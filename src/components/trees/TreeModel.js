import React from 'react';
import { useGLTF } from '@react-three/drei';

const TreeModel = ({ treeNumber, position, scale = 1, rotation = [0, 0, 0] }) => {
    const { nodes, materials } = useGLTF(`/low_poly_nature/scene.gltf`);
    const paddedNumber = String(treeNumber).padStart(3, '0');
    const meshName = `Tree${paddedNumber}_Mat_tree_0`;

    const treeMesh = nodes[meshName];

    if (!treeMesh) {
        console.error(`Tree mesh "${meshName}" not found in the model`);
        return null;
    }

    const uprightRotation = [-Math.PI / 2, 0, 0];

    return (
        <group position={position} rotation={uprightRotation} scale={scale}>
            <primitive 
                object={treeMesh} 
                material={materials[treeMesh.material?.name]}
                castShadow
                receiveShadow
                frustumCulled={true}
            />
        </group>
    );
};

export default TreeModel;