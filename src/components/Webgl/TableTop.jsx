import { Box, useGLTF } from "@react-three/drei"
import { useEffect, useState } from "react"
import * as THREE from 'three'

import Feet from "./Feet"
import useTableStore from "../../stores/useTableStore"

// Material model paths
const materialModels = {
  plastic_black: "/models/top_plastic_black_mat.glb",
  plastic_white: "/models/top_plastic_white_mat.glb",
  cedar: "/models/top_cedar_mat.glb",
  ashwood: "/models/top_ashwood_mat.glb",
  walnut: "/models/top_walnut_mat.glb"
}

export default function TableTop() {
  const { tableProp } = useTableStore()
  const [model, setModel] = useState(null)

  const halfWidth = tableProp.width / 2
  const halfDepth = tableProp.depth / 2
  const legHeight = tableProp.leg + 0.55

  const { materials, scene } = useGLTF(materialModels[tableProp.color])

  useEffect(() => {
    const material = materials?.[`top_${tableProp.color}_mat`];
    if (material?.map) {
      material.map.repeat.set(tableProp.width, tableProp.depth);
      material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
    }
  }, [tableProp.width, tableProp.depth])

  useEffect(() => {
    // Dispose of previous model if it exists
    if (model) {
      model.traverse((child) => {
        if (child.isMesh) child.geometry.dispose()
        if (child.material) child.material.dispose()
      })
    }

    // Set the new model
    setModel(scene)

    return () => {
      // Cleanup model on unmount
      if (model) {
        model.traverse((child) => {
          if (child.isMesh) child.geometry.dispose()
          if (child.material) child.material.dispose()
        })
      }
    }
  }, [tableProp.color, scene, model])

  return (
    <group position={[0, 0, 0]}>
      {/* Table Top */}
      <Box 
        args={[tableProp.width, tableProp.height, tableProp.depth]}
        castShadow
        receiveShadow
        material={materials?.[`top_${tableProp.color}_mat`]}
      />
      
      {/* Table Legs */}
      <Feet position={[halfWidth - 0.015, -legHeight - 0.46, halfDepth - 0.025]} scale={1} />
      <Feet position={[-halfWidth + 0.015, -legHeight - 0.46, halfDepth - 0.025]} scale={1} />
      <Feet position={[halfWidth - 0.015, -legHeight - 0.46, -halfDepth + 0.025]} scale={1} />
      <Feet position={[-halfWidth + 0.015, -legHeight - 0.46, -halfDepth + 0.025]} scale={1} />
    </group>
  )
}
