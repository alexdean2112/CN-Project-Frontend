import Header from "./Header";
import Footer from "./Footer";
import Mainpage from "./Mainpage";
import { useEffect } from "react";
import { getCookie } from "../common";
import { useNavigate } from "react-router-dom";

const HomePage = ({ setter, user }) => {

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
      <Header user={user} setter={setter} />
      <Mainpage />
      <Footer />
    </div>
  );
};

export default HomePage;
