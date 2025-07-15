import React from 'react';

const TIE_WIDTH = 0.1;
const TIE_HEIGHT = 0.05;
const TIE_LENGTH = 1.25;
const TIE_SPACING = 0.3;

const RAIL_WIDTH = 0.075;
const RAIL_HEIGHT = 0.1;
const RAIL_LENGTH = 1000;
const RAIL_SPACING = 0.75;

const RailroadTie = ({ position }) => (
  <mesh position={position}>
    <boxGeometry args={[TIE_LENGTH, TIE_HEIGHT, TIE_WIDTH]} />
    <meshStandardMaterial color="#444" />
  </mesh>
);

const Rail = ({ position }) => (
  <mesh position={position}>
    <boxGeometry args={[RAIL_WIDTH, RAIL_HEIGHT, RAIL_LENGTH]} />
    <meshStandardMaterial color="#888" />
  </mesh>
);

const Railroad = () => {
  const ties = [];
  for (let i = 0; i < RAIL_LENGTH / TIE_SPACING; i++) {
    ties.push(
      <RailroadTie
        key={i}
        position={[0, -0.2, -RAIL_LENGTH / 2 + i * TIE_SPACING]}
      />
    );
  }

  return (
    <group>
      <Rail position={[-RAIL_SPACING / 2, -0.2 + (TIE_HEIGHT + RAIL_HEIGHT) / 2, 0]} />
      <Rail position={[RAIL_SPACING / 2, -0.2 + (TIE_HEIGHT + RAIL_HEIGHT) / 2, 0]} />
      {ties}
    </group>
  );
};

export default Railroad;
