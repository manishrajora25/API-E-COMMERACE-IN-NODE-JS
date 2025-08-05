// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "../Pages/Home.css";
// import Instance from '../Axios.js';
// import { UserContext } from '../component/useContext';
// import { LuLogIn, LuLogOut } from "react-icons/lu";
// import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa';
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// import { FiPlus } from "react-icons/fi";




// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { cart = [], wishlist = [] } = useContext(UserContext);
//   const navigate = useNavigate();
//   // const token = localStorage.getItem("token");
//   const { token, setToken } = useContext(UserContext);

//   const [showModal, setShowModal] = useState(false);

  


//   const handleLogout = async () => {
//     try {
//       await Instance.post("/user/logout", {}, { withCredentials: true });
//       localStorage.removeItem("token");
//       setToken(null); 

//       // setToken(null); // 🔁 UI update
  
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
//     <div className="bg-gradient-to-r from-white via-gray-50 to-white shadow-lg border-b border-gray-200 fixed top-0 w-full z-10 backdrop-blur-sm h-[50px]">
//       <div className="flex items-center justify-between p-[5px] px-[20px]">
//         {/* Logo */}
//         <div className="flex items-center">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg mr-3 shadow-md">
//           <svg
//   className="w-6 h-6 text-yellow-500"
//   fill="currentColor"
//   viewBox="0 0 24 24"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path d="M12 2C10.895 2 10 2.895 10 4V5.586L7.707 7.879A1 1 0 007 8.586V10a1 1 0 001 1h1v4l-2.293 2.293A1 1 0 006 18.414V20a1 1 0 001 1h10a1 1 0 001-1v-1.586a1 1 0 00-.293-.707L16 15v-4h1a1 1 0 001-1V8.586a1 1 0 00-.293-.707L14 5.586V4c0-1.105-.895-2-2-2zm0 2c.552 0 1 .448 1 1v1.414a1 1 0 00.293.707L16.586 8H7.414l3.293-3.293A1 1 0 0011 5.414V4c0-.552.448-1 1-1zM10 12h4v3.586l2 2V19H8v-1.414l2-2V12z" />
// </svg>

//           </div>
//           <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
//             Jewellery-Ecom...
//           </h2>
//         </div>

//         {/* Mobile menu toggle */}
//         <div className="sm:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <HiX className="w-7 h-7 text-gray-800" /> : <HiOutlineMenuAlt3 className="w-8 h-8 text-gray-800" />}
//           </button>
//         </div>

//         {/* Nav Items */}
//         <ul className={`sm:flex gap-[20px] items-center font-semibold transition-all duration-300 ${menuOpen ? 'block absolute top-[47px] left-0 w-full bg-white border-t border-gray-200 shadow-md z-50 p-4' : 'hidden sm:flex'}`}>
//           {/* Home */}
//           <li className="relative group">
//             <Link to="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50">
//               Home
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </li>

//           <li className="relative group">

//   <Link to="/addproduct"
//     className="flex items-center gap-2 text-green-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50"
//   >
//     <FiPlus className="text-xl" onClick={() => setShowModal(true)} />
//     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//   </Link>
// </li>
// {showModal && <AddProductModal onClose={() => setShowModal(false)} />}



//           {/* Cart */}
//           <li className="relative group">
//             <Link to="/cart" className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105">
//               <FaCartArrowDown className="size-[22px] text-blue-600 hover:text-blue-800 transition-colors duration-300" />
//               {cart.length > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse min-w-[20px] text-center">
//                   {cart.length}
//                 </span>
//               )}
//             </Link>
//           </li>

//           {/* Wishlist */}
//           <li className="relative group">
//             <Link to="/wishlist" className="flex items-center p-2 rounded-lg hover:bg-red-50 transition-all duration-300 hover:scale-105">
//               <FaRegHeart className="size-[22px] text-red-600 hover:text-red-800 transition-colors duration-300 hover:scale-110" />
//               {wishlist.length > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse min-w-[20px] text-center">
//                   {wishlist.length}
//                 </span>
//               )}
//             </Link>
//           </li>

//           {/* About */}
//           <li className="relative group">
//             <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50">
//               About
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </li>

//           {/* Contact */}
//           <li className="relative group">
//             <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50">
//               Contact
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </li>

//           {/* Login/Logout */}
//           <li>
//   {token ? (
//     <div
//       onClick={handleLogout}
//       className="flex items-center gap-2 text-red-600 cursor-pointer hover:text-red-800 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-red-50 font-semibold group"
//     >
//       <span className="hidden sm:block">Logout</span>
//       <LuLogOut size={23} className="group-hover:scale-110 transition-transform duration-300" />
//     </div>
//   ) : (
//     <Link
//       to="/login"
//       className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-green-50 font-semibold group"
//     >
//       <span className="hidden sm:block">Login</span>
//       <LuLogIn size={23} className="group-hover:scale-110 transition-transform duration-300" />
//     </Link>
//   )}
// </li>

//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;





// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "../Pages/Home.css";
// import Instance from '../Axios.js';
// import { UserContext } from '../component/useContext';
// import { LuLogIn, LuLogOut } from "react-icons/lu";
// import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa';
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// import { FiPlus } from "react-icons/fi";
// // import AddProductModal from './AddProductModal'; // Only if needed

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const navigate = useNavigate();
//   const {
//     cart = [],
//     setCart,
//     wishlist = [],
//     setWishlist,
//     token,
//     setToken
//   } = useContext(UserContext);

//   const handleLogout = async () => {
//     try {
//       await Instance.post("/user/logout", {}, { withCredentials: true });
//       localStorage.removeItem("userToken");
//       setToken(null); 
//       setCart(0);
//       setWishlist(0);// Important
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
//     <div className="bg-gradient-to-r from-white via-gray-50 to-white shadow-lg border-b border-gray-200 fixed top-0 w-full z-10 backdrop-blur-sm h-[50px]">
//       <div className="flex items-center justify-between p-[5px] px-[20px]">
//         {/* Logo */}
//         <div className="flex items-center">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg mr-3 shadow-md">
//             <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2C10.895 2 10 2.895 10 4V5.586L7.707 7.879A1 1 0 007 8.586V10a1 1 0 001 1h1v4l-2.293 2.293A1 1 0 006 18.414V20a1 1 0 001 1h10a1 1 0 001-1v-1.586a1 1 0 00-.293-.707L16 15v-4h1a1 1 0 001-1V8.586a1 1 0 00-.293-.707L14 5.586V4c0-1.105-.895-2-2-2zm0 2c.552 0 1 .448 1 1v1.414a1 1 0 00.293.707L16.586 8H7.414l3.293-3.293A1 1 0 0011 5.414V4c0-.552.448-1 1-1zM10 12h4v3.586l2 2V19H8v-1.414l2-2V12z" />
//             </svg>
//           </div>
//           <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
//             Jewellery-Ecom...
//           </h2>
//         </div>

//         {/* Mobile menu toggle */}
//         <div className="sm:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? (
//               <HiX className="w-7 h-7 text-gray-800" />
//             ) : (
//               <HiOutlineMenuAlt3 className="w-8 h-8 text-gray-800" />
//             )}
//           </button>
//         </div>

//         {/* Nav Items */}
//         <ul className={`sm:flex gap-[20px] items-center font-semibold transition-all duration-300 ${menuOpen ? 'block absolute top-[47px] left-0 w-full bg-white border-t border-gray-200 shadow-md z-50 p-4' : 'hidden sm:flex'}`}>
//           {/* Home */}
//           <li className="relative group">
//             <Link to="/" className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
//               Home
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </li>

//           {/* Add Product */}
//           <li className="relative group">
//             <Link to="/addproduct" className="flex items-center gap-2 text-green-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
//               <FiPlus className="text-xl" />
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </li>

//           {/* Cart */}
//           <li className="relative group">
//             <Link to="/cart" className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105">
//               <FaCartArrowDown className="size-[22px] text-blue-600 hover:text-blue-800 transition-colors duration-300" />
//               {cart.length > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse min-w-[20px] text-center">
//                   {cart.length}
//                 </span>
//               )}
//             </Link>
//           </li>

//           {/* Wishlist */}
//           <li className="relative group">
//             <Link to="/wishlist" className="flex items-center p-2 rounded-lg hover:bg-red-50 transition-all duration-300 hover:scale-105">
//               <FaRegHeart className="size-[22px] text-red-600 hover:text-red-800 transition-colors duration-300 hover:scale-110" />
//               {wishlist.length > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse min-w-[20px] text-center">
//                   {wishlist.length}
//                 </span>
//               )}
//             </Link>
//           </li>

//           {/* About */}
//           <li className="relative group">
//             <Link to="/about" className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
//               About
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </li>

//           {/* Contact */}
//           <li className="relative group">
//             <Link to="/contact" className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
//               Contact
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </li>

//           {/* Login/Logout */}
//           <li>
//             {token ? (
//               <div
//                 onClick={handleLogout}
//                 className="flex items-center gap-2 text-red-600 cursor-pointer hover:text-red-800 py-2 px-4 rounded-lg hover:bg-red-50 font-semibold group transition-all duration-300"
//               >
//                 <span className="hidden sm:block">Logout</span>
//                 <LuLogOut size={23} className="group-hover:scale-110 transition-transform duration-300" />
//               </div>
//             ) : (
//               <Link
//                 to="/login"
//                 className="flex items-center gap-2 text-green-600 hover:text-green-800 py-2 px-4 rounded-lg hover:bg-green-50 font-semibold group transition-all duration-300"
//               >
//                 <span className="hidden sm:block">Login</span>
//                 <LuLogIn size={23} className="group-hover:scale-110 transition-transform duration-300" />
//               </Link>
//             )}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;









// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "../Pages/Home.css";
// import Instance from '../Axios.js';
// import { UserContext } from '../component/useContext';
// import { LuLogIn, LuLogOut } from "react-icons/lu";
// import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa';
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// import { FiPlus } from "react-icons/fi";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const navigate = useNavigate();
//   const {
//     cart = [],
//     setCart,
//     wishlist = [],
//     setWishlist,
//     token,
//     setToken
//   } = useContext(UserContext);

//   const handleLogout = async () => {
//     try {
//       await Instance.post("/user/logout", {}, { withCredentials: true });
//       localStorage.removeItem("userToken"); // Remove from storage
//       setToken(null);                       // Update context
//       setCart([]);                          // Reset cart
//       setWishlist([]);                      // Reset wishlist

//       toast.success("Logout successful", {
//         position: "top-right",
//         autoClose: 2000,
//         theme: "colored"
//       });

//       setTimeout(() => navigate('/login'), 2000);
//     } catch (error) {
//       console.error("Logout failed:", error);
//       toast.error("Logout failed");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-white via-gray-50 to-white shadow-lg border-b border-gray-200 fixed top-0 w-full z-10 backdrop-blur-sm h-[50px]">
//       <div className="flex items-center justify-between p-[5px] px-[20px]">
//         {/* Logo */}
//         <div className="flex items-center">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg mr-3 shadow-md">
//             <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2C10.895 2 10 2.895 10 4V5.586L7.707 7.879A1 1 0 007 8.586V10a1 1 0 001 1h1v4l-2.293 2.293A1 1 0 006 18.414V20a1 1 0 001 1h10a1 1 0 001-1v-1.586a1 1 0 00-.293-.707L16 15v-4h1a1 1 0 001-1V8.586a1 1 0 00-.293-.707L14 5.586V4c0-1.105-.895-2-2-2zm0 2c.552 0 1 .448 1 1v1.414a1 1 0 00.293.707L16.586 8H7.414l3.293-3.293A1 1 0 0011 5.414V4c0-.552.448-1 1-1zM10 12h4v3.586l2 2V19H8v-1.414l2-2V12z" />
//             </svg>
//           </div>
//           <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
//             Jewellery-Ecom...
//           </h2>
//         </div>

//         {/* Mobile menu toggle */}
//         <div className="sm:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? (
//               <HiX className="w-7 h-7 text-gray-800" />
//             ) : (
//               <HiOutlineMenuAlt3 className="w-8 h-8 text-gray-800" />
//             )}
//           </button>
//         </div>

//         {/* Nav Items */}
//         <ul className={`sm:flex gap-[20px] items-center font-semibold transition-all duration-300 ${menuOpen ? 'block absolute top-[47px] left-0 w-full bg-white border-t border-gray-200 shadow-md z-50 p-4' : 'hidden sm:flex'}`}>
//           {/* Home */}
//           <li className="relative group">
//             <Link to="/" className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
//               Home
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </li>

//           {/* Add Product */}
//           <li className="relative group">
//             <Link to="/addproduct" className="flex items-center gap-2 text-green-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
//               <FiPlus className="text-xl" />
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </li>

//           {/* Cart */}
//           <li className="relative group">
//             <Link to="/cart" className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105">
//               <FaCartArrowDown className="size-[22px] text-blue-600 hover:text-blue-800 transition-colors duration-300" />
//               {cart.length > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse min-w-[20px] text-center">
//                   {cart.length}
//                 </span>
//               )}
//             </Link>
//           </li>

//           {/* Wishlist */}
//           <li className="relative group">
//             <Link to="/wishlist" className="flex items-center p-2 rounded-lg hover:bg-red-50 transition-all duration-300 hover:scale-105">
//               <FaRegHeart className="size-[22px] text-red-600 hover:text-red-800 transition-colors duration-300 hover:scale-110" />
//               {wishlist.length > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse min-w-[20px] text-center">
//                   {wishlist.length}
//                 </span>
//               )}
//             </Link>
//           </li>

//           {/* About */}
//           <li className="relative group">
//             <Link to="/about" className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
//               About
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </li>

//           {/* Contact */}
//           <li className="relative group">
//             <Link to="/contact" className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
//               Contact
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </li>

//           {/* Login/Logout Toggle */}
//           <li>
//             {token ? (
//               <div
//                 onClick={handleLogout}
//                 className="flex items-center gap-2 text-red-600 cursor-pointer hover:text-red-800 py-2 px-4 rounded-lg hover:bg-red-50 font-semibold group transition-all duration-300"
//               >
//                 <span className="hidden sm:block">Logout</span>
//                 <LuLogOut size={23} className="group-hover:scale-110 transition-transform duration-300" />
//               </div>
//             ) : (
//               <Link
//                 to="/login"
//                 className="flex items-center gap-2 text-green-600 hover:text-green-800 py-2 px-4 rounded-lg hover:bg-green-50 font-semibold group transition-all duration-300"
//               >
//                 <span className="hidden sm:block">Login</span>
//                 <LuLogIn size={23} className="group-hover:scale-110 transition-transform duration-300" />
//               </Link>
//             )}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;













import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Pages/Home.css";
import Instance from '../Axios.js';
import { UserContext } from '../component/useContext';
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const {
    cart = [],
    setCart,
    wishlist = [],
    setWishlist,
    token,
    setToken,
    user,
    setUser
  } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await Instance.post("/user/logout", {}, { withCredentials: true });
      setToken(null);
      setUser(null)
      setCart([]);
      setWishlist([]);
      

      toast.success("Logout successful", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored"
      });

      setTimeout(() => navigate('/login'), 2000);
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
            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.895 2 10 2.895 10 4V5.586L7.707 7.879A1 1 0 007 8.586V10a1 1 0 001 1h1v4l-2.293 2.293A1 1 0 006 18.414V20a1 1 0 001 1h10a1 1 0 001-1v-1.586a1 1 0 00-.293-.707L16 15v-4h1a1 1 0 001-1V8.586a1 1 0 00-.293-.707L14 5.586V4c0-1.105-.895-2-2-2zm0 2c.552 0 1 .448 1 1v1.414a1 1 0 00.293.707L16.586 8H7.414l3.293-3.293A1 1 0 0011 5.414V4c0-.552.448-1 1-1zM10 12h4v3.586l2 2V19H8v-1.414l2-2V12z" />
            </svg>
          </div>
          <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
            Jewellery-Ecom...
          </h2>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="w-7 h-7 text-gray-800" />
            ) : (
              <HiOutlineMenuAlt3 className="w-8 h-8 text-gray-800" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`sm:flex gap-[20px] items-center font-semibold transition-all duration-300 ${menuOpen ? 'block absolute top-[47px] left-0 w-full bg-white border-t border-gray-200 shadow-md z-50 p-4' : 'hidden sm:flex'}`}>
          
          <li className="relative group">
            <Link to="/" className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          <li className="relative group">
            <Link to="/addproduct" className="flex items-center gap-2 text-green-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
              <FiPlus className="text-xl" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

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

          <li className="relative group">
            <Link to="/about" className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          <li className="relative group">
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          <li>
            {user ? (
              <div
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 cursor-pointer hover:text-red-800 py-2 px-4 rounded-lg hover:bg-red-50 font-semibold group transition-all duration-300"
              >
                <span className="hidden sm:block">Logout</span>
                <LuLogOut size={23} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 text-green-600 hover:text-green-800 py-2 px-4 rounded-lg hover:bg-green-50 font-semibold group transition-all duration-300"
              >
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
