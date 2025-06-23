import React, { useState, useEffect, useRef } from 'react';

const FPSTracker = () => {
  const [fps, setFps] = useState(0);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const animationId = useRef(null);

  useEffect(() => {
    const updateFPS = () => {
      frameCount.current++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime.current >= 1000) {
        const calculatedFps = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current));
        setFps(calculatedFps);
        frameCount.current = 0;
        lastTime.current = currentTime;
      }
      
      animationId.current = requestAnimationFrame(updateFPS);
    };

    animationId.current = requestAnimationFrame(updateFPS);

    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  const getFpsColor = (fps) => {
    if (fps >= 55) return '#4ade80';
    if (fps >= 30) return '#fbbf24';
    return '#ef4444';
  };

  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      padding: '10px 15px',
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif',
      fontSize: '14px',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
      <div style={{ fontWeight: 'bold' }}>FPS:</div>
      <div style={{ 
        color: getFpsColor(fps),
        fontWeight: 'bold',
        fontSize: '16px'
      }}>
        {fps}
      </div>
    </div>
  );
};

export default FPSTracker; 