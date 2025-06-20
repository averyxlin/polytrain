import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TrainCar, { PassengerCar } from './components/TrainCar';
import TrainConnector from './components/TrainConnector';
import Cloud from './components/Cloud';
import './App.css';

function App() {
  return (
    <Canvas shadows camera={{ position: [5, 5, 5], fov: 25 }}>
      <color attach="background" args={['#87CEEB']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />

      <Cloud position={[-15, 8, -25]} scale={[2, 2, 2]} />
      <Cloud position={[15, 10, -35]} scale={[2.5, 2.5, 2.5]} />
      <Cloud position={[-25, 6, -15]} scale={[1.8, 1.8, 1.8]} />
      <Cloud position={[20, 12, -10]} scale={[2.2, 2.2, 2.2]} />
      <Cloud position={[-5, 9, -20]} scale={[1.5, 1.5, 1.5]} />
      <Cloud position={[5, 11, -30]} scale={[2, 2, 2]} />

      {/* locomotive */}
      <TrainCar position={[0, -0.95, 0]} rotation={[0, -Math.PI / 2, 0]}/>
      
      {/* connector between locomotive and passenger car */}
      <TrainConnector position={[0, -0.7, -2.65]} rotation={[0, -Math.PI / 2, 0]}/>
      
      {/* passenger car - positioned behind the locomotive */}
      <PassengerCar position={[0, -0.95, -5.1]} rotation={[0, -Math.PI / 2, 0]}/>
      
      {/* connector between passenger car and cargo car */}
      <TrainConnector position={[0, -0.7, -7.55]} rotation={[0, -Math.PI / 2, 0]}/>
      
      {/* cargo car - positioned behind the passenger car */}
      <PassengerCar position={[0, -0.95, -10]} rotation={[0, -Math.PI / 2, 0]}/>

      {/* grass */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#84A98C" />
      </mesh>

      {/* road */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.49, 0]} receiveShadow>
        <planeGeometry args={[4, 1000]} />
        <meshStandardMaterial color="#52525B" />
      </mesh>

      {/* rotation */}
      <OrbitControls 
        minPolarAngle={0} 
        maxPolarAngle={Math.PI / 2} 
        maxDistance={50}
      />
    </Canvas>
  );
}

export default App;
