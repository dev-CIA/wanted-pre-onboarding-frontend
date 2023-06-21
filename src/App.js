import React from 'react';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import { Root, Signin, Signup, Todo } from './pages';

const checkAuhtorized = () => !!localStorage.getItem('accessToken');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/signin',
        loader: () => {
          const isAuthorized = checkAuhtorized();
          if (isAuthorized) throw redirect('/todo');
          return null;
        },
        element: <Signin />,
      },
      {
        path: '/signup',
        loader: () => {
          const isAuthorized = checkAuhtorized();
          if (isAuthorized) throw redirect('/todo');
          return null;
        },
        element: <Signup />,
      },
      {
        path: '/todo',
        loader: () => {
          const isAuthorized = checkAuhtorized();
          if (!isAuthorized) throw redirect('/signin');
          return null;
        },
        element: <Todo />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
