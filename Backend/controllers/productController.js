



  // import Product from "../models/Product.js";

  // export async function createForm(req, res) {
  //   try {
  //     console.log("hello")
  //     console.log(req.body)
  //     const newProduct = new Product(req.body);
  //     const savedProduct = await newProduct.save();
  //     res.status(201).json(savedProduct);

  //   } catch (err) {
  //     res.status(500).json({ error: "Product creation failed", details: err.message });
  //   }
  // }



  import Product from "../models/Product.js";

export async function createForm(req, res) {
  try {
    console.log("REQ BODY:", req.body);
    // console.log("REQ FILES:", req.files); // <-- This should now be defined

    // Extract file paths (for multiple images)
    // const imagePaths = req.files.map(file => file.filename); // OR file.path if using full path

    const newProduct = new Product({
      ...req.body,
      // images: imagePaths[0], // assuming you only store first image as per your schema
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Product creation failed", details: err.message });
  }
}
