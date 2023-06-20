import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Root = () => (
  <Container>
    <Outlet />
  </Container>
);

export default Root;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
