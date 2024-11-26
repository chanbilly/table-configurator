import { useEffect, useState, useRef } from 'react'
import useTableStore from '../../stores/useTableStore'

export default function Configurator() {
  const { tableProp, setTableProp } = useTableStore()

  const [width, setWidth] = useState(tableProp.width)
  const [leg, setLeg] = useState(tableProp.leg)
  const [depth, setDepth] = useState(tableProp.depth)

  const handleWidthChange = (e, isMillimeter = false) => {
    let value = parseFloat(e.target.value)
    // Convert from millimeters to meters if the input is from number field
    if (isMillimeter) {
      value = value / 1000
    }
    if (!isNaN(value) && value >= 1.2 && value <= 2.4) {
      setWidth(value)
      setTableProp({ ...tableProp, width: value })
    }
  }

  const handleLegChange = (e, isMillimeter = false) => {
    let value = parseFloat(e.target.value)
    if (isMillimeter) {
      value = value / 1000
    }
    if (!isNaN(value) && value >= 0.5 && value <= 1.2) {
      setLeg(value)
      setTableProp({ ...tableProp, leg: value })
    }
  }

  const handleDepthChange = (e, isMillimeter = false) => {
    let value = parseFloat(e.target.value)
    if (isMillimeter) {
      value = value / 1000
    }
    if (!isNaN(value) && value >= 0.3 && value <= 0.9) {
      setDepth(value)
      setTableProp({ ...tableProp, depth: value })
    }
  }

  return (
    <div className="w-1/5 h-screen absolute top-0 right-0">
      <div id="sizes">
        <div>
          <label htmlFor="width">Width A (mm)</label>
        </div>
        <input 
          type="number" 
          value={Math.round(width * 1000)}           
          min={1200}
          max={2400}
          onChange={(e) => handleWidthChange(e, true)} 
        />
        <input
          type="range"
          id="width"
          min={1.2}
          max={2.4}
          step="0.001"
          value={width}
          onChange={handleWidthChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor="depth">Depth A (mm)</label>
        </div>
        <input 
          type="number" 
          value={Math.round(depth * 1000)}           
          min={300}
          max={900}
          onChange={(e) => handleDepthChange(e, true)}
        />
        <input
          type="range"
          id="depth"
          min={0.3}
          max={0.9}
          step="0.001"
          value={depth}
          onChange={handleDepthChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor="leg">Leg height (mm)</label>
        </div>
        <input 
          type="number" 
          value={Math.round(leg * 1000)}
          min={500}
          max={1200}
          onChange={(e) => handleLegChange(e, true)}
        />
        <input
          type="range"
          id="leg"
          min={0.5}
          max={1.2}
          step="0.001"
          value={leg}
          onChange={handleLegChange}
        />
      </div>
    </div>
  )
}