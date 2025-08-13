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







// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// // import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const AddressForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [formDataup, setFormDataup] = useState({
//     address: "",
//     email: "",
//     number: ""
//   });

//   const location = useLocation();
//   const product = location.state?.product || {};

//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [orderSuccess, setOrderSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormDataup({ ...formDataup, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     if (paymentMethod === "card") {
//       if (!stripe || !elements) return;

//       try {
//         setLoading(true);

//         // 1️⃣ Backend se PaymentIntent create karna
//         const res = await fetch("http://localhost:5000/create/payment", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ amount: product.originalPrice * 100 }) // in paise
//         });

//         const { clientSecret } = await res.json();

//         // 2️⃣ Card payment confirm karna
//         const result = await stripe.confirmCardPayment(clientSecret, {
//           payment_method: {
//             card: elements.getElement(CardElement),
//             billing_details: {
//               name: formDataup.email,
//               address: { line1: formDataup.address }
//             }
//           }
//         });

//         if (result.error) {
//           alert(result.error.message);
//         } else if (result.paymentIntent.status === "succeeded") {
//           setOrderSuccess(true);
//         }
//       } catch (error) {
//         console.error("Payment error:", error);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       // COD / UPI ke liye
//       setOrderSuccess(true);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
//       <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-2xl mt-10 border border-gray-200">
//         {!orderSuccess ? (
//           <>
//             <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
//               🚚 Shipping Address
//             </h2>

//             {/* ✅ Product Info */}
//             <div className="bg-gray-100 p-4 rounded-lg mb-6 border">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Product: {product.name || "N/A"}
//               </h3>
//               <p className="text-md text-gray-700">
//                 Price: ₹{product.originalPrice || "0"}
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Address Field */}
//               <div>
//                 <label className="block text-sm font-semibold mb-2 text-gray-700">
//                   Full Address
//                 </label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formDataup.address}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3"
//                   placeholder="Enter your full address"
//                   required
//                 />

//                 <label className="block text-sm font-semibold mb-2 text-gray-700 mt-4">
//                   Phone Number
//                 </label>
//                 <input
//                   type="number"
//                   name="number"
//                   value={formDataup.number}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3"
//                   placeholder="Enter your Phone Number"
//                   required
//                 />
//               </div>

//               {/* Payment Methods */}
//               <div>
//                 <h3 className="text-lg font-semibold mb-4 text-gray-800">
//                   Select Payment Method
//                 </h3>

//                 {[
//                   { id: "upi", label: "UPI (Amazon Pay / Google Pay)" },
//                   { id: "card", label: "Credit / Debit Card" },
//                   { id: "netbanking", label: "Net Banking" },
//                   { id: "cod", label: "Cash on Delivery" }
//                 ].map((method) => (
//                   <div key={method.id} className="flex items-center mb-3">
//                     <input
//                       type="radio"
//                       id={method.id}
//                       name="paymentMethod"
//                       value={method.id}
//                       checked={paymentMethod === method.id}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                       className="mr-3 h-4 w-4"
//                     />
//                     <label htmlFor={method.id}>{method.label}</label>
//                   </div>
//                 ))}
//               </div>

//               {/* Card Element for Stripe */}
//               {paymentMethod === "card" && (
//                 <div className="border p-4 rounded-lg">
//                   <CardElement />
//                 </div>
//               )}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg"
//               >
//                 {loading ? "Processing..." : "Submit"}
//               </button>
//             </form>
//           </>
//         ) : (
//           <div className="text-center py-20">
//             <h2 className="text-4xl font-bold text-green-600 mb-4">
//               🎉 Order Successful!
//             </h2>
//             <p className="text-lg text-gray-700">
//               Your order has been placed successfully.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddressForm;
