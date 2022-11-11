import "../componentstyles/Header.css";
import { useNavigate } from "react-router-dom";
import { Basket } from "./Basket"

const Header = ({ setter, user }) => {
    
  const navigate = useNavigate();

  const logoutHandler = () => {
    document.cookie = "jwt_token=; path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    navigate("/");
    setter("");
  }; 
    
    return (
        <div id = "header">
            <img onClick={() => {navigate("/home")}} id="banner" alt="header" src={require("../assets/banner.png")}></img>
                
            <div className="navbar">
                <Basket />
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
                    {user && <p id="loggeduser">{`Welcome ${user.username}`}</p>}
            <div className="dropdown-content">
              <button onClick={() => {navigate("/profile")}}>Edit Profile</button>
              <button onClick={logoutHandler}>Logout</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
