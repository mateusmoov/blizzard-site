import Diablo4 from '/assets/banner-hero/icons/game-1.png'
import HearthStone from '/assets/banner-hero/icons/game-2.png'
import WoW from '/assets/banner-hero/icons/game-3.png'
import Diablo1 from '/assets/banner-hero/icons/game-4.png'
import StarCraft2 from '/assets/banner-hero/icons/game-5.png'
import Diablo4XL from '/assets/banner-hero/games/diablo-logo.png'
import ThumbDiablo4 from '/assets/banner-hero/games/diablo-animation-cover.png'

import { Navbar, Button, Section } from 'components'

export const PrincipalSection = () => {
  return (
    <div className="bg-1 bg-cover">
      <Navbar />

      <Section className="flex h-[736px] justify-between py-20">
        <div className="flex w-full items-center justify-between">
          <ul className="flex flex-col gap-y-5">
            <li tabIndex={0}>
              <img src={Diablo4} alt="Diablo 4" width="48" />
            </li>
            <li tabIndex={0}>
              <img src={HearthStone} alt="HearthStone" width="48" />
            </li>
            <li tabIndex={0}>
              <img src={WoW} alt="World of Warcraft" width="48" />
            </li>
            <li tabIndex={0}>
              <img src={Diablo1} alt="Diablo 1" width="48" />
            </li>
            <li tabIndex={0}>
              <img src={StarCraft2} alt="Star Craft 2" width="48" />
            </li>
          </ul>

          <div className=" w-full max-w-xl self-end font-poppins text-white">
            <h1 className="mb-4 text-6xl font-bold leading-[71px]">
              Retorne à escuridão com o game Diablo IV
            </h1>
            <p className="mb-8 text-lg">
              O retorno de Lilith traz uma era de escuridão e sofrimento
            </p>
            <div className=" self-start">
              <Button variant="filled" className="px-8 py-3.5 font-medium">
                Jogue agora
              </Button>
            </div>
          </div>

          <div className="flex h-full flex-col">
            <div>
              <img src={Diablo4XL} alt="Diablo 4" />
            </div>
            <div className="flex flex-col items-end ">
              <h3 className="mb-4 font-poppins text-lg font-semibold text-white">
                ASSISTA O TRAILER
              </h3>
              <div>
                <img src={ThumbDiablo4} alt="Thumb Video Diablo 4" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
