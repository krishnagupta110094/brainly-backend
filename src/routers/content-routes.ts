import express from "express";
import { authenticate } from "../middlewares/auth.middlewares.js";
import {
  createContent,
  deleteContent,
  getContents,
  shareContent,
  shareContentLink,
  updateContent,
} from "../controllers/content.contollers.js";

const router = express.Router();

router.post("/content", authenticate, createContent);
router.get("/content", authenticate, getContents);
router.delete("/content/:id", authenticate, deleteContent);
router.patch("/content/:id", authenticate, updateContent);

router.post("/brain/share", authenticate, shareContent);
router.get("/brain/:shareLink", shareContentLink);

export default router;
