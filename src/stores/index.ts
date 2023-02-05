import { create } from 'zustand'

interface useStateType {
  menuOption: string
  addEsports: () => void
  addGames: () => void
}

export const useStore = create<useStateType>((set) => ({
  menuOption: '',
  addEsports: () => set({ menuOption: 'esports' }),
  addGames: () => set({ menuOption: 'games' })
}))
