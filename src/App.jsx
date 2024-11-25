import { Suspense } from "react"

import Webgl from "./components/Webgl"

import './styles/styles.scss'
import Configurator from "./components/UI/ConfiguratorMenu"

function App() {
  return (
    <Suspense fallback={null}>
      <Webgl/>
      <Configurator/>
    </Suspense>
  )
}

export default App