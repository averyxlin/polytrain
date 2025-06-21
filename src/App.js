import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import Sky from './components/Sky';
import Controls from './components/Controls';
import './App.css';

function App() {
  return (
    <Canvas shadows camera={{ position: [5, 5, 5], fov: 25 }}>
      <Sky />
      <Scene />
      <Controls />
    </Canvas>
  );
}

export default App;
