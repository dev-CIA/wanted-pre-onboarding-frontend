import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root, Signin, Signup, Todo } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/todo',
        element: <Todo />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
