import express from "express";
import { signin, signup } from "../controllers/auth.controllers.js";
const router = express.Router();
router.post("/api/v1/signup", signup);
router.post("/api/v1/signin", signin);
export default router;
//# sourceMappingURL=auth-routes.js.map