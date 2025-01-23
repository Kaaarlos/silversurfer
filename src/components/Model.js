import React from 'react';
// three
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useLoader } from '@react-three/fiber';
import model from "../assets/Among.fbx";


const Model = () => {
  const geom = useLoader(FBXLoader, model);
  return <primitive object={geom} scale={[0.0005, 0.0005, 0.0005]} />; // Escala ajustada
};

export default Model;
