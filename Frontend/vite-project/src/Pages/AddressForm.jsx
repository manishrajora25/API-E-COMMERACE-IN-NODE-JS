// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const AddressForm = () => {
//   const [formDataup, setFormDataup] = useState({
//     address: '',
//     email: '',
//     number: ''
//   });

//   const location = useLocation();
//   const product = location.state?.product || {};

//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [orderSuccess, setOrderSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormDataup({ ...formDataup, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     setOrderSuccess(true);
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
//               <h3 className="text-xl font-semibold text-gray-800">Product: {product.name || 'N/A'}</h3>
//               <p className="text-md text-gray-700">Price: ₹{product.originalPrice || '0'}</p>
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
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
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
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
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
//                   { id: "cod", label: "Cash on Delivery" },
//                 ].map((method) => (
//                   <div
//                     key={method.id}
//                     className="flex items-center mb-3 bg-gray-50 p-3 rounded-lg border hover:shadow-md transition duration-200"
//                   >
//                     <input
//                       type="radio"
//                       id={method.id}
//                       name="paymentMethod"
//                       value={method.id}
//                       checked={paymentMethod === method.id}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                       className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500"
//                     />
//                     <label htmlFor={method.id} className="text-gray-700 cursor-pointer">
//                       {method.label}
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-lg"
//               >
//                 Submit
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







// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
// import Instance from "../Axios.js"; // instance import

// const AddressForm = () => {
//   const [formDataup, setFormDataup] = useState({
//     address: "",
//     email: "",
//     number: "",
//   });

//   const location = useLocation();
//   const product = location.state?.product || {};

//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [orderSuccess, setOrderSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormDataup({ ...formDataup, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     try {
//       await Instance.post("/order/buynow", {
//         productId: product._id,
//         quantity: 1,
//         address: formDataup.address,
//         phone: formDataup.number,
//         paymentMethod,
//       });

//       toast.success("Order placed successfully!");
//       setOrderSuccess(true);
//     } catch (err) {
//       toast.error("Order failed: " + err.message);
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
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
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
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
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
//                   { id: "upi", label: "UPI (Google Pay / PhonePe / Amazon Pay)" },
//                   { id: "card", label: "Credit / Debit Card" },
//                   { id: "netbanking", label: "Net Banking" },
//                   { id: "cod", label: "Cash on Delivery" },
//                 ].map((method) => (
//                   <div
//                     key={method.id}
//                     className="flex items-center mb-3 bg-gray-50 p-3 rounded-lg border hover:shadow-md transition duration-200"
//                   >
//                     <input
//                       type="radio"
//                       id={method.id}
//                       name="paymentMethod"
//                       value={method.id}
//                       checked={paymentMethod === method.id}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                       className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500"
//                     />
//                     <label
//                       htmlFor={method.id}
//                       className="text-gray-700 cursor-pointer"
//                     >
//                       {method.label}
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-lg"
//               >
//                 Submit
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
















import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Instance from "../Axios.js"; // Axios instance
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51RtMbYPXJmbviv6Lhv2DUHHpyMoTZOBS3gG3gLyTmEB396yw7RPpydIUoWrmIpqQVtuqiEHbZGY2E9b0j5jULe7500MTIQs6Ay"); // apna Stripe publishable key yahan

const CheckoutForm = ({ product, formDataup, paymentMethod, setOrderSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    try {
      // 1️⃣ Backend se clientSecret lo
      const paymentRes = await Instance.post("/create/payment", {
        amount: product.originalPrice * 100, // paise me
        currency: "inr",
        metadata: { productId: product._id }
      });

      const clientSecret = paymentRes.data.clientSecret;

      // 2️⃣ Stripe payment confirm karo
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "Test User",
            email: formDataup.email || "test@example.com"
          }
        }
      });

      if (result.error) {
        toast.error(result.error.message);
        return;
      }

      if (result.paymentIntent.status === "succeeded") {
        toast.success("Payment successful! Placing order...");

        // 3️⃣ Order save karo
        await Instance.post("/order/buynow", {
          productId: product._id,
          quantity: 1,
          address: formDataup.address,
          phone: formDataup.number,
          paymentMethod: "card"
        });

        setOrderSuccess(true);
      }
    } catch (err) {
      toast.error("Payment failed: " + err.message);
    }
  };

  return (
    <div>
      <CardElement className="p-3 border rounded mb-4" />
      <button
        type="button"
        onClick={handlePayment}
        disabled={!stripe}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-lg"
      >
        Pay Now
      </button>
    </div>
  );
};

const AddressForm = () => {
  const [formDataup, setFormDataup] = useState({
    address: "",
    email: "",
    number: ""
  });

  const location = useLocation();
  const product = location.state?.product || {};

  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleChange = (e) => {
    setFormDataup({ ...formDataup, [e.target.name]: e.target.value });
  };

  const handleCOD = async () => {
    try {
      await Instance.post("/order/buynow", {
        productId: product._id,
        quantity: 1,
        address: formDataup.address,
        phone: formDataup.number,
        paymentMethod: "cod"
      });
      toast.success("Order placed successfully!");
      setOrderSuccess(true);
    } catch (err) {
      toast.error("Order failed: " + err.message);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
        <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-2xl mt-10 border border-gray-200">
          {!orderSuccess ? (
            <>
              <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
                🚚 Shipping Address
              </h2>

              {/* Product Info */}
              <div className="bg-gray-100 p-4 rounded-lg mb-6 border">
                <h3 className="text-xl font-semibold text-gray-800">
                  Product: {product.name || "N/A"}
                </h3>
                <p className="text-md text-gray-700">
                  Price: ₹{product.originalPrice || "0"}
                </p>
              </div>

              <form className="space-y-6">
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
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
                    { id: "card", label: "Credit / Debit Card" },
                    { id: "cod", label: "Cash on Delivery" }
                  ].map((method) => (
                    <div key={method.id} className="flex items-center mb-3">
                      <input
                        type="radio"
                        id={method.id}
                        name="paymentMethod"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <label htmlFor={method.id}>{method.label}</label>
                    </div>
                  ))}
                </div>

                {/* Conditional Payment Form */}
                {paymentMethod === "card" && (
                  <CheckoutForm
                    product={product}
                    formDataup={formDataup}
                    paymentMethod={paymentMethod}
                    setOrderSuccess={setOrderSuccess}
                  />
                )}

                {paymentMethod === "cod" && (
                  <button
                    type="button"
                    onClick={handleCOD}
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    Place COD Order
                  </button>
                )}
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
    </Elements>
  );
};

export default AddressForm;
