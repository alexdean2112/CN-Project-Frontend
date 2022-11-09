import "../componentstyles/profile.css"
import { useState } from "react"
import { updateUser } from "../utils/userUtils"

const Profile = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler1 = async (event) => {
        event.preventDefault()
        const data = await updateUser(username)
        console.log(data)
    }

    const submitHandler2 = async (event) => {
        event.preventDefault()
        const data = await updateUser(username, email)
        console.log(data)
    }

    const submitHandler3 = async (event) => {
        event.preventDefault()
        const data = await updateUser(username, password)
        console.log(data)
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
                        <div >
                            <button className="updatebutton" type='submit'>Update Password</button>
                        </div>
                    </form>
                </div>
                <div>
                    <form onSubmit={submitHandler2}>
                        <label> Update email:
                            <br></br>
                            <input className="updateinput" onChange={(event) => setEmail(event.target.value)} onClick={(event) => (event.target.value = "")} />
                        </label>
                        <br></br>
                        <div>
                            <button type='submit' className="updatebutton">Update Email</button>
                        </div>
                    </form>
                </div>
                <div>
                    <form onSubmit={submitHandler3}>
                        <label> Update Password:
                            <br></br>
                            <input className="updateinput" onChange={(event) => setPassword(event.target.value)} onClick={(event) => (event.target.value = "")} />
                        </label>
                        <br></br>
                        <div >
                            <button className="updatebutton" type='submit'>Update Password</button>
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
