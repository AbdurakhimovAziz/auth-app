export const saveTokenToStorage = (token: string) => {
  localStorage.setItem('token', token);
};

export const getTokenFromStorage = () => {
  return localStorage.getItem('token');
};

export const removeTokenFromStorage = () => {
  localStorage.removeItem('token');
};
