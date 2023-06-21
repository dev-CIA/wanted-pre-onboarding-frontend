import React from 'react';
import { AddTodoInput } from '../components';
import getTodos from '../api/todos';

const Todo = () => {
  const [userData, setUserData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const todos = await getTodos();
        setUserData(todos);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (error) return <pre>{error.stack}</pre>;
  if (isLoading) return 'Loading...';

  return (
    <>
      <AddTodoInput data={userData} addTodo={setUserData} />
      {userData.map(data => (
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
