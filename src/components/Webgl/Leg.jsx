
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import leg from '/models/leg.glb?url'

export function Leg(props) {
  const { nodes, materials } = useGLTF(leg)
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Cube007"
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.legs_mat}
        morphTargetDictionary={nodes.Cube007.morphTargetDictionary}
        morphTargetInfluences={nodes.Cube007.morphTargetInfluences}
      />
      <mesh
        name="Cube007_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube007_1.geometry}
        material={materials.metal}
        morphTargetDictionary={nodes.Cube007_1.morphTargetDictionary}
        morphTargetInfluences={nodes.Cube007_1.morphTargetInfluences}
      />
    </group>
  )
}

useGLTF.preload(leg)

