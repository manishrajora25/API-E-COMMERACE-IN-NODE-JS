// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     product: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Product",
//       required: true,
//     },
//     quantity: {
//       type: Number,
//       required: true,
//       default: 1,
//     },
//     totalPrice: {
//       type: Number,
//       required: true,
//     },
//     paymentStatus: {
//       type: String,
//       enum: ["Pending", "Completed", "Failed"],
//       default: "Pending",
//     },
  
//     // ✅ New Address Fields
//     name: String,
//     email: String,
//     phone: String,
//     address: String,
//     pincode: String,
//     state: String,
//     district: String,
  
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//   });
  

// const Order = mongoose.model("Order", orderSchema);
// export default  Order ;





import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "INR", // Default Indian Rupee
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Pending",
  },
  paymentMethod: {
    type: String,
    enum: ["UPI", "Card", "Netbanking", "COD"],
    required: true,
  },
  paymentIntentId: {
    type: String, // Stripe ka payment intent ID
  },

  // ✅ Address Info
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;


