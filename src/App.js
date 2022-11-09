import Header from "./components/Header";
import GameBody from "./components/GameBody";
import Mainpage from "./components/Mainpage";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import "./App.css";
import "./componentstyles/GameBody.css";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Header />
      <Basket show={show} />
      <StyledButton onClick={() => setShow(!show)}>Show/Hide Cart</StyledButton>
      <GameBody />
      <Mainpage />
      <Footer />
    </div>
  );
}

export default App;

const StyledButton = styled.button`
  border: none;
  height: 50px;
  width: 100px;
  background-color: tan;
  color: white;
  border-radius: 5px;
  margin: 10px;
  margin-right: 15px;
  cursor: pointer;
`;
