
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "../Pages/Home.css";
// import axios from 'axios';
// import { useContext } from 'react';
// import { UserContext } from '../component/useContext';
// import { LuLogIn } from "react-icons/lu";
// import { LuLogOut } from "react-icons/lu";
// import { FaCartArrowDown } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";

// const Header = () => {
//   const { cart, wishlist } = useContext(UserContext);
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleLogout = async () => {
//     try {
//       await axios.post("http://localhost:3000/user/logout", {}, {
//         withCredentials: true
//       });
  
//       localStorage.removeItem("token"); 
  
//       toast.success("Logout successful", {
//         position: "top-right",
//         autoClose: 2000,
//         theme: "colored"
//       });
  
//       setTimeout(() => navigate('/login'), 3000); 
//     } catch (error) {
//       console.error("Logout failed:", error);
//       toast.error("Logout failed");
//     }
//   };
  
// console.log("Cart length:", cart?.length);
// console.log("Wishlist length:", wishlist?.length);
//   return (
//     <>
//       <div className="flex items-center justify-between bg-gray-200  p-[12px] px-[50px] fixed top-0 w-full z-10">
//         <div>
//           <h2 className='font-bold text-2xl' >E-COMMERCE</h2>
//         </div>
//         <ul className="flex items-center gap-[45px]">
//           <li className='font-bold'><Link to="/">Home</Link></li>
//           <li className="relative">
//     <Link to="/cart">
//       <FaCartArrowDown className="size-[22px] text-blue-600 hover:text-blue-800" />
//       {cart.length > 0 && (
//         <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
//           {cart.length}
//         </span>
//       )}
//     </Link>
//   </li>
  
//   <li className="relative">
//     <Link to="/wishlist">
//       <FaRegHeart className="size-[22px] text-red-600 hover:text-red-800" />
//       {wishlist.length > 0 && (
//         <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
//           {wishlist.length}
//         </span>
//       )}
//     </Link>
//   </li>
//           <li className='font-bold'><Link to="/about">About</Link></li>
//           <li className='font-bold'><Link to="/contact">Contact</Link></li>

//           <div>
//           {token ? (
//     <div
//       onClick={handleLogout}
//       className="flex items-center gap-1 text-red-600 cursor-pointer hover:text-red-800"
//     >
//        {/* <span>Logout</span> */}
//       <LuLogIn size={23} />
//     </div>
//   ) : (
//     <Link
//       to="/login"
//       className="flex items-center gap-1 text-green-600 hover:text-green-800"
//     >
//        {/* <span>Login</span> */}
//       <LuLogOut size={23} />
//     </Link>
//   )}
//           </div>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Header;





// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "../Pages/Home.css";
// import axios from 'axios';
// import { UserContext } from '../component/useContext';
// import { LuLogIn, LuLogOut } from "react-icons/lu";
// import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";

// const Header = () => {
//   const { cart, wishlist } = useContext(UserContext);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleLogout = async () => {
//     try {
//       await axios.post("http://localhost:3000/user/logout", {}, {
//         withCredentials: true
//       });
//       localStorage.removeItem("token");
//       toast.success("Logout successful", {
//         position: "top-right",
//         autoClose: 2000,
//         theme: "colored"
//       });
//       setTimeout(() => navigate('/login'), 3000);
//     } catch (error) {
//       console.error("Logout failed:", error);
//       toast.error("Logout failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-between bg-gradient-to-r from-white via-gray-50 to-white shadow-lg border-b border-gray-200 p-3 sm:px-[50px] fixed top-0 w-full z-10 backdrop-blur-sm">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg mr-3 shadow-md">
//           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
//           </svg>
//         </div>
//         <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
//           E-COMMERCE
//         </h2>
//       </div>

//       {/* Hamburger */}
//       <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//         <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//       </button>

//       {/* Navigation Menu */}
//       <ul className={`sm:flex items-center gap-[45px] absolute sm:static top-[60px] left-0 w-full sm:w-auto bg-white sm:bg-transparent border-t sm:border-none shadow sm:shadow-none transition-all duration-300 z-50 ${menuOpen ? 'block' : 'hidden'} sm:block`}>
//         <li className="font-semibold relative group">
//           <Link to="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50 block">Home</Link>
//         </li>

//         <li className="relative group">
//           <Link to="/cart" className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105">
//             <FaCartArrowDown className="size-[22px] text-blue-600 hover:text-blue-800 transition-colors duration-300" />
//             {cart.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse min-w-[20px] text-center">
//                 {cart.length}
//               </span>
//             )}
//           </Link>
//         </li>

//         <li className="relative group">
//           <Link to="/wishlist" className="flex items-center p-2 rounded-lg hover:bg-red-50 transition-all duration-300 hover:scale-105">
//             <FaRegHeart className="size-[22px] text-red-600 hover:text-red-800 transition-colors duration-300 hover:scale-110" />
//             {wishlist.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse min-w-[20px] text-center">
//                 {wishlist.length}
//               </span>
//             )}
//           </Link>
//         </li>

//         <li className="font-semibold relative group">
//           <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50 block">About</Link>
//         </li>

//         <li className="font-semibold relative group">
//           <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50 block">Contact</Link>
//         </li>

//         <li>
//           {token ? (
//             <div onClick={handleLogout} className="flex items-center gap-2 text-red-600 cursor-pointer hover:text-red-800 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-red-50 font-semibold group">
//               <span className="hidden sm:block">Logout</span>
//               <LuLogIn size={23} className="group-hover:scale-110 transition-transform duration-300" />
//             </div>
//           ) : (
//             <Link to="/login" className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-green-50 font-semibold group">
//               <span className="hidden sm:block">Login</span>
//               <LuLogOut size={23} className="group-hover:scale-110 transition-transform duration-300" />
//             </Link>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Header;









import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Pages/Home.css";
import axios from 'axios';
import { UserContext } from '../component/useContext';
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart = [], wishlist = [] } = useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/user/logout", {}, { withCredentials: true });
      localStorage.removeItem("token");
      toast.success("Logout successful", { position: "top-right", autoClose: 2000, theme: "colored" });
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed");
    }
  };

  return (
    <div className="bg-gradient-to-r from-white via-gray-50 to-white shadow-lg border-b border-gray-200 fixed top-0 w-full z-10 backdrop-blur-sm h-[50px]">
      <div className="flex items-center justify-between p-[5px] px-[20px]">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg mr-3 shadow-md">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
            E-COMMERCE
          </h2>
        </div>

        {/* Mobile menu toggle */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="w-7 h-7 text-gray-800" /> : <HiOutlineMenuAlt3 className="w-8 h-8 text-gray-800" />}
          </button>
        </div>

        {/* Nav Items */}
        <ul className={`sm:flex gap-[20px] items-center font-semibold transition-all duration-300 ${menuOpen ? 'block absolute top-[47px] left-0 w-full bg-white border-t border-gray-200 shadow-md z-50 p-4' : 'hidden sm:flex'}`}>
          {/* Home */}
          <li className="relative group">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          {/* Cart */}
          <li className="relative group">
            <Link to="/cart" className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105">
              <FaCartArrowDown className="size-[22px] text-blue-600 hover:text-blue-800 transition-colors duration-300" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse min-w-[20px] text-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>

          {/* Wishlist */}
          <li className="relative group">
            <Link to="/wishlist" className="flex items-center p-2 rounded-lg hover:bg-red-50 transition-all duration-300 hover:scale-105">
              <FaRegHeart className="size-[22px] text-red-600 hover:text-red-800 transition-colors duration-300 hover:scale-110" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse min-w-[20px] text-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </li>

          {/* About */}
          <li className="relative group">
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          {/* Contact */}
          <li className="relative group">
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          {/* Login/Logout */}
          <li>
            {token ? (
              <div onClick={handleLogout} className="flex items-center gap-2 text-red-600 cursor-pointer hover:text-red-800 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-red-50 font-semibold group">
                <span className="hidden sm:block">Logout</span>
                < LuLogOut size={23} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-green-50 font-semibold group">
                <span className="hidden sm:block">Login</span>
                <LuLogIn size={23} className="group-hover:scale-110 transition-transform duration-300" />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
