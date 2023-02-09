import BattleNetLogoText from '/assets/logo-battle-net.png'
import AppMini from '/assets/ilustrations/app-mini.png'
import App from '/assets/ilustrations/app.png'
import {
  SquareCheckIcon,
  DotsWrapperIcon,
  BuyIcon,
  PhoneIcon,
  WindowsIcon,
  LinuxIcon,
  AppleLogo,
  QuestionMarkIcon
} from 'icons'
import { Button, Section } from 'components'

export const FooterSection = () => {
  const detectOperatingSystem = () => {
    const navApp = navigator.userAgent.toLowerCase()

    switch (true) {
      case navApp.includes('win'):
        return {
          name: 'Windows',
          icon: <WindowsIcon />
        }
      case navApp.includes('mac'):
        return {
          name: 'MacOS',
          icon: <AppleLogo />
        }
      case navApp.includes('linux'):
        return {
          name: 'Linux',
          icon: <LinuxIcon />
        }
      default:
        return {
          name: 'Que sistema é esse?',
          icon: <QuestionMarkIcon />
        }
    }
  }

  console.log(detectOperatingSystem())

  return (
    <div className="overflow-hidden bg-2 bg-cover bg-no-repeat">
      <Section className="relative flex flex-col py-40 md:flex-row">
        <div className="relative z-10 flex items-center">
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
            <Button
              variant="filled"
              className="py-3.5 px-8 font-bold"
              icon={detectOperatingSystem().icon}
            >
              Baixar para {detectOperatingSystem().name}
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
        </div>
        <div className="flex h-full w-full items-end justify-center object-cover">
          <img
            src={App}
            className="absolute top-[15%] -right-[40%] md:-right-1/4"
            alt="imagem foda"
          />
          <img
            src={AppMini}
            className="absolute top-1/2 -right-[20%] md:-right-[10%]"
            alt="mini imagem foda"
          />
        </div>
      </Section>
    </div>
  )
}
