import User from "../models/User.js";


// ✅ REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const imageUrl = req.file ? req.file.path : "";
    

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    

    const newUser = new User({
      name,
      email,
      password, // 🔓 Storing plain password (not recommended in production)
      image: imageUrl,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

// ✅ LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email,password });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        password: user.password,
        image: user.image,
        // token: "No token used" (optional comment)
      },
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
