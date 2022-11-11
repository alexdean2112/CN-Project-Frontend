import Header from "./Header";
import Footer from "./Footer";
import { Register, Login } from "./Register";

const LoginPage = ({ setter, basket }) => {
  return (
    <div>
      <Header basket={basket} />
      <Register setter={setter} />
      <Login setter={setter} />
      <Footer />
    </div>
  );
};

export default LoginPage;
