import "../componentstyles/Header.css"

const Header = () => {
    return (
        <div id = "header">
            <img id="banner" alt = "header" src ={require("../assets/banner.png")}></img>
            <div className="navbar">
                <div className="dropdown">
                    <button className="dropbtn">PLACEHOLDER</button>
                        <div className="dropdown-content">
                           <p>PLACEHOLDER</p>
                        </div>
                </div> 
                <div id="rightside">
                    <p id = "loggeduser">Welcome USER</p>
                    <div className="dropdown">
                    <img alt = "profile" id ="profile" src ={require("../assets/profile.png")} />
                        <div className="dropdown-content">
                         <p>PLACEHOLDER</p>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

