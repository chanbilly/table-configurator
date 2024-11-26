import { Suspense } from "react"

import Webgl from "./components/Webgl"

import './styles/styles.scss'
import Configurator from "./components/UI/ConfiguratorMenu"

function App() {
  return (
    <Suspense fallback={null}>
      <div className="relative">
        <Webgl/>
        <Configurator/>
      </div>
    </Suspense>
  )
}

export default App