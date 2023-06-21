import React from 'react';
import { CheckCompleted } from '.';
import { updateTodo, deleteTodo } from '../../api';

const TodoItem = ({ data, userData, setUserData }) => {
  const [isUpdateMode, setIsUpdateMode] = React.useState(false);
  const [updatedTodo, setUpdatedTodo] = React.useState('');

  const updateData = async ({ id, isCompleted }) => {
    await updateTodo({ id, todo: updatedTodo, isCompleted });
    setUserData(userData.map(data => (data.id === id ? { ...data, todo: updatedTodo } : data)));
    setIsUpdateMode(false);
  };

  const deleteData = async id => {
    await deleteTodo(id);
    setUserData(userData.filter(data => data.id !== id));
  };

  return (
    <>
      <li>
        <label>
          <CheckCompleted {...data} />
          {isUpdateMode ? (
            <input
              data-testid="modify-input"
              ref={node => node?.focus()}
              value={updatedTodo}
              onChange={e => {
                setUpdatedTodo(e.target.value);
              }}
            />
          ) : (
            <span>{data.todo}</span>
          )}
        </label>
        {isUpdateMode ? (
          <>
            <button data-testid="submit-button" onClick={() => updateData(data)}>
              제출
            </button>
            <button
              data-testid="cancel-button"
              onClick={() => {
                setIsUpdateMode(false);
              }}>
              취소
            </button>
          </>
        ) : (
          <>
            <button
              data-testid="modify-button"
              onClick={() => {
                setIsUpdateMode(true);
                setUpdatedTodo(data.todo);
              }}>
              수정
            </button>
            <button data-testid="delete-button" onClick={() => deleteData(data.id)}>
              삭제
            </button>
          </>
        )}
      </li>
    </>
  );
};

export default TodoItem;
