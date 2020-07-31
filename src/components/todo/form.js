import React, { useEffect, useState } from 'react';
import useForm from '../hooks/form-hook';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function TodoForm(props){

  const [item, handleInputChange, handleSubmit] = useForm(handleForm);
  function handleForm(item) {
    props.handleSubmit(item);
  }

  return (
    <>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label>
          <span>To Do Item</span>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <span>Difficulty Rating</span>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Label>
        <Form.Label>
          <span>Assigned To</span>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Label>
        <Button variant="primary" type="submit">Add Item</Button>
      </Form>

    </>
  );


}



export default TodoForm;