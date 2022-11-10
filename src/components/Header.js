import "../componentstyles/Header.css"

const Header = () => {
    return (
        <div id = "header">
            <img id="banner" alt = "header" src ={require("../assets/banner.png")}></img>

            <div className="navbar">
                <div className="dropdown">
                    <button className="dropbtn">Most Popular</button>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Latest Games</button>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Special Offers</button>
                </div>
                <div id="rightside">
                    <p id = "loggeduser">Welcome USER</p>
                    <div className="dropdown">
                        <img alt = "profile" id ="profile" src ={require("../assets/profile.png")} />
                            <div className="dropdown-content">
                                <button>Edit Profile</button>
                                <button>Logout</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;


