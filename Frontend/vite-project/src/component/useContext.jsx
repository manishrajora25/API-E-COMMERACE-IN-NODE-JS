// context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // 🛒 You can add cart logic here
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleAddToCart }}>
      {children}
    </UserContext.Provider>
  );
};
