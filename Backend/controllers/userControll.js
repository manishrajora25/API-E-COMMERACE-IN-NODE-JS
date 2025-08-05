import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const imageUrl = req.file ? req.file.path : "";
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      image: imageUrl,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const userToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.jWT_SECRET,
      { expiresIn: "1h" }
    );

    res
      .cookie("userToken", userToken, {
        httpOnly: true,
        secure: true, // true if you're using HTTPS in production
        sameSite: "None",
        maxAge: 60 * 60 * 1000, // ✅ 1 hour in milliseconds
      })
      .send({
        message: "User Login Successfully",
        user: {
          id: user._id,
          email: user.email,
        },
      });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("userToken", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ error: "Logout failed" });
  }
};
