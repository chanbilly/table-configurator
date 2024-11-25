import { useRef } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
// import * as THREE from 'three'

import useTableStore from '../../stores/useTableStore'

export default function Camera() {
  const { cameraProp } = useTableStore()
  const cameraRef = useRef()

  // useFrame((state) => {
  //   console.log(state.camera.position)
  // })

  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef} position={cameraProp.pos} fov={30} />
      {/* <CameraControls ref={cameraCtrl} camera={cameraRef.current} enabled/> */}
      <OrbitControls />
    </>
  )
}