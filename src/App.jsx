import { Suspense } from "react"
import Webgl from "./components/Webgl"

import './styles/styles.scss'

function App() {
  return (
    <Suspense fallback={null}>
      <Webgl/>
    </Suspense>
  )
}

export default App