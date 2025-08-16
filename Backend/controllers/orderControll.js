// import Order from "../models/Order.js";
// // import Product from "../models/Product.js";
// import { Product } from '../models/Product.js';


// export const buyNow = async (req, res) => {
   
//     try {
//         const userId = req.user.id;
//       const {
//         productId,
//         quantity,
//         name,
//         email,
//         phone,
//         address,
//         pincode,
//         state,
//         district,
//         paymentMethod, // COD or UPI
//       } = req.body;
  
//       const product = await Product.findById(productId);
//       if (!product)
//         return res.status(404).json({ message: "Product not found" });
  
//       const totalPrice = product.originalPrice * quantity;
  
//       const order = new Order({
//         user: userId,
//         product: productId,
//         quantity,
//         totalPrice,
//         name,
//         email,
//         phone,
//         address,
//         pincode,
//         state,
//         district,
//         paymentStatus: paymentMethod === "COD" ? "Completed" : "Pending", // Stripe will mark completed later
//       });
  
//       await order.save();
  
//       res.status(201).json({
//         message: "Order placed successfully",
//         order,
//       });
//     } catch (err) {
//       console.error("Buy Now Error:", err);
//       res.status(500).json({ message: "Failed to place order" });
//     }
//   };
  
  

// // export const buyNow = async (req, res) => {
// //     try {
// //       const userId = req.user.id; // ✅ lowercase 'user'
// //       const { productId, quantity } = req.body;
  
// //       const product = await Product.findById(productId);
// //       if (!product) return res.status(404).json({ message: "Product not found" });
  
// //       const totalPrice = product.originalPrice * quantity;
  
// //       const order = new Order({
// //         user: userId,
// //         product: productId,
// //         quantity,
// //         totalPrice,
// //         paymentStatus: "Completed",
// //       });
  
// //       await order.save();
  
// //       res.status(201).json({ message: "Order placed successfully", order });
// //     } catch (err) {
// //       console.error("Buy Now Error:", err);
// //       res.status(500).json({ message: "Failed to place order" });
// //     }
// //   };
  





// import Order from "../models/Order.js";
// import { Product } from "../models/Product.js";

// export const buyNow = async (req, res) => {
//   try {
//     const userId = req.user.id; // ✅ user from token
//     const {
//       productId,
//       quantity,
//       name,
//       email,
//       phone,
//       address,
//       pincode,
//       state,
//       district,
//       paymentMethod,
//       paymentStatus // optional: can come from frontend if Stripe confirmed
//     } = req.body;

//     const product = await Product.findById(productId);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     const totalPrice = product.originalPrice * quantity;

//     const order = new Order({
//       user: userId,
//       product: productId,
//       quantity,
//       totalPrice,
//       name,
//       email,
//       phone,
//       address,
//       pincode,
//       state,
//       district,
//       paymentStatus: paymentStatus || (paymentMethod === "COD" ? "Completed" : "Pending"),
//     });

//     await order.save();

//     res.status(201).json({
//       message: "Order placed successfully",
//       order,
//     });
//   } catch (err) {
//     console.error("Buy Now Error:", err);
//     res.status(500).json({ message: err.message || "Failed to place order" });
//   }
// };



export const buyNow = async (req, res) => {
  try {
    // your order logic
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Buy Now Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
