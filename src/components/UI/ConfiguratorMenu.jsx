import { useEffect, useState, useRef } from 'react'
import useTableStore from '../../stores/useTableStore'

export default function Configurator() {
  const { tableProp, setTableProp, colors } = useTableStore()

  const [width, setWidth] = useState(tableProp.width)
  const [leg, setLeg] = useState(tableProp.leg)
  const [depth, setDepth] = useState(tableProp.depth)

  const handleColorChange = (color) => {
    setTableProp({ ...tableProp, color: color })
  }

  const handleWidthChange = (e, isMillimeter = false) => {
    let value = parseFloat(e.target.value)
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

  const handleFeetChange = (feetNumber) => {
    setTableProp({
      ...tableProp,
      feet: feetNumber
    })
  }

  return (
    <div className="w-1/5 h-screen absolute top-0 right-0 p-6 bg-white shadow-lg">
      <div id="material" className="mb-8">
        <h2 className="text-xl font-bold mb-4">Top Material</h2>
        <ul className="flex gap-2 flex-wrap">
          {colors.map((color) => (
            <li key={color.id}>
              <button
                className={`w-12 h-12 rounded-full border-2 transition-all ${
                  tableProp.color === color.value 
                    ? 'border-blue-500 scale-110' 
                    : 'border-gray-200 hover:scale-105'
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() => handleColorChange(color.value)}
                title={color.label}
              />
            </li>
          ))}
        </ul>
      </div>
      
      <div id="sizes" className="space-y-6">
        <h2 className="text-xl font-bold">Sizes</h2>
        <div className="space-y-2">
          <label htmlFor="width" className="block text-sm font-medium">
            Width A (mm)
          </label>
          <input 
            type="number" 
            className="w-full p-2 border rounded"
            value={Math.round(width * 1000)}           
            min={1200}
            max={2400}
            onChange={(e) => handleWidthChange(e, true)} 
          />
          <input
            type="range"
            id="width"
            className="w-full"
            min={1.2}
            max={2.4}
            step="0.001"
            value={width}
            onChange={handleWidthChange}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="depth" className="block text-sm font-medium">
            Depth A (mm)
          </label>
          <input 
            type="number" 
            className="w-full p-2 border rounded"
            value={Math.round(depth * 1000)}           
            min={300}
            max={900}
            onChange={(e) => handleDepthChange(e, true)}
          />
          <input
            type="range"
            id="depth"
            className="w-full"
            min={0.3}
            max={0.9}
            step="0.001"
            value={depth}
            onChange={handleDepthChange}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="leg" className="block text-sm font-medium">
            Leg height (mm)
          </label>
          <input 
            type="number" 
            className="w-full p-2 border rounded"
            value={Math.round(leg * 1000)}
            min={500}
            max={1200}
            onChange={(e) => handleLegChange(e, true)}
          />
          <input
            type="range"
            id="leg"
            className="w-full"
            min={0.5}
            max={1.2}
            step="0.001"
            value={leg}
            onChange={handleLegChange}
          />
        </div>
      </div>

      <div id="feet" className="mb-8">
        <h2 className="text-xl font-bold mb-4">Feet Style</h2>
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-md transition-all ${
              tableProp.feet === 1 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => handleFeetChange(1)}
          >
            Style 1
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-all ${
              tableProp.feet === 2 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => handleFeetChange(2)}
          >
            Style 2
          </button>
        </div>
      </div>
    </div>
  )
}