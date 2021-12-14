import React from 'react';
import ToDo from './components/todo';
import SettingsContext from './context/settings/settings';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './context/settings/Form';
import Header from './components/Header';
import Footer from './components/Footer';
import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Completecard from './components/Completed';
import LoginProvider from "./context/settings/loginContext";
import Login from './components/login';
import Auth from './components/auth';
import { If, Else, Then } from "react-if";

function App() {
  return (
    <>
      <LoginProvider>
        <Login />
        <Auth capability="read">
          <Router>
            <Header />
            <Switch>
              <SettingsContext>
                <Route exact path='/todo-app'>
                  <ToDo />
                </Route>
                <Route exact path='/settings'>
                  <Form />
                </Route>
                {/* <Auth capability="create">
                  <button>create</button>
                </Auth>
                <Auth capability="update">
                  <button>update</button>
                </Auth>
                <Auth capability="delete">
                  <button>delete</button>
                </Auth> */}
              </SettingsContext>
            </Switch>
            <Footer />
          </Router>
        </Auth>



      </LoginProvider>
    </>
  );
}

export default App;
