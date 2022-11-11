import { useState, useEffect } from "react";
import { createUser, loginUser } from "../utils/userUtils";
import "../componentstyles/Register.css";
import { useNavigate } from "react-router-dom";
import { getCookie, writeCookie } from "../common";

export const Register = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
        navigate("/home");
      }
    };
    const token = getCookie("jwt_token");
    if (token) {
      getUser();
    } else {
      navigate("/");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await createUser(username, email, password, setter);
    if (data.token) {
      navigate("/home");
    } else {
      console.log("User details knackered.");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Username
        <input onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label>
        Email
        <input onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label>
        Password
        <input onChange={(e) => setPassword(e.target.value)} />
      </label>

      <button type="submit">Register account</button>
    </form>
  );
};

export const Login = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = await loginUser(username, email, password, setter);
    if (data.token) {
      navigate("/home");
    } else {
      console.log("User details knackered.");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <br />
      <label>
        Username
        <input onChange={(event) => setUsername(event.target.value)} />
      </label>

      <label>
        Email
        <input onChange={(event) => setEmail(event.target.value)} />
      </label>

      <label>
        Password
        <input onChange={(event) => setPassword(event.target.value)} />
      </label>

      <button type="submit">Login</button>
    </form>
  );
};
