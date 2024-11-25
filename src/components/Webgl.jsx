import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './UI/Loader'
import Scene from './Webgl/Scene'

export default function Webgl() {
  const [isLoading, setIsLoading] = useState(true)

  const HandleLoading = ({ load }) => {
    useEffect(() => {
      load(true)
      return () => load(false)
    }, [])
  }

  return (
    <div className='glContainer h-screen w-screen'>
      <Canvas gl={{ alpha: true }} >
        <Suspense fallback={<HandleLoading load={setIsLoading} />}>
          {/* <Perf/> */}
          <Scene />
        </Suspense>
      </Canvas>
      <Loader load={isLoading} />
    </div>
  )
}