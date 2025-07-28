import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContextProvider } from '../component/useContext.jsx';

    // import Login from './pages/Login';
    // import Register from './pages/Register';
import First from '../First.jsx'; 
import Home from '../Pages/Home.jsx';
import SingleProduct from '../Pages/SingleProduct.jsx';
import Login from '../Pages/Login.jsx';
import Register from '../Pages/Register.jsx'; 

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <First />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/singleproduct/:id",
        element: <SingleProduct />,
      },
      
    ],
  },
]);

const Main = () => {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
};

export default Main;
