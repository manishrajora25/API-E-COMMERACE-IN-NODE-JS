// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { UserContext } from '../component/useContext';
// import { useLocation } from 'react-router-dom';


// const AddressForm = () => {
//     const { user } = useContext(UserContext);
//     const navigate = useNavigate();
//     const location = useLocation(); // ✅ useLocation hook
//     const { productId, quantity } = location.state || {};

//   const [formData, setFormData] = useState({
//     name: user?.name || '',
//     email: user?.email || '',
//     phone: '',
//     address: '',
//     pincode: '',
//     state: '',
//     district: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ✅ You can POST this to backend if needed
//     console.log("Submitted Address:", formData);

//     toast.success("Address submitted successfully!", {
//       position: "top-right",
//       autoClose: 2000,
//       theme: "colored",
//     });

//     setTimeout(() => {
//       navigate('/payment');
//     }, 1500);
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-24 p-6 shadow-lg rounded-xl bg-white">
//       <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Enter Delivery Address</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           name="name"
//           type="text"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
//         />

//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded-lg"
//         />

//         <input
//           name="phone"
//           type="tel"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded-lg"
//         />

//         <textarea
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded-lg resize-none"
//         />

//         <div className="flex gap-4">
//           <input
//             name="pincode"
//             type="text"
//             placeholder="Pincode"
//             value={formData.pincode}
//             onChange={handleChange}
//             required
//             className="w-1/2 px-4 py-2 border rounded-lg"
//           />

//           <input
//             name="district"
//             type="text"
//             placeholder="District"
//             value={formData.district}
//             onChange={handleChange}
//             required
//             className="w-1/2 px-4 py-2 border rounded-lg"
//           />
//         </div>

//         <input
//           name="state"
//           type="text"
//           placeholder="State"
//           value={formData.state}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded-lg"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
//         >
//           Submit & Continue to Payment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddressForm;









import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const AddressForm = () => {
  const [formDataup, setFormDataup] = useState({
    address: '',
    email: '',
    number: ''
  });

  const location = useLocation();
  const product = location.state?.product || {};

  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleChange = (e) => {
    setFormDataup({ ...formDataup, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    setOrderSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-2xl mt-10 border border-gray-200">
        {!orderSuccess ? (
          <>
            <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
              🚚 Shipping Address
            </h2>

            {/* ✅ Product Info */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6 border">
              <h3 className="text-xl font-semibold text-gray-800">Product: {product.name || 'N/A'}</h3>
              <p className="text-md text-gray-700">Price: ₹{product.originalPrice || '0'}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Address Field */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Full Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formDataup.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  placeholder="Enter your full address"
                  required
                />

                <label className="block text-sm font-semibold mb-2 text-gray-700 mt-4">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="number"
                  value={formDataup.number}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Select Payment Method
                </h3>

                {[
                  { id: "upi", label: "UPI (Amazon Pay / Google Pay)" },
                  { id: "card", label: "Credit / Debit Card" },
                  { id: "netbanking", label: "Net Banking" },
                  { id: "cod", label: "Cash on Delivery" },
                ].map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center mb-3 bg-gray-50 p-3 rounded-lg border hover:shadow-md transition duration-200"
                  >
                    <input
                      type="radio"
                      id={method.id}
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor={method.id} className="text-gray-700 cursor-pointer">
                      {method.label}
                    </label>
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-lg"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold text-green-600 mb-4">
              🎉 Order Successful!
            </h2>
            <p className="text-lg text-gray-700">
              Your order has been placed successfully.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressForm;

