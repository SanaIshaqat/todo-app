import React from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { LoginContext } from "../context/settings/loginContext";
import { useContext} from 'react';
import { Link } from 'react-router-dom';
import Login from './login';
export default function Header() {
    const context = useContext(LoginContext)
    return (
        <>
        <Navbar className="header">
        <br></br>
        <Navbar.Group top-margin={10 } align={Alignment.LEFT}>
            <Navbar.Heading ><h2>To-Do List App</h2></Navbar.Heading>
            <Navbar.Divider />
            <Link to='/todo-app'>
            <Button className="bp4-minimal" icon="home" text="Home" />
            </Link>
            <Link to='/settings'>

            <Button className="bp4-minimal" icon="settings" text="Settings" />
            </Link>
            {context.loggedin && <Login></Login>}
            {/* <Button onClick={context.handleLogout} className="bp4-minimal" icon="log-out" text="LogOut"/>        */}
        </Navbar.Group>
    </Navbar>
    </>
    );
  }

