import "../componentstyles/Header.css"

const Header = () => {
    return (
        <div id = "header">
            <img alt = "header" src ={require("../assets/banner.png")}></img>

            <div class="navbar">
                <a href="index.html">Home</a>
                <div class="dropdown">
                    <button class="dropbtn">PLACEHOLDER</button>
                        <div class="dropdown-content">
                           <p>PLACEHOLDER</p>
                        </div>
                </div> 
            </div>
        </div>
    )
}

export default Header;