import { Router } from "express";
import authRouter from "./authRouter";
import impressionRouter from "./impressionRouter";
import logRouter from "./logRouter";

const router: Router = Router();

router.use("/auth", authRouter);
router.use("/impressions", impressionRouter);
router.use("/logs", logRouter);

export default router;
