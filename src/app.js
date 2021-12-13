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

function App() {
    return (
      <>
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
          {/* <Route exact path='/complete'>
            <Completecard />
          </Route> */}
          </SettingsContext>
        </Switch>
        <Footer />
      </Router>
    </>
    );
  }
  
export default App;

