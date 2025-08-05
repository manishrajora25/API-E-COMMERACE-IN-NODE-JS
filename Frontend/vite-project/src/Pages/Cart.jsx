// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Header from "../component/Header"
// import Footer from "../component/Footer"
// import { MdDelete } from "react-icons/md";
// import { toast } from 'react-toastify';
// import Instance from '../Axios.js';

// const Cart = () => {
//     const navigate = useNavigate();
//   const location = useLocation();

//   const [cartItems, setCartItems] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
  
//   const [currentUser, setCurrentUser]= useState(null);


//   useEffect(() => {
//     async function fetchUser() {
        
//    try {
//      const response = await Instance.get("/user/checkToken",
//        { withCredentials: true }
//      );
 
//      if (!response.data?.User) {
//        throw new Error("User not found in token response");
//      }
//  console.log(response.data.User)
//      setCurrentUser(response.data.User);
//      const user = response.data?.User ;
 
//  if (!user || !user.id) {
//    throw new Error("User not found in token response");
//  }
 
//  setCurrentUser(user);
 
//    } catch (e) {
//      console.error("User fetch error:", e);
//      setCurrentUser(null);
//    }
//  }
 
 
//      fetchUser();
//    }, []);



//    useEffect(() => {
//     if (currentUser !== null) {
//       if (!currentUser) {
//         navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
//       } else {
//         fetchCartItems();
//       }
//     }
//   }, [currentUser]);
  

//   const fetchCartItems = async () => {
//     if (!currentUser) {
//         navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
//         return;
//       }
//       console.log("jhcb")
//     try {
//       const res = await Instance.get('/product/cart/data', {
//         withCredentials: true, // ✅ Required to send the cookie
//       });
//    console.log(res.data)
//       const cart = res.data.cart ;
//       setCartItems(cart);
//       calculateTotal(cart);
//     } catch (err) {
//       console.error('Error fetching cart:', err.response?.data );
//     }
//   };

//   const calculateTotal = (items) => {
//     const total = items.reduce(
//       (acc, item) => acc + item.product.originalPrice * item.quantity,
//       0
//     );
//     setTotalAmount(total);
//   };



//   const handleRemove = async (productId) => {
//     try {
//       const res = await Instance.delete(
//         `/product/cart/${productId}`,
//         { withCredentials: true }
//       );
//       console.log("Removed from cart:", res.data);
//       toast.success('cart Removed successful!', {
//         position: "top-right",
//         autoClose: 2000,
//         theme: "colored"
//       });
//       setTimeout(()=> fetchCartItems(),3000); // Re-fetch updated cart
//     } catch (error) {
//       console.error("Failed to remove item:", error.response?.data || error.message);
//       toast.error('cart Not Removed', {
//         position: "top-right",
//         autoClose: 2000,
//         theme: "colored"
//       });
//     }
//   };
  


 
//   return (
//     <>

// <Header/>

// <div className="max-w-5xl mx-auto p-6 mt-[80px]">
//   <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Shopping Cart</h2>

//   {cartItems.length === 0 ? (
//     <p className="text-center text-gray-500">Your cart is empty.</p>
//   ) : (
//     <>
//       <div className="space-y-6">
//         {cartItems.map((item) => (
//           <div
//             key={item._id}
//             className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white rounded-xl shadow p-4 hover:shadow-md transition"
//           >
//             <div className="flex items-center gap-4">
//               <img
//                 src={item.product.image}
//                 alt={item.product.name}
//                 className="w-[100px] h-[100px] rounded-lg border"
//               />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {item.product.name}
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   Price ₹ {item.product.originalPrice} 
//                 </p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <button
//                     className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-lg"
//                     onClick={() =>
//                       handleQuantityChange(item.product._id, item.quantity - 1)
//                     }
//                   >
//                     −
//                   </button>
//                   <span className="px-2 font-medium">{item.quantity}</span>
//                   <button
//                     className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-lg"
//                     onClick={() =>
//                       handleQuantityChange(item.product._id, item.quantity + 1)
//                     }
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex sm:flex-col items-end gap-4">
//               <h4 className="text-green-600 font-bold text-lg">
//                 ₹{item.product.originalPrice * item.quantity}
//               </h4>
//               <MdDelete
//                 onClick={() => handleRemove(item.product._id)}
//                 className="text-red-500 hover:text-red-700 cursor-pointer text-[24px]"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-right mt-10 border-t pt-6">
//         <h3 className="text-2xl font-bold mb-2">
//           Total: <span className="text-green-600">₹{totalAmount}</span>
//         </h3>
//         <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-lg transition">
//           Proceed to Checkout
//         </button>
//       </div>
//     </>
//   )}
// </div>


// <Footer />
//     </>

//   );
// };

// export default Cart;






// import React, { useEffect, useState, useContext } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Header from "../component/Header"
// import Footer from "../component/Footer"
// import { MdDelete } from "react-icons/md";
// import { toast } from 'react-toastify';
// import Instance from '../Axios.js';
// import { UserContext } from '../component/useContext';

// const Cart = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { user, loading } = useContext(UserContext); // ✅ from context
//   const [cartItems, setCartItems] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     if (!loading) {
//       if (!user) {
//         navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
//       } else {
//         fetchCartItems();
//       }
//     }
//   }, [user, loading]);

//   const fetchCartItems = async () => {
//     try {
//       const res = await Instance.get('/product/cart/data', {
//         withCredentials: true
//       });
//       const cart = res.data.cart;
//       setCartItems(cart);
//       calculateTotal(cart);
//     } catch (err) {
//       console.error('Error fetching cart:', err.response?.data);
//     }
//   };

//   const calculateTotal = (items) => {
//     const total = items.reduce(
//       (acc, item) => acc + item.product.originalPrice * item.quantity,
//       0
//     );
//     setTotalAmount(total);
//   };

//   const handleRemove = async (productId) => {
//     try {
//       const res = await Instance.delete(
//         `/product/cart/${productId}`,
//         { withCredentials: true }
//       );
//       toast.success('Cart item removed!');
//       setTimeout(() => fetchCartItems(), 1000);
//     } catch (error) {
//       console.error("Failed to remove item:", error.response?.data || error.message);
//       toast.error('Failed to remove cart item.');
//     }
//   };

//   const handleQuantityChange = (productId, newQuantity) => {
//     // Implement your quantity update logic if needed
//   };

//   return (
//     <>
//       <Header />

//       <div className="max-w-5xl mx-auto p-6 mt-[80px]">
//         <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Shopping Cart</h2>

//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-500">Your cart is empty.</p>
//         ) : (
//           <>
//             <div className="space-y-6">
//               {cartItems.map((item) => (
//                 <div key={item._id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white rounded-xl shadow p-4">
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={item.product.image}
//                       alt={item.product.name}
//                       className="w-[100px] h-[100px] rounded-lg border"
//                     />
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-800">{item.product.name}</h3>
//                       <p className="text-sm text-gray-600">Price ₹ {item.product.originalPrice}</p>
//                       <div className="flex items-center gap-2 mt-2">
//                         <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => handleQuantityChange(item.product._id, item.quantity - 1)}>−</button>
//                         <span className="px-2">{item.quantity}</span>
//                         <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => handleQuantityChange(item.product._id, item.quantity + 1)}>+</button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex sm:flex-col items-end gap-4">
//                     <h4 className="text-green-600 font-bold text-lg">₹{item.product.originalPrice * item.quantity}</h4>
//                     <MdDelete
//                       onClick={() => handleRemove(item.product._id)}
//                       className="text-red-500 hover:text-red-700 cursor-pointer text-[24px]"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="text-right mt-10 border-t pt-6">
//               <h3 className="text-2xl font-bold mb-2">
//                 Total: <span className="text-green-600">₹{totalAmount}</span>
//               </h3>
//               <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-lg">Proceed to Checkout</button>
//             </div>
//           </>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Cart;









import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/Footer";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import Instance from '../Axios.js';
import { UserContext } from '../component/useContext';

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading } = useContext(UserContext);

  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // ✅ Redirect if not logged in
  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
      } else {
        fetchCartItems();
      }
    }
  }, [user, loading]);

  // ✅ Fetch cart from backend
  const fetchCartItems = async () => {
    try {
      const res = await Instance.get('/product/cart/data', {
        withCredentials: true
      });
      const cart = res.data.cart || [];
      setCartItems(cart);
      calculateTotal(cart);
    } catch (err) {
      console.error('Error fetching cart:', err.response?.data || err.message);
    }
  };

  // ✅ Total Price Calculation
  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.product.originalPrice * item.quantity,
      0
    );
    setTotalAmount(total);
  };

  // ✅ Remove Item
  const handleRemove = async (productId) => {
    try {
      await Instance.delete(`/product/cart/${productId}`, {
        withCredentials: true
      });
      toast.success('Item removed from cart');
      fetchCartItems();
    } catch (error) {
      console.error("Remove error:", error.response?.data || error.message);
      toast.error('Failed to remove item');
    }
  };

  // ✅ Quantity Update
  const handleQuantityChange = async (productId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const res = await Instance.put(
        `/product/cart/${productId}`,
        { quantity: newQuantity },
        { withCredentials: true }
      );
      toast.success('Cart updated');
      fetchCartItems(); // refresh cart
    } catch (error) {
      console.error("Quantity update failed:", error.response?.data || error.message);
      toast.error("Failed to update quantity");
    }
  };

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto p-6 mt-[80px]">
        <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white rounded-xl shadow p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-[100px] h-[100px] rounded-lg border"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.product.name}</h3>
                      <p className="text-sm text-gray-600">Price ₹{item.product.originalPrice}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => handleQuantityChange(item.product._id, item.quantity - 1)}>−</button>
                        <span className="px-2">{item.quantity}</span>
                        <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => handleQuantityChange(item.product._id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-end gap-4">
                    <h4 className="text-green-600 font-bold text-lg">₹{item.product.originalPrice * item.quantity}</h4>
                    <MdDelete
                      onClick={() => handleRemove(item.product._id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer text-[24px]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right mt-10 border-t pt-6">
              <h3 className="text-2xl font-bold mb-2">
                Total: <span className="text-green-600">₹{totalAmount}</span>
              </h3>
              <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-lg">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
