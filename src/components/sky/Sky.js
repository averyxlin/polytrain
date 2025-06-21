import React, { useMemo } from 'react';
import { Object3D } from 'three';

const Sky = () => {
  const lightTarget = useMemo(() => {
    const target = new Object3D();
    target.position.set(0, 0, -20); // point light at center of scene
    return target;
  }, []);

  return (
    <>
      <primitive object={lightTarget} />
      <color attach="background" args={['#87CEEB']} />
      <ambientLight intensity={0.5} />
      <directionalLight
        target={lightTarget}
        position={[0, 30, -20]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-top={40}
        shadow-camera-bottom={-40}
        shadow-camera-near={1}
        shadow-camera-far={50}
      />
    </>
  );
};

export default Sky; 