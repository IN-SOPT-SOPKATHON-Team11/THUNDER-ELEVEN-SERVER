import { Router } from "express";
import { logController } from "../controller";

const router: Router = Router();

router.get("/", logController.logs);
router.get("/comments", logController.logsComments);

export default router;
