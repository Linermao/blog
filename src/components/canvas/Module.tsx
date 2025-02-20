import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Group } from "three"; // 确保 three.js 类型正确导入

// 定义 Props 类型
interface GLTFResult {
  scene: Group; // Three.js 3D 场景
}

// 加载 GLTF 3D 模型
function Model ({ isMobile=false }) {
  const { scene } = useGLTF("/module/desktop_pc/scene.gltf") as GLTFResult;
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// 渲染 Three.js 3D 画布
function Module({ isMobile=false }) {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      {/* 光照 */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* 加载模型 */}
      <Suspense fallback={null}>
        <Model isMobile={isMobile}/>
      </Suspense>

      {/* 允许鼠标控制 */}
      <OrbitControls />
    </Canvas>
  );
};

export default Module;
