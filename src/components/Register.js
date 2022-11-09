import { useState } from "react";
import { createUser, loginUser } from "../utils/userUtils";

export const Register = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    await createUser(username, email, password, setter);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Username:
        <input onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label>
        Email:
        <input onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label>
        Password:
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

  const submitHandler = async (event) => {
    event.preventDefault();
    await loginUser(username, email, password, setter);
    console.log(`Logged in as ${username}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Username:
        <input onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br></br>

      <label>
        Email:
        <input onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br></br>

      <label>
        Password:
        <input onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br></br>
      <button type="submit">Login</button>
    </form>
  );
};
