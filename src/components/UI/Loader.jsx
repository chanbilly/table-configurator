import { useProgress } from '@react-three/drei'
import { useEffect, useState, useRef } from 'react'

import useTableStore from '../../stores/useTableStore'

export default function Loader(props) {
  const { load } = props
  const globalState = useTableStore((state) => state.globalState)
  const setGlobalState = useTableStore((state) => state.setGlobalState)

  // const { progress } = useProgress()
  // const [smoothProgress, setSmoothProgress] = useState(0)

  // useEffect(() => {
  //   const updateSmoothProgress = () => {
  //     // Adjust the increment value as needed for smoother interpolation
  //     const increment = 0.5
  //     const currentProgress = (prevProgress) => prevProgress + increment * (progress - prevProgress)
  //     setSmoothProgress(currentProgress)
  //   }

  //   const smoothProgressInterval = setInterval(updateSmoothProgress, 10)

  //   return () => clearInterval(smoothProgressInterval)
  // }, [progress])


  return (
    <div className={`loader ${ load ? 'visible' : '' }`} >
      <div className='loader_content'>
        <div className={`loader_loading-bar`}>
          <div className='loader_loading-bar_title'>Loading...</div>
          {/* <div className='loader_loading-bar_ctn'>
            <div
              className='loader_loading-bar_progress'
              style={{ width: `${smoothProgress}%` }}
            ></div>
          </div> */}
        </div>
      </div>
    </div>
  )
}