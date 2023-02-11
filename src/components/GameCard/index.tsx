interface GameCardProps {
  thumbnailURL: string
  gameLogoURL: string
  title: string
  subtitle: string
}

export const GameCard = ({ thumbnailURL, gameLogoURL, title, subtitle }: GameCardProps) => {
  const cardStyle = {
    background: 'linear-gradient(1deg, #020203 1.26%, rgba(2, 2, 3, 0) 73.74%)',
    opacity: '0.7',
    transform: 'transform: rotate(-180deg)'
  }

  return (
    <div>
      <div className="relative ">
        <img src={thumbnailURL} alt="" style={cardStyle} />
        <div className="absolute bottom-0 flex w-full justify-center pb-11">
          <img src={gameLogoURL} alt="" />
        </div>
      </div>

      <div className="font-poppins text-white">
        <h1 className=" text-lg font-semibold">{title}</h1>
        <h2 className="text-sm">{subtitle}</h2>
      </div>
    </div>
  )
}
