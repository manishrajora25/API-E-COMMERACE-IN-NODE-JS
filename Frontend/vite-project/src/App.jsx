import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import First from './First.jsx'; 
import SingleProduct from './Pages/SingleProduct.jsx';
import Cart from './Pages/Cart.jsx';
import Wishlist from './Pages/Wishlist.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import AddProduct  from "./Pages/AddProductModal.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />}>
          <Route index element={<Home />} /> 
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addproduct" element={<AddProduct />} />
        

        

        
      </Routes>

      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </BrowserRouter>
  );
}

export default App;







// // import React from 'react';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import Register from './Pages/Register';
// // import Login from './pages/Login';
// // import Home from './Pages/Home'; // ✅ Your Home.jsx file
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Home />} /> {/* ✅ Home route */}
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/login" element={<Login />} />
// //         {/* Add other routes like /singleproduct/:id here if needed */}
// //       </Routes>

// //       <ToastContainer position="top-center" autoClose={2000} theme="colored" />
// //     </BrowserRouter>
// //   );
// // }

// // export default App;




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx'; // App has BrowserRouter + Routes
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App /> {/* ✅ Correct */}
//   </React.StrictMode>
// );
