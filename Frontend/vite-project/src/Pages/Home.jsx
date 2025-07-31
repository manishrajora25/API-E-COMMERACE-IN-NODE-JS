import React from 'react'
import "../Pages/Home.css"
import { Link } from 'react-router-dom';
// adjust path if needed


import axios from "axios";
import { useEffect, useState } from "react";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/product/all");
        setProducts(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 py-8 mt-20 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">All Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <div
              key={product._id}
              className=" rounded-lg bg-gray-50 shadow hover:shadow-md transition overflow-hidden group"
            >
              <div className="aspect-square p-4 bg-gray-50 flex items-center justify-center overflow-hidden">
                <Link to= {`/singleproduct/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[250px] h-[230px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
                </Link>
              </div>

              <div className="p-4 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 mb-1">
                  <strong>Slug:</strong> {product.slug}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <strong>Category:</strong> {product.category}
                </p>

                <div className="flex items-center justify-start mt-2 space-x-1">
                  <span className="text-sm text-gray-600 font-medium">Price:</span>
                
                  <span className="text-lg font-bold text-green-600">
                   ₹{product.originalPrice}
                  </span>
                </div>

                <div className="text-sm line-through text-gray-500">
                   DiscountedPrice: ₹{product.discountedPrice}
                </div>

                <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                  {product.description}
                </p>

                {/* <div className="mt-2">
                  <p className="text-sm text-gray-700">
                    <strong>Quantity:</strong> {product.quantity}
                  </p>
                </div> */}

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;