import { useRef, useEffect } from "react";
import "./App.css";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PointLightHelper } from "three";

import RingShell from "./RingShell/RingShell";

import { useControls, Leva } from "leva";
import { RectAreaLightHelper } from "three/examples/jsm/Addons.js";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";

function MyLight() {

  
  // leva controls
  const { intensity } = useControls("AmbientLight", {
    intensity: { value: 0.3, min: 0, max: 2, step: 0.1 },
  });

  const {
    spotIntensity,
    spotColor,
    spotDirection,
    spotAngle,
    spotPenumbra,
    spotDecay,
    spotLookAt,
    } = useControls("SpotLight", {
      spotIntensity: { value: 5, min: 0, max: 200, step: 1 },
      spotColor: "#feffe9",
      spotDirection: { value: [0.2, 1, 2], min: -10, max: 10, step: 0.1 },
      spotAngle: { value: 0.6, min: 0, max: Math.PI / 2, step: 0.01 },
      spotPenumbra: { value: 0.3, min: 0, max: 1, step: 0.1 },
      spotDecay: { value: 1, min: 0, max: 10, step: 0.1 },
      spotLookAt: { value: [0, 0, 0], min: -10, max: 10, step: 0.1 }, // <-- NEW
    });

  const {
      directionalIntensity, directionalDirection, directionalColor } =
      useControls("DirectionalLight", {
        directionalIntensity: { value: 0.5, min: 0, max: 2, step: 0.1 },
        directionalDirection: { value: [0, 4, 0], min: -10, max: 10, step: 0.1 },
        directionalColor: "#feffe9",
      });

  const {
      hemiIntensity, hemiSkyColor, hemiGroundColor } = useControls(
      "HemiSphereLight",
      {
        hemiIntensity: { value: 0.5, min: 0, max: 10, step: 0.1 },
        hemiSkyColor: "#ff1e00",
        hemiGroundColor: "#00ccff",
      }
    );

  const {
       pointIntensity, pointColor, pointPosition } = useControls(
      "PointLight",
      {
        pointIntensity: { value: 5, min: 0, max: 100, step: 0.1 },
        pointColor: "#ffae00",
        pointPosition: { value: [0, -0.8, -1], min: -10, max: 10, step: 0.1 },
      }
    );

  const {
      rectAreaIntensity,
      rectAreaColor,
      rectAreaPosition,
      rectAreaWidth,
      rectAreaHeight,
      rectAreaLookAt,
    } = useControls("RectAreaLight", {
      rectAreaIntensity: { value: 10, min: 0, max: 100, step: 0.1 },
      rectAreaColor: "#4e00ff",
      rectAreaPosition: { value: [2, 0, 4], min: -10, max: 10, step: 0.1 },
      rectAreaWidth: { value: 3, min: 0, max: 20, step: 0.1 },
      rectAreaHeight: { value: 2, min: 0, max: 20, step: 0.1 },
      rectAreaLookAt: { value: [0, 0.5, 0], min: -10, max: 10, step: 0.1 }, // <-- NEW
    });

  
  const lightRef = useRef();

  const rectAreaLightRef = useRef();

  // Add this new useEffect to watch the Leva variables
  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.rotation.set(...spotLookAt);
      // Spotlights sometimes need their matrices manually updated after a lookAt
      lightRef.current.updateMatrixWorld();
    }

    if (rectAreaLightRef.current) {
      rectAreaLightRef.current.rotation.set(...rectAreaLookAt);
    }
  }, [spotLookAt, rectAreaLookAt]); // <-- React will run this whenever these values change!

  useEffect(() => {
    const rectArealightuseEffect = rectAreaLightRef.current;
    // Initialize uniforms for proper RectAreaLight rendering
    RectAreaLightUniformsLib.init();

    // If you prefer attaching the helper natively to the light object
    if (rectArealightuseEffect) {
      const helper = new RectAreaLightHelper(rectArealightuseEffect);
      rectArealightuseEffect.add(helper);

      // Cleanup on unmount
      return () => {
        rectArealightuseEffect.remove(helper);
      };
    }
  }, []);

  return (
    <>
      <ambientLight intensity={intensity}></ambientLight>
      <directionalLight
        position={directionalDirection}
        color={directionalColor}
        intensity={directionalIntensity}
        castShadow
      ></directionalLight>

      <spotLight
        ref={lightRef}
        color={spotColor}
        position={spotDirection}
        angle={spotAngle}
        penumbra={spotPenumbra}
        intensity={spotIntensity}
        decay={spotDecay}
        castShadow
      />

      <hemisphereLight
        args={[hemiSkyColor, hemiGroundColor, hemiIntensity]}
        castShadow
      />
      <pointLight
        position={pointPosition}
        color={pointColor}
        intensity={pointIntensity}
        castShadow
      />

      {/* <rectAreaLight
        ref={rectAreaLightRef}
        position={rectAreaPosition}
        color={rectAreaColor}
        intensity={rectAreaIntensity}
        width={rectAreaWidth}
        height={rectAreaHeight}
        castShadow
      /> */}
    </>
  );
}

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas
          camera={{ position: [0, 1, 4], fov: 75, near: 0.1, far: 1000 }}
          shadows
          gl={{
            antialias: true,
            alpha: false,
          }}
          dpr={[1, 2]}
        >
          {/* <MyLight /> */}
          <OrbitControls
            makeDefault
            autoRotate={true}
            autoRotateSpeed={3}
            makeDefault
          ></OrbitControls>
          <RingShell />
        </Canvas>
      </div>
    </>
  );
}

export default App;
