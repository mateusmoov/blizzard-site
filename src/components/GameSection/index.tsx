import { Section } from 'components'
import { BattleNetLogo, NintendoSwitchLogo, XboxLogo, PlaystationLogo, AllGamesIcon } from 'icons'

const GameSection = () => {
  return (
    <Section className="bg-black">
      <div className="flex font-poppins ">
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
        </div>
        <div className="ml-auto flex gap-2.5 self-end">
          <div className="flex items-center">
            <AllGamesIcon />
          </div>
          <span className="font-bold text-primary">Ver todos jogos</span>
        </div>
      </div>
    </Section>
  )
}

export default GameSection
