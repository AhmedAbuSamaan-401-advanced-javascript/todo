import React from 'react';

function TodoList(props) {
  if (props.list.list) {
    return (
      <ul>
        {props.list.list.map(item => (
          <li className={`complete-${item.complete.toString()}`}key={item._id}>
            <span onClick={() => props.handleComplete(item._id)}>{item.text}</span>
          </li>))}
      </ul>
    );
  }
  else {
    return (
      null
    );
  }
}
export default TodoList;