// import React, { createContext, useState, useEffect } from 'react';
// import Instance from '../Axios.js';



// export const UserContext = createContext();

// export const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   // const [currentUser, setCurrentUser] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [wishlist, setWishlist] = useState([]); 
//   const [token, setToken] = useState(localStorage.getItem("token"));


  
//   const handleAddToCart = async (product) => {
//     try {
//       const res = await Instance.post(
//         `/product/cart/${product._id}`,
//         {}, 
//         { withCredentials: true }
//       );
//       console.log("Cart updated:", res.data);
//     } catch (error) {
//       console.error("Failed to add to cart:", error.response?.data || error.message);
//     }
//   };

  
//   // useEffect(() => {
//   //   const fetchUser = async () => {
//   //     try {
//   //       const response = await Instance.get("/user/checkToken", {
//   //         withCredentials: true,
//   //       });

//   //       const user = response.data?.User;

//   //       if (!user || !user.id) throw new Error("User not found in token response");

//   //       setCurrentUser(user);
//   //       console.log(user);
        
//   //     } catch (e) {
//   //       console.error("User fetch error:", e.message);
//   //       setCurrentUser(null);
//   //     }
//   //   };

//   //   fetchUser();
//   // }, []);

//   return (
//     <UserContext.Provider
//       value={{
//         user,
//         setUser,
//         // currentUser,
//         handleAddToCart,
//         // currentUser,
//         cart,
//         setCart,
//         wishlist,
//         setWishlist,
//         token,          // ✅ ADD THIS
//         setToken 

//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };






// import React, { createContext, useState, useEffect } from 'react';
// import Instance from '../Axios.js';

// export const UserContext = createContext();

// export const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [loading, setLoading] = useState(true); // Optional, for UI blocking

//   // ✅ Check token and fetch user details
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await Instance.get("/user/checkToken", {
//           withCredentials: true
//         });

//         const loggedInUser = res.data?.User;
//         if (!loggedInUser || !loggedInUser.id) {
//           throw new Error("User not found");
//         }

//         setUser(loggedInUser);
//       } catch (err) {
//         console.error("Token check failed:", err.message);
//         setUser(null);
//         localStorage.removeItem("token");
//         setToken(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (token) {
//       fetchUser();
//     } else {
//       setLoading(false);
//     }
//   }, [token]);

//   const handleAddToCart = async (product) => {
//     try {
//       const res = await Instance.post(
//         `/product/cart/${product._id}`,
//         {},
//         { withCredentials: true }
//       );
//       console.log("Cart updated:", res.data);
//     } catch (error) {
//       console.error("Failed to add to cart:", error.response?.data || error.message);
//     }
//   };

//   return (
//     <UserContext.Provider
//       value={{
//         user,
//         setUser,
//         token,
//         setToken,
//         cart,
//         setCart,
//         wishlist,
//         setWishlist,
//         handleAddToCart,
//         loading // you can use this for optional loading UI
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };











import React, { createContext, useState, useEffect } from 'react';
import Instance from '../Axios.js';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);             // Stores user {_id, role, ...}
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [wishlist, setWishlist] = useState([]);       // Full wishlist array
  const [wishlistIds, setWishlistIds] = useState([]); // Just product._id array
  const [cart, setCart] = useState([]);               // Full cart array
  const [cartCount, setCartCount] = useState(0);      // Optional: cart item count
  const [loading, setLoading] = useState(true);       // Global loading state
  const [products, setProducts] = useState([]);

  // ✅ Auto-fetch everything (user + cart + wishlist) if token is available
  useEffect(() => {
      fetchData()
      fetchProduct()
  }, []);


  const fetchProduct = async () => {
    try {
      const response = await Instance.get("/product/all"); 
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  



  const fetchData = async () => {
    try {
      // ✅ 1. Check User Token
      const userRes = await Instance.get("/user/checkToken", {
        withCredentials: true
      });

      const userData = userRes.data?.User;
      console.log(userData)
     setUser(userData)

      // ✅ 2. Fetch Wishlist
      const wishlistRes = await Instance.get("/product/wishlist/Data", {
        withCredentials: true,
      });
      if (wishlistRes.data?.wishlist) {
        const cleanedWishlist = wishlistRes.data.wishlist.filter((item) => item?.product);
        setWishlist(cleanedWishlist);
        setWishlistIds(cleanedWishlist.map((item) => item.product._id));
      }

      // ✅ 3. Fetch Cart
      const cartRes = await Instance.get("/product/cart/data", {
        withCredentials: true,
      });
      if (cartRes.data?.cart) {
        const cleanedCart = cartRes.data.cart.filter((item) => item?.product);
        setCart(cleanedCart);
        setCartCount(cleanedCart.length);
      }
    } catch (e) {
      console.error("Context data fetch error:", e);
      setUser(null);
      setWishlist([]);
      setWishlistIds([]);
      setCart([]);
      setCartCount(0);
      localStorage.removeItem("token");
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add to Cart function
  // const handleAddToCart = async (product) => {
  //   try {
  //     const res = await Instance.post(
  //       `/product/cart/${product._id}`,
  //       {},
  //       { withCredentials: true }
  //     );
  //     console.log("Cart updated:", res.data);
  //   } catch (error) {
  //     console.error("Failed to add to cart:", error.response?.data || error.message);
  //   }
  // };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        cart,
        setCart,
        cartCount,
        setCartCount,
        wishlist,
        setWishlist,
        wishlistIds,
        setWishlistIds,
        // handleAddToCart,
        fetchData,
        products,
        loading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
