import GodOfWar from "../assets/gow.jpg"
import "../componentstyles/GameCard.css"

const GameCard = () => {
    return (
        <div className = "gamecontainer">
            <div className = "image">
                <img  id = "gamecover" alt="gamecover" src = {GodOfWar}></img>
            </div>


        </div>

    )
}

export default GameCard;

