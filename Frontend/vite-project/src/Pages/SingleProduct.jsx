// src/Pages/SingleProduct.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import Instance from '../Axios.js';
import "../Pages/Home.css"
import axios from 'axios';
import Header from "../component/Header.jsx"
import Footer from '../component/Footer.jsx';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

const navigate = useNavigate();
const location = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!product) return <div className="text-center mt-10 text-red-500">Product not found.</div>;




  const handleAddToCart = async () => {
    const token = localStorage.getItem("token"); 
  
    if (!token) {
      navigate("/login", {
        state: { from: location.pathname, productToAdd: product }
      });
      return;
    }
  
    try {
      const res = await axios.post(
        `http://localhost:3000/product/cart/${id}`,
        {
          productId: product._id,
          quantity: 1
        }
      );
  
      console.log("Added to cart:", res.data);
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error.response?.data || error.message);
    }
  };
  



  return (
    <>
    <Header /> {/* ✅ Header added here */}

    <div className="max-w-4xl mx-auto p-6 mt-10 shadow-lg rounded-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-[340px] h-[340px]  object-cover  rounded-[20px]"
        />

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4 capitalize">{product.category}</p>

          <div className="mb-4">
            <span className="text-xl text-green-600 font-semibold mr-2">
              Price ₹{product.originalPrice}
            </span> <br />
            <span className="text-gray-400 line-through">
              Discount ₹{product.discountedPrice}
            </span>
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="flex gap-4">
          <button
  onClick={handleAddToCart}
  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
>
  Add to Cart
</button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer/>

  </>
);
};

export default SingleProduct;
