

const GameBody = ({title,genre,price,rating}) =>{
    return (
        <div id = "gamebody">
            <img alt = "gmaebackground" src ={require("../assets/background_texture.png")}></img>
            <img alt = "box" src ={require("../assets/box_texture.png")}></img>
            <div className="gamecard">
                {/* <div className="gameCover">
                    <img>Game cover here, pull from API?</img>
                </div> */}
                <div className="info">
                    <h1>Title:{title}, Genre:{genre}</h1>
                    <h1>Price:{price}, Rating:{rating}</h1>
                </div>
                <div className="description">
                    <p>will pull from API later</p>
                </div>
                <button className="addBasketBtn">Add to basket</button>
            </div>
        </div>
    )
}

export default GameBody
