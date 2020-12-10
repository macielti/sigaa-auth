import { Request, Response } from "express";
import AuthenticateUserUseCase from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}
  async create(request: Request, response: Response) {
    const { instituition } = request.params;
    const { username, password } = request.body;

    const session = await this.authenticateUserUseCase.execute(
      { username, password },
      instituition
    );

    return response.status(200).json({ instituition, username, password });
  }
}

export default AuthenticateUserController;
