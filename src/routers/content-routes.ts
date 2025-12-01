import express from "express";
import { authenticate } from "../middlewares/auth.middlewares.js";
import {
  createContent,
  deleteContent,
  getContents,
  updateContent,
} from "../controllers/content.contollers.js";

const router = express.Router();

router.post("/api/v1/content", authenticate, createContent);
router.get("/api/v1/content", authenticate, getContents);
router.delete("/api/v1/content/:id", authenticate, deleteContent);
router.patch("/api/v1/content/:id", authenticate, updateContent);

export default router;
