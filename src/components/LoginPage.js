import Header from "./Header";
import Footer from "./Footer";
import { Register, Login, CorrectInfo } from "./Register";
import { useState } from "react";
import styled from "styled-components";

const LoginPage = ({ setter, basket }) => {
  const [message, setMessage] = useState();
  return (
    <div>
      <Header basket={basket} />
      <SuperContainer>
        <InputContainer>
          <Register setter={setter} />
          <CorrectInfo message={message} />
          <Login setter={setter} setMessage={setMessage} />
        </InputContainer>
      </SuperContainer>
      <Footer />
    </div>
  );
};

export default LoginPage;

const SuperContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8vh;
  height: 59%;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  border: solid 5px white;
  box-shadow: 3px 3px black;
  background-color: rgb(0, 0, 0, 0.6);
  align-items: center;
  height: 60vh;
  width: 50vw;
  margin-bottom: 8vh;
  border-radius: 15px;
`;
