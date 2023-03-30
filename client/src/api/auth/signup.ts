import { RegisterData } from '../../pages/Register/types';
import axiosInstance from '../axios';

type RegisterResponse = {
  message: string;
  id: number;
};
export const signup = async (user: RegisterData) => {
  const { data } = await axiosInstance<RegisterResponse>('auth/register', {
    method: 'POST',
    data: user,
  });
  return data;
};
