import "../componentstyles/basket.css";

const Basket = () => {
  return (
    <div className="basket_full">
      <div className="basket_border_top"></div>
      <div className="basket_box">
        <div className="item_box"></div>
        <div className="price_space"></div>
        <div className="item_box"></div>
        <div className="price_space"></div>
        <div className="item_box"></div>
        <div className="price_space"></div>
        <div className="item_box"></div>
        <div className="price_space"></div>
        <div className="basket_border_bottom"></div>
      </div>
    </div>
  );
};

export default Basket;
