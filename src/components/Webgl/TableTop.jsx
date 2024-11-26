import { Box } from "@react-three/drei"
import Feet from "./Feet"

import useTableStore from "../../stores/useTableStore"

export default function TableTop() {
  const { tableProp } = useTableStore()

  const halfWidth = tableProp.width / 2
  const halfDepth = tableProp.depth / 2
  const legHeight = tableProp.leg + 0.55

  return (
    <mesh castShadow receiveShadow position={[0, 0, 0]}>
      <Box args={[tableProp.width, tableProp.height, tableProp.depth]}>
        <meshStandardMaterial
          color={tableProp.color}
          roughness={0.8}
          metalness={0.2}
        />
      </Box>
      <Feet position={[halfWidth - 0.015, -legHeight - 0.46, halfDepth -0.025]} scale={1} />
      <Feet position={[-halfWidth + 0.015, -legHeight - 0.46, halfDepth -0.025]} scale={1} />
      <Feet position={[halfWidth - 0.015, -legHeight - 0.46, -halfDepth + 0.025]} scale={1} />
      <Feet position={[-halfWidth + 0.015, -legHeight - 0.46, -halfDepth + 0.025]} scale={1} />
    </mesh>
  )
}