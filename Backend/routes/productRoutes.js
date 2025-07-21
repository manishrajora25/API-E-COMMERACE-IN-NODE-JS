import express from "express";

import { createForm } from "../controllers/productController.js";

// import { upload } from "../middleware/cloudinaryUpload.js";

const router = express.Router();

router.post("/add", createForm); // ✅ Middleware applied here

export default router;  