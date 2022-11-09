import "../componentstyles/Checkout.css";

const Checkout = () => {
  return (
    <div>
      <h1>YOUR SHOPPING CART</h1>
      <div className="outer-box">
        <div className="inner-box-upper">
          <img src="" alt="gameimage" height="50" width="50" />
          <p>placeholder game title</p>
          <img src="" alt="platformimage" height="16" width="16" />
          <p>£19.99</p>
        </div>
        <div className="inner-box-lower">
          <div className="top-text">
            <h4>Estimated total</h4>
            <h4>£19.99</h4>
          </div>
          <p id="center">To finalise your order, select purchase below.</p>
          <div id="purchase"><button id="padded-button">Purchase item(s)</button></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
