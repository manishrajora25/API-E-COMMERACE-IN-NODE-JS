import express from "express";

import { loginUser,registerUser   } from "../controllers/userControll.js";
// import { upload } from "../middleware/uploadMiddleware.js";
import { uploadCloud } from "../middleware/cloudinaryUpload.js";

const router = express.Router();

router.post("/login", loginUser); 
router.post("/register", uploadCloud.single("image"), registerUser); 

export default router;  