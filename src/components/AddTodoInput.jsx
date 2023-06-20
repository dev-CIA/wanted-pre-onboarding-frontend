import React from 'react';

const AddTodoInput = () => {
  console.log();

  return (
    <>
      <div>
        <input data-testid="new-todo-input" />
        <button data-testid="new-todo-add-button">추가</button>
      </div>
    </>
  );
};

export default AddTodoInput;
