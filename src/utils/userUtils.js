import { writeCookie, getCookie } from "../common";

export const createUser = async (username, email, password, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}createUser`, {
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

export const readUsers = async (token) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}readUsers`, {
      method: "GET",
      headers: {
        "Content-Type":
          "application/json",
          "Authorization": `Bearer ${token}`,
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

export const findUser = async (token) => {
  try {
    const token = getCookie("jwt_token");
    const response = await fetch(`${process.env.REACT_APP_REST_API}loginUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data.username;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (user, key, value, token) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}updateUser`, {
      method: "PUT",
      headers: {
        "Content-Type":
          "application/json",
          "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        filter: {
          "username": user
        },
        update: {
          [key]: value
        },
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (user, token) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}deleteUser`, {
      method: "DELETE",
      headers: {
        "Content-Type":
          "application/json",
          "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        "username": user,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, email, password, setter, token) => {
  try {
    const token = getCookie("jwt_token");
    const response = await fetch(`${process.env.REACT_APP_REST_API}loginUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
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
