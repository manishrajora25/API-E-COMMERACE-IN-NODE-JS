import express from "express";
import { createForm, cartForm, wishlistForm, getAllProducts, updateProduct, deleteProduct } from "../controllers/productController.js";
import {checkAdmin} from "../middleware/checkToken.js"
import { uploadCloud } from "../middleware/cloudinaryUpload.js";

const router = express.Router();

router.post("/add", uploadCloud.single("image"), createForm); 
router.get("/all", getAllProducts);
router.post("/cart/:id",checkAdmin, cartForm);
router.post("/wishlist/:id", wishlistForm);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;  