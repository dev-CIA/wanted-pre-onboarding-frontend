import React from 'react';
import { CheckCompleted } from '.';
import { deleteTodo } from '../../api';

const TodoItem = ({ data, userData, setUserData }) => {
  const [isModifyMode, setIsModifiyMode] = React.useState(false);

  const deleteData = async id => {
    await deleteTodo(id);
    setUserData(userData.filter(data => data.id !== id));
  };

  return (
    <>
      <li>
        <label>
          <CheckCompleted {...data} />
          {isModifyMode ? <input /> : <span>{data.todo}</span>}
        </label>
        <button
          data-testid="modify-button"
          onClick={() => {
            setIsModifiyMode(true);
          }}>
          수정
        </button>
        <button data-testid="delete-button" onClick={() => deleteData(data.id)}>
          삭제
        </button>
      </li>
    </>
  );
};

export default TodoItem;
