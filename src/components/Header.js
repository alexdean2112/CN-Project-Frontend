import "../componentstyles/Header.css"

const Header = () => {
    return (
        <div id = "header">
            <img id="banner" alt = "header" src ={require("../assets/banner.png")}></img>

            <div class="navbar">
                <div class="dropdown">
                    <button class="dropbtn">PLACEHOLDER</button>
                        <div class="dropdown-content">
                           <p>PLACEHOLDER</p>
                        </div>
                </div> 
                <div id="rightside">
                    <p id = "loggeduser">Welcome USER</p>
                    <div class="dropdown">
                    <img alt = "profile" id ="profile" src ={require("../assets/profile.png")} />
                        <div class="dropdown-content">
                           <p>PLACEHOLDER</p>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header;