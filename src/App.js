import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import CheckoutPage from "./components/CheckoutPage";
import GamePage from "./components/GamePage";
import SearchPage from "./components/SearchPage";
import { useState, useEffect } from "react";
import { getCookie } from "./common";
import { findUser } from "./utils/userUtils";

function App() {
  const [user, setUser] = useState();
  const [basket, setBasket] = useState([]);
  const [passedGameData, setPassedGameData] = useState([]);

  useEffect(() => {
    let cookie = getCookie("jwt_token");
    if (cookie !== false) {
      loginWithToken(cookie);
    }
  }, []);

  const loginWithToken = async (cookie) => {
    const user = await findUser(cookie);
    setUser(user);
  };



  return (
    <Routes>
      <Route path="/" element={<LoginPage setter={setUser} basket={basket} />} />
      <Route path="/home" element={<HomePage user={user} setter={setUser} basket={basket} passedGameData={passedGameData} setPassedGameData={setPassedGameData} />} />
      <Route path="/profile" element={<ProfilePage user={user} setter={setUser} basket={basket} />} />
      <Route path="/game" element={<GamePage user={user} setter={setUser} atb={setBasket} basket={basket} passedGameData={passedGameData} />} />
      <Route path="/checkout" element={<CheckoutPage user={user} setter={setUser} basket={basket} atb={setBasket} />} />
      <Route path="/search" element={<SearchPage user={user} setter={setUser} basket={basket} />} />
    </Routes>
  );
}

export default App;