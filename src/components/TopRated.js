import '../componentstyles/TopRated.css';
import { pullTopRated } from '../utils/gameUtils';
import { useEffect, useState } from "react"
import GameCard from "./GameCard"


const TopRated = ({passedGameData, setPassedGameData, basket, setBasket}) => {
    const [gameData, setGameData] = useState([])
    
    const gameMap = async () => {
        let data = await pullTopRated()
        console.log(data)
        setGameData(data)
      }   
    useEffect(() => {
        gameMap()
    }, [])

    return (
        <div className='gameresults'>
            <div className="toprated">
                <div>{gameData.slice(0,5).map((game, index, platformData) => (
                    <GameCard id = "gameCard" key = {index} fullgame={game} platform={platformData} passedGameData={passedGameData} setPassedGameData={setPassedGameData} />
                ))}
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <div>{gameData.slice(5,10).map((game, index, platformData) => (
                    <GameCard id = "gameCard" key = {index} fullgame={game} platform={platformData} passedGameData={passedGameData} setPassedGameData={setPassedGameData} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default TopRated;
