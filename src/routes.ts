import { Router, Request, Response } from "express";
import authUserCaseRoutes from "./useCases/AuthenticateUser/routes";

const router = Router();

router.use(authUserCaseRoutes);

export default router;
