import { Router } from "express";
import { authController } from "../controller";

const router: Router = Router();

router.post("/login", authController.login);
router.get("/me", authController.me);

export default router;
