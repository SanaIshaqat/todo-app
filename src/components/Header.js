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
            <Button className="bp4-minimal" icon="list" text="Home" />
        </Navbar.Group>
    </Navbar>
    </>
    );
  }

