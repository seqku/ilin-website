import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from '@react-three/drei';

const WaveText = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();

  const vertexShader = `
    uniform float amplitude;
    uniform float frequency;
    uniform float speed;
    uniform float time;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec3 newPosition = position;
      newPosition.z += sin((position.x + time * speed) * frequency) * amplitude;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // белый цвет
    }
  `;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ref1.current.material.uniforms.time.value = time;
    ref2.current.material.uniforms.time.value = time;
    ref3.current.material.uniforms.time.value = time;
    ref4.current.material.uniforms.time.value = time;
    ref5.current.material.uniforms.time.value = time;
    ref6.current.material.uniforms.time.value = time;
    ref7.current.material.uniforms.time.value = time;
  });

  return (
    <group>
      <Text
        ref={ref1}
        fontSize={1}
        color="#ffffff"
        position={[1, 2, 0]}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0}
        lineHeight={1}
        maxWidth={200}
        textAlign="center"
        font="/fonts/GalderGlynn.ttf"
      >
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            amplitude: { value: 0.1 },
            frequency: { value: 2.0 },
            speed: { value: 1 },
            time: { value: 0 }
          }}
        />
        ILIN Esports
      </Text>

      <Text
        ref={ref2}
        fontSize={1}
        color="#ffffff"
        position={[-1.6, 1, 0]}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0}
        lineHeight={1}
        maxWidth={200}
        textAlign="center"
        font="/fonts/GalderGlynn.ttf"
      >
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            amplitude: { value: 0.1 },
            frequency: { value: 2.0 },
            speed: { value: 1 },
            time: { value: 0 }
          }}
        />
        Straight out
      </Text>

      <Text
        ref={ref3}
        fontSize={1}
        color="#ffffff"
        position={[-1.8, 0, 0]}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0}
        lineHeight={1}
        maxWidth={200}
        textAlign="center"
        font="/fonts/GalderGlynn.ttf"
      >
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            amplitude: { value: 0.1 },
            frequency: { value: 2.0 },
            speed: { value: 1 },
            time: { value: 0 }
          }}
        />
        of Yakutia
      </Text>

      <Text
        ref={ref6}
        fontSize={0.2}
        color="#ffffff"
        position={[-0.5, -1.2, 0]}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0}
        lineHeight={1}
        maxWidth={200}
        textAlign="center"
        font="/fonts/GalderGlynn.ttf"
      >
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            amplitude: { value: 0.1 },
            frequency: { value: 2.0 },
            speed: { value: 1 },
            time: { value: 0 }
          }}
        />
        from 
      </Text>

      <Text
        ref={ref4}
        fontSize={1}
        color="#ffffff"
        position={[0.7, -1, 0]}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0}
        lineHeight={1}
        maxWidth={200}
        textAlign="center"
        font="/fonts/GalderGlynn.ttf"
      >
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            amplitude: { value: 0.1 },
            frequency: { value: 2.0 },
            speed: { value: 1 },
            time: { value: 0 }
          }}
        />
        2022.11.01
      </Text>

      <Text
        ref={ref7}
        fontSize={0.2}
        color="#ffffff"
        position={[-0.2, -2.2, 0]}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0}
        lineHeight={1}
        maxWidth={200}
        textAlign="center"
        font="/fonts/GalderGlynn.ttf"
      >
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            amplitude: { value: 0.1 },
            frequency: { value: 2.0 },
            speed: { value: 1 },
            time: { value: 0 }
          }}
        />
        to
      </Text>

      <Text
        ref={ref5}
        fontSize={1}
        color="#ffffff"
        position={[1, -2, 0]}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0}
        lineHeight={1}
        maxWidth={200}
        textAlign="center"
        font="/fonts/GalderGlynn.ttf"
      >
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            amplitude: { value: 0.1 },
            frequency: { value: 2.0 },
            speed: { value: 1 },
            time: { value: 0 }
          }}
        />
        Nowadays
      </Text>
    </group>
  );
};

export function Ilin() {
  const canvasStyles = {
    width: '945px',
    height: '945px',
  };
  
  if (window.innerWidth <= 768) {
    canvasStyles.width = '460px';
    canvasStyles.height = '550px';
  }
  
  return (
    <div>
      <Canvas style={canvasStyles}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <WaveText />
      </Canvas>
    </div>
  );
}
