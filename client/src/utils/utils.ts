import { removeTokenFromStorage } from './token';
import { removeUserFromStorage } from './user';

export const clearLocalStorage = () => {
  removeTokenFromStorage();
  removeUserFromStorage();
};
