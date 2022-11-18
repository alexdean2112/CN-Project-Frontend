import "../componentstyles/profile.css";
import { useEffect, useState } from "react";
import { updateUser, deleteUser } from "../utils/userUtils";
import { getCookie } from "../common";
import { useNavigate } from "react-router-dom";
import { readOrders } from "../utils/orderUtils";

const Profile = ({ user, setter }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const getData = async (user) => {
    const data = await readOrders(user);
    setOrders(data);
  };

  useEffect(() => {
    getData(user);
  }, [user]);

  const submitHandler1 = async (event) => {
    event.preventDefault();
    const token = getCookie("jwt_token");
    const data = await updateUser(user, "username", username, token);
    setter(username);
    console.log(data);
  };

  const submitHandler2 = async (event) => {
    event.preventDefault();
    const token = getCookie("jwt_token");
    const data = await updateUser(user, "email", email, token);
    console.log(data);
  };

  const submitHandler3 = async (event) => {
    event.preventDefault();
    const token = getCookie("jwt_token");
    const data = await updateUser(user, "password", password, token);
    console.log(data);
  };

  const submitHandler4 = async (event) => {
    event.preventDefault();
    const token = getCookie("jwt_token");
    const data = await deleteUser(user, token);
    console.log(data);
    document.cookie =
      "jwt_token=; path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    navigate("/");
    setter("");
  };

  return (
    <div className="profileContainer">
      <div className="detailsContainer">
        <div className="imageContainer">
          <img src={require("../assets/profilebanner.png")} alt="placeholder" />
        </div>
        <div className="test">
          <div className="user_title">
            <h1 className="user_h1">User Details</h1>
          </div>
          <div className="user_username">
            <p>Username: {user}</p>
          </div>
        </div>
      </div>
      <div className="orderContainer">
          <h1 className="orderTitle">Orders</h1>
          {orders?.length > 0 ? (
            orders.map((item, index) => (
              <p>
                {item.itemName}, £{item.itemPrice}.00
              </p>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      <div className="formsOuter">
        <div className="updateTitle">
          <h1 className="update_info">Update Information</h1>
        </div>
        <div className="formMiddle">
          <div className="formsContainer">
            <form className="profileForm" onSubmit={submitHandler1}>
              <label className="profile_label">
                <br></br>
                <input
                  className="updateinput"
                  placeholder="Username ..."
                  onChange={(event) => setUsername(event.target.value)}
                  onClick={(event) => (event.target.value = "")}
                />
              </label>
              <br></br>
              <div className="buttonDiv">
                <button
                  onClick={submitHandler1}
                  className="updatebutton"
                  type="submit"
                >
                  Update<br></br>Username
                </button>
              </div>
            </form>
          </div>
          <div className="formsContainer">
            <form className="profileForm" onSubmit={submitHandler2}>
              <label className="profile_label">
                <br></br>
                <input
                  className="updateinput"
                  placeholder="Email ..."
                  onChange={(event) => setEmail(event.target.value)}
                  onClick={(event) => (event.target.value = "")}
                />
              </label>
              <br></br>
              <div className="buttonDiv">
                <button
                  onClick={submitHandler2}
                  type="submit"
                  className="updatebutton"
                >
                  
                  Update<br></br>Email

                </button>
              </div>
            </form>
          </div>
          <div className="formsContainer">
            <form className="profileForm" onSubmit={submitHandler3}>
              <label className="profile_label">
                <br></br>
                <input
                  type="password"
                  className="updateinput"
                  placeholder="Password ..."
                  onChange={(event) => setPassword(event.target.value)}
                  onClick={(event) => (event.target.value = "")}
                />
              </label>
              <br></br>
              <div className="buttonDiv">
                <button
                  onClick={submitHandler3}
                  className="updatebutton"
                  type="submit"
                >

                  Update<br></br>Password

                </button>
              </div>
            </form>
          </div>
          <div className="formsContainer">

            <form className="profileForm" onSubmit={submitHandler4}>
              <div className="buttonDiv">
                <button
                  onClick={submitHandler4}
                  className="updatebutton deletebutton"
                  type="submit"
                >
                  Delete User

                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
