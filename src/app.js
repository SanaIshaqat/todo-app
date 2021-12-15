// import React from 'react';
// import ToDo from './components/todo';
// import SettingsContext from './context/settings/settings';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from './context/settings/Form';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import './app.scss';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// // import Completecard from './components/Completed';
// import LoginProvider from "./context/settings/loginContext";
// import Login from './components/loginForm';
// import Auth from './components/auth';

// function App() {
//   return (
//     <>
//       <LoginProvider>
//         <Login />
//         <Auth capability="read">
//           <Router>
//             <Header />
//             <Switch>
//               <SettingsContext>
//                 <Route exact path='/todo-app'>
//                   <ToDo />
//                 </Route>
//                 <Route exact path='/settings'>
//                   <Form />
//                 </Route>
//               </SettingsContext>
//             </Switch>
//             <Footer />
//           </Router>
//         </Auth>
//       </LoginProvider>
//     </>
//   );
// }

// export default App;
import React, { useContext } from 'react';
import ToDo from './components/todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import SettingsForm from './context/settings/Form';
import LoginForm from './components/loginForm';
import { LoginContext } from './context/settings/loginContext';
import { If, Else, Then } from 'react-if';
import './app.scss';
export default function App() {
  const logincontext = useContext(LoginContext);
  return (
    <>
      <Router>
        <Header />
        <If condition={logincontext.loggedin}>
          <Then>
            <Switch>
              <Route exact path='/'>
                <ToDo />
              </Route>
              <Route path='/settings'>
                <If condition={logincontext.userCapability > 1}>
                  <Then>
                    <SettingsForm />
                  </Then>
                  <Else>
                    <h2>Access Denied!</h2>
                  </Else>
                </If>
              </Route>
            </Switch>
          </Then>
          <Else>
            <>
              <br /> <LoginForm />
            </>
          </Else>
        </If>
      </Router>
    </>
  );
}