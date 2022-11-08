import Header from "./components/Header"
import GameBody from "./components/GameBody"
import MainPage from "./components/MainPage"
import Footer from "./components/Footer";

import './App.css';
import './componentstyles/GameBody.css'

function App() {
  return (
    <div className="App">
      <Header />
      <GameBody />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
