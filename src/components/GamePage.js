import Header from "./Header";
import Footer from "./Footer";
import GameBody from "./GameBody";
import { useEffect } from "react";
import { writeCookie, getCookie } from "../common";
import { useNavigate } from "react-router-dom";

const GamePage = ({ setter, user, atb, basket }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://localhost:5001/loginUser", {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      const data = await response.json();
      if (data.token) {
        writeCookie("jwt_token", data.token, 7);
        navigate("/game");
      }
    };
    const token = getCookie("jwt_token");
    if (token) {
      getUser();
    } else {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div>
      <Header user={user} setter={setter} basket={basket} />
      <GameBody atb={atb} basket={basket} />
      <Footer />
    </div>
  );
};

export default GamePage;
