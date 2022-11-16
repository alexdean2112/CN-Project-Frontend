import "../componentstyles/Checkout.css";
import { createOrder } from "../utils/orderUtils";

const Checkout = ({ basket, atb, user }) => {
  const prices = [];

  const addUp = () => {
    const sum = prices.reduce((partialSum, a) => partialSum + a, 0)
    return sum;
  };

  const checkoutHandler = () => {
    for (let i = 0; i < basket.length; i++) {
      createOrder(basket[i].title, basket[i].price, user);
    }
    atb([]);
  };

  const clearBasket = () => {
    atb([])
  }

  return (
    <div>
      <div className="shopping_cart">
      <h1>YOUR SHOPPING CART</h1>
      </div>
      <div className="outer-box">
        {basket.map((item, index) => {
          prices.push(parseInt(item.price));
          return (
            <div className="inner-box-upper">
              <div id="flex-start">
              <p>{item.title}</p>
              </div>
              <div id="vert-line" />
              <div id="flex-end" > 
              <p>£{item.price}</p>
              </div>
            </div>
          );
        })}
        
        <div id="thin-line-container">
        <div id="thin-line" />
        </div>
        <div className="inner-box-lower">
          <div className="top-text">
            <h4>Estimated total</h4>
            <h4>£{addUp()}.00</h4>
          </div>
          <p id="center">To finalise your order, select checkout below.</p>
          <div id="purchase">
            <button id="give-me-space" onClick={clearBasket} >CANCEL ORDER</button>
            <button id="padded-button" onClick={checkoutHandler}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
