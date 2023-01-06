import DiabloBG from './bg.png'
import DiabloLogo from './logo.png'

interface GameCardProps {
  thumbnailURL: string
  title: string
  subtitle: string
}

export const GameCard = ({ thumbnailURL, title, subtitle }: GameCardProps) => {
  return (
    <>
      <div
        className="mb-6 h-[26rem] w-[18rem]"
        style={{
          backgroundImage: `url(${thumbnailURL})`
        }}
      ></div>
      <div className="font-poppins text-white">
        <h1 className=" text-lg font-semibold">{title}</h1>
        <h2 className="text-sm">{subtitle}</h2>
      </div>
    </>
  )
}
