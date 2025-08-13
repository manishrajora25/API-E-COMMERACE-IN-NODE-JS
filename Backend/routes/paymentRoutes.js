// routes/paymentRoutes.js
import express from "express";
import { paymentHandler } from "../controllers/paymentHandler.js";

const paymentRoutes = express.Router();

// ✅ POST /payment
paymentRoutes.post("/payment", paymentHandler);

export default paymentRoutes;
