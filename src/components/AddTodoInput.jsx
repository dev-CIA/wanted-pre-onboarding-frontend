import React from 'react';

const AddTodoInput = () => {
  const [newTodo, setNewTodo] = React.useState('');

  return (
    <>
      <div>
        <input
          data-testid="new-todo-input"
          value={newTodo}
          onChange={e => {
            setNewTodo(e.target.value);
          }}
        />
        <button data-testid="new-todo-add-button">추가</button>
      </div>
    </>
  );
};

export default AddTodoInput;
