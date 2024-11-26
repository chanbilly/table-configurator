import { useRef } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import useTableStore from '../../stores/useTableStore'

export default function Camera() {
  const { cameraProp } = useTableStore()
  const cameraRef = useRef()

  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef} position={cameraProp.pos} fov={50} />
      <OrbitControls />
    </>
  )
}