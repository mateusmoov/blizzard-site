import { Button } from 'components'
import { BattleNetLogoText } from 'images'
import { BlackAppleLogo, GoogleLogo, FacebookLogo, CloseIcon } from 'icons'

export const LoginModal = () => {
  return (
    <div className="relative flex h-[600px] w-[696px] bg-black-200 bg-login bg-no-repeat">
      <div className="absolute top-0 right-0 pt-6 pr-6">
        <button>
          <CloseIcon />
        </button>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <div className="mb-10 flex w-[426px] flex-col gap-4">
          <div className="mb-10 flex justify-center">
            <img src={BattleNetLogoText} alt="Battle Net Logo" />
          </div>
          <input
            type="email"
            name=""
            id=""
            className="rounded py-3 pl-4 font-medium placeholder:font-poppins placeholder:text-sm placeholder:font-medium placeholder:text-platinum-400 "
            placeholder="E-mail ou telefone"
          />
          <input
            type="password"
            name=""
            id=""
            className="rounded py-3 pl-4 font-medium placeholder:font-poppins placeholder:text-sm placeholder:font-medium placeholder:text-platinum-400"
            placeholder="Senha"
          />
          <Button variant="filled" className="justify-center rounded py-[14px] font-semibold ">
            Conectar-se
          </Button>
        </div>
        <div className="mb-9 flex flex-col gap-4">
          <div>
            <span className="font-poppins text-sm font-medium text-white">ou conecte-se com</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a href="http://www.pudim.com.br/" className="h-12 w-12 rounded bg-white">
              <div className="flex h-full items-center justify-center">
                <GoogleLogo />
              </div>
            </a>
            <a href="http://www.pudim.com.br/" className="h-12 w-12 rounded bg-white">
              <div className=" flex h-full items-center justify-center">
                <BlackAppleLogo />
              </div>
            </a>
            <a href="http://www.pudim.com.br/" className="h-12 w-12 rounded bg-white">
              <div className="flex h-full items-center justify-center">
                <FacebookLogo />
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-poppins text-lg font-medium text-white">
              <a
                href="http://www.pudim.com.br/"
                className="text text-primary underline decoration-1 "
              >
                Crie uma conta
              </a>
              &nbsp; Battle.net de graça
            </span>
            <a
              href="http://www.pudim.com.br/"
              className="text font-medium text-primary underline decoration-1"
            >
              Não consegue logar?
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
