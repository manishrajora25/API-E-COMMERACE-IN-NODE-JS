import jwt from "jsonwebtoken";
import 'dotenv/config';


export const checkAdmin = (req, res, next) => {
  console.log(" hekwjw manish")
  try {
    const token = req.cookies.userToken;
    if (!token) return res.status(401).json({ message: "No Token Found" });
  // console.log(token)
      const decoded = jwt.verify(token, process.env.jWT_SECRET);
      req.user = decoded;
      // req.role = decoded;
      console.log( decoded)
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid Token" });
    }
  };
  



