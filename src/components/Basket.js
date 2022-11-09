import "../componentstyles/basket.css";

const Sidebar = ({ show }) => {
  return (
    <div className="bar_container" show={show}>
      <div className="side_header">Your Cart</div>
      <div className="side_content"></div>
      <div className="side_footer">Checkout</div>
    </div>
  );
};

export default Sidebar;
