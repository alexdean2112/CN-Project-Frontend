import Header from "./Header";
import Footer from "./Footer";
import LatestGame from "./LatestGames";
import { useEffect } from "react";
import { getCookie } from "../common";
import { useNavigate } from "react-router-dom";

const LatestGamesPage = ({ setter, user, passedGameData, setPassedGameData }) => {

  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${process.env.REACT_APP_REST_API}loginUser`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      const data = await response.json();
      if (data.token) {
        setter(data.username);
        navigate("/latest");
      }
    };
    const token = getCookie("jwt_token");
    if (token) {
      getUser();
    } else {
      navigate("/");
    }
  }, [navigate, setter]);

  return (
    <div>
      <Header user={user} setter={setter} />
      <LatestGame passedGameData={passedGameData} setPassedGameData={setPassedGameData}/>
      <Footer />
    </div>
  );
};

export default LatestGamesPage;