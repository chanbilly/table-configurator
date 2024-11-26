
import { Environment } from '@react-three/drei'

import Camera from './Camera'
import Table from './Table'

export default function Scene() {  
  return (
    <>
      <Camera />
      <Environment files={'/hdr/qwantani_sunset_1k.hdr'} background blur={1}/>
      <Table />
    </>
  )
} 