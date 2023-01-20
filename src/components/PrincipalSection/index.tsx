import { Games, gameData } from './games'
import { Navbar, Button, Section } from 'components'
import { useState } from 'react'
import { PlayButton } from 'icons'

export const PrincipalSection = () => {
  const [game, setGame] = useState('diablo4')

  return (
    <div
      style={{
        backgroundImage: `${gameData[game].backgroundImage}`
      }}
      className="bg-cover"
    >
      <Navbar />

      <Section className="flex h-[736px] justify-between py-20">
        <div className="flex w-full items-center justify-between">
          <ul className="flex flex-col gap-y-5">
            {Games.map((game, index) => (
              <li tabIndex={0} key={index}>
                <button onClick={() => setGame(game.name)}>
                  <img src={game.image} alt="Diablo 4" width="48" />
                </button>
              </li>
            ))}
          </ul>

          <div className=" w-full max-w-xl self-end font-poppins text-white">
            <h1 className="mb-4 text-6xl font-bold leading-[71px]">{gameData[game].title}</h1>
            <p className="mb-8 text-lg">{gameData[game].subtitle}</p>
            <div className=" self-start">
              <Button variant="filled" className="px-8 py-3.5 font-medium">
                {gameData[game].textButton}
              </Button>
            </div>
          </div>

          <div className="flex h-full flex-col">
            <div>
              <img src={gameData[game].logo} alt="Diablo 4" />
            </div>
            <div className="flex flex-col items-end ">
              <h3 className="mb-4 font-poppins text-lg font-semibold text-white">
                ASSISTA O TRAILER
              </h3>
              <div className="flex items-center justify-center">
                <div className="absolute">
                  <PlayButton />
                </div>
                <img src={gameData[game].thumbImage} alt="Thumb Video Diablo 4" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
