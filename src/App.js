import Header from "./components/Header"
import GameBody from "./components/GameBody"
import Mainpage from "./components/Mainpage"
import Footer from "./components/Footer";
import SearchBody from "./components/SearchBody";
import './App.css';
import './componentstyles/GameBody.css'

function App() {
  return (
    <div className="App">
      <Header />
      <GameBody />
      <SearchBody />
      <Mainpage />
      <Footer />
    </div>
  );
}

export default App;
