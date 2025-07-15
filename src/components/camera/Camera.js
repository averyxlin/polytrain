import { useRef, useEffect, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const Camera = ({ trainPosition, onZoomComplete }) => {
  const { camera } = useThree();
  const [animationPhase, setAnimationPhase] = useState('initial'); // 'initial', 'pause', 'zoomOut', 'complete'
  const isMounted = useRef(false);
  const pauseStartTime = useRef(0);
  const zoomOutStartTime = useRef(0);
  const pauseDuration = 4; 
  const zoomOutDuration = 8;

  const zoomedInPosition = useRef(new Vector3(2, 10, 0)); 
  const maxZoomOutPosition = useRef(new Vector3(40, 12, 0)); 

  useEffect(() => {
    isMounted.current = true;
    setAnimationPhase('initial');
    return () => {
      isMounted.current = false;
    };
  }, []);

  useFrame((state, delta) => {
    const lookAtPos = new Vector3(0, 2, trainPosition);

    if (animationPhase === 'initial') {
      const currentTargetPos = new Vector3(
        zoomedInPosition.current.x,
        zoomedInPosition.current.y,
        trainPosition + zoomedInPosition.current.z
      );
      camera.position.copy(currentTargetPos);
      
      setAnimationPhase('pause');
      pauseStartTime.current = state.clock.elapsedTime;
    } else if (animationPhase === 'pause') {
      const currentTargetPos = new Vector3(
        zoomedInPosition.current.x,
        zoomedInPosition.current.y,
        trainPosition + zoomedInPosition.current.z
      );
      camera.position.copy(currentTargetPos);
    
      const pauseElapsed = state.clock.elapsedTime - pauseStartTime.current;
      if (pauseElapsed >= pauseDuration) {
        setAnimationPhase('zoomOut');
        zoomOutStartTime.current = state.clock.elapsedTime;
      }
    } else if (animationPhase === 'zoomOut') {
      const zoomOutElapsed = state.clock.elapsedTime - zoomOutStartTime.current;
      const progress = Math.min(zoomOutElapsed / zoomOutDuration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const startPos = new Vector3(
        zoomedInPosition.current.x,
        zoomedInPosition.current.y,
        trainPosition + zoomedInPosition.current.z
      );
      const endPos = new Vector3(
        maxZoomOutPosition.current.x,
        maxZoomOutPosition.current.y,
        trainPosition + maxZoomOutPosition.current.z
      );

      camera.position.lerpVectors(startPos, endPos, easedProgress);

      if (progress >= 1) {
        setAnimationPhase('complete');
        if (onZoomComplete) {
          onZoomComplete();
        }
      }
    } else if (animationPhase === 'complete') {
      const currentTargetPos = new Vector3(
        maxZoomOutPosition.current.x,
        maxZoomOutPosition.current.y,
        trainPosition + maxZoomOutPosition.current.z
      );
      camera.position.copy(currentTargetPos);
    }

    camera.lookAt(lookAtPos);
  });

  return null;
};

export default Camera;
