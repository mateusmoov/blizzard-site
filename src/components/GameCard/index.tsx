import DiabloBG from './bg.png'
import DiabloLogo from './logo.png'

interface GameCardProps {
  thumbnailURL: string
}

export const GameCard = ({ thumbnailURL }: GameCardProps) => {
  return (
    <>
      <div
        className="h-[26rem] w-[18rem]"
        style={{
          backgroundImage: `url(${thumbnailURL})`
        }}
      ></div>
    </>
  )
}
