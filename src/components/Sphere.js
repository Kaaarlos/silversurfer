import React from 'react'


const Sphere = ({color, position}) => {
  return (
    <mesh position={position} >
		<sphereGeometry/>
		<meshStandardMaterial color= {color} wireframe/>

    </mesh>
  )
}

export default Sphere