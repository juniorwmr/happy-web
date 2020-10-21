import { api } from './../services/api';
// routes.get('/users/forget_password/verify/:token');
// routes.post('/users/forget_password/:token', UsersController.RecoveryPassword);

export const URL_USERS = `/users`;

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IAuthResponse {
  auth: boolean | null;
  token: string;
}

export default {
  async create(data: IUser) {
    try {
      return await api.post<Omit<IUser, 'password'>>(`${URL_USERS}`, data);
    } catch (err) {
      console.error(`Your request (POST) to ${URL_USERS} FAILED. \n\n` + err);
    }
  },

  async Authenticate(data: Omit<IUser, 'name'>) {
    try {
      return await api.post<IAuthResponse>(`${URL_USERS}/auth`, data);
    } catch (err) {
      console.error(`Your request (POST) to ${URL_USERS} FAILED. \n\n` + err);
    }
  },

  async ForgetPassword(email: string) {
    try {
      return await api.post(`${URL_USERS}/forget_password`, { email });
    } catch (err) {
      console.error(`Your request (POST) to ${URL_USERS} FAILED. \n\n` + err);
    }
  },

  async VerifyForgetPasswordToken(password_token: string) {
    try {
      return await api.get<{ email: string }>(
        `${URL_USERS}/forget_password/verify/${password_token}`
      );
    } catch (err) {
      console.error(`Your request (GET) to ${URL_USERS} FAILED. \n\n` + err);
    }
  },

  async ResetPassword(
    password_token: string,
    data: { email: string; new_password: string }
  ) {
    try {
      return await api.post(`${URL_USERS}/forget_password/${password_token}`, {
        email: data.email,
        password: data.new_password,
      });
    } catch (err) {
      console.error(`Your request (POST) to ${URL_USERS} FAILED. \n\n` + err);
    }
  },
};
