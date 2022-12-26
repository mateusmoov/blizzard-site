import { Button } from 'components'
import { ChevronDown, BlizzardLogo, UserIcon } from 'icons'

export const Navbar = () => {
  return (
    <header className="border-b-2 border-white border-opacity-5">
      <div className="mx-auto flex max-w-screen-xl justify-between py-7">
        <div className="flex gap-x-28">
          <BlizzardLogo />
          <nav className="flex items-center">
            <ul className="flex gap-x-8 space-x-3 font-poppins font-medium text-white">
              <li>
                <a href="http://www.pudim.com.br" className="space-x-3">
                  <span>Jogos</span>
                  <ChevronDown />
                </a>
              </li>
              <li>
                <a href="http://www.pudim.com.br" className="space-x-3">
                  <span>Esportes</span>
                  <ChevronDown />
                </a>
              </li>
              <li>
                <a href="http://www.pudim.com.br">Loja</a>
              </li>
              <li>
                <a href="http://www.pudim.com.br">Notícias</a>
              </li>
              <li>
                <a href="http://www.pudim.com.br">Suporte</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-x-4">
          <Button variant="outlined" className="h-10 px-5 leading-[1.3rem]">
            Criar conta
          </Button>
          <Button
            variant="filled"
            icon={<UserIcon />}
            className="h-10 gap-x-1.5 px-[2.1rem] leading-[1.3rem]"
          >
            Logar
          </Button>
        </div>
      </div>
    </header>
  )
}
