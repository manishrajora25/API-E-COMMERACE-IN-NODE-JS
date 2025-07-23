import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String },
  slug: { type: String },
  category: { type: String },
  image: { type: String, required: true,},
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


// Exporting both models
export const Product = mongoose.model("Product", productSchema);


