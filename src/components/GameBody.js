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
          <img
            id="picplace"
            alt="cover of the game"
            src={require("../assets/barrybee.png")}
          ></img>
        </div>
        <div className="info">
          <h1>
            Title:{title}
            <br></br>Genre:{genre}
          </h1>
          <h1>
            Price:{price}
            <br></br>Rating:{rating}
          </h1>
        </div>
        <div className="description">
          <p>will pull from API later</p>
        </div>
        <button className="addBasketBtn" onClick={addGame}>
          Add to basket
        </button>
      </div>
      <img
        alt="gamebackground"
        src={require("../assets/background_texture.png")}
      ></img>
    </div>
  );
};

export default GameBody;
