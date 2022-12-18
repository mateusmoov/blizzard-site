import { ChevronDown, BlizzardLogo } from 'logos'

const Navbar = () => {
  return (
    <div className="bg-black">
      <div>
        <BlizzardLogo />
        <div className="flex text-white-primary">
          <div>
            <a href="http://www.pudim.com.br">
              <ChevronDown />
            </a>
          </div>
          <a href="http://www.pudim.com.br">
            <ChevronDown />
          </a>
          <a href="http://www.pudim.com.br">Loja</a>
          <a href="http://www.pudim.com.br">Notícias</a>
          <a href="http://www.pudim.com.br">Suporte</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
