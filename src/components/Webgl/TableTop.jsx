import { Box } from "@react-three/drei"
import useTableStore from "../../stores/useTableStore"
// import * as THREE from 'three'

export default function TableTop() {
  const { tableProp } = useTableStore()
  const width = tableProp.width / 1000
  const depth = tableProp.depth / 1000
  const height = tableProp.height / 1000
  console.log(width, depth, height)

  return (
    <mesh position={tableProp.position}>
      <Box
        args={[width, depth, height]}
      />
      <meshStandardMaterial 
        color={tableProp.color}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  ) 
}