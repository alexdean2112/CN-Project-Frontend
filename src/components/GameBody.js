import '../componentstyles/GameBody.css'

const GameBody = ({ atb, basket, setBasket, passedGameData }) => {
  console.log(passedGameData)
  const object = { title: passedGameData[1].title, price: passedGameData[1].price };
    
    
    const addGame = (e) => {
      e.preventDefault();
      const temp = [...basket];
      temp.push(object);
      atb(temp);
      console.log(basket)
    };
  
    
    
      return (
          <div id="gamebody">
              <div className="gamecard">
                  <div className="gamecover">
                      <img id='picplace' alt="cover of the game" src={require('../assets/gow.jpg')}></img>
                  </div>
                  <div className='infoContainer'>
                      <div className="info">
                      <div className='infoTag'>
                          <h1>Title:{passedGameData[1].title}</h1>
                      </div>
                      <div className='infoTag'>
                          <h1>Price:{passedGameData[1].price}</h1>
                  </div>
                  <div className="description">
                      <p>Summary: {passedGameData[1].summary}</p>
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

