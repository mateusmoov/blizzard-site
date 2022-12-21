import Diablo4 from '~/../../public/assets/logos/diablo-4.png'
import HearthStone from '~/../../public/assets/logos/hearthstone.png'
import WoW from '~/../../public/assets/logos/world-of-warcraft.png'
import Diablo1 from '~/../../public/assets/logos/diablo-1.png'
import StarCraft2 from '~/../../public/assets/logos/star-craft-2.png'
import Diablo4XL from '~/../../public/assets/logos/diablo-4xl.png'
import ThumbDiablo4 from '~/../../public/assets/banner/thumb-diablo4.png'

import { Navbar } from 'components'

const PrincipalSection = () => {
  return (
    <div className="min-h-[738px] bg-1 ">
      <Navbar />
      <div className="flex min-h-[738px] items-center justify-center">
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
        <div className="ml-44 mr-64 w-full max-w-[562px] font-poppins font-medium	text-white">
          <h1 className="mb-4 text-6xl font-bold leading-[71px]">
            Retorne à escuridão com o game Diablo IV
          </h1>
          <p className="mb-8 text-lg font-normal">
            O retorno de Lilith traz uma era de escuridão e sofrimento
          </p>
          <button className="rounded	bg-primary px-8 py-3.5">Jogue Agora</button>
        </div>
        <div className="flex flex-col content-between	">
          <img src={Diablo4XL} alt="Diablo 4" className="mb-28" />
          <div>
            <p className="font-poppins text-lg font-semibold text-white">ASSISTA O TRAILER</p>
            <img src={ThumbDiablo4} alt="Thumb Video Diablo 4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrincipalSection
