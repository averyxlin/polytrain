import React, { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import TrainCar from './TrainCar';
import TrainConnector from './TrainConnector';
import Locomotive from './Locomotive';

const Train = ({ onPositionChange }) => {
  const [trainPosition, setTrainPosition] = useState(0); // Position along the railroad (z-axis)
  const [isMoving, setIsMoving] = useState(false);
  const [moveDirection, setMoveDirection] = useState(0); // -1 for left, 1 for right, 0 for stopped
  const [keysPressed, setKeysPressed] = useState(new Set());

  useEffect(() => {
    if (onPositionChange) {
      onPositionChange(trainPosition);
    }
  }, [trainPosition, onPositionChange]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (key === 'a' || key === 'arrowleft') {
        setKeysPressed(prev => new Set([...prev, 'left']));
      } else if (key === 'd' || key === 'arrowright') {
        setKeysPressed(prev => new Set([...prev, 'right']));
      }
    };

    const handleKeyUp = (event) => {
      const key = event.key.toLowerCase();
      if (key === 'a' || key === 'arrowleft') {
        setKeysPressed(prev => {
          const newKeys = new Set(prev);
          newKeys.delete('left');
          return newKeys;
        });
      } else if (key === 'd' || key === 'arrowright') {
        setKeysPressed(prev => {
          const newKeys = new Set(prev);
          newKeys.delete('right');
          return newKeys;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (keysPressed.has('left') && keysPressed.has('right')) {
      setMoveDirection(0);
      setIsMoving(false);
    } else if (keysPressed.has('left')) {
      setMoveDirection(1);
      setIsMoving(true);
    } else if (keysPressed.has('right')) {
      setMoveDirection(-1);
      setIsMoving(true);
    } else {
      setMoveDirection(0);
      setIsMoving(false);
    }
  }, [keysPressed]);

  useFrame((state, delta) => {
    if (isMoving) {
      const speed = 5;
      const newPosition = trainPosition + moveDirection * speed * delta;
      setTrainPosition(newPosition);
    }
  });

  return (
    <group position={[0, 0, trainPosition]} scale={[0.5, 0.5, 0.5]}>
      {/* locomotive */}
      <Locomotive 
        position={[0, -0.65, 0]} 
        rotation={[0, Math.PI / 2, 0]}
        isMoving={isMoving}
      />
      
      {/* connector between locomotive and passenger car */}
      <TrainConnector position={[0, -0.4, 2.65]} rotation={[0, Math.PI / 2, 0]}/>
      
      {/* passenger car - positioned behind the locomotive */}
      <TrainCar position={[0, -0.65, 5.1]} rotation={[0, Math.PI / 2, 0]}/>
      
      {/* connector between passenger car and cargo car */}
      <TrainConnector position={[0, -0.4, 7.55]} rotation={[0, Math.PI / 2, 0]}/>
      
      {/* cargo car - positioned behind the passenger car */}
      <TrainCar position={[0, -0.65, 10]} rotation={[0, Math.PI / 2, 0]}/>
    </group>
  );
};

export default Train;
