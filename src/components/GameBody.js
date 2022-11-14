import "../componentstyles/GameBody.css";

const GameBody = ({ title, genre, price, rating, atb, basket }) => {

  const addGame = () => {
    const temp = [...basket];
    temp.push(object);
    atb(temp);
  };

  const object = { title: "Legend of Zelda", price: "39.99" };

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
              <h1>Price:{price}</h1>
            </div>
            <div className="description">
              <p>will pull from API later</p>
            </div>
            <div className="buttonContainer">
              <button className="addBasketBtn" onClick={addGame}>
              Add to basket
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBody;
