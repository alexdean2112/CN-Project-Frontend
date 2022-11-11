import '../componentstyles/MainPage.css';
import { useNavigate } from 'react-router-dom';

const Mainpage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="carousalContainer">
                <div className="carousal">
                    <h1>Carousal</h1>
                </div>
            </div>
            <div className="categories">
                <div onClick={() => {navigate("/search")}} className="category">
                    <h2>Most Popular</h2>
                </div>
                <div onClick={() => {navigate("/search")}} className="category">
                <h2>Latest Games</h2>
                </div>
                <div onClick={() => {navigate("/search")}} className="category">
                <h2>Special Offers</h2>
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

