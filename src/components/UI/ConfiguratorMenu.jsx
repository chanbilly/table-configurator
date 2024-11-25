import { useEffect, useState, useRef } from 'react'
import { useControls } from 'leva'
import useTableStore from '../../stores/useTableStore'

export default function Configurator() {
  const { tableProp, setTableProp } = useTableStore()

  const { width, height, depth } = useControls({
    width: {
      value: tableProp.width,
      min: 1.2,
      max: 2.4,
      step: 0.001,
      onChange: (value) => setTableProp({ ...tableProp, width: value })
    },
    leg: {
      value: tableProp.leg,
      min: 0.5,
      max: 1.2,
      step: 0.001,
      onChange: (value) => setTableProp({ ...tableProp, leg: value })
    },
    // depth: {
    //   value: tableProp.depth,
    //   min: 0.01,
    //   max: 0.1,
    //   step: 0.01,
    //   onChange: (value) => setTableProp({ ...tableProp, depth: value })
    // }
  })

  return (
    <div className="configurator"></div>
  )
}