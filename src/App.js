/* Comments are all required code for register/login + commented out checkout*/

import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import CheckoutPage from "./components/CheckoutPage";
import GamePage from "./components/GamePage";
import SearchPage from "./components/SearchPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  return (
    <Routes>
      <Route path="/" element={<LoginPage setter={setUser} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage user={user} />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;