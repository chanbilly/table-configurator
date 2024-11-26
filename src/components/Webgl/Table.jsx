import TableTop from "./TableTop"
import { Leg } from "./Leg"

import useTableStore from "../../stores/useTableStore"

export default function Table() {
  const { tableProp } = useTableStore()

  const halfWidth = tableProp.width / 2
  const halfDepth = tableProp.depth / 2
  const legHeight = tableProp.leg

  return (
    <group>
      <TableTop />
      <Leg position={[-halfWidth + 0.015, -legHeight - 0.001, -halfDepth + 0.15]} height={tableProp.height} rotation={[0, -Math.PI / 2, 0]}  />
      <Leg position={[halfWidth - 0.015, -legHeight - 0.001, halfDepth - 0.15]} height={tableProp.height} rotation={[0, Math.PI / 2, 0]} />
    </group>
  )
}