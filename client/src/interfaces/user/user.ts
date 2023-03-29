export interface IUser {
  id: string;
  name: string;
  email: string;
  registerTime: string;
  loginTime: string;
  status: 'active' | 'blocked';
}

export interface IUserWithPassword extends IUser {
  password: string;
}
