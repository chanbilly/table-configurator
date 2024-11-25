import { create } from 'zustand'

const useTableStore = create((set) => ({
  globalState: 'loading', // loading, view360, configurator
  setGlobalState: (_state) => set(() => ({ globalState: _state })),

  // camera options
  cameraProp : {
    introPos: [-5.543,1.72, 7.394],
    pos: [3.278, 2.020, 4.396],
  },

  tableProp: {
    width: 1200,
    depth: 300,
    height: 500, 
    color: 'white',
    position: [0,0,0],
  }
}));

export default useTableStore;