// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './app.js';

// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<Main />, rootElement);
import React from 'react';
import ReactDOM from 'react-dom';
import SettingsProvider from './context/settings/settings';
import LoginContext from './context/settings/loginContext';

import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <LoginContext>
          <App />
        </LoginContext>
      </SettingsProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);