import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



// ✅ REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const imageUrl = req.file ? req.file.path : "";
    console.log("BODY:", req.body); 
    console.log("FILE:", req.file);
    
    const userExists = await User.findOne({ email  });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" }); 
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword);
    

    const newUser = new User({
      name,
      email,
      password:hashedPassword, 
      image:imageUrl
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
    const { email,password  } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const  isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) return res.status(401).json({message: "Invail Credentials"})

      const userToken = jwt.sign(
        {
          id: user._id,
          email: user.email,
        }, process.env.jWT_SECRET,
        { expiresIn: "1h"}
      );
 res.cookie("userToken", userToken,{
 httpOnly: true,
 secure: true,
 sameSite: "strict",
 maxAge:"3600000"
 }).send({
  message: "User Loing Successfully",
  user:{
    id: user._id,
    email: user.email
  }
 })
  
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
