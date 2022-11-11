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

  const addToBasket = (item) => {
    const existingCartItem = basket.find((cartItem) => cartItem.id === item.id);

    if (existingCartItem) {
      const newItems = basket.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: +cartItem.quantity + +item.quantity }
          : cartItem
      );

      setBasket(newItems);
    } else {
      setBasket([...basket, item]);
    }
  };
  
  const removeFromBasket = (item) => {
    const existingCartItem = basket.find((cartItem) => cartItem.id === item);

    if (existingCartItem) {
      const newItems = basket.map((cartItem) => {
        if (cartItem.id === item) {
          if (cartItem.quantity > 1) {
            return { ...cartItem, quantity: +cartItem.quantity - 1 };
          }
        } else {
          return cartItem;
        }
      });
      const filteredItems = newItems.filter((item) => (item ? item : null));
      setBasket(filteredItems);
    }
  };

  const emptyBasket = () => {
    setBasket([]);
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage setter={setUser} />} />
      <Route path="/home" element={<HomePage user={user} setter={setUser} />} />
      <Route path="/profile" element={<ProfilePage user={user} setter={setUser} />} />
      <Route path="/checkout" element={<CheckoutPage user={user} setter={setUser} basket={basket} />} />
      <Route path="/game" element={<GamePage user={user} setter={setUser} atb={addToBasket}/>} />
      <Route path="/search" element={<SearchPage user={user} setter={setUser} />} />
    </Routes>
  );
}

export default App;
