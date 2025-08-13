const Address = require("../models/Address");

exports.addAddress = async (req, res) => {
  try {
    const { name, email, phone, address, pincode, state, district, product } = req.body;
    const userId = req.User._id; // User must be authenticated (middleware)

    const newAddress = new Address({
      name,
      email,
      phone,
      address,
      pincode,
      state,
      district,
      product,
      user: userId
    });

    const saved = await newAddress.save();
    res.status(201).json({ message: "Address saved successfully", saved });
  } catch (error) {
    res.status(500).json({ error: "Failed to save address", details: error.message });
  }
};
