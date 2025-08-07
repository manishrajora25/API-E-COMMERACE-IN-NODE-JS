import { Product} from "../models/Product.js";
import User from "../models/User.js";

// export async function createForm(req, res) {
//   try {
//     const imageUrl = req.file ? req.file.path : "";

//     const newProduct = new Product({
//       ...req.body,
//       image: imageUrl, 
//     });

//     const savedProduct = await newProduct.save();
//     res.status(201).json({
//       message: "Product created successfully",
//       product: savedProduct,
//     });
//   } catch (err) {
//     console.error("Product Error:", err);
//     res.status(500).json({ error: "Product creation failed", details: err.message });
//   }
// }

export async function createForm(req, res) {
  try {
    const imageUrl = req.file ? req.file.path : "";

    // Parse attributes field if it's a string
    let attributes = [];
    if (req.body.attributes) {
      try {
        attributes = JSON.parse(req.body.attributes);
      } catch (err) {
        return res.status(400).json({ error: "Invalid attributes format" });
      }
    }

    const newProduct = new Product({
      name: req.body.name,
      slug: req.body.slug,
      category: req.body.category,
      quantity: req.body.quantity,
      originalPrice: req.body.originalPrice,
      discountedPrice: req.body.discountedPrice,
      description: req.body.description,
      image: imageUrl,
      attributes, // parsed array
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



export async function getSingleProducts (req, res){
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


export async function cartForm(req, res) {
  try {
    const userId = req.user.id; 
    const productId = req.params.id;
    console.log(userId , productId ,"hello")
    const quantity = req.body.quantity || 1;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    const user = await User.findById(userId).populate("cart.product");
    if (!user) return res.status(404).json({ error: "User not found" });

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

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const alreadyInWishlist = user.wishlist.some(
      (item) => item.product && item.product.toString() === productId
    );

    if (alreadyInWishlist) {
      // Repopulate before return
      user = await User.findById(userId).populate("wishlist.product");
      return res.status(200).json({ message: "Product already in wishlist", wishlist: user.wishlist });
    }

    user.wishlist.push({ product: productId });
    await user.save();

    user = await User.findById(userId).populate("wishlist.product");

    res.status(200).json({ message: "Product added to wishlist", wishlist: user.wishlist });
  } catch (error) {
    console.error("Wishlist error:", error);
    res.status(500).json({ error: "Error updating wishlist", details: error.message });
  }
}


export const wishlistData = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).populate("wishlist.product");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ wishlist: user.wishlist });
  } catch (error) {
    console.error("Wishlist fetch error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// export async function updateProduct(req, res) {
//   try {
//     const { id } = req.params;

//     const imageUrl = req.file ? req.file.path : undefined;

//     const updateData = {
//       ...req.body,
//     };

 
//     if (imageUrl) {
//       updateData.images = [imageUrl];
//     }

//     const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
//       new: true,
//     });

//     if (!updatedProduct) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(500).json({ error: "Product update failed", details: err.message });
//   }
// }


export async function updateProduct(req, res) {
  try {
    const { id } = req.params;

    const imageUrl = req.file ? req.file.path : undefined;

    const updateData = {
      ...req.body,
    };

    if (imageUrl) {
      updateData.image = imageUrl; // ✅ correct field name
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      error: "Product update failed",
      details: err.message,
    });
  }
}



export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id; 
    const productId = req.params.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.cart = user.cart.filter(item => item.product.toString() !== productId);
    await user.save();

    res.json({ message: "Product removed from cart" });
  } catch (err) {
    res.status(500).json({ message: "Error removing from cart", error: err.message });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.params.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.wishlist = user.wishlist.filter(
      (item) => item.product.toString() !== productId
    );

    await user.save();
    res.status(200).json({ message: "Product removed from wishlist" });
  } catch (error) {
    console.error("Remove wishlist error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export async function getCartData(req, res) {
  console.log("rishi")
  try {
   const userId = req.user.id;
console.log(userId)
   const user = await User.findById(userId).populate("cart.product");

   if (!user) {
     return res.status(404).json({ message: "User not found" });
   }

   res.json({ cart: user.cart });
 } catch (error) {
   console.error("Cart fetch error:", error);
   res.status(500).json({
     message: "Server error",
     error: error.message,
   });
 }

}




 export async  function deleteProduct (req, res) {
  const { id } = req.params;
  

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Failed to delete product." });
  }
};

// module.exports = {
//   deleteProduct,
// };
