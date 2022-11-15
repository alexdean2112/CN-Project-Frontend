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
          <Link to ="/toprated"><button className="dropbtn">Top Rated</button></Link>
        </div>
        <div className="dropdown">
        <Link to ="/latest"><button className="dropbtn">Latest Games</button></Link>
        </div>
        <div className="dropdown">
        <Link to ="/search"><button className="dropbtn">Search</button></Link>
        </div>
        <div id="rightside">
          <div>
            {user && <p id="loggeduser">{`Welcome ${user}`}</p>}
          </div>
          <div className="dropdown">
            <img alt="profile" id="profile" src={require("../assets/profile.png")} />
            <div className="dropdown-content">
              <div className="dropdownEdit">
                <div>
                <Link to="/profile">
                  <button>Edit Profile</button>
                </Link></div>
              <div>
                <button onClick={logoutHandler}>Logout</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
