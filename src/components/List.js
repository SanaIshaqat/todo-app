import React, { useContext } from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';
import { LoginContext } from '../context/settings/loginContext';
import Auth from '../components/auth'
export default function List(props) {
  const logincontext = useContext(LoginContext);
  return (
   
    <Card className="mainItem2">
      <h3 className='list'>Items List</h3>
      {props.activeList.map((item) => (
      <>
          
          <Card className="listCard" interactive={true} elevation={Elevation.TWO} key={item.id} >
          <Auth capability="delete">
          {logincontext.userCapability > 3 && <Button onClick={() => props.deleteItem(item._id)} icon='cross' id='delete-btn'></Button>}
          </Auth>
          <h3><b>{item.text}</b></h3>
            <p>
            <b>Assigned to:</b> {item.assignee}
            </p>
            <p>
            <b>Difficulty:</b> {item.difficulty}
            </p>
            <Auth capability="update">
              {logincontext.userCapability > 2 && <Button onClick={() => props.toggleComplete(item._id)}>Complete: {item.complete?.toString()}</Button>}
            </Auth>
          </Card>
          <br />
       </>
      ))}
   </Card>
   
 
  );
}