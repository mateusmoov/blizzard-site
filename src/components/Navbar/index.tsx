import BlizzardLogo from 'assets/logos/blizzard-logo.svg'
import ArrowDown from 'assets/arrow-down.svg'

const Navbar = () => {
  return (
    <div className="bg-black">
      <div>
        <img src={BlizzardLogo} alt="logo-blizzard" />
        <div className="flex text-white-primary">
          <div>
            <a href="http://www.pudim.com.br">
              Esporte <img src={ArrowDown} alt="arrow-down" />
            </a>
          </div>
          <a href="http://www.pudim.com.br">
            Jogos <img src={ArrowDown} alt="arrow-down" />
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
