import { User } from "../../entities/User";
import { IAuthProvider } from "../../providers/IAuthProvider";
import ISessionDTO from "./AuthenticateUserDTO";

class AuthenticateUserUseCase {
  constructor(private instituitionProvider: IAuthProvider) {}

  async execute(user: User, host: string): Promise<ISessionDTO> {
    const session = await this.instituitionProvider.auth(user, host);
    return session;
  }
}

export default AuthenticateUserUseCase;
