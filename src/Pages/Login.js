import React, { Component } from "react";
import styles from "./Login.module.css";
import Form from "../Components/index";
import man from "../images/man.png";
import logo from "../images/logo.png";
import API from "../utils/API";



class Login extends Component {
    state = {
        userName: "",
        password: ""
    }

    onChange = (name, value) => {
        console.log(name)
        console.log("biitch")
        this.setState({ [name]: value });
    }

    login = () => {
        console.log("What is up dude")
        API.login(this.state.userName, this.state.password);
    }

    clear = () => {
        this.setState({ userName: "", password: "" });
    }

    render = () => {
        return (
            <div className={styles.loginMain}>
                <div className={styles.leftHalf}>
                    <img src={man} alt="Man"></img>
                </div>
                <div className={styles.rightHalf}>
                    <div className={styles.inputBlock}>
                        <img src={logo} alt="Logo"></img>
                        <Form.TextInput width="80" label="" name="userName" value={this.state.userName} placeholder="Username . . ." onChange={this.onChange} />
                        <Form.Password width="80" name="password" value={this.state.password} placeholder="Password . . ." onChange={this.onChange} />
                        <div className={styles.buttonRow}>
                            <Form.Button label="Clear" width="100" onClick={this.clear} />
                            <Form.Button label="Login" width="100" onClick={this.login} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}



export default Login; 