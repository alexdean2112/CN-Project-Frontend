import "../componentstyles/GameBody.css";

const GameBody = ({ atb, basket, setBasket, passedGameData }) => {
  console.log(passedGameData);
  const object = {
    title: passedGameData[1].title,
    price: passedGameData[1].price,
  };

  const addGame = (e) => {
    e.preventDefault();
    const temp = [...basket];
    temp.push(object);
    atb(temp);
    console.log(basket);
  };

  return (
    <div id="gamebody">
      <div className="gamecard">
        <div className="gamecover">
          <img
            id="picplace"
            alt="cover of the game"
            src={require("../assets/noimage.png")}
          ></img>
        </div>
        <div className="infoContainer">
          <div className="info">
            <div className="infoTag">
              <p id="text">Title: {passedGameData[1].title}</p>
            </div>
            <div className="infoTag">
              <p id="text">Price: £{passedGameData[1].price}</p>
            </div>
            <div className="description">
              <p id="summarytext">Summary: {passedGameData[1].summary}</p>
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
