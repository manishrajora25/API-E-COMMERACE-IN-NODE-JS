import express from "express";

import { createForm,cartForm } from "../controllers/productController.js";

// import { upload } from "../middleware/cloudinaryUpload.js";

const router = express.Router();

router.post("/add", createForm); // ✅ Middleware applied here
router.post("/cart/:id", cartForm);

export default router;  