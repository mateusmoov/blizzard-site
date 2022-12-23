import Diablo4 from '/assets/logos/diablo-4.png'
import HearthStone from '/assets/logos/hearthstone.png'
import WoW from '/assets/logos/world-of-warcraft.png'
import Diablo1 from '/assets/logos/diablo-1.png'
import StarCraft2 from '/assets/logos/star-craft-2.png'
import Diablo4XL from '/assets/logos/diablo-4xl.png'
import ThumbDiablo4 from '/assets/banner/thumb-diablo4.png'

import { Navbar, Button } from 'components'

const PrincipalSection = () => {
  return (
    <div className="bg-1">
      <Navbar />
      <div className='grid grid-cols-[221px_562px_497px] max-w-screen-xl mx-auto h-[738px] items-center'>
        <div className=" font-poppins text-white col-span-1 order-2 self-end">
          <h1 className="mb-4 text-6xl font-bold leading-[71px]">
            Retorne à escuridão com o game Diablo IV
          </h1>
          <p className="mb-8 text-lg">O retorno de Lilith traz uma era de escuridão e sofrimento</p>
          </div>
          
          <div className='order-4 self-start'>
            <Button variant="filled" className="px-8 py-3.5 font-medium">
              Jogue agora
            </Button>
          </div>

          <div className='order-5 self-start flex justify-center flex-col items-end'>
            <h3 className="font-poppins text-lg font-semibold text-white mb-4">ASSISTA O TRAILER</h3>
            <div>
            <img src={ThumbDiablo4} alt="Thumb Video Diablo 4" />
            </div>
          </div>

        <ul className="flex flex-col gap-y-5 row-span-2 order-1">
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

        <div className='order-3 ml-auto'>
          <div>
          <img src={Diablo4XL} alt="Diablo 4"  />
          </div>
        </div> 

      </div>   
      </div>
  )
}

export default PrincipalSection
