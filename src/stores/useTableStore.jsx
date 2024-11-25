import { create } from 'zustand'

const useTableStore = create((set) => ({
  globalState: 'loading', // loading, start
  setGlobalState: (_state) => set(() => ({ globalState: _state })),

  // camera options
  cameraProp : {
    pos: [2, 0.35, 2],
  },

  tableProp: {
    width: 1.2,
    depth: 0.3,
    height: 0.03, 
    leg: 0.5,
    color: 'white',
  },
  setTableProp: (newProps) => set((state) => ({ tableProp: { ...state.tableProp, ...newProps } }))
}))

export default useTableStore;