import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cartRoutes from "./routes/cart.route.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("api/products", productRoutes);
app.use("api/cart", cartRoutes);

app.listen(PORT, () => {
  console.log("App is listening on http://localhost:" + PORT);
  connectDB();
});
