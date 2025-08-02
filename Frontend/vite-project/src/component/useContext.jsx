import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]); 

  
  const handleAddToCart = async (product) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/product/cart/${product._id}`,
        {}, 
        { withCredentials: true }
      );
      console.log("Cart updated:", res.data);
    } catch (error) {
      console.error("Failed to add to cart:", error.response?.data || error.message);
    }
  };

  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/checkToken", {
          withCredentials: true,
        });

        const user = response.data?.User;

        if (!user || !user.id) throw new Error("User not found in token response");

        setCurrentUser(user);
      } catch (e) {
        console.error("User fetch error:", e.message);
        setCurrentUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        currentUser,
        handleAddToCart,
        currentUser,
        cart,
        setCart,
        wishlist,
        setWishlist
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
