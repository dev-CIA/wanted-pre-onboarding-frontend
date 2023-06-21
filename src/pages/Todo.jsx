import React from 'react';
import { AddInput, CheckCompleted } from '../components/todo';
import { getTodos } from '../api';

const Todo = () => {
  const [userData, setUserData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const response = await getTodos();
        if (response.status === 200 || response.status === 201) {
          setUserData(response.data);
        }
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
      <AddInput userData={userData} setUserData={setUserData} />
      {userData.map(data => (
        <li key={data.id}>
          <label>
            <CheckCompleted {...data} />
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
