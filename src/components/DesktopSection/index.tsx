import { Games, gameData } from 'components/PrincipalSection/games'
import { PlayButton } from 'icons'
import { Section, Button } from 'components'
import clsx from 'clsx'

interface DesktopSectionType {
  gameName: string
  setGameIndex: (index: number) => void
  className?: string
}

export const DesktopSection = ({ gameName, setGameIndex, className }: DesktopSectionType) => {
  return (
    <Section className={clsx('h-[736px] justify-between', className)}>
      <div className="flex w-full items-center justify-between">
        <ul className="flex flex-col gap-y-5">
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

        <div className=" mb-28 w-full max-w-xl self-end font-poppins text-white">
          <h1 className="mb-4 text-6xl font-bold leading-tight">{gameData[gameName].title}</h1>
          <p className="mb-8 text-lg">{gameData[gameName].subtitle}</p>
          <div className=" self-start">
            <Button variant="filled" className="px-8 py-3.5 font-medium">
              {gameData[gameName].textButton}
            </Button>
          </div>
        </div>

        <div className="flex h-full flex-col">
          <div className="mb-28">
            <img src={gameData[gameName].logo} alt="Diablo 4" />
          </div>
          <div className="flex flex-col items-end ">
            <h3 className="mb-4 font-poppins text-lg font-semibold text-white">
              ASSISTA O TRAILER
            </h3>
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
      </div>
    </Section>
  )
}
