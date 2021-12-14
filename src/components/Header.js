import React from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { LoginContext } from "../context/settings/loginContext";
import { useContext} from 'react';
export default function Header() {
    const context = useContext(LoginContext)
    return (
        <>
        <Navbar className="header">
        <br></br>
        <Navbar.Group top-margin={10 }>
            <Navbar.Heading ><h2>To-Do List App</h2></Navbar.Heading>
            <Navbar.Divider />
            <a href="/todo-app">
            <Button className="bp4-minimal" icon="home" text="Home" />
            </a>
            <a href='/settings'>
            <Button className="bp4-minimal" icon="settings" text="Settings" />
            </a>
            <Button onClick={context.logoutFunction} className="bp4-minimal" icon="log-out" text="LogOut"/>       
        </Navbar.Group>
    </Navbar>
    </>
    );
  }

