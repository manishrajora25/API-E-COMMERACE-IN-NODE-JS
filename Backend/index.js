import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoutes.js";
import UserRoute from "./routes/userRoute.js";
// import cartRoute from "./routes/cartRoute.js"
import "dotenv/config";


dotenv.config();

const app = express();
const port = process.env.PORT;


app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use("/product",productRoute );
app.use("/user",UserRoute );
// app.use("/cart", cartRoute);
// app.use("/uploads", express.static("uploads"));



connectDB();
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});









