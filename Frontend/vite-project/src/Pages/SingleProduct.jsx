import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useParams } from "react-router-dom";
import Instance from "../Axios.js";
import "../Pages/Home.css";
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    Instance
      .get(`/product/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await Instance.get(
          "/user/checkToken", 
          { withCredentials: true }
        );

        if (!response.data?.User) {
          throw new Error("User not found in token response");
        }
        // console.log(response.data.User);
        // setCurrentUser(response.data.User);
        const user = response.data?.User;

        if (!user || !user.id) {
          throw new Error("User not found in token response");
        }

        setCurrentUser(user);
      } catch (e) {
        console.error("User fetch error:", e);
        setCurrentUser(null);
      }
    }

    fetchUser();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!product)
    return (
      <div className="text-center mt-10 text-red-500">Product not found.</div>
    );

  const handleAddToCart = async () => {
    if (!currentUser) {
      navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
      return;
    }

    try {
      const res = await Instance.post(
        `/product/cart/${id}`,
        { quantity: 1 },
        {
          withCredentials: true, 
        }
      );
      console.log("Added to cart:", res.data);
      toast.success("Added to cart successful!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });

      setTimeout(() => navigate("/cart"), 3000);
    } catch (error) {
      console.error(
        "Error adding to cart:",
        error.response?.data || error.message
      );
      toast.error("Cart not add", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  const handleAddToWishlist = async () => {
    if (!currentUser) {
      navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
      return;
    }

    try {
      const res = await Instance.post(
        `/product/wishlist/${id}`,
        { userId: currentUser.id }, // ✅ Pass userId in body
        { withCredentials: true }
      );
      console.log("Wishlist response:", res.data);
      toast.success(res.data.message || "Added to wishlist!");
      setTimeout(() => navigate("/wishlist"), 3000);
    } catch (error) {
      console.error("Wishlist error:", error.response?.data || error.message);
      toast.error("Failed to add to wishlist");
    }
  };

  return (
    <>
      <Header /> {/* ✅ Header added here */}
      <div className="max-w-5xl mx-auto p-6 mt-24 shadow-xl rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 relative overflow-hidden -z-0">
  {/* Background subtle decoration */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
  <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-pink-100 rounded-full opacity-30"></div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
    {/* Image */}
    <div className="flex justify-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-[330px] h-auto object-cover rounded-2xl shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500 ring-2 ring-white"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-between space-y-4">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-1">
          {product.name}
        </h1>
        <p className="text-sm text-blue-600 capitalize mb-3 font-semibold tracking-wider">
          Category: {product.category}
        </p>

        <div className="mb-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-400">
          <span className="text-3xl text-green-600 font-bold mr-3 drop-shadow-sm">
            ₹{product.originalPrice}
          </span>
          <span className="text-gray-500 line-through text-lg">
            ₹{product.discountedPrice}
          </span>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          onClick={handleAddToCart}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
        >
          Add to Cart
        </button>
        <button
          onClick={handleAddToWishlist}
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
};

export default SingleProduct;
