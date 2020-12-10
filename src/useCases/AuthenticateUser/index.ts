import AuthenticateUserController from "./AuthenticateUserController";
import UFPIAuthProvider from "../../providers/implementations/UFPIAuthProvider";
import AuthenticateUserUseCase from "./AuthenticateUserUseCase";

function getInstance() {
  const ufpiAuthProvider = UFPIAuthProvider;

  const authenticateUserUseCase = new AuthenticateUserUseCase(ufpiAuthProvider);

  const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase
  );

  return authenticateUserController;
}

export default getInstance;
