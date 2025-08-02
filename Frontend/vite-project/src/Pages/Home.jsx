import React from 'react'
import "../Pages/Home.css"
import { Link } from 'react-router-dom';
import Instance from '../Axios.js';
import { useEffect, useState } from "react";


const Home = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Instance.get("/product/all"); 
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    

    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 py-8 mt-10">
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Enhanced Header */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        All Products
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 border border-gray-100"
        >
          {/* Enhanced Image Container */}
          <div className="aspect-square p-4 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden relative">
            <Link to={`/singleproduct/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-[250px] h-[230px] object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-md"
              />
            </Link>

            {/* Discount Badge */}
            {product.originalPrice > product.discountedPrice && (
              <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                {Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100)}% OFF
              </div>
            )}

            {/* New Badge */}
            <div className="absolute top-69 right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
              NEW
            </div>


          </div>

          {/* Enhanced Content Section */}
          <div className="p-4 bg-white">
            <Link to={`/singleproduct/${product._id}`}>
              <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200 text-lg">
                {product.name}
              </h3>
            </Link>

            {/* Enhanced Slug Display */}
            <p className="text-sm text-gray-500 mb-2 flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633z" clipRule="evenodd" />
              </svg>
              <strong></strong> {product.slug}
            </p>

            {/* Enhanced Category Display */}
            <div className="mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {product.category}
              </span>
            </div>

            {/* Enhanced Price Section */}
            <div className="flex items-center justify-between mt-3 mb-3">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 font-medium">Price:</span>
                  <span className="text-xl font-bold text-green-600">
                    ₹{product.originalPrice}
                  </span>
                </div>
                <div className="text-sm text-red-500 font-medium mt-1">
                  <span className="line-through">Discounted: ₹{product.discountedPrice}</span>
                  <span className="ml-2 bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-bold">
                    Save ₹{product.originalPrice - product.discountedPrice}
                  </span>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-gray-500 ml-1">(4.0)</span>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-sm text-gray-700 mt-3 mb-4 line-clamp-3 leading-relaxed bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
              {product.description}
            </p>



            {/* Bottom Accent */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mt-4 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  
    
    </>

  );
  
};


export default Home;