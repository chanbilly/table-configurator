
import { Box, Environment } from '@react-three/drei'

import Camera from './Camera'
import Table from './Table'

import useTableStore from '../../stores/useTableStore'

export default function Scene() {
  const { globalState } = useTableStore()
  
  return (
    <>
      <Camera />
      <Environment files={'/hdr/qwantani_sunset_1k.hdr'} />
      <Table />
    </>
  )
} 