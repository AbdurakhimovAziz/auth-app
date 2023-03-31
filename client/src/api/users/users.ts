import { IUser } from '../../interfaces/user';
import axiosInstance from '../axios';

export const getAllUsers = async () => {
  const { data } = await axiosInstance.get<IUser[]>('/users');
  return data;
};

export const blockUsersByIds = async (ids: number[]) => {
  const { data } = await axiosInstance.put('/users/block', ids);
  return data;
};

export const unblockUsersByIds = async (ids: number[]) => {
  const { data } = await axiosInstance.put('/users/unblock', ids);
  return data;
};

export const deleteUsersByIds = async (ids: number[]) => {
  const { data } = await axiosInstance.delete('/users', {
    data: ids,
  });
  return data;
};
