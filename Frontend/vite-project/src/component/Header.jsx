// import React from 'react'
// import "../Pages/Home.css"

// const Header = () => {
//   return (
//     <>
//     <div className=" flex item-center justify-between bg-blue-950 text-white p-[12px] px-[50px] fixed top-[0px] w-[100%] z-1">
//       <div className="">
//         <h2>E-COMMERCE</h2>
//       </div>
//       <ul className='flex item-center gap-[45px]'>
//         <li>Home</li>
//         <li>Cart</li>
//         <li>Wishlist</li>
//         <li>About</li>
//         <li>Contect</li>
//         {/* <li>Service</li> */}
//         <div className="">
//           <button className='bg-red-500 p-[3px] px-[20px] raunded-lg cursor-pointer'>login</button>
//         </div>
//       </ul>

//     </div>
//     </>
//   )
// }

// export default Header







import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Pages/Home.css";
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/user/logout", {}, {
        withCredentials: true
      });
  
      localStorage.removeItem("token"); 
  
      toast.success("Logout successful", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored"
      });
  
      setTimeout(() => navigate('/login'), 3000); 
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed");
    }
  };
  

  return (
    <>
      <div className="flex items-center justify-between bg-blue-950 text-white p-[12px] px-[50px] fixed top-0 w-full z-10">
        <div>
          <h2>E-COMMERCE</h2>
        </div>
        <ul className="flex items-center gap-[45px]">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          <div>
            {token ? (
              <button 
                onClick={handleLogout}
                className="bg-red-500 py-[3px] px-[20px] rounded-lg cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-green-500 py-[3px] px-[20px] rounded-lg cursor-pointer">
                  Login
                </button>
              </Link>
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

export default Header;

