import '../componentstyles/GameBody.css'


const GameBody = ({ title, genre, price, rating }) => {
    return (
        <div id="gamebody">
            <div className="gamecard">
                <div className="gamecover">
                    <img id='picplace' alt="cover of the game" src={require('../assets/gow.jpg')}></img>
                </div>
                <div className='infoContainer'>
                    <div className="info">
                    <div className='infoTag'>
                        <h1>Title:{title}</h1>
                    </div>
                    <div className='infoTag'>
                        <h1>Genre:{genre}</h1>
                    </div>
                    <div className='infoTag'>
                        <h1>Price:{price}</h1>
                    </div>
                    <div className='infoTag'>
                        <h1>Rating:{rating}</h1>
                    </div>
                </div>
                <div className="description">
                    <p>will pull from API later</p>
                </div>
                <div className='buttonContainer'>
                    <button className="addBasketBtn">Add to basket</button>
                </div>
                </div>
            </div>
            {/* <img alt="gmaebackground" src={require("../assets/background_texture.png")}></img> */}
        </div>
    )
}

export default GameBody
