import React from 'react';

const TodoFormButton = (props) => {
  if (props.numTodos > 0) {
    return (
      <button className="todo-form-button">
        Make another list
      </button>
    );
  } else {
    return (
      <button className="todo-form-button">
        Make your first list!
      </button>
    );
  }
};

export default TodoFormButton;
