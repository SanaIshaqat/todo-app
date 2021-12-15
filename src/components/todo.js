import React, { useEffect, useState, useContext } from 'react';
import useForm from '../hooks/form';
import Pagination from './pagination';
import {Card, Button, FormGroup, InputGroup } from '@blueprintjs/core';
import { SettingsContext } from '../context/settings/settings';
import { LoginContext } from '../context/settings/loginContext';
import superagent from 'superagent';
import cookie from 'react-cookies';


const ToDo = (props) => {
 
  const API = 'https://sana-401-todo-app.herokuapp.com'
  const settings = useContext(SettingsContext);
  const loginContext = useContext(LoginContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);


  useEffect(async () => {
    const capability = cookie.load('capability');
    if (capability) {
      loginContext.setuserCapability(JSON.parse(capability));
    }
    const items = localStorage.getItem('items');
    if (items) {
      settings.setItemsPerPage(JSON.parse(items));
    }
    const completed = localStorage.getItem('completed');
    if (completed) {
      settings.setShowCompleted(JSON.parse(completed));
    }
    const response = await superagent.get(`${API}/api/v1/todo`);

    setList(response.body.results);
  }, [props.list]);

  useEffect(async () => {
    const response = await superagent.get(`${API}/api/v1/todo`);

    setList(response.body.results);
  }, [loginContext.isUpdated, settings.showCompleted, settings.itemsPerPage]);

  async function addItem(item) {
    try {
  
      item.complete = false;
      await superagent.post(`${API}/api/v1/todo`, item);

      loginContext.setIsUpdated(!loginContext.isUpdated);
    } catch (e) {
      console.error('Add Item Error', e.message);
    }
  }

  async function deleteItem(id) {
    try {
      await superagent.delete(`${API}/api/v1/todo/${id}`);
      const items = list.filter((item) => item._id !== id);

      setList(items);
    } catch (e) {
      console.error('delete Item Error', e.message);
    }
  }

  async function toggleComplete(id) {
    try {
      let updatedItem;
      const items = list.map((item) => {
        if (item._id == id) {
          item.complete = !item.complete;
          updatedItem = item;
        }
        return item;
      });
      await superagent.put(`${API}/api/v1/todo/${id}`, updatedItem);
      loginContext.setIsUpdated(!loginContext.isUpdated);

    } catch (e) {
      console.error('update Item Error', e.message);
    }
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete);
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete.length}`;
  }, [list, settings.showCompleted]);

  return (
    <>
       <div className="mainsec">
        
          <h2 id='h2'>
            To Do List: {incomplete.length} items pending, and {list.length - incomplete.length} completed
          </h2>
       
        {loginContext.userCapability > 1 && (
        <div className="mainCards">
        <Card className="mainItem">
        <h2>Add To Do Item</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup helperText='' label='To Do Item' labelFor='text-input' labelInfo=''>
            <InputGroup id='text-input' placeholder='Item Details' onChange={handleChange} name='text' />
          </FormGroup>
          <FormGroup helperText='' label='Assigned To' labelFor='text-input' labelInfo=''>
            <InputGroup id='text-input' placeholder='Assignee Name' onChange={handleChange} name='assignee' />
          </FormGroup>
          <FormGroup helperText='' label='Difficulty' labelFor='text-input' labelInfo=''>
            <input onChange={handleChange} defaultValue={3} type='range' min={1} max={10} name='difficulty' />
          </FormGroup>
          <label>
            <Button type='submit'>Add Item</Button>
          </label>
        </form>
        </Card>
       
      </div>
 )}
  <Pagination className='pagList-container' list={list} incomplete={incomplete} toggleComplete={toggleComplete} deleteItem={deleteItem}></Pagination>
      </div>
      
    </>
  );
};

export default ToDo;