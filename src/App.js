import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import Sky from './components/Sky';
import Controls from './components/Controls';
import './App.css';

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 25 }}>
        <Sky />
        <Scene />
        <Controls />
      </Canvas>
      
      {/* Controls overlay */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '15px',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        zIndex: 1000
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Train Controls:</div>
        <div>A / ← - Move Left</div>
        <div>D / → - Move Right</div>
      </div>
    </div>
  );
}

export default App;
