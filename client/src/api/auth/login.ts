import { IUser } from '../../interfaces/user';
import axiosInstance from '../axios';

type LoginResponse = {
  token: string;
  user: IUser;
};

export const login = async (email: string, password: string) => {
  const { data } = await axiosInstance<LoginResponse>('auth/login', {
    method: 'POST',
    data: {
      email,
      password,
    },
  });
  return data;
};
