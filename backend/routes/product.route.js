import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware";
import {
  getAllProducts,
  getFeaturedProducts,
} from "../controllers/product.controller";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);

export default router;
