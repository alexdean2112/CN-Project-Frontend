import '../componentstyles/MainPage.css';
import { Link } from 'react-router-dom';

const Mainpage = () => {
    return (
        <div>
            <div className="carousalContainer">
                <div className="carousal">
                    <h1>Carousal</h1>
                </div>
            </div>
            <div className="categories">
                <div className="category">
                    <Link to="/search"><h2>Most Popular</h2> </Link>
                </div>
                <div className="category">
                <Link to="/search"><h2>Latest Games</h2></Link>
                </div>
                <div className="category">
                <Link to="/search"><h2>Special Offers</h2></Link>
                </div>
            </div>
            <div className="randomGames">
                <div className="randomGame">
                    <h3>Random Game</h3>
                </div>
                <div className="randomGame">
                    <h3>Random Game</h3>
                </div>
                <div className="randomGame">
                    <h3>Random Game</h3>
                </div>
            </div>
            <div className="randomGames">
                <div className="randomGame">
                    <h3>Random Game</h3>
                </div>
                <div className="randomGame">
                    <h3>Random Game</h3>
                </div>
                <div className="randomGame">
                    <h3>Random Game</h3>
                </div>
            </div>
        </div>
    )
}

export default Mainpage;

