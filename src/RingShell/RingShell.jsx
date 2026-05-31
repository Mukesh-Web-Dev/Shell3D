
















//to use this you need basic understanding of React three fiber, If suggest to refer its documentation 




















import { useFrame } from "@react-three/fiber";
import { Instances, Instance } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Spinning ring of cylinders
export default function RingShell() {
  const ringRef = useRef();

  const ring = {
    Count: 50,
    height: 2,
    radialSegments: 64,
    heightSegments: 20,
    openEnded: true,
  };

  // Rotate ring every frame
  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.x -= delta * 0.6; 
    }
  });

  // Generate cylinder instances with different scales, rotations, and colors
  const data = useMemo(() => {
    const instances = [];
    for (let i = 0; i < ring.Count; i++) {
      const radius = 3 + i 
      instances.push({
        scale: [radius*2, 1, radius*1.5], 
        rotation: [-i*0.1, 0, 0], 
        // eslint-disable-next-line react-hooks/purity
        color: new THREE.Color().setRGB(Math.random(), Math.random(), Math.random()),
      });
    }
    return instances;
  }, [ring.Count]);

  return (
    <group scale={0.03} >
      <Instances ref={ringRef} limit={ring.Count} range={ring.Count}>
        <cylinderGeometry
          args={[1, 1, ring.height, ring.radialSegments, ring.heightSegments, ring.openEnded]}
        />
        <meshBasicMaterial side={THREE.DoubleSide} />
        {data.map((props, i) => (
          <Instance key={i} {...props} />
        ))}
      </Instances>
    </group>
  );
}
