import "../componentstyles/Checkout.css";
import { createOrder } from "../utils/orderUtils";

// This will need to be mapped later on?????
// Game image 50x50 and platform image 16x16

const Checkout = ({ basket, atb }) => {

  const checkoutHandler = () => {
    basket.map((item, index) => (
      createOrder(item.title, item.price)
    ))
    atb([])
  };

  return (
    <div>
      <h1>YOUR SHOPPING CART</h1>
      <div className="outer-box">

        {basket.map((item, index) => (
          <div className="inner-box-upper">
            <img src="" alt="gameimage" height="50" width="50" />
            <p>{item.title}</p>
            <div id="vert-line" />
            <img src="" alt="platformimage" height="16" width="16" />
            <p>£{item.price}</p>
          </div>
        ))}

        <div id="thin-line" />
        <div className="inner-box-lower">
          <div className="top-text">
            <h4>Estimated total</h4>
            <h4>£19.99</h4>
          </div>
          <p id="center">To finalise your order, select checkout below.</p>
          <div id="purchase">
            <button id="padded-button" onClick={checkoutHandler}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
