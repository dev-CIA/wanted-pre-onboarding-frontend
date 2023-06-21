import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Root = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    (() => {
      navigate('/signin');
    })();
  }, []);

  return (
    <Container>
      <Title>Wanted Todo</Title>
      <Outlet />
    </Container>
  );
};

export default Root;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 2em;
  font-weight: 700;
  background-color: rgb(248, 193, 202);
`;
