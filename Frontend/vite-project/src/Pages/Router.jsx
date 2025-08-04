import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContextProvider } from '../component/useContext.jsx';
import First from '../First.jsx'; 
import Home from '../Pages/Home.jsx';
import SingleProduct from '../Pages/SingleProduct.jsx';
import Login from './Pages/Login.jsx';
import Register from '../Pages/Register.jsx'; 
import Cart from '../Pages/Cart.jsx';
import Wishlist from '../Pages/Wishlist.jsx';
import About from '../Pages/About.jsx';
import Contact from '../Pages/Contact.jsx';
import AddProduct  from "../Pages/AddProductModal.jsx"
// import ProtectedRoute from "../component/ProtectedRoute.jsx";
import ProtectedRoute from "./component/ProtectedRoute";


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
        path: "singleproduct/:id",
        element: <SingleProduct />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/addproduct",
        element: <AddProduct />,
      },

      {
        path: "/cart/:id", 
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist/:id", 
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
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
