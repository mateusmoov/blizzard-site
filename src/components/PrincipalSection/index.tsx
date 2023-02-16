import { Games, gameData } from './games'
import { Navbar, Menu, DesktopSection, PortableSection } from 'components'
import { useState } from 'react'

export const PrincipalSection = () => {
  const [gameIndex, setGameIndex] = useState(0)

  const gameName = Games[gameIndex].name

  return (
    <div
      style={{
        backgroundImage: `${gameData[gameName].backgroundImage}`
      }}
      className=" bg-cover"
    >
      <Navbar />
      <Menu />
      <DesktopSection setGameIndex={setGameIndex} gameName={gameName} className="hidden md:flex" />
      <PortableSection setGameIndex={setGameIndex} gameName={gameName} className="flex md:hidden" />
      <div className="relative h-2 w-full overflow-hidden">
        <div
          className="h-full w-full animate-slide bg-primary"
          onAnimationEnd={() => {
            const newIndice = gameIndex === 2 ? 0 : gameIndex + 1
            setGameIndex(newIndice)
          }}
          key={gameName}
        />
      </div>
    </div>
  )
}
