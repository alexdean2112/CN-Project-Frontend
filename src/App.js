import Header from "./components/Header";
import GameBody from "./components/GameBody";
import Mainpage from "./components/Mainpage";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import "./App.css";
import "./componentstyles/GameBody.css";

function App() {
  return (
    <div className="App">
      <Header />
      <GameBody />
      <Mainpage />
      <Basket />
      <Footer />
    </div>
  );
}

export default App;
