/* Comments are all required code for register/login*/

// import {Register, Login} from "./components/Register";
// import Header from "./components/Header";
// import GameBody from "./components/GameBody";
// import Mainpage from "./components/Mainpage";
// import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import "./App.css";
import "./componentstyles/GameBody.css";
import { useState } from "react";

function App() {
  // const [user, setUser] = useState();
  return (
    <div className="App">
      <Checkout />
      {/* <Register setter={setUser} />
      <Login setter={setUser} /> */}
      {/* <Header />
      <GameBody />
      <Mainpage />
      <Footer /> */}
    </div>
  );
}

export default App;
