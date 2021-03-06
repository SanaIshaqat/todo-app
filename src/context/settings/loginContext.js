import React, { useEffect, useState } from "react";
import superagent from 'superagent';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
export const LoginContext = React.createContext();

export default function LoginProvider(props) {

    const API = 'https://small-project-401.herokuapp.com';
    const [LoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({ email: "", capabilities: [] });

    user.capabilities = ['read', 'create', 'update', 'delete'];

    const loginFunction = async (username, password) => {
        try {
            const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);

            validateMyToken(response.body.token);
        } catch (err) { }

    }
    const logoutFunction = () => {
        setLoggedIn(false);
        setUser({});
        cookie.remove('token');
    }

    const validateMyToken = (token) => {
        if (token) {
            const user = jwt.decode(token);
            console.log('user >>>', user);
            setLoggedIn(true);
            setUser(user);
            cookie.save('token', token);
        } else {
            setLoggedIn(false);
            setUser({});
        }
    }
    useEffect(() => {
        const myTokenCookie = cookie.load('token');
        validateMyToken(myTokenCookie);
    }, []);

    const can = (capability) => {
        return user?.capabilities?.includes(capability);
    }
    const state = {
        LoggedIn: LoggedIn,
        loginFunction: loginFunction,
        logoutFunction: logoutFunction,
        user: user,
        can: can
    }
    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}
