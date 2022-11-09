/* Comments are all required code for register/login + commented out checkout*/

// import {Register, Login} from "./components/Register";
import Header from "./components/Header";
import GameBody from "./components/GameBody";
import Mainpage from "./components/Mainpage";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
// import Checkout from "./components/Checkout";
import "./App.css";

function App() {
   //const [user, setUser] = useState();

  return (
    <div className="App">
      {/* <Register setter={setUser} />
      <Login setter={setUser} /> */}
      <Header />
      <Basket show={show} />
      <button id="StyledButton" onClick={() => setShow(!show)}>
        Show/Hide Cart
      </button>
      <GameBody />
      <Mainpage />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
