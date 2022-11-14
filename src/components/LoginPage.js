import Header from "./Header";
import Footer from "./Footer";
import { Register, Login } from "./Register";
import styled from "styled-components";

const LoginPage = ({ setter, basket }) => {
  return (
    <div>
      <Header basket={basket} />
      <SuperContainer>
        <InputContainer>
          <Register setter={setter} />
          <Login setter={setter} />
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
  height: 59vh;
  width: 100vw;
`
const InputContainer = styled.div`
  display: flex;
  border: solid 5px black;
  background-color: rgb(0, 0, 0, 0.6);
  align-item: center;
  height: 50%;
  width: 50%;
`
