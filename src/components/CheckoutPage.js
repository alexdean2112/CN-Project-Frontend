import Header from "./Header";
import Footer from "./Footer";
import Checkout from "./Checkout";
import { useEffect } from "react";
import { getCookie } from "../common";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ setter, user, basket, atb }) => {
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
        navigate("/checkout");
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
      <Checkout basket={basket} atb={atb} user={user} />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
