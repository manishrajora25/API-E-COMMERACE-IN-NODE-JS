import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String },
  slug: { type: String },
  category: { type: String },
  images: [{ type: String }],
  quantity: { type: Number },
  originalPrice: { type: Number },
  discountedPrice: { type: Number },
  description: { type: String },
  attributes: [
    {
      key: { type: String },
      value: { type: String },
    },
  ],
}, { timestamps: true });

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId,  ref: "User" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, required: true, default: 1 },
}, { timestamps: true });

// Exporting both models
export const Product = mongoose.model("Product", productSchema);
export const Cart = mongoose.model("Cart", cartSchema);
