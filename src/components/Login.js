import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from './Header';
import { Footer } from "./Footer";
import { adminEndpoint } from "../utils/Constants";
import { useDispatch } from "react-redux";

function Login() {
    let dispatch = useDispatch();
    let url = `${adminEndpoint}login/`;
    let [emailid, setEmailId] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
    let navigate = useNavigate();

    let handleSubmit = (event) => {
        event.preventDefault();
        if (emailid.length == 0 || password.length == 0) {
            setError("Please write email or password")
        } else {
            let login = { emailid, password }
            axios.post(url, login, {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }).then(result => {
                console.log(result)
                if (result.data.typeOfUser === "admin") {
                    navigate("/admin")
                } else if (result.data.typeOfUser === "client") {
                    dispatch({ type: 'SET_EMAIL', payload: emailid });
                    navigate("/movies")
                } else {
                    setError(result)
                }
            }).catch(error => console.log(error));
        }
        setEmailId("");
        setPassword("");
    }
    return (
        <div class="container" style={{ display: "flex", justifyContent: "center" }}>
            <Header t />
            <div style={{ marginTop: 100 }}>
                <span style={{ "color": "red" }}>{error}</span>
                <h3>Login Page</h3>
                <form onSubmit={handleSubmit}>
                    <label>Email: </label>
                    <input type="emailid" name="emailid" style={{ marginLeft: 48 }} onChange={(event) => setEmailId(event.target.value)}
                        value={emailid}
                    /><br />
                    <span></span>
                    <label>Password: </label>
                    <input type="password" name="password" style={{ marginLeft: 20 }} onChange={(event) => setPassword(event.target.value)}
                        value={password} /><br /><br />

                    <input type="submit" style={{ marginLeft: 50 }} value="Login" />
                </form>
                <br />
            </div>
            <Footer />
        </div>
    )
}

export default Login;