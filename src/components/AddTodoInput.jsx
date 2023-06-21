import React from 'react';
import { createTodo } from '../api';

const AddTodoInput = ({ userData, setUserData }) => {
  const [newTodo, setNewTodo] = React.useState('');

  const addTodo = async newTodo => {
    const { data } = await createTodo(newTodo);
    setUserData([...userData, data]);
    setNewTodo('');
  };

  return (
    <>
      <div>
        <input
          data-testid="new-todo-input"
          value={newTodo}
          onChange={e => {
            setNewTodo(e.target.value);
          }}
          placeholder="Enter new todo"
        />
        <button data-testid="new-todo-add-button" onClick={() => addTodo(newTodo)}>
          추가
        </button>
      </div>
    </>
  );
};

export default AddTodoInput;
