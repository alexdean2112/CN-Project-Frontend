import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import { useEffect } from "react";
import { getCookie } from "../common";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ setter, user, basket }) => {
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
        navigate("/profile");
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
      <Profile user={user} setter={setter} />
      <Footer />
    </div>
  );
};

export default ProfilePage;
