// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// import { useParams } from "react-router-dom";
// import Instance from "../Axios.js";
// import "../Pages/Home.css";
// import Header from "../component/Header.jsx";
// import Footer from "../component/Footer.jsx";
// import { toast } from "react-toastify";
// import { UserContext } from "../component/useContext.jsx";

// const SingleProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
// const {user}=useContext(UserContext)
//   const navigate = useNavigate();
//   const location = useLocation();

// console.log(user)
 
//   useEffect(() => {
//     Instance
//       .get(`/product/${id}`)
//       .then((res) => {
//         setProduct(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching product:", err);
//         setLoading(false);
//       });
//   }, [id]);

 

//   if (loading) return <div className="text-center mt-10">Loading...</div>;
//   if (!product)
//     return (
//       <div className="text-center mt-10 text-red-500">Product not found.</div>
//     );

//   const handleAddToCart = async () => {
   
//     if (!user) {
//       navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
      
//     }

//     try {
//       const res = await Instance.post(
//         `/product/cart/${id}`,
//         { quantity: 1 },
//         {
//           withCredentials: true, 
//         }
//       );
//       console.log("Added to cart:", res.data);
//       toast.success("Added to cart successful!", {
//         position: "top-right",
//         autoClose: 2000,
//         theme: "colored",
//       });

//       //  navigate("/cart")
//        setTimeout(() => navigate("/cart"), 3000);
//     } catch (error) {
//       console.error(
//         "Error adding to cart:",
//         error.response?.data || error.message
//       );
      
//     }
//   };

//   const handleAddToWishlist = async () => {
//     if (!user) {
//       navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
//       return;
//     }

//     try {
//       const res = await Instance.post(
//         `/product/wishlist/${id}`,
//         { userId: user.id }, // ✅ Pass userId in body
//         { withCredentials: true }
//       );
//       console.log("Wishlist response:", res.data);
//       toast.success(res.data.message || "Added to wishlist!");
//       setTimeout(() => navigate("/wishlist"), 3000);
//     } catch (error) {
//       console.error("Wishlist error:", error.response?.data || error.message);
//       toast.error("Failed to add to wishlist");
//     }
//   };





//   const handleBuyNow = async (productId) => {
//     const { user } = useContext(UserContext);
//     const navigate = useNavigate();
  
//     if (!user) {
//       navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
//       return;
//     }
  
//     try {
//       const res = await Instance.post(
//         "/order/buynow",
//         { productId, quantity: 1 },
//         { withCredentials: true }
//       );
  
//       toast.success("Order placed successfully!");
//       navigate("/thankyou"); // or /orders
//     } catch (err) {
//       toast.error("Failed to place order");
//       console.error(err.response?.data || err.message);
//     }
//   };






//   return (
//     <>
//       <Header /> {/* ✅ Header added here */}
//       <div className="max-w-5xl mx-auto p-6 mt-24 shadow-xl rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 relative overflow-hidden -z-0">
//   {/* Background subtle decoration */}
//   <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
//   <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-pink-100 rounded-full opacity-30"></div>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
//     {/* Image */}
//     <div className="flex justify-center">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full max-w-[330px] h-auto object-cover rounded-2xl shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500 ring-2 ring-white"
//       />
//     </div>

//     {/* Content */}
//     <div className="flex flex-col justify-between space-y-4">
//       <div>
//         <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-1">
//           {product.name}
//         </h1>
//         <p className="text-sm text-blue-600 capitalize mb-3 font-semibold tracking-wider">
//           Category: {product.category}
//         </p>

//         <div className="mb-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-400">
//           <span className="text-3xl text-green-600 font-bold mr-3 drop-shadow-sm">
//             ₹{product.originalPrice}
//           </span>
//           <span className="text-gray-500 line-through text-lg">
//             ₹{product.discountedPrice}
//           </span>
//         </div>

//         <p className="text-gray-700 text-sm leading-relaxed">
//           {product.description}
//         </p>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row gap-4 mt-6">
//         <button
//           onClick={handleAddToCart}
//           className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
//         >
//           Add to Cart
//         </button>
//         <button
//           onClick={handleAddToWishlist}
//           className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
//         >
//           Add to Wishlist
//         </button>


//         <button
//   onClick={() => handleBuyNow(product._id)}
//   className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// >
//   Buy Now
// </button>



//       </div>
//     </div>
//   </div>
// </div>

//       <Footer />
//     </>
//   );
// };

// export default SingleProduct;




// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useLocation, useParams } from "react-router-dom";
// import Instance from "../Axios.js";
// import "../Pages/Home.css";
// import Header from "../component/Header.jsx";
// import Footer from "../component/Footer.jsx";
// import { toast } from "react-toastify";
// import { UserContext } from "../component/useContext.jsx";

// const SingleProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { user } = useContext(UserContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     Instance.get(`/product/${id}`)
//       .then((res) => {
//         setProduct(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching product:", err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <div className="text-center mt-10">Loading...</div>;
//   if (!product)
//     return (
//       <div className="text-center mt-10 text-red-500">Product not found.</div>
//     );

//   const handleAddToCart = async () => {
//     if (!user) {
//       navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
//       return;
//     }

//     try {
//       const res = await Instance.post(
//         `/product/cart/${id}`,
//         { quantity: 1 },
//         { withCredentials: true }
//       );
//       toast.success("Added to cart successful!", {
//         position: "top-right",
//         autoClose: 2000,
//         theme: "colored",
//       });
//       setTimeout(() => navigate("/cart"), 3000);
//     } catch (error) {
//       console.error("Error adding to cart:", error.response?.data || error.message);
//     }
//   };

//   const handleAddToWishlist = async () => {
//     if (!user) {
//       navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
//       return;
//     }

//     try {
//       const res = await Instance.post(
//         `/product/wishlist/${id}`,
//         { userId: user.id },
//         { withCredentials: true }
//       );
//       toast.success(res.data.message || "Added to wishlist!");
//       setTimeout(() => navigate("/wishlist"), 3000);
//     } catch (error) {
//       toast.error("Failed to add to wishlist");
//       console.error("Wishlist error:", error.response?.data || error.message);
//     }
//   };

//   const handleBuyNow = async (productId) => {
//     if (!user) {
//       navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
//       return;
//     }

//     try {
//       const res = await Instance.post(
//         "/order/buynow",
//         { productId, quantity: 1 },
//         { withCredentials: true }
//       );

//       toast.success("Order placed successfully!");
//       navigate("/thankyou");
//     } catch (err) {
//       toast.error("Failed to place order");
//       console.error(err.response?.data || err.message);
//     }
//   };

//   const handleDeleteProduct = async () => {
//     try {
//       await Instance.delete(`/product/${product._id}`, {
//         withCredentials: true
//       });
//       toast.success("Product deleted successfully!");
//         setTimeout(()=>  navigate("/"),3000);
//     } catch (err) {
//       toast.error("Failed to delete product.");
//       console.error(err.response?.data || err.message);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="max-w-5xl mx-auto p-6 mt-24 shadow-xl rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 relative overflow-hidden -z-0">
//         <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
//         <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-pink-100 rounded-full opacity-30"></div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
//           {/* Image */}
//           <div className="flex justify-center">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full max-w-[330px] h-auto object-cover rounded-2xl shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500 ring-2 ring-white"
//             />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col justify-between space-y-4">
//             <div>
//               <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-1">
//                 {product.name}
//               </h1>
//               <p className="text-sm text-blue-600 capitalize mb-3 font-semibold tracking-wider">
//                 Category: {product.category}
//               </p>

//               <div className="mb-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-400">
//                 <span className="text-3xl text-green-600 font-bold mr-3 drop-shadow-sm">
//                   ₹{product.originalPrice}
//                 </span>
//                 <span className="text-gray-500 line-through text-lg">
//                   ₹{product.discountedPrice}
//                 </span>
//               </div>

//               <p className="text-gray-700 text-sm leading-relaxed">
//                 {product.description}
//               </p>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mt-6">
//               {user?.role === "admin" ? (
//                 <>
//                   <button
//                     onClick={handleDeleteProduct}
//                     className="bg-red-600 text-white px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:bg-red-700 hover:scale-105"
//                   >
//                     Delete Product
//                   </button>

//                   <button
//                     onClick={() => navigate(`/updateproduct/${product._id}`)}
//                     className="bg-yellow-500 text-white px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:bg-yellow-600 hover:scale-105"
//                   >
//                     Update Product
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button
//                     onClick={handleAddToCart}
//                     className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
//                   >
//                     Add to Cart
//                   </button>
//                   <button
//                     onClick={handleAddToWishlist}
//                     className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
//                   >
//                     Add to Wishlist
//                   </button>
//                   <button
//                     onClick={() => handleBuyNow(product._id)}
//                     className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                   >
//                     Buy Now
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default SingleProduct;






import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Instance from "../Axios.js";
import "../Pages/Home.css";
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import { toast } from "react-toastify";
import { UserContext } from "../component/useContext.jsx";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    Instance.get(`/product/${id}`)
      .then((res) => {
        setProduct(res.data);
        setUpdatedData(res.data); // Set default values in update form
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = async () => {
    if (!user) {
      return navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
    }

    try {
      await Instance.post(
        `/product/cart/${id}`,
        { quantity: 1 },
        { withCredentials: true }
      );
      toast.success("Added to cart successfully!");
      setTimeout(() => navigate("/cart"), 3000);
    } catch (error) {
      console.error("Add to cart error:", error.response?.data || error.message);
    }
  };

  const handleAddToWishlist = async () => {
    if (!user) {
      return navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
    }

    try {
      await Instance.post(
        `/product/wishlist/${id}`,
        { userId: user.id },
        { withCredentials: true }
      );
      toast.success("Added to wishlist!");
      setTimeout(() => navigate("/wishlist"), 3000);
    } catch (error) {
      toast.error("Failed to add to wishlist");
    }
  };

  const handleBuyNow = async () => {
    if (!user) {
      return navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
    }

    try {
      await Instance.post(
        "/order/buynow",
        { productId: id, quantity: 1 },
        { withCredentials: true }
      );
      toast.success("Order placed successfully!");
      // navigate("/addressForm",  { state: { product } }, {
      //   state: { productId: product._id, quantity: 1 }
      // });
      navigate("/addressForm", {
        state: {
          product,
          productId: product._id,
          quantity: 1,
        }
      });
    } catch (err) {
      toast.error("Failed to place order");
    }
  };

  const handleDeleteProduct = async () => {
    try {
      await Instance.delete(`/product/${product._id}`, {
        withCredentials: true
      });
      toast.success("Product deleted successfully!");
      navigate("/");
    } catch (err) {
      toast.error("Failed to delete product.");
    }
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Instance.put(`/product/update/${product._id}`, updatedData, {
        withCredentials: true,
      });
      toast.success("Product updated successfully!");
      setProduct(res.data);
      setShowUpdateForm(false);
    } catch (err) {
      toast.error("Failed to update product.");
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!product)
    return <div className="text-center mt-10 text-red-500">Product not found.</div>;

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto p-6 mt-24 shadow-xl rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 relative overflow-hidden -z-0">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-pink-100 rounded-full opacity-30"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-[330px] h-auto object-cover rounded-2xl shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500 ring-2 ring-white"
            />
          </div>

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

              <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
            </div>

            {/* Buttons: Conditional for user vs admin */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              {user?.role === "admin" ? (
                <>
                  <button
                    onClick={handleDeleteProduct}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setShowUpdateForm(!showUpdateForm)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    {showUpdateForm ? "Close Update" : "Update Product"}
                  </button>
                </>
              ) : (
                <>
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
                  <button
                    onClick={handleBuyNow}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Buy Now
                  </button>
                </>
              )}
            </div>

            {/* Toggleable Update Form for Admin */}
            {user?.role === "admin" && showUpdateForm && (
              <form onSubmit={handleUpdateSubmit} className="mt-6 grid gap-4">
                <input
                  type="text"
                  name="name"
                  value={updatedData.name || ""}
                  onChange={handleUpdateChange}
                  placeholder="Product Name"
                  className="p-2 border rounded"
                />
                <input
                  type="number"
                  name="originalPrice"
                  value={updatedData.originalPrice || ""}
                  onChange={handleUpdateChange}
                  placeholder="Original Price"
                  className="p-2 border rounded"
                />
                <input
                  type="number"
                  name="discountedPrice"
                  value={updatedData.discountedPrice || ""}
                  onChange={handleUpdateChange}
                  placeholder="Discounted Price"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  name="category"
                  value={updatedData.category || ""}
                  onChange={handleUpdateChange}
                  placeholder="Category"
                  className="p-2 border rounded"
                />
                <textarea
                  name="description"
                  value={updatedData.description || ""}
                  onChange={handleUpdateChange}
                  placeholder="Description"
                  className="p-2 border rounded"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Submit Update
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
