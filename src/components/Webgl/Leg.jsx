import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import useTableStore from '../../stores/useTableStore'

import leg from '/models/leg.glb?url'

export function Leg(props) {
  const { nodes, materials } = useGLTF(leg)
  const { tableProp } = useTableStore()

  const legMainRef = useRef()
  const legScrewRef = useRef()
  
  
  useEffect(() => {
    const normalizedDepth = normalizeDepth(tableProp.depth)
    const normalizedHeight = normalizeLeg(tableProp.leg)
    
    if (legMainRef.current && legMainRef.current.morphTargetInfluences) {
      legMainRef.current.morphTargetInfluences[0] = 1 - normalizedDepth
      legMainRef.current.morphTargetInfluences[1] = 1 - normalizedHeight
    }
    
    if (legScrewRef.current && legScrewRef.current.morphTargetInfluences) {
      legScrewRef.current.morphTargetInfluences[0] = 1 - normalizedDepth
      legScrewRef.current.morphTargetInfluences[1] = 1 - normalizedHeight
    }
  }, [tableProp.depth, tableProp.leg])

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Cube007"
        ref={legMainRef}
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.legs_mat}
        morphTargetDictionary={nodes.Cube007.morphTargetDictionary}
        morphTargetInfluences={nodes.Cube007.morphTargetInfluences}
      />
      <mesh
        name="Cube007_1"
        ref={legScrewRef}
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

function normalizeLeg(value) {
  const minHeight = 0.50
  const maxHeight = 1.20
  const height = (maxHeight - value) / (maxHeight - minHeight)
  return Math.min(Math.max(height, 0), 1)
}


function normalizeDepth(value) {
  const minDepth = 0.3
  const maxDepth = 1.5
  const depth = (maxDepth - value) / (maxDepth - minDepth)
  return Math.min(Math.max(depth, 0.5), 1)
}

useGLTF.preload(leg)

