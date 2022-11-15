import '../componentstyles/LatestGames.css';
import { pullLatest } from '../utils/gameUtils';
import { useEffect, useState } from "react"
import GameCard from "./GameCard"


const Latest = ({passedGameData, setPassedGameData, basket, setBasket}) => {
    const [gameData, setGameData] = useState([])
    
    const gameMap = async () => {
        let data = await pullLatest()
        console.log(data)
        setGameData(data)
      }   
    useEffect(() => {
        gameMap()
    }, [])

    return (
        <div className='gameresults'>
            <div className="latest">
            {gameData.map((game, index, platformData) => (
                    <GameCard id = "gameCard" key = {index} fullgame={game} platform={platformData} passedGameData={passedGameData} setPassedGameData={setPassedGameData} />
                ))}
            </div>
        </div>
    )
}

export default Latest;
