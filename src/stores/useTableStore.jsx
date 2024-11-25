import { create } from 'zustand'

const useTableStore = create((set) => ({
  globalState: 'loading', // loading, view360, configurator
  setGlobalState: (_state) => set(() => ({ globalState: _state })),

  // camera options
  cameraProp : {
    pos: [0.5, 0.25, 1],
  },

  tableProp: {
    width: 1200,
    depth: 30,
    height: 500, 
    color: 'white',
    position: [0,0,0],
  }
}));

export default useTableStore;