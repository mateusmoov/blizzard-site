//Logos
import Diablo4 from '/assets/banner-hero/icons/game-1.png'
import HearthStone from '/assets/banner-hero/icons/game-2.png'
import WoW from '/assets/banner-hero/icons/game-3.png'
import Diablo1 from '/assets/banner-hero/icons/game-4.png'
import StarCraft2 from '/assets/banner-hero/icons/game-5.png'

//
import Diablo4XL from '/assets/banner-hero/games/diablo-logo.png'
import ThumbDiablo4 from '/assets/banner-hero/games/diablo-animation-cover.png'
import DiabloBG from '/assets/banner-hero/games/diablo-bg.png'

import HearthstoneXL from '/assets/banner-hero/games/hearthstone-logo.png'
import HearthstoneThumb from '/assets/banner-hero/games/hearthstone-animation-cover.png'
import HearthstoneBG from '/assets/banner-hero/games/hearthstone-bg.png'

import WoWXL from '/assets/banner-hero/games/wow-logo.png'
import WoWThumb from '/assets/banner-hero/games/wow-animation-cover.png'
import WoWBG from '/assets/banner-hero/games/wow-bg.png'

interface GamesType {
  name: string
  image: string
  alt: string
}

interface gameDataType {
  [key: string]: {
    title: string
    subtitle: string
    textButton: string
    logo: string
    thumbImage: string
    backgroundImage: string
    altLogo: string
    altThumbImage: string
  }
}

export const Games: GamesType[] = [
  {
    name: 'diablo4',
    image: Diablo4,
    alt: 'Diablo 4 Logo'
  },
  {
    name: 'hearthstone',
    image: HearthStone,
    alt: 'HearthStone Logo'
  },
  {
    name: 'wow',
    image: WoW,
    alt: 'WoW Logo'
  },
  {
    name: 'diablo1',
    image: Diablo1,
    alt: 'Diablo 1 Logo'
  },
  {
    name: 'starcraft2',
    image: StarCraft2,
    alt: 'StarCraft 2 Logo'
  }
]

export const gameData: gameDataType = {
  diablo4: {
    title: 'Retorne à escuridão com o game Diablo IV',
    subtitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    textButton: 'Jogue agora',
    logo: Diablo4XL,
    thumbImage: ThumbDiablo4,
    backgroundImage: `radial-gradient(80.1% 73.1% at 40.6% 50.14%, rgba(2, 2, 3, 0) 0%, #020203 100.1%) , url(${DiabloBG})`,
    altLogo: 'Logo Diablo 4',
    altThumbImage: 'Thumbnail Diablo 4'
  },
  hearthstone: {
    title: 'Novo pacote de expansão de Hearthstone',
    subtitle: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
    textButton: 'Reserve agora na pré-venda',
    logo: HearthstoneXL,
    thumbImage: HearthstoneThumb,
    backgroundImage: `radial-gradient(80.1% 73.1% at 40.6% 50.14%, rgba(2, 2, 3, 0) 0%, #020203 100.1%) , url(${HearthstoneBG})`,
    altLogo: 'Logo HearthStone',
    altThumbImage: 'Thumbnail HearthStone'
  },
  wow: {
    title: 'Desbrave as Terras Sombrias em Shadowlands!',
    subtitle: 'O que jaz além do mundo que você conhece?',
    textButton: 'Reserve agora na pré-venda',
    logo: WoWXL,
    thumbImage: WoWThumb,
    backgroundImage: `radial-gradient(80.1% 73.1% at 40.6% 50.14%, rgba(2, 2, 3, 0) 0%, #020203 100.1%) , url(${WoWBG})`,
    altLogo: 'Logo World of Warcraft',
    altThumbImage: 'Thumbnail World of Warcraft'
  }
}
