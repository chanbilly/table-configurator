import { useState } from 'react'
import useTableStore from '../../stores/useTableStore'

export default function Configurator() {
  const { tableProp, setTableProp, colors } = useTableStore()

  const [width, setWidth] = useState(tableProp.width)
  const [leg, setLeg] = useState(tableProp.leg)
  const [depth, setDepth] = useState(tableProp.depth)

  const [isTopMaterialOpen, setIsTopMaterialOpen] = useState(true)
  const [isSizesOpen, setIsSizesOpen] = useState(true)
  const [isFeetOpen, setIsFeetOpen] = useState(true)

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
    <div className="w-1/5 h-screen absolute top-0 right-0 py-10 px-8 bg-white shadow-lg">
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full px-4 py-2 text-lg font-semibold bg-gray-100 rounded-md"
          onClick={() => setIsTopMaterialOpen(!isTopMaterialOpen)}
        >
          <span>Top Material</span>
          <svg
            className={`w-6 h-6 ml-2 transition-transform ${isTopMaterialOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isTopMaterialOpen && (
          <div className="py-4">
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
        )}
      </div>
      
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full px-4 py-2 text-lg font-semibold bg-gray-100 rounded-md"
          onClick={() => setIsSizesOpen(!isSizesOpen)}
        >
          <span>Sizes</span>
          <svg
            className={`w-6 h-6 ml-2 transition-transform ${isSizesOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isSizesOpen && (
          <div className="py-4">
            <div className="space-y-2 pb-3 border-b-2 border-gray-200">
              <label htmlFor="width" className="block text-sm font-medium">
                Width A (mm)
              </label>
              <div className="flex">
                <input 
                  type="number" 
                  className="w-auto p-2 border rounded mr-4"
                  value={Math.round(width * 1000)}           
                  min={1200}
                  max={2400}
                  onChange={(e) => handleWidthChange(e, true)} 
                />
                <input
                  type="range"
                  id="width"
                  className="d-flex flex-grow"
                  min={1.2}
                  max={2.4}
                  step="0.001"
                  value={width}
                  onChange={handleWidthChange}
                />
              </div>
            </div>
            
            <div className="space-y-2 mt-4 pb-3 border-b-2 border-gray-200">
              <label htmlFor="depth" className="block text-sm font-medium">
                Depth A (mm)
              </label>
              <div className="flex">
                <input 
                  type="number" 
                  className="w-auto p-2 border rounded mr-4"
                  value={Math.round(depth * 1000)}           
                  min={300}
                  max={900}
                  onChange={(e) => handleDepthChange(e, true)}
                />
                <input
                  type="range"
                  id="depth"
                  className="d-flex flex-grow"
                  min={0.3}
                  max={0.9}
                  step="0.001"
                  value={depth}
                  onChange={handleDepthChange}
                />
              </div>
            </div>
            
            <div className="space-y-2 mt-4">
              <label htmlFor="leg" className="block text-sm font-medium">
                Leg height (mm)
              </label>
              <div className="flex">
                <input 
                  type="number" 
                  className="w-auto p-2 border rounded mr-4" 
                  value={Math.round(leg * 1000)} 
                  min={500} 
                  max={1200} 
                  onChange={(e) => handleLegChange(e, true)} 
                />
                <input
                  type="range"
                  id="leg"
                  className="d-flex flex-grow"
                  min={0.5}
                  max={1.2}
                  step="0.001"
                  value={leg}
                  onChange={handleLegChange}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full px-4 py-2 text-lg font-semibold bg-gray-100 rounded-md"
          onClick={() => setIsFeetOpen(!isFeetOpen)}
        >
          <span>Feet</span>
          <svg
            className={`w-6 h-6 ml-2 transition-transform ${isFeetOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isFeetOpen && (
          <div className="py-4">
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 font-semibold rounded-md transition-all ${
                  tableProp.feet === 1 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => handleFeetChange(1)}
              >
                Variant 1
              </button>
              <button
                className={`px-4 py-2 font-semibold rounded-md transition-all ${
                  tableProp.feet === 2 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => handleFeetChange(2)}
              >
                Variant 2
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}