import { Button } from 'components'
import { BattleNetLogoText } from 'images'
import { BlackAppleLogo, GoogleLogo, FacebookLogo } from 'icons'

export const LoginModal = () => {
  return (
    <div className="flex h-[600px] w-[696px] bg-login bg-no-repeat">
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <div className="mb-10 flex w-[426px] flex-col gap-4">
          <div className="mb-10 flex justify-center">
            <img src={BattleNetLogoText} alt="Battle Net Logo" />
          </div>
          <input type="email" name="" id="" />
          <input type="password" name="" id="" />
          <Button variant="filled">Conectar-se</Button>
        </div>
        <div className="mb-9 flex flex-col gap-4">
          <div>
            <span className="font-poppins text-sm text-white">ou conecte-se com</span>
          </div>
          <div className="flex justify-center gap-4">
            <a className="h-12 w-12 rounded bg-white">
              <div>
                <GoogleLogo />
              </div>
            </a>
            <a className="h-12 w-12 rounded bg-white">
              <BlackAppleLogo />
            </a>
            <a className="h-12 w-12 rounded bg-white">
              <FacebookLogo />
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-poppins text-lg text-white">
              <a href="" className="text text-primary underline decoration-1">
                Crie uma conta
              </a>
              &nbsp; Battle.net de graça
            </span>
            <a href="" className="text text-primary underline decoration-1">
              Não consegue logar?
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
