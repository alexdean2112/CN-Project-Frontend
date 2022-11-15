import '../componentstyles/MainPage.css';
import { pullGames } from '../utils/gameUtils';
import { useEffect, useState } from "react"
import GameCard from "./GameCard" 


const Mainpage = ({passedGameData, setPassedGameData, basket, setBasket}) => {
    const [gameData, setGameData] = useState([])
    
    const gameMap = async () => {
        let data = await pullGames()
        setGameData(data)
      }   
    useEffect(() => {
        gameMap()
    }, [])

    return (
        <div className='mainbody'>
            <div className="carousalContainer">
                <div className="carousal">
                    <img className='carouselImage' src={require("../assets/Carousel.png")} alt="Carousel" />
                </div>
            </div>
            <div className='games'>
                <div className="randomGame">
                    {gameData.slice(0,2).map((game, index, platformData) => (
                        <GameCard id = "gameCard" key = {index} fullgame={game} platform={platformData} passedGameData={passedGameData} setPassedGameData={setPassedGameData} />
                    ))}
                </div>
                <div className="randomGame">
                    {gameData.slice(2,4).map((game, index, platformData) => (
                        <GameCard id = "gameCard" key = {index} fullgame={game} platform={platformData} passedGameData={passedGameData} setPassedGameData={setPassedGameData} />
                    ))}
                </div>
            </div>            
        </div>
    )
}

export default Mainpage;

