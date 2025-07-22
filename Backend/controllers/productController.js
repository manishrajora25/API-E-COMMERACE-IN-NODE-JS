import { Product, Cart } from "../models/Product.js";

export async function createForm(req, res) {
  try {
    const newProduct = new Product({ ...req.body });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Product Error:", err);
    res.status(500).json({ error: "Product creation failed", details: err.message });
  }
}

export async function cartForm(req, res) {
  try {
    const userId = req.params.id; // from URL param
    const { productId, quantity } = req.body;

    if (!userId || !productId) {
      return res.status(400).json({ error: "userId (from URL) and productId are required" });
    }

    const existingCartItem = await Cart.findOne({ userId, productId });

    if (existingCartItem) {
      existingCartItem.quantity += quantity || 1;
      const updatedCart = await existingCartItem.save();
      return res.status(200).json(updatedCart);
    }

    const newCartItem = new Cart({
      userId,
      productId,
      quantity: quantity || 1,
    });

    const savedCart = await newCartItem.save();
    res.status(201).json(savedCart);
  } catch (err) {
    console.error("Cart Error:", err);
    res.status(500).json({ error: "Cart item creation failed", details: err.message });
  }
}
