  import React, { useEffect, useState } from "react";
  import { useNavigate, Link, useLocation } from "react-router-dom";
  import Instance from "../Axios.js";
  import Header from "../component/Header.jsx";
  import Footer from "../component/Footer.jsx";
  import { toast } from "react-toastify";
  import { MdDelete } from "react-icons/md";

  const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    // ✅ Fetch user and wishlist
    useEffect(() => {
      async function fetchUserAndWishlist() {
        try {
          const response = await Instance.get("/user/checkToken", {
            withCredentials: true,
          });

          const user = response.data?.User;
          if (!user || !user.id) throw new Error("User not found in token");

          setCurrentUser(user);

          // ✅ Fetch wishlist only if user exists
          const wishlistRes = await Instance.get("/product/wishlist/data", {
            withCredentials: true,
          });
          setWishlist(wishlistRes.data?.wishlist || []);
        } catch (e) {
          console.error("User or Wishlist fetch error:", e);
          setCurrentUser(null);
          navigate(`/login?refere=${encodeURIComponent(location.pathname)}`);
        }
      }

      fetchUserAndWishlist();
    }, [navigate, location.pathname]);

    if (!currentUser) return null;

    const handleRemove = async (productId) => {
      try {
        const res = await Instance.delete(
          `/product/wishlist/${productId}`,
          { withCredentials: true }
        );

        toast.success("Wishlist item removed!", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });

        // ✅ Update UI
        setWishlist((prev) =>
          prev.filter((item) => item.product._id !== productId)
        );
      } catch (error) {
        console.error("Remove error:", error);
        toast.error("Failed to remove from wishlist", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
      }
    };

    return (
      <>
        <Header />

        <div className="max-w-6xl mx-auto px-4 py-8 mt-[80px]">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            My Wishlist
          </h2>

          {wishlist.length === 0 ? (
            <p className="text-center text-gray-600">Your wishlist is empty.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((item) => (
                <div
                  key={item.product._id}
                  className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                >
                  {/* Product Image */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />

                  {/* Product Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.product.category}
                    </p>
                    <p className="text-green-600 font-bold text-md mt-1">
                      ₹{item.product.originalPrice}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center mt-4">
                    <Link
                      to={`/`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                    >
                      View Product
                    </Link>

                    <MdDelete
                      onClick={() => handleRemove(item.product._id)}
                      className="text-red-500 hover:text-red-700 text-xl cursor-pointer"
                      title="Remove from wishlist"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Footer />
      </>
    );
  };

  export default Wishlist;
