import { create } from 'zustand'

export default create((set, get) => ({
  globalState: 'loading', // loading, view360, configurator
  setGlobalState: (_state) => set(() => ({ globalState: _state })),

  // camera options
  cameraProp : {
    introPos: [-5.543,1.72, 7.394],
    pos: [3.278, 2.020, 4.396],
  },
}))