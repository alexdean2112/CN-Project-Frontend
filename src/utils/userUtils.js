import { writeCookie } from "../common";

export const createUser = async (username, email, password, setter) => {
  try {
    const response = await fetch("http://localhost:5001/createUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    setter({ username: data.username, email: data.email });
    writeCookie("jwt_token", data.token, 7);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const readUsers = async () => {
  try {
    const response = await fetch("http://localhost:5001/readUsers", {
      method: "GET",
      headers: {
        "Content-Type":
          "application/json" /* Authorization : Cookies go here */,
      },
    });
    const data = await response.json();
    console.log(data.users);
    const usernames = data.users.map((users) => users.username);
    return usernames;
  } catch (error) {
    console.log(error);
  }
};

export const findUser = async () => {
  try {
    const token = getCookie("jwt_token");
    const response = await fetch("http://localhost:5001/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });
    const data = await response.json();
    return data.username;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (username, password) => {
  try {
    const response = await fetch("http://localhost:5001/updateUser", {
      method: "PUT",
      headers: {
        "Content-Type":
          "application/json" /* Authorization : Cookies go here */,
      },
      body: JSON.stringify({
        filter: {
          // Filter Goes here
        },
        update: {
          // Update goes here
        },
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (username, email, password) => {
  try {
    const response = await fetch("http://localhost:5001/deleteUser", {
      method: "DELETE",
      headers: {
        "Content-Type":
          "application/json" /* Authorization : Cookies go here */,
      },
      body: JSON.stringify({
        username: username,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, email, password, setter) => {
  try {
    const token = getCookie("jwt_token");
    const response = await fetch("http://localhost:5001/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    setter({ username: data.username, email: data.email });
    writeCookie("jwt_token", data.token, 7);
    return data;
  } catch (error) {
    console.log(error);
  }
};
