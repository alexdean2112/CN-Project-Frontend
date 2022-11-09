import GodOfWar from "../assets/gow.jpg"
import "../componentstyles/GameCard.css"

const GameCard = () => {
    return (
        <div className = "gamecontainer">
            <div className = "image">
                <img  id = "gamecover" alt="gamecover" src = {GodOfWar}></img>
            </div>

            <div className = "gamedetails">
                <p id = "gametitle">GAMETITLEHERE</p>
                <p id = "gameplatforms">GAMEPLATFORMSHERE</p>
                <p id = "gamesummary">GAMESUMMARYHERE</p>
                <div className = "pricesection">
                    <p id = "gameprice">PRICEHERE</p>
                    <button id = "addtobasket">Add To Basket</button>
                </div>
            </div>


        </div>

    )
}

export default GameCard;

