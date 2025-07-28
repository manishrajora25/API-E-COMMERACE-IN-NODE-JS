import { Product} from "../models/Product.js";
import User from "../models/User.js";

export async function createForm(req, res) {
  try {
    const imageUrl = req.file ? req.file.path : "";

    const newProduct = new Product({
      ...req.body,
      image: imageUrl, 
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({
      message: "Product created successfully",
      product: savedProduct,
    });
  } catch (err) {
    console.error("Product Error:", err);
    res.status(500).json({ error: "Product creation failed", details: err.message });
  }
}


export async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products", details: err.message });
  }
}







export async function cartForm(req, res) {
  try {
    const userId = req.body.userId;  
        const productId = req.params.id; 
    const quantity = req.body.quantity || 1;

    console.log(productId);
    
    console.log("User:", userId, "Product:", productId);

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const user = await User.findById(userId).populate("cart.product");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const existingItem = user.cart.find(
      (item) => item.product._id.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      user.cart.push({ product: productId, quantity });
    }

    await user.save();

    res.status(200).json({ message: "Cart updated successfully", cart: user.cart });
  } catch (error) {
    console.error("Cart error:", error);
    res.status(500).json({ error: "Error updating cart", details: error.message });
  }
}

export async function wishlistForm(req, res) {
  try {
    const userId = req.body.userId;
    const productId = req.params.id;

    console.log("User:", userId, "Product:", productId);

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const user = await User.findById(userId).populate("wishlist");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const alreadyInWishlist = user.wishlist.some(
      (item) => item._id.toString() === productId
    );

    if (alreadyInWishlist) {
      return res.status(200).json({ message: "Product already in wishlist", wishlist: user.wishlist });
    }

    user.wishlist.push(productId);
    await user.save();

    res.status(200).json({ message: "Product added to wishlist", wishlist: user.wishlist });
  } catch (error) {
    console.error("Wishlist error:", error);
    res.status(500).json({ error: "Error updating wishlist", details: error.message });
  }
}





export async function updateProduct(req, res) {
  try {
    const { id } = req.params;

    const imageUrl = req.file ? req.file.path : undefined;

    const updateData = {
      ...req.body,
    };

 
    if (imageUrl) {
      updateData.images = [imageUrl];
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: "Product update failed", details: err.message });
  }
}





export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Product deletion failed", details: err.message });
  }
}