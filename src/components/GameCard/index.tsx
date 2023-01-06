interface GameCardProps {
  thumbnailURL: string
  gameLogoURL: string
  title: string
  subtitle: string
}

export const GameCard = ({ thumbnailURL, gameLogoURL, title, subtitle }: GameCardProps) => {
  const gradient = `linear-gradient(1deg, #020203 1.26%, rgba(2, 2, 3, 0) 73.74%), url(${thumbnailURL})`

  return (
    <>
      <div
        className="mb-6 h-[26rem] w-[18rem]"
        style={{
          backgroundImage: gradient
        }}
      >
        <div className="flex h-full items-end justify-center object-cover pb-10">
          <img src={gameLogoURL} alt={title} />
        </div>
      </div>
      <div className="font-poppins text-white">
        <h1 className=" text-lg font-semibold">{title}</h1>
        <h2 className="text-sm">{subtitle}</h2>
      </div>
    </>
  )
}
