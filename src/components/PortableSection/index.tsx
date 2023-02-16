import clsx from 'clsx'
import { Games, gameData } from 'components/PrincipalSection/games'
import { PlayButton } from 'icons'
import { Section, Button } from 'components'

interface PortableSectionType {
  gameName: string
  setGameIndex: (index: number) => void
  className?: string
}

export const PortableSection = ({ gameName, setGameIndex, className }: PortableSectionType) => {
  return (
    <Section className={clsx('relative h-[622px] w-full justify-center sm:h-[768px]', className)}>
      <div className="absolute right-0 hidden flex-col gap-52 sm:flex">
        <img src={gameData[gameName].logo} alt="Diablo 4" width="280" />
        <div className="flex flex-col items-end ">
          <div className="flex items-center justify-center">
            <div className="absolute">
              <PlayButton />
            </div>
            <div className="group">
              <img
                src={gameData[gameName].thumbImage}
                alt="Thumb Video Diablo 4"
                className="block group-hover:hidden"
              />
              <img
                src={gameData[gameName].thumbGif}
                alt="GIF Video Diablo 4"
                width={280}
                className="hidden group-hover:block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="w-full max-w-xl self-end font-poppins text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-6xl">
            {gameData[gameName].title}
          </h1>
          <p className="mb-8 text-lg">{gameData[gameName].subtitle}</p>
          <div className="mb-14 self-start">
            <Button variant="filled" className="px-8 py-3.5 font-medium">
              {gameData[gameName].textButton}
            </Button>
          </div>
          <ul className="flex gap-x-5 ">
            {Games.map((game, index) => (
              <li tabIndex={0} key={index}>
                <button
                  onClick={() => {
                    setGameIndex(index)
                  }}
                >
                  <img
                    src={game.image}
                    alt={game.alt}
                    width="48"
                    className={gameName === game.name ? 'grayscale-0' : 'grayscale'}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
