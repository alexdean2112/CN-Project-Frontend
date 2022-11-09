import Header from "./components/Header";
import GameBody from "./components/GameBody";
import Mainpage from "./components/Mainpage";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import "./App.css";
import "./componentstyles/GameBody.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Header />
      <Basket show={show} />
      <button id="StyledButton" onClick={() => setShow(!show)}>
        Show/Hide Cart
      </button>
      <GameBody />
      <Mainpage />
      <Footer />
    </div>
  );
}

export default App;
