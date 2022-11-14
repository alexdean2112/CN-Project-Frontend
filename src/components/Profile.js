import "../componentstyles/profile.css"
import { useState } from "react"
import { updateUser, deleteUser } from "../utils/userUtils"
import { getCookie } from "../common"
import { useNavigate } from "react-router-dom"

const Profile = ({ user, setter }) => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

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

    const submitHandler4 = async (event) => {
        event.preventDefault()
        const token = getCookie("jwt_token");
        const data = await deleteUser(user, token)
        console.log(data)
        document.cookie = "jwt_token=; path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        navigate("/");
        setter("");
    }

    return (
        <div className="profileContainer">
            <div className="imageContainer">
                <img src ={require("../assets/barrybee.png")} alt="placeholder" />
            </div>
            <div className="detailsContainer">
                <div className="infoContainer">
                    <h1>User Details</h1>
                    <p>Username: Placeholder</p>
                    <p>Email: Placeholder@email.com</p>
                    <p>Password: VerySecret</p>
                </div>
                <div className="formsContainer">
                    <form onSubmit={submitHandler1}>
                        <label> Update Username:
                            <br></br>
                            <input className="updateinput" onChange={(event) => setUsername(event.target.value)} onClick={(event) => (event.target.value = "")} />
                        </label>
                        <br></br>
                        <div>
                            <button onClick={submitHandler1} className="updatebutton" type='submit'>Update Username</button>
                        </div>
                    </form>
                </div>
                <div className="formsContainer">
                    <form onSubmit={submitHandler2}>
                        <label> Update email:
                            <br></br>
                            <input className="updateinput" onChange={(event) => setEmail(event.target.value)} onClick={(event) => (event.target.value = "")} />
                        </label>
                        <br></br>
                        <div>
                            <button onClick={submitHandler2} type='submit' className="updatebutton">Update Email</button>
                        </div>
                    </form>
                </div>
                <div className="formsContainer">
                    <form onSubmit={submitHandler3}>
                        <label> Update Password:
                            <br></br>
                            <input className="updateinput" onChange={(event) => setPassword(event.target.value)} onClick={(event) => (event.target.value = "")} />
                        </label>
                        <br></br>
                        <div >
                            <button onClick={submitHandler3} className="updatebutton" type='submit'>Update Password</button>
                        </div>
                    </form>
                </div>
                <div className="formsContainer">
                    <form onSubmit={submitHandler4}>
                        <div className="buttonDiv">
                            <button onClick={submitHandler4} className="updatebutton" type='submit'>Delete User</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="orderContainer">
                <h1>Orders</h1>
                <p>Insert Orders here</p>
            </div>
        </div>
    )
}

export default Profile;
