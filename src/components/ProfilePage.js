import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import { useEffect } from "react";
import { writeCookie, getCookie } from "../common";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ setter, user }) => {
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
        navigate("/profile");
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
      <Header user={user} setter={setter} />
      <Profile />
      <Footer />
    </div>
  );
};

export default ProfilePage;
