
// import React from 'react';
// import {When} from 'react-if';
// import { LoginContext } from '../context/settings/loginContext';
// class Login extends React.Component {
//   static contextType = LoginContext;
//   render() {
//     const isLoggedIn = this.context.loggedin;
//     const canDo = this.context.userCapability ? this.context.can(this.context.userCapability) : true;
//     const okToRender = isLoggedIn && canDo;
//     return (
//       <When condition={okToRender}>
//         {this.props.children}
//       </When>
//     );
//   }
// }
// export default Login;