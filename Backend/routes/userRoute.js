import express from "express";

import { loginUser,registerUser } from "../controllers/userControll.js";
// import { upload } from "../middleware/uploadMiddleware.js"; 
// import { upload } from "../middleware/cloudinaryUpload.js";
import { uploadCloud } from "../middleware/cloudinaryUpload.js"
import {checkAdmin } from "../middleware/checkToken.js"


const router = express.Router();

router.post("/login", loginUser); 
router.post("/register", uploadCloud.single("image"), registerUser); 
router.post("/checkToken", checkAdmin ,(req, res)=>{
    res.json({user: res.user})
} ); 

export default router;  