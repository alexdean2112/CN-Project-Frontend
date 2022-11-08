import Header from "./components/Header"
import GameBody from "./components/GameBody"
import MainPage from "./components/MainPage"

import './App.css';
import './componentstyles/GameBody.css'

function App() {
  return (
    <div className="App">
      <Header />
      <GameBody />
      <MainPage />
    </div>
  );
}

export default App;
