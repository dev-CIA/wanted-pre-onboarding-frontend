import React from 'react';

const mockData = [
  {
    id: 1,
    todo: 'todo2',
    isCompleted: false,
    userId: 1,
  },
  {
    id: 2,
    todo: 'todo3',
    isCompleted: true,
    userId: 1,
  },
];

const Todo = () => {
  console.log();
  return (
    <>
      <div>
        <input data-testid="new-todo-input" />
        <button data-testid="new-todo-add-button">추가</button>
      </div>
      {mockData.map(data => (
        <li key={data.id}>
          <label>
            <input type="checkbox" checked={data.isCompleted} onChange={() => {}} />
            <span>{data.todo}</span>
          </label>
          <button data-testid="modify-button">수정</button>
          <button data-testid="delete-button">삭제</button>
        </li>
      ))}
    </>
  );
};

export default Todo;
