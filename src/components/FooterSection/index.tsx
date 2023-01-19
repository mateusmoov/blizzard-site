import BattleNetLogoText from '/assets/logo-battle-net.png'
import AppMini from '/assets/ilustrations/app-mini.png'
import App from '/assets/ilustrations/app.png'
import { SquareCheckIcon, DotsWrapperIcon, BuyIcon, PhoneIcon, AppleLogo } from 'icons'
import { Button, Section } from 'components'
export const FooterSection = () => {
  return (
    <div className="bg-2 bg-cover bg-no-repeat pb-36">
      <Section className="pt-32">
        <div className="flex items-center">
          <div>
            <img src={BattleNetLogoText} alt="Battle Net Logo" />
            <h1 className="text-4xl font-bold leading-[71px] text-white">
              Baixe agora com o Battle.net
            </h1>
            <ul className="mb-9 flex flex-col gap-6 font-poppins text-platinum-300">
              <li className="flex gap-4	">
                <div>
                  <SquareCheckIcon />
                </div>
                <p>Seus jogos em um só lugar</p>
              </li>
              <li className="flex gap-4	">
                <div>
                  <DotsWrapperIcon />
                </div>
                <p>Conecte-se aos seus amigos</p>
              </li>
              <li className="flex gap-4">
                <div>
                  <BuyIcon />
                </div>
                <p>Compre jogos e itens digitais</p>
              </li>
            </ul>
            <Button variant="filled" className="py-3.5 px-8 font-bold" icon={<AppleLogo />}>
              Baixar para MacOS
            </Button>
            <div className="mt-12 flex gap-4">
              <PhoneIcon />
              <p className="w-48 font-poppins font-bold text-white">
                Também disponível como &nbsp;
                <span className="underline decoration-white decoration-1 underline-offset-2">
                  aplicativo movel
                </span>
              </p>
            </div>
          </div>
          <div className="relative top-[300px] left-[300px] flex h-full w-full items-end justify-center object-cover ">
            <img src={App} alt="Interface" className="absolute" />
            <img
              src={AppMini}
              alt="Interface app mini"
              className="absolute right-[109px] top-[-269px] z-10"
            />
          </div>
        </div>
      </Section>
    </div>
  )
}
