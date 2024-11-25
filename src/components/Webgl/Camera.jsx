import { useEffect, useRef } from 'react'
import { CameraControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

import useTableStore from '../../stores/useTableStore'

export default function Camera() {
  const { cameraProp } = useTableStore()
  const cameraRef = useRef()
  const cameraCtrl = useRef()

  const interpolationDuration = 1000
  const interpolationTimeRef = useRef(0)

  // useFrame((state) => {
  //   console.log(state.camera.position)
  // })

  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef} position={cameraProp.pos} fov={30} />
      <CameraControls ref={cameraCtrl} camera={cameraRef.current} enabled/>
    </>
  )
}