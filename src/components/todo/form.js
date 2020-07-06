import React, { useState} from 'react';

function TodoForm (props) {
  const [item, setItem]=  useState([]);
  function handleInputChange(e)  {
    setItem({ item: {...item.item, [e.target.name]: e.target.value } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item.item);
    const item1 = {};
    setItem({item1});
  };
  return (
    <>
      <h3>Add To Do Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input name="text" placeholder="item Deatils" onChange={handleInputChange}/>
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange}/>
        </label>
        <label>
          <span>Assigned Name</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange}/>
        </label>
        <button>Add Item</button>
      </form>
    </>
  );
  
}

export default TodoForm;