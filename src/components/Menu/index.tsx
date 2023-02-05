import { Section } from 'components'
import { BattleNetLogoBlue, DownloadIcon, ChatIcon } from 'icons'
import { useStore } from 'stores'
import { GamesMenu, EsportsMenu } from './itemsMenu'

export const Menu = () => {
  const typeMenu = useStore((state) => state.menuOption)
  return (
    <>
      <div className="absolute z-10 h-[570px] w-full bg-menu backdrop-blur">
        <Section className="flex h-full justify-center">
          <div className="flex h-44 w-[1272px] flex-wrap justify-center gap-8">
            {typeMenu === 'esports'
              ? EsportsMenu.map((gameItem, index) => (
                  <div key={index} className="flex w-[176px] flex-col items-center">
                    <div>
                      <img src={gameItem.image} alt={gameItem.alt} />
                    </div>
                    <div className="w-28 text-center">
                      <span className="font-inter text-[14px] font-medium text-platinum-250 ">
                        {gameItem.name}
                      </span>
                    </div>
                  </div>
                ))
              : GamesMenu.map((gameItem, index) => (
                  <div key={index} className="flex w-[176px] flex-col items-center">
                    <div>
                      <img src={gameItem.image} alt={gameItem.alt} />
                    </div>
                    <div className="w-28 text-center">
                      <span className="font-inter text-[14px] font-medium text-platinum-250 ">
                        {gameItem.name}
                      </span>
                    </div>
                  </div>
                ))}
          </div>
        </Section>
        <div className=" h-[70px] w-full bg-black-100">
          <ul className="flex h-full items-center justify-center gap-16 font-poppins font-semibold text-white">
            {/* {batata.map((optionsItem, index) => (
              <li className="flex items-center gap-3" key={index}>
                {optionsItem.icon}
                <span>{optionsItem.text}</span>
              </li>
            ))} */}
            <li className="flex items-center gap-3">
              <BattleNetLogoBlue />
              <span>Aplicativo Battle.net</span>
            </li>
            <li className="flex items-center gap-3">
              <DownloadIcon />
              <span>Downloads</span>
            </li>
            <li className="flex items-center gap-3">
              <ChatIcon />
              <span>Fóruns dos jogos</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
