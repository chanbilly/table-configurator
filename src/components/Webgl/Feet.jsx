import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import useTableStore from '../../stores/useTableStore'

import m__feet1 from '/models/prop_01.glb?url'
import m__feet2 from '/models/prop_02.glb?url'

export default function Feet(props) {
  const { tableProp } = useTableStore()
  
  const model1 = useGLTF(m__feet1)
  const model2 = useGLTF(m__feet2)

  const getCurrentModel = () => {
    switch (tableProp.feet) {
      case 1:
        return {
          nodes: model1.nodes.prop_01,
          material: model1.materials.prop_mat
        }
      case 2:
        return {
          nodes: model2.nodes.prop_02,
          material: model2.materials.prop_mat
        }
      default:
        return {
          nodes: model1.nodes.prop_01,
          material: model1.materials.prop_mat
        }
    }
  }

  const currentModel = getCurrentModel()

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={currentModel.nodes.geometry}
        material={currentModel.material}
        position={tableProp.feet === 2 ? [0, 1.013, 0] : [0, 1.009, 0]}
      />
    </group>
  )
}

// Preload all models
useGLTF.preload(m__feet1)
useGLTF.preload(m__feet2)