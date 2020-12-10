import { User } from "../entities/User";
import ISession from "../useCases/AuthenticateUser/AuthenticateUserDTO";

export interface IAuthProvider {
  auth(user: User, host: string): Promise<ISession>;
}
