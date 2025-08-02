import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoutes.js";
import UserRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser"
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./server/Server.js";
import "dotenv/config";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: "https://api-e-commerace-in-node-js-1.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec) )

app.use("/product",productRoute );
app.use("/user",UserRoute );
app.use("/uploads", express.static("uploads"));


connectDB();
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});









