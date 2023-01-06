import { useQuery } from '@tanstack/react-query'
import {
  BattleNetLogo,
  NintendoSwitchLogo,
  XboxLogo,
  PlaystationLogo,
  AllGamesIcon,
  BlizzardLogo
} from 'icons'
import { Section, GameCard } from 'components'
import getGames from 'services/api'

interface GameType {
  key: number
  name: string
  category: string
  image: string
  logo: string
}

export const GameSection = () => {
  const query = useQuery<GameType[]>({ queryKey: ['games'], queryFn: getGames })

  console.log(query.data)

  return (
    <Section className="bg-black">
      <div className="py-20 font-poppins">
        <div className="flex items-end gap-x-40">
          <span className="font-semibold text-platinum-200">GAMES</span>
          <div className="w-44">
            <h1 className="text-2xl font-bold text-white">Jogos exclusivos</h1>
          </div>
          <div className="flex gap-6">
            <BattleNetLogo />
            <NintendoSwitchLogo />
            <XboxLogo />
            <PlaystationLogo />
          </div>
          <div className="flex flex-1 justify-end gap-2.5 self-end ">
            <div className="flex items-center">
              <AllGamesIcon />
            </div>
            <span className="font-bold text-primary">Ver todos jogos</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {query.data?.map((game, key: number) => (
          <div key={key}>
            <GameCard thumbnailURL={game.image} title={game.name} subtitle={game.category} />
          </div>
        ))}
        <div className=" mb-auto flex h-[412.8px] w-[301px] flex-col items-center justify-center rounded border-2 border-white border-opacity-5">
          <BlizzardLogo />
          <div className="mt-9 flex gap-2.5">
            <div className="flex items-center">
              <AllGamesIcon />
            </div>
            <span className="font-bold text-white">Ver todos jogos</span>
          </div>
        </div>
      </div>
    </Section>
  )
}
