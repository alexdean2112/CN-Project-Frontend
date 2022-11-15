import Header from "./Header";
import Footer from "./Footer";
import SearchBody from "./SearchBody";
import { useEffect } from "react";
import { getCookie } from "../common";
import { useNavigate } from "react-router-dom";

const SearchPage = ({ setter, user, basket }) => {
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
        navigate("/search");
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
      <SearchBody />
      <Footer />
    </div>
  );
};

export default SearchPage;
