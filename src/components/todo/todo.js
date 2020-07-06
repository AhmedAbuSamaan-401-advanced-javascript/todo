import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './todo.scss';

function ToDo (props){
  let [list, setList]=  useState([]);

  function addItem(item){
    item._id = Math.random();
    item.complete = false;
    setList({list:[...list.list, item]});
  }

  function toggleComplete(id){
    let item = list.list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let list1 = list.list.map(listItem => listItem._id === item._id ? item : listItem);
      setList({list:list1});
    }
  }

  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    setList({list});

  }, []);

  if (list.list){
    return (
          
      <>
        <header>
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <br></br>
          </Navbar>
          {/* <h2> */}
          <br />

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" id="ListManger"> To Do List Manager {list.list.filter(item => !item.complete).length}</Navbar.Brand>
          </Navbar>
              
          {/* </h2> */}
        </header>
    
        <section className="todo">
    
          <div>
            <TodoForm handleSubmit={addItem} />
          </div>
    
          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
        </section>
      </>
  
    );
  }else {return null}
}

export default ToDo;