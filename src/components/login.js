import React from "react";
import { LoginContext } from "../context/settings/loginContext";
import { When } from 'react-if';
import { Navbar, Button, Alignment } from "@blueprintjs/core";
export default class login extends React.Component {

    static contextType = LoginContext;
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    // handleUsername = (e) => {
    //     this.setState({ username: e.target.value })
    // }

    // handlePassword = (e) => {
    //     this.setState({ password: e.target.value })
    // }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.context.loginFunction(this.state.username, this.state.password);
    }
    render() {
        return (
            <>
                <When condition={!this.context.LoggedIn}>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="username" type='text' name='username' onChange={this.handleChange} />
                        <input placeholder="password" type='password' name='password' onChange={this.handleChange} />
                        <Button type="submit" className="bp4-minimal" icon="log-in" text="LogIn"/>                 
                    </form>
                </When>
                <When condition={this.context.LoggedIn}>
                    <div>
                        {this.context.user.userName}
                    </div>
                    {/* <Button onClick={this.context.logoutFunction}className="bp4-minimal" icon="log-out" text="LogOut"/> */}
                    {/* <button onClick={this.context.logoutFunction}>logout</button> */}
                </When>
            </>
        )
    }
}
