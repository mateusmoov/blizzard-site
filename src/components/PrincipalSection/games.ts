import {
  LogoDiablo4,
  LogoHearthStone,
  LogoWoW,
  LogoDiablo1,
  LogoStarCraft2,
  Diablo4XL,
  ThumbDiablo4,
  DiabloBG,
  HearthstoneXL,
  HearthstoneThumb,
  HearthstoneBG,
  WoWXL,
  WoWThumb,
  WoWBG,
  Diablo4GIF,
  HeartStoneGIF,
  WoWGIF
} from 'images'

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
    thumbGif: string
  }
}

export const Games: GamesType[] = [
  {
    name: 'diablo4',
    image: LogoDiablo4,
    alt: 'Diablo 4 Logo'
  },
  {
    name: 'hearthstone',
    image: LogoHearthStone,
    alt: 'HearthStone Logo'
  },
  {
    name: 'wow',
    image: LogoWoW,
    alt: 'WoW Logo'
  },
  {
    name: 'diablo1',
    image: LogoDiablo1,
    alt: 'Diablo 1 Logo'
  },
  {
    name: 'starcraft2',
    image: LogoStarCraft2,
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
    altThumbImage: 'Thumbnail Diablo 4',
    thumbGif: Diablo4GIF
  },
  hearthstone: {
    title: 'Novo pacote de expansão de Hearthstone',
    subtitle: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
    textButton: 'Reserve agora na pré-venda',
    logo: HearthstoneXL,
    thumbImage: HearthstoneThumb,
    backgroundImage: `radial-gradient(80.1% 73.1% at 40.6% 50.14%, rgba(2, 2, 3, 0) 0%, #020203 100.1%) , url(${HearthstoneBG})`,
    altLogo: 'Logo HearthStone',
    altThumbImage: 'Thumbnail HearthStone',
    thumbGif: HeartStoneGIF
  },
  wow: {
    title: 'Desbrave as Terras Sombrias em Shadowlands!',
    subtitle: 'O que jaz além do mundo que você conhece?',
    textButton: 'Reserve agora na pré-venda',
    logo: WoWXL,
    thumbImage: WoWThumb,
    backgroundImage: `radial-gradient(80.1% 73.1% at 40.6% 50.14%, rgba(2, 2, 3, 0) 0%, #020203 100.1%) , url(${WoWBG})`,
    altLogo: 'Logo World of Warcraft',
    altThumbImage: 'Thumbnail World of Warcraft',
    thumbGif: WoWGIF
  }
}
