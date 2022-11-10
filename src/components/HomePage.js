import Header from "./Header"
import Footer from "./Footer"
import Mainpage from "./Mainpage"
import Basket from "./Basket"


const HomePage = () => {
    return (
        <div>
            <Header />
            <Basket />
            <Mainpage />
            <Footer />
        </div>
    )
}

export default HomePage