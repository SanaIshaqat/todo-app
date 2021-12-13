// import React, { Component } from 'react';
// export const settingsContext = React.createContext();

// export default class settings extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       itemsPerPage: 2,
//       sort: 'Ascending',
//       show: true, 
//     };
//   }

//   render() {
//     return (
//       <settingsContext.Provider value={this.state}>
//         {this.props.children}
//       </settingsContext.Provider>
//     );
//   }
// }

import React, { useState, useEffect } from 'react';
export const settingsContext = React.createContext();

export default function settings(props) {
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [sort, setSort] = useState('Ascending');
  const [show, setShow] = useState(false);

  const state = { show, setShow, itemsPerPage, setItemsPerPage, sort, setSort, }; 
  useEffect(() => { let stringArray = localStorage.getItem("Form"); 
  let objectArray = JSON.parse(stringArray); 
  if (objectArray) { setItemsPerPage(Number(objectArray.itemsPerPage)); } 
  localStorage.clear(); }, []);

  return <settingsContext.Provider value={state}>{props.children}</settingsContext.Provider>;
}

