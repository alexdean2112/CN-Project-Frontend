import Header from "./Header";
import Footer from "./Footer";
import TopRated from "./TopRated";
import { useEffect } from "react";
import { getCookie } from "../common";
import { useNavigate } from "react-router-dom";

const TopRatedPage = ({ setter, user, passedGameData, setPassedGameData, basket }) => {

  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://localhost:5001/loginUser", {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      const data = await response.json();
      if (data.token) {
        setter(data.username);
        navigate("/toprated");
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
      <Header user={user} setter={setter} basket={basket} />
      <TopRated passedGameData={passedGameData} setPassedGameData={setPassedGameData}/>
      <Footer />
    </div>
  );
};

export default TopRatedPage;