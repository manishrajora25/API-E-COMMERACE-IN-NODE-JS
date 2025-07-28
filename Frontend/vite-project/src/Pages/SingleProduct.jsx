import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Instance from '../Axios'; // ✅ import your custom axios instance

const SingleProduct = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Instance.get(`/${id}`) // ✅ corrected endpoint
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

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 shadow-lg rounded-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-contain border rounded"
        />

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4 capitalize">{product.category}</p>

          <div className="mb-4">
            <span className="text-xl text-red-600 font-semibold mr-2">
              ₹{product.discountedPrice}
            </span>
            <span className="text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
