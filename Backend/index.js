import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoutes.js";
import UserRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./server/Server.js";
import orderRoutes from "./routes/orderRoute.js";
// import addressRoutes from "./routes/addressRoute.js"; // Uncomment when ready
//  import { paymentHandler } from "./controllers/paymentHandler.js";

import "dotenv/config";
import paymentRoutes from "./routes/paymentRoutes.js";


dotenv.config();

const app = express();
const port = process.env.PORT;


// const allowedOrigins = [process.env.DEPLOYED_FRONTEND_URL];

const allowedOrigins = [
  process.env.DEPLOYED_FRONTEND_URL,
  process.env.LOCAL_URL,
  "http://localhost:5173", // Vite default port
  "http://127.0.0.1:5500"  // Agar file local server pe chal rahi ho
];

const localhostRegex = /^(https:\/\/localhost:\d+|http:\/\/localhost:\d+)$/;

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin) || localhostRegex.test(origin)) {
      return callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/product", productRoute);
app.use("/user", UserRoute);
app.use("/order", orderRoutes);
app.use("/create", paymentRoutes);





// app.use("/address", addressRoutes); // Uncomment when route is created

// Connect DB and start server
connectDB();
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
