import { IUser } from '../interfaces/user';
import { users } from './users';

export const getUsers = async (): Promise<IUser[]> => {
  return await Promise.resolve(users);
};
