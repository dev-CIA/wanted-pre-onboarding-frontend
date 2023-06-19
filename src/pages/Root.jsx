import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  console.log();
  return (
    <>
      Root
      <Outlet />
    </>
  );
};

export default Root;
