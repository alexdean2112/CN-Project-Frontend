import "../componentstyles/profile.css"
import { useState } from "react"
import { updateUser } from "../utils/userUtils"
import { getCookie } from "../common"

const Profile = ({ user, setter }) => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler1 = async (event) => {
        event.preventDefault()
        const token = getCookie("jwt_token");
        const data = await updateUser(user, "username", username, token)
        setter(username)
        console.log(data)
    }

    const submitHandler2 = async (event) => {
        event.preventDefault()
        const token = getCookie("jwt_token");
        const data = await updateUser(user, "email", email, token);
        console.log(data)
    }

    const submitHandler3 = async (event) => {
        event.preventDefault()
        const token = getCookie("jwt_token");
        const data = await updateUser(user, "password", password, token)
        console.log(data)
    }

    return (
        <div className="profileContainer">
            <div className="detailsContainer">
                <div className="imageContainer">
                    <img src={require("../assets/barrybee.png")} alt="placeholder" />
                </div>
                <div className="test">
                    <h1>User Details</h1>
                    <p>Username: Placeholder</p>
                    <p>Email: Placeholder@email.com</p>
                    <p>Password: VerySecret</p>
                </div>
                <div className="orderContainer">
                    <h1>Orders</h1>
                    <p>Insert Orders here</p>
                </div>
            </div>
            
            <div className="formsOuter">
                <div className="updateTitle">
                    <h1>Update Information</h1>
                </div>
                <div className="formMiddle">
                <div className="formsContainer">
                    <form onSubmit={submitHandler1}>
                        <label>
                            <br></br>
                            <input className="updateinput" placeholder="Username ..." onChange={(event) => setUsername(event.target.value)} onClick={(event) => (event.target.value = "")} />
                        </label>
                        <br></br>
                        <div className="buttonDiv">
                            <button onClick={submitHandler1} className="updatebutton" type='submit'>Update Username</button>
                        </div>
                    </form>
                </div>
                <div className="formsContainer">
                    <form className="profileForm" onSubmit={submitHandler2}>
                        <label>
                            <br></br>
                            <input className="updateinput" placeholder="Email ..." onChange={(event) => setEmail(event.target.value)} onClick={(event) => (event.target.value = "")} />
                        </label>
                        <br></br>
                        <div className="buttonDiv">
                            <button onClick={submitHandler2} type='submit' className="updatebutton">Update Email</button>
                        </div>
                    </form>
                </div>
                <div className="formsContainer">
                    <form onSubmit={submitHandler3}>
                        <label>
                            <br></br>
                            <input className="updateinput" placeholder="Password ..." onChange={(event) => setPassword(event.target.value)} onClick={(event) => (event.target.value = "")} />
                        </label>
                        <br></br>
                        <div className="buttonDiv">
                            <button onClick={submitHandler3} className="updatebutton" type='submit'>Update Password</button>
                        </div>
                    </form>
                </div>
                <div className="formsContainer">
                    <form onSubmit={submitHandler3}>
                        <label>
                            <br></br>
                            <input className="updateinput" placeholder="Delete ..." onChange={(event) => setPassword(event.target.value)} onClick={(event) => (event.target.value = "")} />
                        </label>
                        <br></br>
                        <div className="buttonDiv">
                            <button className="updatebutton" type='submit'>Delete User</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
