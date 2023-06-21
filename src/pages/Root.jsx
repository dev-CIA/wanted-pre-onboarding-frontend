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
      <Outlet />
    </Container>
  );
};

export default Root;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
