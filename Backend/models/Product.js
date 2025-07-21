import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String },
  slug: { type: String, unique: true, lowercase: true },
  category: { type: String },
  images: [{ type: String }], // ✅ make it an array for multiple
  quantity: { type: Number, min: 0 },
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

const Product = mongoose.model("Product", productSchema);
export default Product;
