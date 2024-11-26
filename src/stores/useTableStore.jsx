import { create } from 'zustand'

const useTableStore = create((set) => ({
  globalState: 'loading', 
  setGlobalState: (_state) => set(() => ({ globalState: _state })),

  // camera options
  cameraProp : {
    pos: [2, 0.35, 2],
  },

  // Table top options
  colors: [
    { id: 'oak', value: '#c7b299', label: 'Ashwood' },
    { id: 'bronze', value: '#cd7f32', label: 'Cedar' },
    { id: 'black', value: '#1c1c1c', label: 'PlasticBlack' },
    { id: 'white', value: '#f0f0f0', label: 'PlasticWhite' },
    { id: 'walnut', value: '#773f1a', label: 'Walnut' },
  ],

  tableProp: {
    width: 1.2,
    depth: 0.3,
    height: 0.03, 
    leg: 0.5,
    color: '#f0f0f0',
    feet: 1,
  },
  setTableProp: (newProps) => set((state) => ({ tableProp: { ...state.tableProp, ...newProps } }))
}))

export default useTableStore;