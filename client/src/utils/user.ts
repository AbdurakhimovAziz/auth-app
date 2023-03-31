import { IUser } from '../interfaces/user';

export const saveUserToStorage = (user: IUser) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserFromStorage = (): IUser | null => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const removeUserFromStorage = () => {
  localStorage.removeItem('user');
};
