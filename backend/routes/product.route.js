import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware";
import {
  createProduct,
  getAllProducts,
  getFeaturedProducts,
} from "../controllers/product.controller";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.post("/", protectRoute, adminRoute, createProduct);

export default router;
