import { Section, Button, LoginModal } from 'components'
import { ChevronDown, BlizzardLogo, UserIcon, ChevronUp } from 'icons'
import { useStore } from 'stores'
import * as Dialog from '@radix-ui/react-dialog'

export const Navbar = () => {
  const { addEsports, addGames, menuOption } = useStore()

  return (
    <header className="absolute z-30 w-full border-b-2 border-white  border-opacity-5">
      <Section className="flex justify-between py-7">
        <div className="flex gap-x-28">
          <BlizzardLogo className="w-full max-w-[86px] xl:max-w-[115px]" />
          <nav className="flex items-center">
            <ul className="hidden gap-x-8 space-x-3 font-poppins text-sm font-medium text-white lg:flex">
              <li>
                <button onClick={addGames} className="flex items-center space-x-3">
                  <span>Jogos</span>
                  {menuOption === 'games' ? <ChevronUp /> : <ChevronDown />}
                </button>
              </li>
              <li>
                <button onClick={addEsports} className="flex items-center space-x-3">
                  <span>Esportes</span>
                  {menuOption === 'esports' ? <ChevronUp /> : <ChevronDown />}
                </button>
              </li>
              <li>
                <a href="https://youtu.be/dQw4w9WgXcQ">Loja</a>
              </li>
              <li>
                <a href="https://youtu.be/dQw4w9WgXcQ">Notícias</a>
              </li>
              <li>
                <a href="https://youtu.be/dQw4w9WgXcQ">Suporte</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-x-4">
          <Button variant="outlined" className="h-10 px-5 leading-[1.3rem]">
            Criar conta
          </Button>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button
                variant="filled"
                icon={<UserIcon />}
                className="h-10 gap-x-1.5 px-[2.1rem] leading-[1.3rem]"
              >
                Logar
              </Button>
            </Dialog.Trigger>
            <LoginModal />
          </Dialog.Root>
        </div>
      </Section>
    </header>
  )
}
