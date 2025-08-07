import express from "express";
import { buyNow } from "../controllers/orderControll.js";
import { checkAdmin } from "../middleware/checkToken.js";


const router = express.Router();

router.post("/buynow", checkAdmin, buyNow);

export default router;
