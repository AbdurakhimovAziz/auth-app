import { IUser } from '../../interfaces/user';
import axiosInstance from '../axios';

export const getAllUsers = async () => {
  const { data } = await axiosInstance.get<IUser[]>('/users');
  return data;
};
