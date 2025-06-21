import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';

const SmokeParticle = ({ position, size, color, speed = 1, onComplete }) => {
  const meshRef = useRef();
  const startY = position[1];
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += speed * 0.01;
      meshRef.current.position.x += (Math.sin(state.clock.elapsedTime * 2) * 0.005);
      meshRef.current.position.z += (Math.cos(state.clock.elapsedTime * 1.5) * 0.005);
      
      if (meshRef.current.material) {
        const opacity = Math.max(0, 1 - (meshRef.current.position.y - startY) * 0.1);
        meshRef.current.material.opacity = opacity;
        
        if (opacity <= 0 && onComplete) {
          onComplete();
        }
      }
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[size, 0]} position={position}>
      <meshStandardMaterial color={color} transparent opacity={1} />
    </Icosahedron>
  );
};

const TrainSmoke = ({ isMoving = false }) => {
  const [smokeParticles, setSmokeParticles] = useState([]);
  const [nextSmokeTime, setNextSmokeTime] = useState(0);
  
  useFrame((state) => {
    if (isMoving && state.clock.elapsedTime >= nextSmokeTime) {
      const darkGreyValue = Math.floor(Math.random() * 0x55 + 0x11);
      const newParticle = {
        id: Date.now() + Math.random(),
        position: [
          1.8 + (Math.random() - 0.5) * 0.1,
          2.5 + Math.random() * 0.3, 
          (Math.random() - 0.5) * 0.1
        ],
        size: 0.1 + Math.random() * 0.15, 
        color: `#${darkGreyValue.toString(16).padStart(2, '0').repeat(3)}`,
      };
      
      setSmokeParticles(prev => [...prev, newParticle]);
      setNextSmokeTime(state.clock.elapsedTime + 0.3); 
    }
  });
  
  const removeParticle = (id) => {
    setSmokeParticles(prev => prev.filter(particle => particle.id !== id));
  };

  return (
    <group>
      {smokeParticles.map(particle => (
        <SmokeParticle
          key={particle.id}
          position={particle.position}
          size={particle.size}
          color={particle.color}
          speed={particle.speed}
          onComplete={() => removeParticle(particle.id)}
        />
      ))}
    </group>
  );
};

export default TrainSmoke; 