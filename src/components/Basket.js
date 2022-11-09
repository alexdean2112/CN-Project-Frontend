import styled from "styled-components";

const Sidebar = ({ show }) => {
  return (
    <BarContainer show={show}>
      <Sideheader>Your Cart</Sideheader>
      <Sidecontent></Sidecontent>
      <Sidefooter>Purchase Cart?</Sidefooter>
    </BarContainer>
  );
};

export default Sidebar;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 100%;
  width: 256px;
  margin-right: 0;
  background-color: ${({ show }) => (show ? "#515050" : "white")};
  transition: all 0.5s;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-500px)")};
`;

const Sideheader = styled.p`
  height: 50px;
  font-size: 35px;
  font-weight: bold;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  margin: 0;
  cursor: default;
  border-bottom: 4px solid black;
  color: #deb887;
`;
const Sidecontent = styled.div`
  position: absolute;
  width: 100%;
  top: 60px;
  bottom: 60px;
  left: 5px;
  overflow-y: auto;
  color: #deb887;
`;

const Sidefooter = styled.div`
  height: 50px;
  font-size: 25px;
  width: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
  paddint-top: 5px;
  margin: 0;
  cursor: pointer;
  border: 1px solid black;
  background-color: black;
  color: #deb887;
  font-weight: bold;
`;

// import "../componentstyles/basket.css";

// const Basket = () => {
//   return (
//     <div className="basket_full">
//       <div className="basket_border_top"></div>
//       <div className="basket_box">
//         <div className="item_box"></div>
//         <div className="price_space"></div>
//         <div className="item_box"></div>
//         <div className="price_space"></div>
//         <div className="item_box"></div>
//         <div className="price_space"></div>
//         <div className="item_box"></div>
//         <div className="price_space"></div>
//         <div className="basket_border_bottom"></div>
//       </div>
//     </div>
//   );
// };

// export default Basket;
