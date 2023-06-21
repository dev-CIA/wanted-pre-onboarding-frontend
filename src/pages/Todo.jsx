import React from 'react';
import styled from 'styled-components';
import { AddInput, TodoItem } from '../components/todo';
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
        setUserData(response.data);
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
    <Container>
      <Title>My Todo List</Title>
      <AddInput userData={userData} setUserData={setUserData} />
      {userData.map(data => (
        <TodoItem key={data.id} data={data} userData={userData} setUserData={setUserData} />
      ))}
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Title = styled.div`
  margin-bottom: 10px;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
`;
