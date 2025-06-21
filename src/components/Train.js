import React from 'react';
import TrainCar from './TrainCar';
import TrainConnector from './TrainConnector';
import Locomotive from './Locomotive';

const Train = () => {
  return (
    <group>
      {/* locomotive */}
      <Locomotive position={[0, -0.95, 0]} rotation={[0, -Math.PI / 2, 0]}/>
      
      {/* connector between locomotive and passenger car */}
      <TrainConnector position={[0, -0.7, -2.65]} rotation={[0, -Math.PI / 2, 0]}/>
      
      {/* passenger car - positioned behind the locomotive */}
      <TrainCar position={[0, -0.95, -5.1]} rotation={[0, -Math.PI / 2, 0]}/>
      
      {/* connector between passenger car and cargo car */}
      <TrainConnector position={[0, -0.7, -7.55]} rotation={[0, -Math.PI / 2, 0]}/>
      
      {/* cargo car - positioned behind the passenger car */}
      <TrainCar position={[0, -0.95, -10]} rotation={[0, -Math.PI / 2, 0]}/>
    </group>
  );
};

export default Train; 