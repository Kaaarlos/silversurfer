import React from "react";
import {Canvas} from '@react-three/fiber'

const ThreeScene = ({children}) => {
  return <Canvas>{children} </Canvas>
};

export default ThreeScene;
