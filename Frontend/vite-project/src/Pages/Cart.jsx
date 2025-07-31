// src/pages/Cart.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      fetchCartItems();
    }
  }, []);

  const fetchCartItems = async () => {
    try {
      const res = await axios.get('http://localhost:3000/product/cart/data', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCartItems(res.data.cartItems || []);
      calculateTotal(res.data.cartItems || []);
    } catch (err) {
      console.error('Error fetching cart:', err);
    }
  };

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.product.originalPrice * item.quantity, 0);
    setTotalAmount(total);
  };

  const handleRemove = async (itemId) => {
    try {
      await axios.delete(`https://ecommerce-api-8ga2.onrender.com/api/cart/remove/${itemId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchCartItems(); // refresh cart
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await axios.put(`https://ecommerce-api-8ga2.onrender.com/api/cart/update/${itemId}`, {
        quantity: newQuantity
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchCartItems();
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-[80px]">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between border p-4 mb-4 rounded shadow">
              <div className="flex items-center gap-4">
                <img src={item.product.image} alt={item.product.name} className="w-[100px] h-[100px] rounded" />
                <div>
                  <h3 className="text-lg font-semibold">{item.product.name}</h3>
                  <p>Price: ₹{item.product.originalPrice}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)} className="px-2 bg-gray-200">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)} className="px-2 bg-gray-200">+</button>
                  </div>
                </div>
              </div>
              <div>
                <button onClick={() => handleRemove(item._id)} className="bg-red-500 text-white px-3 py-1 rounded">Remove</button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">Total: ₹{totalAmount}</h3>
            <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
