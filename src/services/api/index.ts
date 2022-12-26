const getGames = async () => {
  const response = await fetch('https://api.brchallenges.com/api/blizzard/games')
  return response.json()
}

export default getGames
