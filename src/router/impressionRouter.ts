import { Router } from "express";
import { impressionController } from "../controller";

const router: Router = Router();

router.post("/", impressionController.createImpression);

export default router;
