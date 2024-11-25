
import { Box, Environment } from '@react-three/drei'

import Camera from './Camera'

import useTableStore from '../../stores/useTableStore'

export default function Scene() {
  const { globalState } = useTableStore()

  return (
    <>
      {/* <Camera /> */}
      <Environment preset="city" />
      <Box/>
      {/* <color attach='background' args={['#ffffff']} /> */}
    </>
  )
} 