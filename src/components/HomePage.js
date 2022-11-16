import Header from "./Header";
import Footer from "./Footer";
import Mainpage from "./Mainpage";
import { useEffect } from "react";
import { getCookie } from "../common";
import { useNavigate } from "react-router-dom";

const HomePage = ({ setter, user, passedGameData, setPassedGameData, basket }) => {

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
        navigate("/home");
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
      <Header user={user} setter={setter} basket = {basket} />
      <Mainpage passedGameData={passedGameData} setPassedGameData={setPassedGameData}/>
      <Footer />
    </div>
  );
};

export default HomePage;