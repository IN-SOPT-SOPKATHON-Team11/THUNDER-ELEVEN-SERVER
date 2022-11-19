import { Router } from "express";
import { authController } from "../controller";

const router: Router = Router();

router.post("/login", authController.login);

export default router;
