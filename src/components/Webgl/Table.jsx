import TableTop from "./TableTop"
import { Leg } from "./Leg"

import useTableStore from "../../stores/useTableStore"

export default function Table() {
  const { tableProp } = useTableStore()

  const halfWidth = (tableProp.width / 1000) / 2
  const halfDepth = (tableProp.depth / 1000) / 2
  const height = tableProp.height / 1000

  const tablePosition = [tableProp.position[0], tableProp.position[1] - height / 2, tableProp.position[2]]
  
  return (
    <group>
      <TableTop />
      <Leg position={[-halfWidth + 0.015, -height, -halfDepth + 0.015]} height={height} rotation={[0, Math.PI / 2, 0]} scaleZ={3} />
      <Leg position={[halfWidth - 0.015, -height, -halfDepth + 0.015 ]} height={height} rotation={[0, Math.PI / 2, 0]} />
    </group>
  )
}