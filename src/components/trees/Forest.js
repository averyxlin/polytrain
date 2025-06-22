import React, { useMemo } from 'react';
import TreeModel from './TreeModel';

// define areas to avoid (railroad and train path)
const RAILROAD_WIDTH = 2;
const TRAIN_PATH_LENGTH = 100;
const AVOID_ZONE = {
  railroad: { minX: -RAILROAD_WIDTH/2, maxX: RAILROAD_WIDTH/2, minZ: -Infinity, maxZ: Infinity },
  trainPath: { minX: -1, maxX: 1, minZ: -TRAIN_PATH_LENGTH/2, maxZ: TRAIN_PATH_LENGTH/2 }
};

// tree generation parameters
const GRASS_SIZE = 1000;
const TREE_DENSITY = 0.002; // increased from 0.0005 - much denser forest
const CLUSTER_RADIUS = 15; // increased from 1 - larger clusters
const CLUSTER_PROBABILITY = 0.7; // increased from 0.5 - more clustering
const MIN_TREE_DISTANCE = 0.5; // minimum distance between trees to avoid overlap

const Forest = ({ treeCount = Math.floor(GRASS_SIZE * GRASS_SIZE * TREE_DENSITY) }) => {
  const treePositions = useMemo(() => {
    const positions = [];
    const halfSize = GRASS_SIZE / 2;
    const maxAttempts = treeCount * 10; // prevent infinite loops
    let attempts = 0;
    
    while (positions.length < treeCount && attempts < maxAttempts) {
      attempts++;
      let x, z;
      
      // more aggressive clustering for dense forest effect
      if (positions.length > 0 && Math.random() < CLUSTER_PROBABILITY) {
        const baseTree = positions[Math.floor(Math.random() * positions.length)];
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * CLUSTER_RADIUS + MIN_TREE_DISTANCE;
        x = baseTree.x + Math.cos(angle) * distance;
        z = baseTree.z + Math.sin(angle) * distance;
      } else {
        // random position in the grass area
        x = (Math.random() * GRASS_SIZE) - halfSize;
        z = (Math.random() * GRASS_SIZE) - halfSize;
      }
      
      // check if position is valid and not too close to existing trees
      const isInRailroad = x > AVOID_ZONE.railroad.minX && x < AVOID_ZONE.railroad.maxX;
      const isInTrainPath = (
        x > AVOID_ZONE.trainPath.minX && 
        x < AVOID_ZONE.trainPath.maxX && 
        z > AVOID_ZONE.trainPath.minZ && 
        z < AVOID_ZONE.trainPath.maxZ
      );
      
      // check distance from existing trees
      const tooClose = positions.some(pos => {
        const dx = pos.x - x;
        const dz = pos.z - z;
        return Math.sqrt(dx * dx + dz * dz) < MIN_TREE_DISTANCE;
      });
      
      if (!isInRailroad && !isInTrainPath && !tooClose) {
        const yOffset = 1;
        positions.push({
          x,
          y: yOffset, 
          z,
          scale: 0.4 + Math.random() * 0.4, // slightly more size variation
          rotation: [0, Math.random() * Math.PI * 2, 0], // random rotation for variety
          treeNumber: Math.floor(Math.random() * 26) + 1 
        });
      }
    }
    
    return positions;
  }, [treeCount]);

  return (
    <>
      {treePositions.map((pos, index) => (
        <TreeModel 
          key={`tree-${index}`}
          treeNumber={pos.treeNumber}
          position={[pos.x, pos.y, pos.z]}
          scale={pos.scale}
          rotation={pos.rotation}
        />
      ))}
    </>
  );
};

export default Forest;