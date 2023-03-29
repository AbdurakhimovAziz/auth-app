import { createContext, useContext } from 'react';
import { IUser } from '../interfaces/user';

export const UserContext = createContext<IUser | null>(null);
export const UserUpdateContext = createContext<
  React.Dispatch<React.SetStateAction<IUser | null>>
>(() => {});
export const useUserContext = () => useContext(UserContext);
export const useUserUpdateContext = () => useContext(UserUpdateContext);
