import GodOfWar from "../assets/gow.jpg"
import "../componentstyles/GameCard.css"
import {useState, useEffect} from "react"
import {pullPlatform} from "../utils/gameUtils"
import {faker} from '@faker-js/faker'
import { useNavigate } from 'react-router-dom';



const GameCard = ({fullgame, platform, passedGameData, setPassedGameData, basket, setBasket}) => {
    const [platformData, setPlatformData] = useState([])
    const [value, setValue] = useState(0)
    const navigate = useNavigate();

    useEffect (() => {
        setValue(faker.commerce.price(10, 30, 2)) 

}, [])

    const viewGame = (passedGameData) => {
        console.log("LOOK HERE!!!")
        console.log(fullgame)
        fullgame.price = value
        const temp = [passedGameData]
        temp.push({"title": fullgame.name, "price": fullgame.price, "summary": fullgame.summary})
        setPassedGameData(temp) 
        navigate("/game")

    }

    useEffect(() => {
        pullPlatform()
    }, [])


    console.log(fullgame)
    
    
    return (
        <div className = "gamecontainer">
            <div className = "image">
                <img  id = "gamecover" alt="gamecover" src = {GodOfWar}></img>
            </div>

            <div className = "gamedetails">
                <p id = "gametitle">{fullgame.name}</p>
                <p id = "gameplatforms">{fullgame.platform}</p>
                <p id = "gamesummary">{fullgame.summary}</p>
                <div className = "pricesection">
                    <p id = "gameprice">{value}</p>
                    <button id = "addtobasket" onClick={viewGame}>View Details</button>
                </div>
            </div>


        </div>

    )
}

export default GameCard;

