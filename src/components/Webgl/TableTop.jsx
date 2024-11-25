import { Box } from "@react-three/drei"
import useTableStore from "../../stores/useTableStore"
// import * as THREE from 'three'

export default function TableTop() {
  const { tableProp } = useTableStore()

  return (
    <mesh position={[0,0,0]}>
      <Box
        args={[tableProp.width, tableProp.height, tableProp.depth]}
      />
      <meshStandardMaterial 
        color={tableProp.color}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  ) 
}