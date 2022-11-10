import Header from "./Header";
import Footer from "./Footer";
import { Register, Login } from "./Register";

const LoginPage = ({ setter }) => {
  return (
    <div>
      <Header />
      <Register setter={setter} />
      <Login setter={setter} />
      <Footer />
    </div>
  );
};

export default LoginPage;
