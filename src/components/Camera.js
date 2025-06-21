import React, { useRef, useEffect, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const Camera = ({ trainPosition }) => {
  const { camera } = useThree();
  const [startZoom, setStartZoom] = useState(false);
  const [initialZoomDone, setInitialZoomDone] = useState(false);
  const isMounted = useRef(false);

  const initialPosition = useRef(new Vector3(0, 4, 8));
  const targetPosition = useRef(new Vector3(0, 10, 25));

  useEffect(() => {
    isMounted.current = true;
    const timer = setTimeout(() => {
      if (isMounted.current) {
        setStartZoom(true);
      }
    }, 1000);
    return () => {
      isMounted.current = false;
      clearTimeout(timer);
    };
  }, []);

  useFrame((state, delta) => {
    const lookAtPos = new Vector3(trainPosition - 2, 2, 0);

    let currentTargetPos;
    if (initialZoomDone) {
      currentTargetPos = new Vector3(
        trainPosition + targetPosition.current.x,
        targetPosition.current.y,
        targetPosition.current.z
      );
    } else {
      currentTargetPos = new Vector3(
        trainPosition + initialPosition.current.x,
        initialPosition.current.y,
        initialPosition.current.z
      );
    }
    
    if (startZoom && !initialZoomDone) {
      const zoomOutTarget = new Vector3(
        trainPosition + targetPosition.current.x,
        targetPosition.current.y,
        targetPosition.current.z
      );
      camera.position.lerp(zoomOutTarget, 0.4 * delta);
      if (camera.position.distanceTo(zoomOutTarget) < 0.2) {
        setInitialZoomDone(true);
      }
    } else {
      camera.position.copy(currentTargetPos);
    }

    camera.lookAt(lookAtPos);
  });

  return null;
};

export default Camera; 