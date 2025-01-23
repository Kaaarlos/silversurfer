//plantilla para proyectos
import React, {Suspense} from "react";
import ThreeScene from "./components/ThreeScene.js";
import { OrbitControls, Sparkles ,Stars} from "@react-three/drei";
import { Model } from "./assets/Silvers.jsx";
import { Environment } from '@react-three/drei';


function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <ThreeScene>
        
        <color attach="background" args={['#000000']} />
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
        <Environment preset="sunset" />
        <ambientLight intensity={.5} /> {/* Luz ambiental */}
        <directionalLight position={[10, 10, 10]} intensity={3} castShadow/> {/* Luz direccional */}
        <pointLight position={[-10, 10, 10]}  intensity={2} color="white"/> {/* Luz puntual */}
        <spotLight position={[0, 20, 10]}  angle={0.5} penumbra={0.5}  intensity={2} castShadow /> {/* Luz spot */}

          {/* Partículas detrás del modelo */}
          <Sparkles
          position={[0, 0, 0]}    // Posición detrás del modelo (ajustable)
          count={1000}              // Cantidad de partículas
          scale={[10, 10, 10]}                // Escala de las partículas
          speed={.4}               // Velocidad del movimiento de las partículas
          color="white"             // Color de las partículas
        />

        <Stars 
          radius={100}      // Aumenta la distancia de las estrellas
          depth={10}        // Mayor profundidad para dar efecto de espacio
          count={8000}      // Más estrellas para un efecto brillante
          factor={4}        // Tamaño relativo mayor para más brillo
          saturation={8}    // Colores más vibrantes
          fade={true}       // Desvanecimiento hacia los bordes
        />
        <OrbitControls autoRotate target={[0, 0, 0]} />
      </ThreeScene>
    </div>
  );
}

export default App;