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
  return (
    <div className="bg-black-200">
      <Section className="pb-28">
        <div className="py-20 font-poppins">
          <div className="flex items-end justify-center">
            <div className="flex gap-[17rem]">
              <span className="hidden items-center font-semibold text-platinum-200 lg:flex">
                GAMES
              </span>
              <div className="w-44">
                <h1 className="text-2xl font-bold text-white">Jogos exclusivos</h1>
              </div>
            </div>

            <div className=" flex flex-1 justify-between">
              <div className="ml-7  hidden gap-6 lg:flex">
                <BattleNetLogo />
                <NintendoSwitchLogo />
                <XboxLogo />
                <PlaystationLogo />
              </div>
              <div className="flex flex-1 justify-end self-end ">
                <div className="flex items-center gap-3">
                  <AllGamesIcon />
                  <span className="font-bold text-primary">Ver todos jogos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-9  sm:grid-cols-3 md:grid-cols-3 lg:sm:grid-cols-4">
          {query.data?.map((game, key: number) => (
            <GameCard
              thumbnailURL={game.image}
              gameLogoURL={game.logo}
              title={game.name}
              subtitle={game.category}
              key={key}
            />
          ))}
          <div className=" mb-auto flex h-full max-h-[412.8px] w-full flex-col items-center justify-center rounded border-2 border-white border-opacity-5">
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
    </div>
  )
}
