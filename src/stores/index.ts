import { create } from 'zustand'

interface useStateType {
  menuOption: string
  addEsports: () => void
  addGames: () => void
}

export const useStore = create<useStateType>((set) => ({
  menuOption: '',
  addEsports: () =>
    set((state) => ({ menuOption: state.menuOption === 'esports' ? '' : 'esports' })),
  addGames: () => set((state) => ({ menuOption: state.menuOption === 'games' ? '' : 'games' }))
}))
