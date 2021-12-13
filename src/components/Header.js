import React from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";

export default function Header() {
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
            {/* <a href='/complete'>
            <Button className="bp4-minimal" icon="saved" text="Completed" />
            </a> */}
            
         
        </Navbar.Group>
    </Navbar>
    </>
    );
  }

