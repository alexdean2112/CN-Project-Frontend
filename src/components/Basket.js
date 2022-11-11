import "../componentstyles/basket.css";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const Basket = () => {
  const [show, setShow] = useState(false);
  return (
    <UltraContainer>
      <YellowButton>
        <button id="StyledButton" onClick={() => setShow(!show)}>
          Show/Hide Cart
        </button>
      </YellowButton>
      <BasketContainer>
        <div className="basket_full">
          <BarContainer show={show}>
            <Sideheader>Your Cart</Sideheader>
            <Sidecontent>
              <SideTitle><h1>Your Items</h1></SideTitle>
              <Items>
                <Content>
                  <h1>Item 1</h1>
                  <h1> £ - - </h1>
                </Content>
                <Content>
                  <h1>Item 2</h1>
                  <h1> £ - - </h1>
                </Content>
                <Content>
                  <h1>Item 3</h1>
                  <h1> £ - - </h1>
                </Content>
              </Items>
              <Total>
                <h1>Total :</h1>
                <h1>£ - -</h1>
              </Total>
            </Sidecontent>
            <Sidefooter><Link to="/checkout"><button>Checkout</button></Link></Sidefooter>
          </BarContainer>
        </div>
      </BasketContainer>
    </UltraContainer>
  );
};

export default Basket;
const UltraContainer = styled.div`
  // display: flex;
  // flex-direction: row-reverse;
  // position: absolute;
  // z-index: 3;
  // margin-left: 10px;
`;

const YellowButton = styled.div`

`
const BasketContainer = styled.div`
display: flex;
flex-direction: row-reverse;
position: absolute;
z-index: 3;
margin-left: 10px;
margin-top: 10px;
`
const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: right;
  height: 600px;
  width: 500px;
  margin-right: 10px;
  box-shadow: #08080b 0 15px 20px 1px;
  background-color: ${({ show }) => (show ? "rgb(0, 0, 0, 0.9)" : "rgb(0, 0, 0, 0.9)")};
  transition: all 0.5s;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-520px)")};
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
  border-bottom: 4px solid whitesmoke;
  color: #ffe600;
`;
const Sidecontent = styled.div`
  position: absolute;
  width: 500px;
  top: 60px;
  bottom: 60px;
  right: 5px;
  overflow-y: auto;
  color: #dfba36;
  font-size: 1.5rem;
  font-weight: 5px;
  // border: solid 1px whitesmoke;
`;
const SideTitle = styled.div`
  font-size: 12px;
`;
const Items = styled.div`
  // border: solid 1px white;
  margin: 10px;
  padding-bottom: 120px;
`;
const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 1px white;
  margin: 12px;
  font-size: 10px;
  padding-right: 15px;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding-right: 13px;
  font-size: 11px;
  border-bottom: solid 3px whitesmoke;
`;

const Sidefooter = styled.div`
  height: 50px;
  font-size: 25px;
  width: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  margin: 0;
  cursor: pointer;
  border-top: 4px solid whitesmoke;
  background-color: black;
  color: #ffe600;
  font-weight: bold;
`;