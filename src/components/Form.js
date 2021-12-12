import React from 'react';
import { Card, Button, FormGroup, InputGroup } from '@blueprintjs/core';

export default function Form({ handleSubmit, handleChange }) {
  return (
    <Card className="mainItem" interactive={true}>
      <h3 class="list">Add A Task To Your List </h3>
      <br></br>
      <form onSubmit={handleSubmit}>
        <FormGroup labelFor="text-input" labelInfo="(required)">
          <label><b>To Do Item</b></label>
          <br></br>
          <br></br>
          <InputGroup
            onChange={handleChange}
            name="text"
            id="text-input"
            placeholder="Item Details"
          />
          <br></br>
          <label><b>Assigned To</b></label>
          <br></br>
          <br></br>
          <InputGroup
            onChange={handleChange}
            name="assignee"
            id="text-input"
            placeholder="Assignee Name"
          />
           <br></br>
          <div className='diff'>
          <lable><b>Difficulty</b></lable>
          <br></br>
          <input
            onChange={handleChange}
            defaultValue={2}
            type="range"      
            min={1}
            max={5}
            name="difficulty"
          />
          </div>
<div >
          <Button className='button' type="submit">Add Item</Button>
          </div>
        </FormGroup>
      </form>
    </Card>
  );
}