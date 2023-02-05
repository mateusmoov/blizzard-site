import {
  Diablo2,
  Diablo1,
  Overwatch2,
  WoW,
  Hearthstone,
  Hots,
  Warcraft3,
  Diablo4,
  Diablo3,
  Starcraft2,
  Starcraft,
  Arcade
} from 'images'

interface GamesType {
  name: string
  image: string
  alt: string
}

export const GamesMenu: GamesType[] = [
  {
    name: 'Diablo® II ressurected',
    image: Diablo2,
    alt: 'Diablo 2 Logo'
  },
  {
    name: 'Overwatch® 2',
    image: Overwatch2,
    alt: 'Overwatch2 Logo'
  },
  {
    name: 'World of Warcraft®',
    image: WoW,
    alt: 'WoW Logo'
  },
  {
    name: 'Hearthstone®',
    image: Hearthstone,
    alt: 'Hearthstone Logo'
  },
  {
    name: 'Heroes of the storm®',
    image: Hots,
    alt: 'Hots Logo'
  },
  {
    name: 'Warcraft® III Reforged',
    image: Warcraft3,
    alt: 'Warcraft3 Logo'
  },
  {
    name: 'Diablo® IV',
    image: Diablo4,
    alt: 'Diablo 4 Logo'
  },
  {
    name: 'Diablo® Immortal',
    image: Diablo1,
    alt: 'Diablo 1 Logo'
  },
  {
    name: 'Diablo® III',
    image: Diablo3,
    alt: 'Diablo 3 Logo'
  },
  {
    name: 'StarCraft® II',
    image: Starcraft2,
    alt: 'Starcraft 2 Logo'
  },
  {
    name: 'StarCraft® Remastered',
    image: Starcraft,
    alt: 'Starcraft Logo'
  },
  {
    name: 'Arcade da Blizzard®',
    image: Arcade,
    alt: 'Arcade Logo'
  }
]
