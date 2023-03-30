export interface IUser {
  id: number;
  name: string;
  email: string;
  registerTime: string;
  loginTime?: string;
  status: 'active' | 'blocked';
}

export interface IUserWithPassword extends IUser {
  password: string;
}
