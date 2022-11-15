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

  return (
    <div>
      <h1>YOUR SHOPPING CART</h1>
      <div className="outer-box">
        {basket.map((item, index) => {
          prices.push(parseInt(item.price));
          return (
            <div className="inner-box-upper">
              <img src="" alt="gameimage" height="50" width="50" />
              <p>{item.title}</p>
              <div id="vert-line" />
              <img src="" alt="platformimage" height="16" width="16" />
              <p>£{item.price}</p>
            </div>
          );
        })}

        <div id="thin-line" />
        <div className="inner-box-lower">
          <div className="top-text">
            <h4>Estimated total</h4>
            <h4>£{addUp()}.00</h4>
          </div>
          <p id="center">To finalise your order, select checkout below.</p>
          <div id="purchase">
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
