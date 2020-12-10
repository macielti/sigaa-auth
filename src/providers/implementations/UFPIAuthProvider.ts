import { IAuthProvider } from "../IAuthProvider";
import { User } from "../../entities/User";
import ISession from "../../useCases/AuthenticateUser/AuthenticateUserDTO";
import createAPI from "../../services/external/SIGAAapi";
import querystring from "querystring";

class UFPIAuthProvider implements IAuthProvider {
  async auth(user: User, instituition: string): Promise<ISession | null> {
    const api = createAPI(instituition);

    const payload = {
      "user.login": user.username,
      "user.password": user.password,
    };

    const parsedQuerystring = querystring.stringify(payload);

    const authResponse = await api.post(
      `/sigaa/logar.do?dispatch=logOn`,
      parsedQuerystring
    );

    if (authResponse.status === 200) {
      console.log(authResponse.headers);

      // const session: Session = {
      //   cookieSession:
      // };
    }
    return null;
  }
}

export default new UFPIAuthProvider();
