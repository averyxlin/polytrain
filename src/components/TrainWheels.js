import React from 'react';

const Wheel = ({ position, radius, width }) => (
    <mesh position={position} castShadow>
        <cylinderGeometry args={[radius, radius, width, 16]} />
        <meshStandardMaterial color="#808080" />
    </mesh>
);

const Axle = ({ position, length }) => (
    <mesh position={position} castShadow>
        <cylinderGeometry args={[0.05, 0.05, length, 8]} />
        <meshStandardMaterial color="#3b3b3b" />
    </mesh>
);

const TrainWheels = ({ positionZ }) => {
    const wheelRadius = 0.4;
    const wheelWidth = 0.15;
    const axleWidth = 1.8;
    const wheelY = axleWidth / 2 - wheelWidth / 2;

    const backWheelX = -1.2;
    const frontWheelX = 1.2;
    const rodLength = frontWheelX - backWheelX;
    const rodY = axleWidth / 2 + 0.025;

    return (
        <group rotation-x={-Math.PI / 2} position-y={wheelRadius}>
            {/* Back Wheels */}
            <Wheel position={[backWheelX, -wheelY, positionZ]} radius={wheelRadius} width={wheelWidth} />
            <Wheel position={[backWheelX, wheelY, positionZ]} radius={wheelRadius} width={wheelWidth} />
            <Axle position={[backWheelX, 0, positionZ]} length={axleWidth} />

            {/* Front Wheels */}
            <Wheel position={[frontWheelX, -wheelY, positionZ]} radius={wheelRadius} width={wheelWidth} />
            <Wheel position={[frontWheelX, wheelY, positionZ]} radius={wheelRadius} width={wheelWidth} />
            <Axle position={[frontWheelX, 0, positionZ]} length={axleWidth} />

            {/* Connecting Rods */}
            <mesh position={[0, -rodY, positionZ]} castShadow>
                <boxGeometry args={[rodLength, 0.1, 0.05]} />
                <meshStandardMaterial color="#3b3b3b" />
            </mesh>
            <mesh position={[0, rodY, positionZ]} castShadow>
                <boxGeometry args={[rodLength, 0.1, 0.05]} />
                <meshStandardMaterial color="#3b3b3b" />
            </mesh>
        </group>
    );
};

export default TrainWheels;