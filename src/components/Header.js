import "../componentstyles/Header.css";
import { Link } from "react-router-dom";
import Basket from "./Basket";
import { useNavigate } from "react-router-dom";

const Header = ({ setter, user, basket }) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    document.cookie =
      "jwt_token=; path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    navigate("/");
    setter("");
  };

  return (
    <div id="header">
      <Link to="/home">
        <img
          id="banner"
          alt="header"
          src={require("../assets/banner.png")}
        ></img>
      </Link>

      <div className="navbar">
        <Basket basket={basket} />
        <div className="dropdown">
          <button className="dropbtn">Most Popular</button>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Latest Games</button>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Special Offers</button>
        </div>
        <div id="rightside">
          {user && <p id="loggeduser">{`Welcome ${user}`}</p>}
          <div className="dropdown">
            <img alt="profile" id="profile" src={require("../assets/profile.png")} />
            <div className="dropdown-content">
              <Link to="/profile">
                <button>Edit Profile</button>
              </Link>
              <button onClick={logoutHandler}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
