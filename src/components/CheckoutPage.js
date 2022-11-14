import Header from "./Header";
import Footer from "./Footer";
import Checkout from "./Checkout";
import { useEffect } from "react";
import { writeCookie, getCookie } from "../common";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ setter, user, basket, atb }) => {

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
        navigate("/checkout");
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
      <Checkout basket={basket} atb={atb} />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
