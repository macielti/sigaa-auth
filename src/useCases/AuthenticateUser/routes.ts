import { Router, Request, Response, response } from "express";
import AuthenticateUserController from "./index";

const routes = Router();

const authenticateUserController = AuthenticateUserController();
routes.post("/auth/:instituition", (request: Request, reponse: Response) =>
  authenticateUserController.create(request, response)
);

export default routes;
